import fs from 'fs';
import path from 'path';
import EleventyFetch from '@11ty/eleventy-fetch';

const CACHE_FILE = '.cache/webmentions.json';

export default async function () {
  const url = `https://webmention.io/api/mentions.jf2?token=${'cCg7j-muiYR80tkDpZZY3w'}&per-page=1000`;

  // Fetch webmentions data
  let webmentions = await EleventyFetch(url, {
    duration: "1h",  // Cache duration (1 hour)
    type: "json"     // Expecting JSON response
  });

  // Read the existing webmentions from the cache file
  let existingWebmentions = [];
  if (fs.existsSync(CACHE_FILE)) {
    existingWebmentions = JSON.parse(fs.readFileSync(CACHE_FILE, 'utf8'));
  }

  // Filter out new webmentions by comparing with existing ones
  const newWebmentions = webmentions.children.filter(mention => {
    return !existingWebmentions.some(existingMention => existingMention['wm-id'] === mention['wm-id']);
  });

  // Merge the new webmentions with the existing ones
  const mergedWebmentions = [...existingWebmentions, ...newWebmentions];

  // Define the desired order of types
  const typeOrder = ['repost-of', 'like-of', 'in-reply-to', 'bookmark-of', 'mention-of'];

  // Group the merged webmentions by type in the desired order
  const groupedByType = typeOrder.reduce((acc, type) => {
    const mentions = mergedWebmentions.filter(mention => mention['wm-property'] === type);
    if (mentions.length > 0) {
      acc[type] = mentions;
    }
    return acc;
  }, {});

  // Write the updated webmentions back to the cache file
  fs.writeFileSync(CACHE_FILE, JSON.stringify(mergedWebmentions, null, 2));

  return groupedByType;
};
