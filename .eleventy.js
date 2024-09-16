import { createRequire } from "node:module";
const require = createRequire(import.meta.url);
const pkg = require('./package.json');
const packageVersion = pkg.version;

// Module import filters
import { limit, toHtml, where, toISOString, toAbsoluteUrl, stripHtml, minifyCss, minifyJs, mdInline, splitlines } from './config/filters/index.js';

// Module import shortcodes
import { imageShortcodePlaceholder, includeRaw, liteYoutube } from './config/shortcodes/index.js';

// Module import collections
import { getAllPosts, onlyMarkdown } from './config/collections/index.js';

// Plugins
import markdownLib from './config/plugins/markdown.js';
import { EleventyRenderPlugin } from '@11ty/eleventy';
import syntaxHighlight from '@11ty/eleventy-plugin-syntaxhighlight';
import { slugifyString } from './config/utils/index.js';
import _ from 'lodash';
import pluginRss from '@11ty/eleventy-plugin-rss';
import bundlerPlugin from '@11ty/eleventy-plugin-bundle';
import { execSync } from 'child_process';
import htmlConfigPlugin from './config/transforms/html-config.js';
import cssConfigPlugin from './config/template-languages/css-config.js';
import jsConfigPlugin from './config/template-languages/js-config.js';
import dayjs from 'dayjs';

// Import Eleventy Image Plugin
import { eleventyImageTransformPlugin } from "@11ty/eleventy-img";

// Format Date Function
export const formatDate = (date, format) => dayjs(date).format(format);

export default function(eleventyConfig) {
  // Pagefind search
  eleventyConfig.on('eleventy.after', () => {
    execSync(`npx pagefind --site dist --glob "**/*.html"`, { encoding: 'utf-8' });
  });

  // Custom Watch Targets
  eleventyConfig.addWatchTarget('./src/assets');
  eleventyConfig.addWatchTarget('./utils/*.js');

  // Layout Aliases
  eleventyConfig.addLayoutAlias('base', 'base.njk');
  eleventyConfig.addLayoutAlias('page', 'page.njk');
  eleventyConfig.addLayoutAlias('home', 'home.njk');
  eleventyConfig.addLayoutAlias('blog', 'blog.njk');
  eleventyConfig.addLayoutAlias('post', 'post.njk');

  // Custom filters
  eleventyConfig.addFilter('limit', limit);
  eleventyConfig.addFilter('where', where);
  eleventyConfig.addFilter('escape', _.escape);
  eleventyConfig.addFilter('toHtml', toHtml);
  eleventyConfig.addFilter('toIsoString', toISOString);
  eleventyConfig.addFilter('toAbsoluteUrl', toAbsoluteUrl);
  eleventyConfig.addFilter('stripHtml', stripHtml);
  eleventyConfig.addFilter('slugify', slugifyString);
  eleventyConfig.addFilter('toJson', JSON.stringify);
  eleventyConfig.addFilter('fromJson', JSON.parse);
  eleventyConfig.addFilter('cssmin', minifyCss);
  eleventyConfig.addNunjucksAsyncFilter('jsmin', minifyJs);
  eleventyConfig.addFilter('md', mdInline);
  eleventyConfig.addFilter('splitlines', splitlines);
  eleventyConfig.addFilter('keys', Object.keys);
  eleventyConfig.addFilter('values', Object.values);
  eleventyConfig.addFilter('entries', Object.entries);

  // Register formatDate filter
  eleventyConfig.addFilter('formatDate', formatDate);

  // Custom shortcodes
  eleventyConfig.addNunjucksAsyncShortcode('imagePlaceholder', imageShortcodePlaceholder);
  eleventyConfig.addShortcode('youtube', liteYoutube);
  eleventyConfig.addShortcode('include_raw', includeRaw);
  eleventyConfig.addShortcode('year', () => `${new Date().getFullYear()}`);
  eleventyConfig.addShortcode('packageVersion', () => `v${packageVersion}`);
  
  eleventyConfig.addShortcode("image", async function(src) {
    let metadata = await Image(src, { widths: [600] });
    let data = metadata.jpeg[0];
    return `${data.url}`;
  });

  // Add Eleventy Image Plugin
  eleventyConfig.addPlugin(eleventyImageTransformPlugin, {
    extensions: "html",
    formats: ["webp", "jpeg"],
    defaultAttributes: {
      loading: "lazy",
      decoding: "async",
    },
  });

  // Apply transforms and template configurations
  htmlConfigPlugin(eleventyConfig);
  cssConfigPlugin(eleventyConfig);
  jsConfigPlugin(eleventyConfig);
  
  // Custom collections
  eleventyConfig.addCollection('posts', getAllPosts);
  eleventyConfig.addCollection('onlyMarkdown', onlyMarkdown);

  // Plugins
  eleventyConfig.addPlugin(EleventyRenderPlugin);
  eleventyConfig.addPlugin(syntaxHighlight);
  eleventyConfig.setLibrary('md', markdownLib);
  eleventyConfig.addPlugin(pluginRss);
  eleventyConfig.addPlugin(bundlerPlugin);

  // Passthrough File Copy
  ['src/assets/fonts/', 'src/assets/images/'].forEach(path => eleventyConfig.addPassthroughCopy(path));
  eleventyConfig.addPassthroughCopy({ 'src/assets/images/favicon/*': '/' });
  eleventyConfig.addPassthroughCopy("_redirects");

  // General Config
  return {
    markdownTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    dataTemplateEngine: 'njk',
    pathPrefix: '/',
    dir: {
      output: 'dist',
      input: 'src',
      includes: '_includes',
      layouts: '_layouts'
    }
  };
}
