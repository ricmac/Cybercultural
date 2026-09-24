import crypto from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';

/**
 * Cache-busting for the stylesheet and the script bundles.
 *
 * base.njk ships placeholders such as __ASSET_HASH_CSS__ / __ASSET_HASH_JS__ in the
 * query string. Once the build has written the real files we hash their actual
 * bytes and substitute the hash in. The URL is therefore stable across builds
 * that produce identical assets — so a reader downloads global.css once instead
 * of once per page — and changes as soon as the asset's content changes.
 *
 * Hashing the compiled output rather than the sources matters here: global.css
 * is assembled by postcss from many files, so its content can change when a
 * template changes even though no file under src/assets/css did.
 */

const ASSETS = {
  CSS: 'assets/css/global.css',
  JS: 'assets/scripts/app.js',
  YOUTUBE: 'assets/scripts/lite-youtube.js'
};

const HTML_EXTENSIONS = new Set(['.html']);

function hashFile(file) {
  try {
    return crypto.createHash('sha256').update(fs.readFileSync(file)).digest('hex').slice(0, 10);
  } catch {
    return null;
  }
}

function htmlFiles(dir, found = []) {
  for (const entry of fs.readdirSync(dir, {withFileTypes: true})) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name === 'pagefind' || entry.name === 'img' || entry.name === 'assets') continue;
      htmlFiles(full, found);
    } else if (HTML_EXTENSIONS.has(path.extname(entry.name).toLowerCase())) {
      found.push(full);
    }
  }
  return found;
}

export default function rewriteAssetHashes(outputDir) {
  const hashes = {};

  for (const [token, relativePath] of Object.entries(ASSETS)) {
    const hash = hashFile(path.join(outputDir, relativePath));
    if (!hash) {
      console.warn(`[asset-hash] ${relativePath} not found, falling back to a constant`);
    }
    hashes[token] = hash || 'static';
  }

  const pattern = /__ASSET_HASH_(CSS|JS|YOUTUBE)__/g;
  let rewritten = 0;

  for (const file of htmlFiles(outputDir)) {
    const html = fs.readFileSync(file, 'utf8');
    if (!html.includes('__ASSET_HASH_')) continue;
    fs.writeFileSync(file, html.replace(pattern, (_, token) => hashes[token]));
    rewritten++;
  }

  console.log(
    `[asset-hash] css=${hashes.CSS} js=${hashes.JS} youtube=${hashes.YOUTUBE} — stamped into ${rewritten} pages`
  );
}
