# Cybercultural

Built on Eleventy, via Lene Saile's [eleventy-excellent template](https://github.com/madrilene/eleventy-excellent), an "Eleventy starter based on the workflow suggested by Andy Bell's buildexcellentwebsit.es." 

I made substantial changes from the template to customize my site, but the foundation was Lene's excellent work. See [my blog post on ricmac.org](https://ricmac.org/2024/01/26/why-i-migrated-my-newsletter-from-substack-to-eleventy-and-buttondown/) for a full explanation.

You can see the output of this project at [Cybercultural.com](https://cybercultural.com/).

Lene's documentation follows...

# Eleventy Excellent

Easy to use Eleventy starter, based on the workflow suggested by Andy Bell's [buildexcellentwebsit.es](https://buildexcellentwebsit.es/).

![GitHub Repo stars](https://img.shields.io/github/stars/madrilene/eleventy-excellent?style=flat-square&logo=github&logoColor=white&label=GitHub%20stars)
[![Follow @lene@front-end.social](https://img.shields.io/mastodon/follow/109292536543732634?domain=https%3A%2F%2Ffront-end.social&style=flat-square&logo=Mastodon&logoColor=white&labelColor=%235B4BE1)](https://front-end.social/@lene)

If you end up using this starter, feel free to send me a link, I'd love to see it!

- [Eleventy Excellent](#eleventy-excellent)
  - [Preview](#preview)
  - [Features](#features)
  - [First steps](#first-steps)
  - [Deploy directly to Netlify](#deploy-directly-to-netlify)
  - [Development](#development)
    - [Install dependencies](#install-dependencies)
    - [Working locally](#working-locally)
    - [Creating a production build](#creating-a-production-build)
  - [Built with Eleventy Excellent](#built-with-eleventy-excellent)
  - [Logbook](#logbook)
  - [Credits and Thank yous](#credits-and-thank-yous)

## Preview

https://eleventy-excellent.netlify.app/

## Features

**This starter includes:**

- The whole CSS workflow as suggested by buildexcellentwebsit.es
- Accessible site navigation, editable in `src/_data/navigation.js`
- Image optimization with Eleventy-img _([see blog post](https://eleventy-excellent.netlify.app/blog/post-with-an-image/))_
- Youtube embed with lite-youtube _([see blog post](https://eleventy-excellent.netlify.app/blog/post-with-a-video/))_
- Easy resource fetching with eleventy-fetch _([see blog post](https://eleventy-excellent.netlify.app/blog/post-with-fetched-content/))_
- Syntax highlighting via eleventy-plugin-syntaxhighlight _([see blog post](https://eleventy-excellent.netlify.app/blog/post-with-some-code/))_
- Advanced markdown handling _([see blog post](https://eleventy-excellent.netlify.app/blog/post-with-all-the-markdown/))_
- 301 redirects for Netlify _([see blog post](https://eleventy-excellent.netlify.app/blog/post-with-301-redirects/))_
- Automatically generated Open Graph images for blog posts _([see blog post](https://eleventy-excellent.netlify.app/blog/open-graph-images/))_
- More features in seperate demo branches _([see blog post](https://eleventy-excellent.netlify.app/blog/demo-pages/))_
- How Tailwind CSS is used here _([see blog post](https://eleventy-excellent.netlify.app/blog/what-is-tailwind-css-doing-here/))_
- SEO basics (XML-sitemap, metadata)
- dayjs handling dates & times
- Bundling via esbuild
- RSS feed
- Links to social networks in footer
- Mastodon domain verification snippet

## First steps

[Please read the Get started docs!](https://eleventy-excellent.netlify.app/get-started/)

## Deploy directly to Netlify

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/madrilene/eleventy-excellent)

## Development

### Install dependencies

```
npm install
```

### Working locally

Starts watch tasks to compile when changes detected

```
npm start
```

### Creating a production build

Minify JS, CSS and HTML.

```
npm run build
```

## Built with Eleventy Excellent

[Sites that are based on / built with Eleventy Excellent. ](https://eleventy-excellent.netlify.app/built-with/)
