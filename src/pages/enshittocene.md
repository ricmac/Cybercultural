---
title: Enshittocene
description: "Internet history from about 2013 to 2021."
layout: enshittocene
permalink: /enshittocene{% if pagination.pageNumber > 0 %}/page/{{ pagination.pageNumber + 1 }}{% endif %}/index.html
pagination:
  data: collections.enshittocene
  size: 8
  alias: pagedPosts
  addAllPagesToCollections: true
  reverse: true
---