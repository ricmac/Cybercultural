/** All blog posts as a collection. */
export function getAllPosts(collectionApi) {
  return collectionApi.getFilteredByGlob('./src/posts/**/*.md');
}

/** All markdown files as a collection for sitemap.xml */
export function onlyMarkdown(collection) {
  return collection.getFilteredByGlob('./src/**/*.md');
}

