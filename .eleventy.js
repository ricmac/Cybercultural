import { createRequire } from "node:module";
const require = createRequire(import.meta.url);
const pkg = require('./package.json');
const packageVersion = pkg.version;

// Module import filters
import { limit, toHtml, where, toISOString, toAbsoluteUrl, stripHtml, minifyCss, minifyJs, mdInline, splitlines } from './config/filters/index.js';

// Module import shortcodes
import { includeRaw, liteYoutube } from './config/shortcodes/index.js';

// Module import collections
import { getAllPosts, onlyMarkdown } from './config/collections/index.js';

// Plugins
import markdownIt from 'markdown-it'; // Import markdown-it
import markdownItAttrs from 'markdown-it-attrs'; // Import markdown-it-attrs
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
  eleventyConfig.addLayoutAlias('post', 'post.njk');
  eleventyConfig.addLayoutAlias('dotcom', 'dotcom.njk');
  eleventyConfig.addLayoutAlias('web20', 'web20.njk');
  eleventyConfig.addLayoutAlias('preweb', 'preweb.njk');
  eleventyConfig.addLayoutAlias('personal', 'personal.njk');

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
  eleventyConfig.addShortcode('youtube', liteYoutube);
  eleventyConfig.addShortcode('include_raw', includeRaw);
  eleventyConfig.addShortcode('year', () => `${new Date().getFullYear()}`);
  eleventyConfig.addShortcode('packageVersion', () => `v${packageVersion}`);

  // Configure Markdown library with markdown-it-attrs
  const markdown = markdownIt().use(markdownItAttrs);
  eleventyConfig.setLibrary('md', markdown);

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

  // Add a collection for specified categories
  eleventyConfig.addCollection("categorizedPosts", function(collectionApi) {
    const yearTags = ["1968", "1969", "1990", "1991", "1992", "1993", "1994", "1995", "1996", "1997", "1998", "1999", 
      "2000", "2001", "2002", "2003", "2004", "2005", "2006", "2007", "2008", "2009", 
      "2010", "2011", "2012"];
    
    return collectionApi.getFilteredByTag("posts")
      .filter(post => {
        return post.data.tags && (
          post.data.tags.includes("web20") ||
          post.data.tags.includes("dotcom") ||
          post.data.tags.includes("personal") ||
          post.data.tags.includes("preweb") ||
          post.data.tags.includes("memoir") ||
          post.data.tags.includes("year") ||
          post.data.tags.some(tag => yearTags.includes(tag)) // Check for any year tags
        );
      })
      .sort((a, b) => b.date - a.date); // Sort explicitly to ensure reverse order
  });

  // Plugins
  eleventyConfig.addPlugin(EleventyRenderPlugin);
  eleventyConfig.addPlugin(syntaxHighlight);
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
