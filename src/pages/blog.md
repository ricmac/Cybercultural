---
title: Notes
description: "These posts aren't necessarily about internet history and are a mix of personal and admin."
layout: blog
permalink: /notes{% if pagination.pageNumber > 0 %}/page/{{ pagination.pageNumber + 1 }}{% endif %}/index.html
pagination:
  data: collections.notes
  size: 8
  alias: pagedPosts
  addAllPagesToCollections: true
  reverse: true
---