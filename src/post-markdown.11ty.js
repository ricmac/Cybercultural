import fs from 'node:fs';

/**
 * A second permalink per post: /p/<slug>/index.md, serving the post's own
 * markdown source. AEO item 7 — a plain-text reading copy an AI crawler (or a
 * person) can fetch without parsing the page, advertised from the HTML with
 * <link rel="alternate" type="text/markdown">.
 *
 * The source is cleaned up rather than dumped verbatim: front matter is
 * replaced by a short header, site-relative links are made absolute so the
 * file stands on its own, and the few template shortcodes in post bodies are
 * turned back into plain markdown.
 */

const stripFrontMatter = (raw) => raw.replace(/^---\r?\n[\s\S]*?\r?\n---\r?\n*/, '');

// {% youtube "ID", "caption" %} -> a plain link
const expandShortcodes = (body) =>
  body.replace(
    /{%\s*youtube\s*"([^"]+)"\s*,\s*"([^"]*)"\s*%}/g,
    (_m, id, caption) => `[${caption || 'Video'}](https://www.youtube.com/watch?v=${id})`
  );

// markdown-it-attrs braces ({loading="eager"}, {.class}) mean nothing off-site
const stripAttrs = (body) => body.replace(/\{[.#][^}\n]*\}|\{[a-z-]+="[^"\n]*"[^}\n]*\}/g, '');

// /assets/... and /p/... -> https://cybercultural.com/...
const absolutize = (body, siteUrl) =>
  body.replace(/(\]\()(\/[^)\s]*)/g, (_m, open, path) => `${open}${siteUrl}${path}`);

const formatDate = (value) =>
  value instanceof Date ? value.toISOString().slice(0, 10) : String(value ?? '');

export default class PostMarkdown {
  data() {
    return {
      pagination: {data: 'collections.posts', size: 1, alias: 'post'},
      permalink: (data) => `${data.post.url}index.md`,
      eleventyExcludeFromCollections: true
    };
  }

  render({post, meta}) {
    const siteUrl = (meta?.url || 'https://cybercultural.com').replace(/\/$/, '');
    const raw = fs.readFileSync(post.inputPath, 'utf8');
    const body = absolutize(stripAttrs(expandShortcodes(stripFrontMatter(raw))), siteUrl).trim();

    const d = post.data;
    const header = [
      `# ${d.title}`,
      '',
      d.description ? `> ${d.description}` : null,
      d.description ? '' : null,
      `Published: ${formatDate(post.date)}`,
      d.lastUpdated ? `Updated: ${formatDate(d.lastUpdated)}` : null,
      `Author: ${meta?.author?.name || 'Richard MacManus'}`,
      `Source: ${siteUrl}${post.url}`,
      '',
      '---',
      ''
    ].filter((line) => line !== null);

    return `${header.join('\n')}\n${body}\n`;
  }
}
