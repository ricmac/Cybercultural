import lodash from 'lodash';
import dayjs from 'dayjs';
import CleanCSS from 'clean-css';
import markdownLib from '../plugins/markdown.js';
import meta from '../../src/_data/meta.js';
import taxonomy from '../../src/_data/taxonomy.js';
import path from 'node:path';
import {imageSize} from 'image-size';
import { throwIfNotType } from '../utils/index.js';
import MarkdownIt from 'markdown-it';

const md = new MarkdownIt();

/** Returns the first `limit` elements of the given array. */
export const limit = (array, limit) => {
  if (limit < 0) {
    throw new Error(`Negative limits are not allowed: ${limit}.`);
  }
  return array.slice(0, limit);
};

/** Returns all entries from the given array that match the specified key:value pair. */
export const where = (arrayOfObjects, keyPath, value) =>
  arrayOfObjects.filter(object => lodash.get(object, keyPath) === value);

/** Converts the given markdown string to HTML, returning it as a string. */
export const toHtml = markdownString => {
  return markdownLib.renderInline(markdownString);
};

/** Removes all tags from an HTML string. */
export const stripHtml = str => {
  throwIfNotType(str, 'string');
  return str.replace(/<[^>]+>/g, '');
};

/** Formats the given string as an absolute url. */
export const toAbsoluteUrl = url => {
  throwIfNotType(url, 'string');
  // Replace trailing slash, e.g., site.com/ => site.com
  const siteUrl = site.url.replace(/\/$/, '');
  // Replace starting slash, e.g., /path/ => path/
  const relativeUrl = url.replace(/^\//, '');

  return `${siteUrl}/${relativeUrl}`;
};

/** Converts the given date string to ISO8601 format. */
export const toISOString = dateString => dayjs(dateString).toISOString();

/** Formats a date using dayjs's conventions: https://day.js.org/docs/en/display/format */
export const formatDate = (date, format) => dayjs(date).format(format);

export const minifyCss = code => new CleanCSS({}).minify(code).styles;

export const minifyJs = async (code, ...rest) => {
  const callback = rest.pop();
  const cacheKey = rest.length > 0 ? rest[0] : null;

  try {
    if (cacheKey && jsminCache.hasOwnProperty(cacheKey)) {
      const cacheValue = await Promise.resolve(jsminCache[cacheKey]); // Wait for the data, wrapped in a resolved promise in case the original value already was resolved
      callback(null, cacheValue.code); // Access the code property of the cached value
    } else {
      const minified = esbuild.transform(code, {
        minify: true
      });
      if (cacheKey) {
        jsminCache[cacheKey] = minified; // Store the promise which has the minified output (an object with a code property)
      }
      callback(null, (await minified).code); // Await and use the return value in the callback
    }
  } catch (err) {
    console.error('jsmin error: ', err);
    callback(null, code); // Fail gracefully.
  }
};

/**
 * Render content as inline markdown if single line, or full
 * markdown if multiline. for md in yaml
 * @param {string} [content]
 * @param {import('markdown-it').Options} [opts]
 * @return {string|undefined}
 */
export const mdInline = (content, opts) => {
  if (!content) {
    return;
  }

  if (opts) {
    md.set(opts);
  }

  let inline = !content.includes('\n');

  // If there's quite a bit of content, we want to make sure
  // it's marked up for readability purposes
  if (inline && content.length > 200) {
    inline = false;
  }

  return inline ? md.renderInline(content) : md.render(content);
};

// source: https://github.com/bnijenhuis/bnijenhuis-nl/blob/main/.eleventy.js
export const splitlines = (input, maxCharLength) => {
  const parts = input.split(' ');
  const lines = parts.reduce(function (acc, cur) {
    if (!acc.length) {
      return [cur];
    }

    let lastOne = acc[acc.length - 1];

    if (lastOne.length + cur.length > maxCharLength) {
      return [...acc, cur];
    }

    acc[acc.length - 1] = lastOne + ' ' + cur;

    return acc;
  }, []);

  return lines;
};
/**
 * Serialises a value for embedding inside <script type="application/ld+json">.
 * JSON.stringify handles the quoting; the escapes afterwards make sure no
 * character sequence in the data can close the script element, and they save
 * the value from Nunjucks' HTML escaping, which would otherwise leave literal
 * &#39; entities inside the JSON (script contents aren't entity-decoded).
 */
export const toJsonLd = value =>
  JSON.stringify(value ?? null)
    .replace(/</g, '\\u003c')
    .replace(/>/g, '\\u003e')
    .replace(/&/g, '\\u0026');

/**
 * Turns a post's front-matter tags into the schema.org fields that describe
 * what it covers: `keywords` (every tag that means something off-site),
 * `articleSection` (the section it belongs to) and `about` (the entities the
 * tags stand for). No new taxonomy — it all comes from src/_data/taxonomy.js.
 */
export const schemaTags = (tags = []) => {
  const postTags = (tags || []).filter(tag => tag !== 'posts');
  const keywords = [];
  const about = [];
  let section = null;

  for (const tag of postTags) {
    const info = taxonomy.tags[tag];

    if (info?.keyword !== false) {
      keywords.push(info?.label ?? tag);
    }

    if (info?.about && !about.some(entity => entity.name === info.about.name)) {
      about.push(info.about);
    }

    if (!section && info?.label && info.section !== false) {
      section = info.label;
    }
  }

  return {
    keywords,
    section,
    about: about.length ? about : [taxonomy.defaultAbout]
  };
};

/** Counts the words in a post's markdown source, ignoring its markup. */
export const wordCount = (source = '') => {
  const words = String(source)
    // Images, link targets and raw HTML aren't words a reader reads.
    .replace(/!\[[^\]]*\]\([^)]*\)/g, ' ')
    .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
    .replace(/<[^>]+>/g, ' ')
    .replace(/[#*_`>|-]/g, ' ')
    .match(/[\p{L}\p{N}][\p{L}\p{N}'’-]*/gu);

  return words ? words.length : 0;
};

/**
 * Reads a site image's real pixel dimensions at build time, so schema.org
 * ImageObjects can carry width and height. Cached because the same feature
 * image is asked for on more than one page.
 */
const imageDimensionCache = new Map();

export const imageDimensions = imagePath => {
  if (!imagePath) {
    return null;
  }

  if (imageDimensionCache.has(imagePath)) {
    return imageDimensionCache.get(imagePath);
  }

  let dimensions = null;

  try {
    const {width, height} = imageSize(path.join('src', imagePath.replace(/^\//, '')));
    dimensions = {width, height};
  } catch {
    // An image that's missing or in a format we can't read simply goes without
    // dimensions; the ImageObject is still valid with just its URL.
    dimensions = null;
  }

  imageDimensionCache.set(imagePath, dimensions);
  return dimensions;
};

/**
 * The date a sitemap entry should give as <lastmod>, or null to leave it out.
 *
 * Posts use their hand-set lastUpdated, else their publish date. Listing pages
 * (sections, year pages and their pagination pages) change when a post they
 * list is added, so they take the newest of those posts' dates, and the home
 * page takes the newest post on the site. Anything else has no honest date to
 * give, so it gets none: stamping pages with the build time would claim they
 * all changed on every deploy, and Google stops trusting lastmod that does that.
 */
export const sitemapLastmod = (page, newestPostDate) => {
  const data = page.data || {};

  if (data.lastUpdated) {
    return data.lastUpdated;
  }

  if (page.inputPath && page.inputPath.includes('/src/posts/')) {
    return page.date;
  }

  const listed = (data.pagination?.pages || []).flat().map(item => item?.date).filter(Boolean);
  if (listed.length) {
    return new Date(Math.max(...listed));
  }

  if (page.url === '/') {
    return newestPostDate;
  }

  return null;
};
