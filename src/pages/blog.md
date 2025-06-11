---
title: Notes
description: "Old-school blogging — opinionated and conversational, with the occasional admin post."
layout: blog
permalink: /notes{% if pagination.pageNumber > 0 %}/page/{{ pagination.pageNumber + 1 }}{% endif %}/index.html
pagination:
  data: collections.notes
  size: 8
  alias: pagedPosts
  addAllPagesToCollections: true
  reverse: true
---