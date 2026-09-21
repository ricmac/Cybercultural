/**
 * Lists posts whose text has changed since the date they claim to have been
 * last updated — the nudge behind `lastUpdated`, which `blogpost-schema.njk`
 * turns into schema.org `dateModified` and `sitemap.njk` into `lastmod`.
 *
 * Why a nudge and not a date derived from git directly: git records every
 * commit that touched a file, and most of them are not revisions a reader
 * would notice. Posts were imported into this repo long after they were
 * published, folders have been reorganised wholesale, and sweeps like
 * "updating canonical for rww posts" rewrote front matter across 23 files at
 * once. A date taken straight from git would announce all of that as new
 * writing. So the date stays a human judgement, and this only points at the
 * posts that look overdue for one.
 *
 * What counts as a revision, then, is narrower than "a commit touched it". It
 * has to be a commit later than the one that added the post, and it has to:
 *
 *   - change the markdown below the front matter (not just the front matter,
 *     and not a pure rename);
 *   - touch at most SWEEP_SIZE posts, since a commit editing half the site is
 *     a sweep — "updated Bluesky domain", "updating canonical for rww posts";
 *   - change at least MIN_CHANGED_WORDS words, so that fixing "dot com" to
 *     "dot-com" in three paragraphs doesn't count as rewriting the post.
 *
 * Those two thresholds are the judgement call in here. Loosen them and the
 * report fills with mechanical edits; tighten them and a real rewrite slips
 * through. They're meant to be adjusted once you see what it catches.
 *
 * Run it with `npm run check:dates`. It only ever reports — it never fails a
 * build, and it is deliberately not part of `npm run build`, because the
 * answer it asks for is a judgement call at a keyboard, not a deploy gate.
 */
import {execFileSync} from 'node:child_process';
import {readFileSync} from 'node:fs';

const POSTS_DIR = 'src/posts';

/** A commit touching more posts than this is a sweep, not a revision. */
const SWEEP_SIZE = 3;

/** Fewer changed words than this is a tweak, not a revision. */
const MIN_CHANGED_WORDS = 25;

const git = (...args) =>
  execFileSync('git', args, {
    encoding: 'utf-8',
    maxBuffer: 64 * 1024 * 1024,
    stdio: ['ignore', 'pipe', 'ignore']
  });

/** The markdown below the front matter, or the whole file if there is none. */
const bodyOf = source => {
  const match = source.match(/^---\r?\n.*?\r?\n---\r?\n?/s);
  return match ? source.slice(match[0].length) : source;
};

const frontMatterDate = (source, key) => {
  const match = source.match(new RegExp(`^${key}:\\s*['"]?(\\d{4}-\\d{2}-\\d{2})`, 'm'));
  return match ? match[1] : null;
};

/** How many posts a commit touched — the test for a site-wide sweep. */
const sweepCache = new Map();

const postsTouchedBy = commit => {
  if (!sweepCache.has(commit)) {
    const names = git('show', '--format=', '--name-only', commit, '--', POSTS_DIR);
    sweepCache.set(commit, names.split('\n').filter(line => line.endsWith('.md')).length);
  }

  return sweepCache.get(commit);
};

/**
 * Roughly how many words differ between two versions of a post's body: the
 * words added plus the words taken away, counted as multisets so that moving a
 * paragraph doesn't register as rewriting it.
 */
const changedWords = (before, after) => {
  const counts = new Map();
  const tally = (text, sign) => {
    for (const word of text.toLowerCase().match(/[\p{L}\p{N}][\p{L}\p{N}'’-]*/gu) ?? []) {
      counts.set(word, (counts.get(word) ?? 0) + sign);
    }
  };

  tally(before, -1);
  tally(after, 1);

  return [...counts.values()].reduce((total, count) => total + Math.abs(count), 0);
};

/** The file's body at a commit, or null if it wasn't there. */
const bodyAt = (commit, file) => {
  try {
    return bodyOf(git('show', `${commit}:${file}`));
  } catch {
    return null;
  }
};

/**
 * The post's history, newest first: one entry per commit that touched it, each
 * carrying the path the file had at that point, since it may have been moved.
 */
const historyOf = file => {
  const raw = git(
    'log',
    '--follow',
    '--name-status',
    '--format=%x00%H|%as',
    '--',
    file
  );

  return raw
    .split('\0')
    .filter(chunk => chunk.trim())
    .map(chunk => {
      const [header, ...rest] = chunk.trim().split('\n');
      const [commit, date] = header.split('|');
      const [status, from, to] = rest.find(line => line.trim())?.split('\t') ?? [];

      return {
        commit,
        date,
        status: status?.[0], // A, M, R…
        similarity: status?.startsWith('R') ? Number(status.slice(1)) : null,
        path: to ?? from,
        previousPath: to ? from : null
      };
    });
};

const main = () => {
  if (git('rev-parse', '--is-shallow-repository').trim() === 'true') {
    console.log(
      'This is a shallow clone, so most of the history is missing and the check\n' +
        'would be meaningless. Run `git fetch --unshallow` first.'
    );
    return;
  }

  const files = git('ls-files', POSTS_DIR)
    .split('\n')
    .filter(file => file.endsWith('.md'));

  const stale = [];

  for (const file of files) {
    const source = readFileSync(file, 'utf-8');
    const claimed = frontMatterDate(source, 'lastUpdated') ?? frontMatterDate(source, 'date');

    for (const entry of historyOf(file)) {
      if (entry.status === 'A') {
        break; // Reached the commit that added the post; nothing older matters.
      }

      // A pure rename moves a post without changing a word of it.
      if (entry.similarity === 100) {
        continue;
      }

      const now = bodyAt(entry.commit, entry.path);
      const before = bodyAt(`${entry.commit}^`, entry.previousPath ?? entry.path);

      if (now === null || before === null || now === before) {
        continue; // Front matter only, or nothing we can compare.
      }

      if (postsTouchedBy(entry.commit) > SWEEP_SIZE) {
        continue; // A sweep across the site, not a rewrite of this post.
      }

      const words = changedWords(before, now);

      if (words < MIN_CHANGED_WORDS) {
        continue; // Too small to be worth announcing to a search engine.
      }

      if (!claimed || entry.date > claimed) {
        stale.push({file, changed: entry.date, claimed, words});
      }

      break; // Only the most recent real edit is interesting.
    }
  }

  if (!stale.length) {
    console.log(`Checked ${files.length} posts — every edited post's date is up to date.`);
    return;
  }

  console.log(
    `${stale.length} of ${files.length} posts have been rewritten since the date they claim,\n` +
      'largest change first:\n'
  );

  for (const {file, changed, claimed, words} of stale.sort((a, b) => b.words - a.words)) {
    console.log(
      `  ${file}\n      ~${words} words changed on ${changed}, says ${claimed ?? 'nothing'}`
    );
  }

  console.log(
    '\nWhere that was a real revision, add or update `lastUpdated` in the post’s\n' +
      'front matter. Where it was a typo or a tweak no reader would notice, leave it.'
  );
};

main();
