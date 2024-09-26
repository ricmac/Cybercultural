---
title: Personal
description: "Personal articles with a side of internet history and its impact on our culture."
layout: personal
permalink: /personal{% if pagination.pageNumber > 0 %}/page/{{ pagination.pageNumber + 1 }}{% endif %}/index.html
pagination:
  data: collections.personal
  size: 8
  alias: pagedPosts
  addAllPagesToCollections: true
  reverse: true
---