import markdownIt from 'markdown-it';
import markdownItPrism from 'markdown-it-prism';
import markdownItAnchor from 'markdown-it-anchor';
import markdownItClass from '@toycode/markdown-it-class';
import markdownItLinkAttributes from 'markdown-it-link-attributes';
import markdownItAttrs from 'markdown-it-attrs'; // Import the attrs plugin
import { full as markdownItEmoji } from 'markdown-it-emoji'; // Named import
import markdownItFootnote from 'markdown-it-footnote';
import markdownitMark from 'markdown-it-mark';
import markdownitAbbr from 'markdown-it-abbr';
import { slugifyString } from '../utils/index.js';

// Create an instance of markdown-it with desired plugins
const markdownLib = markdownIt({
  html: true,
  breaks: false,
  linkify: true,
  typographer: true
})
  .disable('code')
  .use(markdownItPrism, {
    defaultLanguage: 'plaintext'
  })
  .use(markdownItAnchor, {
    slugify: slugifyString,
    tabIndex: false,
    permalink: markdownItAnchor.permalink.headerLink({
      class: 'heading-anchor'
    })
  })
  .use(markdownItClass, {
    ol: 'list',
    ul: 'list'
  })
  .use(markdownItLinkAttributes, [
    {
      matcher(href) {
        return href.match(/^https?:\/\//);
      },
      attrs: {
        target: '_blank',
        rel: 'noopener'
      }
    }
  ])
  .use(markdownItEmoji) // Use the named import correctly
  .use(markdownItFootnote)
  .use(markdownitMark)
  .use(markdownitAbbr)
  .use(markdownItAttrs); // Add attrs plugin at the end

export default markdownLib;
