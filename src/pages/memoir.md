---
title: Memoir
description: "Bubble Blog, my memoir of the Web 2.0 era (2004-2012), serialized chapter by chapter: from starting ReadWriteWeb in New Zealand to selling it."
layout: memoir
permalink: /memoir{% if pagination.pageNumber > 0 %}/page/{{ pagination.pageNumber + 1 }}{% endif %}/index.html
pagination:
  data: collections.memoir
  size: 8
  alias: pagedPosts
  addAllPagesToCollections: true
  reverse: true
---