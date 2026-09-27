---
title: Web 1.0
description: "Internet history from 1990 to 2003: the birth of the World Wide Web, the first browsers and websites, and the dot-com boom and bust."
layout: dotcom
permalink: /dotcom{% if pagination.pageNumber > 0 %}/page/{{ pagination.pageNumber + 1 }}{% endif %}/index.html
pagination:
  data: collections.dotcom
  size: 8
  alias: pagedPosts
  addAllPagesToCollections: true
  reverse: true
---