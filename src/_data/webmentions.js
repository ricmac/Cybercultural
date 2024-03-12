const EleventyFetch = require("@11ty/eleventy-fetch");

module.exports = async function () {
  const url = `https://webmention.io/api/mentions.jf2?token=${'cCg7j-muiYR80tkDpZZY3w'}&per-page=1000`;
  let webmentions = await EleventyFetch(url, {
    duration: "1h",
    type: "json",
  });

  // Group webmentions by type
  const groupedByType = webmentions.children.reduce((acc, mention) => {
    // Use the 'wm-property' value (like 'like-of', 'mention-of', etc.) as the key
    const type = mention['wm-property'];
    if (!acc[type]) {
      acc[type] = [];
    }
    acc[type].push(mention);
    return acc;
  }, {});

  return groupedByType; // Return the grouped object
};
