---
title: Year by Year
description: "Reviews of what the internet was like in each year from 1994 to 2012, across the dot-com era and Web 2.0."
layout: year
permalink: /year{% if pagination.pageNumber > 0 %}/page/{{ pagination.pageNumber + 1 }}{% endif %}/index.html
pagination:
  data: collections.year
  size: 8
  alias: pagedPosts
  addAllPagesToCollections: true
  reverse: true
---