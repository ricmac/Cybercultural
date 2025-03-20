---
title: "Cybercultural Redesign and Web Development History Migration"
description: "Details of a redesign here at Cybercultural, including upgrading to Eleventy v3.0. Also, my previous blog Web Development History has been folded into Cybercultural."
date: 2024-09-26
permalink: "p/redesign-and-wdh-migration/"
tags: ['blog']
featureImage: "/assets/images/cybercultural_wdh-sep24.jpg"
---

![Web Development History integrated with Cybercultural, September 2024](/assets/images/cybercultural_wdh-sep24b.jpg){loading="eager"}

Today I completed a redesign of [Cybercultural](https://cybercultural.com/), including a new navigation structure and other changes related to an upgrade in my publishing system, Eleventy. I've upgraded from Eleventy version 2 to the latest [3.0 beta version](https://www.11ty.dev/blog/canary-eleventy-v3/), which required significant changes to my code. There’s also a bunch of new content on the site, since I decided to migrate my previous history website — Web Development History (WDH) — into Cybercultural.

I ran WDH from the end of 2020 until the end of 2021; up till today, it existed at the domain WebDevelopmentHistory&#46;com. Most of the content was focused on the 1990s, with a few posts about the pre-web period. Prior to the WDH migration, Cybercultural was mostly focused on the Web 2.0 era — primarily because that’s the period [my serialised memoir](/p/roadmap-bubbleblog/) takes place in. So folding in WDH gave me the idea to create a new, eras-based menu structure for Cybercultural. Accordingly, there are now four main categories:

- Pre-web
- Dot-com
- Web 2.0
- Personal 

![WDH prior to migration](/assets/images/wdh_25Sep2024.jpg)
*Web Development History website prior to migration.*

All of the WDH content slots into the Pre-web and Dot-com categories, while my memoir posts are in the Web 2.0 category (along with a bunch of other posts about Web 2.0). The Personal category is for anything that doesn’t fit into the three other categories.

Running parallel to the WDH migration, I upgraded my Eleventy software to the 3.0 beta — including moving everything to [ESM syntax](https://www.zachleat.com/web/eleventy-v3-esm/). This enabled me to make some other changes. Firstly, I added the [Eleventy image plugin](https://www.11ty.dev/docs/plugins/image/) for optimization of images, which means my site now runs faster and has a better user experience. I also added pagination across the site, which can be [a tricky thing in 11ty](https://11tybundle.dev/categories/pagination/) (it wasn't my first attempt!).

In addition to the new main categories, I have broadened the use of tags here. You’ll now see a list of tags at the top of each post, next to the post date. Most notably, there are year tags now: so, for example, you can view all of the posts that relate to [2005](/tags/2005/) or [1995](/tags/1995/).

![Cybercultural tags page](/assets/images/2005-tags-page-sep24.jpg)

Oh, and I also moved my hosting from Netlify to Cloudflare — an unplanned move that was forced on me earlier this month by some kind of bot attack that [spiked my Netlify bandwidth](https://mastodon.social/@ricmac/113086148561583366). 

This entire process — importing WDH content, upgrading to 11ty v3, new nav structure, move to Cloudflare, etc. — has taken me a good couple of months. I must add that the v3 upgrade and associated 11ty updates were helped greatly by both ChatGPT (which guided me through some of the gnarlier code changes) and the 11ty Discord (especially &#64;uncenter and &#64;vrugtehagel, who both patiently gave me expert advice during the upgrade).

## A New Era

So, Cybercultural is an internet history newsletter / website that now covers multiple eras of the internet — from the Doug Engelbart-inspired [pre-web era](/preweb/) of the late-1960s, through to the birth of the World Wide Web and subsequent [dot-com era](/dotcom/) of the 1990s, to the [Web 2.0 era](/web20/) of the 2000s, right up till the 2010s (although I haven’t focused much on this time period yet — also, what will I call it?).

I have done a lot of work on Cybercultural this year, especially after I [migrated it from Substack](https://ricmac.org/2024/01/26/why-i-migrated-my-newsletter-from-substack-to-eleventy-and-buttondown/) to the current Eleventy site back in January. Since then I have re-discovered the joy of running an indie website — being able to design it how I like, build up the brand, add a whole bunch more content, participate in a cool community (11ty), and more. Just like ReadWriteWeb was my professional web brand in the Web 2.0 era, Cybercultural is that to me now. It’s my online baby, and I’m having fun developing it and continuing to grow the content.

![New Cybercultural homepage, 26 September 2024](/assets/images/new-cybercultural-homepage-26sep24.jpg)
*For posterity, what my homepage looks like after the redesign.*