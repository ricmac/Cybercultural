/**
 * The year archive pages (/tags/<year>/), oldest first, for llms.txt.
 *
 * Read straight from the source files rather than built as a collection:
 * those pages paginate over a collection themselves, and from Eleventy 3.1
 * such pages are not yet in the collections API when custom collections run,
 * so a collection of them comes back empty.
 *
 * Each page's `title` and `description` must be double-quoted in its front
 * matter; anything else fails the build rather than silently dropping a year.
 */
import { readdirSync, readFileSync } from 'node:fs';
import path from 'node:path';

const dir = path.join(process.cwd(), 'src/pages/yearpages');

const field = (file, frontMatter, name) => {
  const match = frontMatter.match(new RegExp(`^${name}: (".*")$`, 'm'));
  if (!match) throw new Error(`${file}: no double-quoted "${name}" in front matter`);
  return JSON.parse(match[1]);
};

export default readdirSync(dir)
  .filter((file) => file.endsWith('.md'))
  .map((file) => {
    const frontMatter = readFileSync(path.join(dir, file), 'utf8').split(/^---$/m)[1] || '';
    return {
      title: field(file, frontMatter, 'title'),
      description: field(file, frontMatter, 'description')
    };
  })
  .sort((a, b) => Number(a.title) - Number(b.title));
