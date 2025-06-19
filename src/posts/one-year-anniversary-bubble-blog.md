---
title: "Serializing a Book Online: Lessons From My Web 2.0 Memoir"
description: "On the first anniversary of launching my serialized book, I reflect on what I've learned — including the pros and cons (mostly pros) of my pivot from Substack newsletter to indie website."
date: 2024-10-29
permalink: "p/online-serialization-thoughts/"
tags: ['notes']
featureImage: "/assets/images/bubble-blog-cover-1280x720.jpg"
---

![Bubble Blog: From Outsider to Insider in Silicon Valley's Web 2.0 Revolution](/assets/images/33d48ded-f999-4173-8440-9d752446428b_3400x2134.jpg "Bubble Blog: From Outsider to Insider in Silicon Valley's Web 2.0 Revolution"){loading="eager"}

One year ago, I [launched the serialization](/p/bubble-blog-web20-memoir/) of my third book, a memoir entitled **Bubble Blog: From Outsider to Insider in Silicon Valley's Web 2.0 Revolution**. The book covers the years 2003-2012, the time in which I created ReadWriteWeb and built it into one of the top 10 blogs in the world (also syndicated on The New York Times for a few years). It’s both a personal memoir and an internet history of the Web 2.0 period. Since the launch last October, I’ve published [54 instalments](/p/roadmap-bubbleblog/) — with the 55th due to be published tomorrow.

A lot has changed since I began the serialization — most notably a change in publishing system, when I migrated off Substack in January. But also my own goals for publishing this book online have changed, as I’ve gotten further into the project (and indeed, am now approaching its end-point). So in this post, I’m going to reflect on what’s changed in my publishing set-up over the past year, how successful the serialization has been, some thoughts on the overall web publishing ecosystem, and an update on the paperback version of the book.

First, a quick status update: I’m currently in chapter 17 of the book. There are 20 chapters, plus an introductory chapter and an epilogue. So I’m nearly 80% through the serialization (I’m expecting to finish by the end of this year). Now, let’s get into my learnings.

## What’s Worked

Probably the biggest advantage of publishing the book online in weekly instalments has been the ability to add images to each post. I tend to put around 8-10 images in each post — a lot of them sourced through Flickr and the Wayback Machine. But also I have a bunch of photos and screenshots I’ve done myself over the years. I admit, it takes me too long each week to dig up some of these bits of multimedia…but it’s worth the effort. Many of these images would likely be eventually lost or forgotten if I hadn’t put them up on Cybercultural.

It's been personally satisfying to publish this project on the web, although I have to say only moderately successful in drumming up interest in the book. But I’ve gotten some wonderful feedback, usually in the form of people emailing me or messaging me on social platforms. Occasionally via comments on social media.

I’ve been very pleased with the serialization as a legacy project. One of the reasons for writing this book was to lay down a record of what I created, its context (the Web 2.0 era), what ReadWriteWeb stood for back then, and what it was like building for the web in the first decade of the 21st century. One of the quotes I will use to open the paperback book is this, from Herman Melville's poem 'Clarel':

> Come, thou who makest such hot haste\
To forge the future—weigh the past.

Weighing the past isn’t something the tech industry has traditionally done well. I hope I’m doing my bit to change that, with both this book and my Cybercultural website in general (its focus is internet history).

## What Hasn’t Worked

Although people have reached out to me privately, I’ve had a tougher time getting attention on social media for the book. Public comments have been occasional rather than regular, and reshares limited. I think this is partly due to the nature of the project — it’s long-form writing (with images!), and the narrative plays out over many posts. So it’s the complete opposite of a 10-second video on TikTok or Facebook, the current leading paradigm of social media.

That said, I had hoped to somewhat emulate the success of ex-Microsoft executive Steven Sinofsky and his Substack serialization project, [Hardcore Software](https://hardcoresoftware.learningbyshipping.com/) (“personal stories and lessons from inside the rise and fall of the PC revolution”). Sinofsky’s project was an inspiration for mine, but I don’t think I’ve reached his level in terms of reader comments and reshares. Perhaps it was always unrealistic to think that an indie tech blogger’s story would generate the same amount of attention as a high-level Microsoft exec.

![Cybercultural, early January 2024](/assets/images/cybercultural-jan24.jpg)
*Cybercultural when it was still on Substack. The pivot happened in January 2024.*

## The Move From Substack

Speaking of Substack, I count my migration off that platform and onto an indie online publishing system as one of the successes of this project. Although the move was prompted by Substack’s stance on hate content, my main motivation was to practice what I regularly preach about the value of the open web. As I put it in [a blog post](https://ricmac.org/2024/01/26/why-i-migrated-my-newsletter-from-substack-to-eleventy-and-buttondown/) straight after the move:

“I wanted a solution that was based on the open web and that was entirely under my control. Not coincidentally, I quit X/Twitter (a centralized platform) for good in November last year and made my new social media home Mastodon (an open source, decentralized product built on a W3C open web standard). I wanted to make a similar move for my newsletter: from centralized platform to open web, from corporate to indie, from being controlled to taking back control.”

I now use a custom website built with [Eleventy](https://www.11ty.dev/) (11ty), a static site generator that I manage via GitHub and deploy using Cloudflare (originally Netlify). To publish the articles in email newsletter form, I use an indie software project called [Buttondown](https://buttondown.email/). Ever since I made this move, I’ve loved being responsible for my own web design and features, and being part of the thriving web developer ecosystem around 11ty. It has taken me back to the DIY mindset I had in the early days of ReadWriteWeb, and reminded me just how much I love building my own stuff on the web.

![Cybercultural, 29 October 2024](/assets/images/Cybercultural-29oct2024b.jpeg)
*The current, indie website version of Cybercultural — made with care on my laptop computer using 11ty, Visual Studio Code, GitHub and Cloudflare.*

Perhaps the only downside of moving off Substack is that it’s been harder to promote Cybercultural as a subscription newsletter offering. I have not managed to grow my already small paid subscriber base since making this move. Partly that’s because Cybercultural has evolved into more of an “indie website” than an “email newsletter” (often just referred to as “a Substack” in the wider media ecosystem). That’s a good transformation in many ways — it’s more web-native and thus able to integrate with open web trends like [the fediverse](https://thenewstack.io/fediforum-showcases-new-fediverse-apps-and-developer-network/). But, it also means it’s been a struggle to earn any income from it.

## Changes in Online Publishing Ecosystem

As hinted at above, since I launched this project last October, the online media ecosystem has changed in several ways. 

On the positive side, tools for independent and decentralised publishing have improved. 11ty and Buttondown are both relatively young projects and so they just get stronger and stronger every month (and also, products like Ghost are trying to bridge the email and web worlds in [a more open web way](https://www.augment.ink/ghost-substack-discoverability/) than Substack); Mastodon and the wider fediverse have also improved technically and are slowly gaining momentum (I’d put Bluesky in this emerging category too, although it has yet to prove that it’s truly decentralized); and there is a growing sense that we (meaning the open web community) can fix the [enshittification](/enshittocene/) of the internet…or at least *walk the talk* by opting for open web tools over Substack, Mastodon/Bluesky over X, etc.

On the negative side, it’s harder than ever for publishers to get traffic to their websites. Google search traffic for most publishers has been steadily declining over the past year (with the opaque Google Discover algorithm offering temporary page view salvation…until it inevitably gets taken away). Google AI Overviews is the main culprit and poses an [existential threat to publishers](https://thenewstack.io/the-future-of-websites-in-the-age-of-ai-and-seo-decline/). Concurrently, social media referral traffic has become a shell of what it once was — many social media platforms now de-emphasize links (the exception is Mastodon, which does its best to [highlight journalism](https://blog.joinmastodon.org/2024/07/highlighting-journalism-on-mastodon/)) and some even throttle your distribution unless you pay-to-play (Twitter/X).

Despite these depressing trends for online publishers, I have to add that my own search traffic has been steadily increasing ever since I moved to an indie website setup. That’s been helped by some SEO-friendly articles I’ve written, along with [folding my previous *Web Development History* website](/p/redesign-and-wdh-migration/) into Cybercultural. But I was basically starting from zero on the SEO front, since I had no real reason to focus on it with Substack — with its much-vaunted network effects. Now that I need to generate traffic on my own, though, I have put renewed energy into SEO this year. So far, that’s been working — although Cybercultural is still a tiny fish in the tech media stream (let alone the wider online media ocean).

## Update on Paperback

Finally, when I launched Bubble Blog last year, I promised the paperback book would be available soon. I had hoped to do it earlier this year, but I found that most of what spare time I had — I also have a full-time job — was spent on preparing the weekly posts and building up my custom website. So the paperback has taken longer than I originally wanted.

However, over the past few weeks I have been working with my book designer on getting the final manuscript ready for release as a self-published paperback. He is doing what I hope is the final round of fixes now, so I am hoping the book will be released before Christmas! I’ll keep you updated on progress.

Thanks everyone who has shown support to this project over the past twelve months (especially to my paid supporters). And please, help an indie web brother out by resharing *Bubble Blog* on your social media channels when new instalments come out, and by commenting when you have something to say about it. Viva la read/write web!