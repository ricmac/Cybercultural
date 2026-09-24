/** All blog posts as a collection. */
export function getAllPosts(collectionApi) {
  return collectionApi.getFilteredByGlob('./src/posts/**/*.md');
}

