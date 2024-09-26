---
title: Pre-web
description: "Articles about internet history before the web was born."
layout: preweb
permalink: /preweb{% if pagination.pageNumber > 0 %}/page/{{ pagination.pageNumber + 1 }}{% endif %}/index.html
pagination:
  data: collections.preweb
  size: 8
  alias: pagedPosts
  addAllPagesToCollections: true
  reverse: true
---