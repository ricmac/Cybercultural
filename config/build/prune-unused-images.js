import fs from 'node:fs';
import path from 'node:path';

/**
 * Drop the passthrough-copied originals that the built site never links to.
 *
 * Every original under src/assets/images is copied into the build, but most are
 * only ever read at build time by the image transform, which rewrites the <img>
 * to a generated file under /img/. The copy under /assets/images/ is then dead
 * weight that nothing requests.
 *
 * Some originals are still served directly: og:image and twitter:image point at
 * them, the RSS feed embeds them, and the odd post links one. Those must stay.
 *
 * Rather than guess from the sources — a reference can come from a layout, a
 * shortcode or front matter — this reads the finished output and keeps exactly
 * what it links to.
 */

const TEXT_EXTENSIONS = new Set([
  '.html',
  '.xml',
  '.json',
  '.js',
  '.css',
  '.txt',
  '.webmanifest'
]);

// Directories under assets/images that are always kept, whether linked or not.
const ALWAYS_KEEP = ['favicon'];

const REFERENCE = /assets\/images\/([A-Za-z0-9._@()+\-/]+\.[A-Za-z0-9]+)/g;

function walk(dir, found = [], skip = () => false) {
  for (const entry of fs.readdirSync(dir, {withFileTypes: true})) {
    const full = path.join(dir, entry.name);
    if (skip(full, entry)) continue;
    if (entry.isDirectory()) walk(full, found, skip);
    else found.push(full);
  }
  return found;
}

function referencedPaths(outputDir) {
  const imagesDir = path.join(outputDir, 'assets', 'images');
  const skip = full =>
    full === imagesDir ||
    full === path.join(outputDir, 'pagefind') ||
    full === path.join(outputDir, 'img');

  const referenced = new Set();

  for (const file of walk(outputDir, [], skip)) {
    if (!TEXT_EXTENSIONS.has(path.extname(file).toLowerCase())) continue;
    const contents = fs.readFileSync(file, 'utf8');
    for (const match of contents.matchAll(REFERENCE)) {
      let reference = match[1];
      try {
        reference = decodeURIComponent(reference);
      } catch {
        // leave the raw form if it isn't valid percent-encoding
      }
      referenced.add(reference);
    }
  }

  return referenced;
}

function removeEmptyDirs(dir) {
  for (const entry of fs.readdirSync(dir, {withFileTypes: true})) {
    if (entry.isDirectory()) removeEmptyDirs(path.join(dir, entry.name));
  }
  if (fs.readdirSync(dir).length === 0) fs.rmdirSync(dir);
}

export default function pruneUnusedImages(outputDir) {
  const imagesDir = path.join(outputDir, 'assets', 'images');
  if (!fs.existsSync(imagesDir)) return;

  const referenced = referencedPaths(outputDir);
  let keptCount = 0;
  let keptBytes = 0;
  let removedCount = 0;
  let removedBytes = 0;

  for (const file of walk(imagesDir)) {
    const relative = path.relative(imagesDir, file).split(path.sep).join('/');
    const keep =
      referenced.has(relative) ||
      ALWAYS_KEEP.some(dir => relative.startsWith(`${dir}/`));
    const {size} = fs.statSync(file);

    if (keep) {
      keptCount++;
      keptBytes += size;
    } else {
      fs.unlinkSync(file);
      removedCount++;
      removedBytes += size;
    }
  }

  removeEmptyDirs(imagesDir);

  const mb = bytes => `${(bytes / 1024 / 1024).toFixed(1)} MB`;
  console.log(
    `[prune-images] kept ${keptCount} originals (${mb(keptBytes)}), ` +
      `removed ${removedCount} unlinked (${mb(removedBytes)})`
  );
}
