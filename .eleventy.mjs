// .eleventy.config.mjs

import { version as packageVersion } from './package.json';

// module import filters
import { limit, toHtml, where, toISOString, formatDate, toAbsoluteUrl, stripHtml, minifyCss, minifyJs, mdInline, splitlines } from './config/filters/index.js';

// module import shortcodes
import { imageShortcodePlaceholder, includeRaw, liteYoutube } from './config/shortcodes/index.js';

// module import collections
import { getAllPosts, onlyMarkdown } from './config/collections/index.js';

// module import events
import { svgToJpeg } from './config/events/index.js';

// plugins
import markdownLib from './config/plugins/markdown.js';
import { EleventyRenderPlugin } from '@11ty/eleventy';
import syntaxHighlight from '@11ty/eleventy-plugin-syntaxhighlight';
import { slugifyString } from './config/utils.js';
import { escape } from 'lodash';
import pluginRss from '@11ty/eleventy-plugin-rss';
import bundlerPlugin from '@11ty/eleventy-plugin-bundle';
import { execSync } from 'child_process';

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
  eleventyConfig.addFilter('escape', escape);
  eleventyConfig.addFilter('toHtml', toHtml);
  eleventyConfig.addFilter('toIsoString', toISOString);
  eleventyConfig.addFilter('formatDate', formatDate);
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

  // Custom transforms and template languages
  eleventyConfig.addPlugin(require('./config/transforms/html-config.js'));
  eleventyConfig.addPlugin(require('./config/template-languages/css-config.js'));
  eleventyConfig.addPlugin(require('./config/template-languages/js-config.js'));

  // Custom collections
  eleventyConfig.addCollection('posts', getAllPosts);
  eleventyConfig.addCollection('onlyMarkdown', onlyMarkdown);

  // Events
  eleventyConfig.on('afterBuild', svgToJpeg);

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