---
title: Yearly Reviews
description: "Articles tagged year."
layout: year
permalink: /year{% if pagination.pageNumber > 0 %}/page/{{ pagination.pageNumber + 1 }}{% endif %}/index.html
pagination:
  data: collections.year
  size: 8
  alias: pagedPosts
  addAllPagesToCollections: true
  reverse: true
---