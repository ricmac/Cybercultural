---
title: Misc
description: "Articles not associated with a specific era of internet history — a mix of personal, admin, or just hard to categorize."
layout: misc
permalink: /misc{% if pagination.pageNumber > 0 %}/page/{{ pagination.pageNumber + 1 }}{% endif %}/index.html
pagination:
  data: collections.misc
  size: 8
  alias: pagedPosts
  addAllPagesToCollections: true
  reverse: true
---