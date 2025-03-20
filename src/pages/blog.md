---
title: Blog
description: "Blog posts that may or may not be related to internet history. These posts are more like old-school blogging — personal thoughts, admin, or just hard to categorize."
layout: blog
permalink: /blog{% if pagination.pageNumber > 0 %}/page/{{ pagination.pageNumber + 1 }}{% endif %}/index.html
pagination:
  data: collections.blog
  size: 8
  alias: pagedPosts
  addAllPagesToCollections: true
  reverse: true
---