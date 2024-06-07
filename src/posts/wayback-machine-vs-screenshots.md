---
title: 'Comparing Wayback Machine Copies of ReadWriteWeb to Old Screenshots'
description: "As I get ready to launch the serialization of my book, I discover that old Wayback Machine copies of ReadWriteWeb aren't always reliable."
date: 2023-10-04
permalink: "p/wayback-machine-vs-screenshots/"
tags: ['Article']
featureImage: "/assets/images/6e2a5035-07c2-4b31-a74d-cfe0f50f5530_1024x742.jpg"
---

![](/assets/images/6e2a5035-07c2-4b31-a74d-cfe0f50f5530_1024x742.jpg)

While preparing for the publication of my “Web 2.0 memoir” here on Cybercultural, I was fortunate to discover a screenshot of ReadWriteWeb from 24 September 2005 (US). I was thrilled to come across this, for several reasons:

1.  It’s a rare screenshot of what RWW looked like at that time, because unfortunately the Wayback Machine doesn’t have a good copy of that particular RWW design (more on that in a moment).
    
2.  This screenshot was taken just before I visited Silicon Valley for the first time; I arrived on 30 September 2005. The introduction to my book focuses on that trip; it was very memorable in many ways.
    
3.  The screenshot also shows my Firefox shortcuts and a bunch of open tabs, so it’s a nice reminder of some of my favorite websites and blogs from that time (anyone else remember tech.memeorandum? It was the first incarnation of Techmeme!).
    
4.  The Feedburner badge shows 4,351 RSS subscribers. It’s proof that this was just before a tipping point in ReadWriteWeb’s popularity, which happened partly due to this US trip, but also because it was a tipping point for Web 2.0 itself.
    

I will start the serialization of my book this month (I’m mostly just waiting on a book cover design to be completed, which will also be the Cybercultural cover photo for this project). I’ve prepared 12 posts so far and much of that time has been spent looking for old photos and screenshots. I’ve been trawling through my old Gmail account, my digital archives (mostly on backup hard drives and CDs), boxes full of travel memorabilia and papers (I wish I’d kept more), and the Wayback Machine and Flickr.

Flickr has been my best source of imagery from the Web 2.0 era, but I’ve also relied heavily on the Wayback Machine to see how RWW (and other sites from that era) looked at the time. Most of the time Wayback is awesome, but unfortunately its copies of RWW in September and October 2005 are not very good. In fact, that screenshot at the top of this post? **It’s the only evidence I have now of what RWW looked like when I visited America for the first time.**

As it happens, there is a Wayback copy of RWW from the exact day of that screenshot. But here’s what [it looks like](https://web.archive.org/web/20050924133940if_/http://readwriteweb.com/):

![](/assets/images/358c0b41-6e8e-43ce-82f4-2cfa5e5d0f91_1986x774.png)

The top half of the Wayback version of RWW from 24 Sep 05.

That’s just the top half, and there is a lot of whitespace there (coincidentally, I was doing a Google search for “whitespace” according to the screenshot! Probably I was searching for CSS tips about controlling whitespace, but I don’t recall…). When you scroll down, it becomes apparent that the two sidebars have collapsed in this Wayback copy, and that it’s now all just one column:

![](/assets/images/f2368729-45ac-43bd-95a2-a9fc15eee8e2_1984x1386.png)

…if I scroll even further, finally we see the main content:

![](/assets/images/2180e6b8-c96f-4202-910a-12461f3f01c1_1986x1400.jpg)

To confirm: this is the same version of RWW as the screenshot at the top of this post. It has the same top stories and even the same number of comments. So why does the Wayback version look so very different to my screenshot? (Also note that the Feedburner badge is from the future; it has over 29,000 readers in the Wayback version, but I know from the screenshot that it was actually 4,351.)

Wayback Forensics
-----------------

Here’s what I can tell you about that Wayback version. Firstly, it’s using a style that I introduced around November 2005. I think it initially had a few kinks in it, but [by the end of 2005](https://web.archive.org/web/20051231151629if_/http://www.readwriteweb.com/) it looked how it should (not a great design by any means, but at this time I was still rolling my own):

![](/assets/images/426dc9e7-beb1-44ee-a799-9b3e555c21df_2118x1374.jpg)

You can see that the header background — which, again, I didn’t introduce until sometime in November — has somehow found itself in the Wayback copy from late September 2005. It’s a header from the near future; the same situation as the Feedburner badge.

I looked at the source code for the Wayback Machine copy from 24 Sep 2005 and quickly saw the problem. The image of the Feedburner badge is external, from feedburner.com. While the image URL is from September 2005, that version is no longer available and so it re-directs to the next available version: from October 2006 (“20061010” indicates 10 October 2006). Here’s what the URL looks like after I clicked on it:

```https://web.archive.org/web/20061010102259im_/http://feeds.feedburner.com/~fc/readwriteweb?bg=ff6600&fg=000000&anim=0```

As for the header, this is the source code, which points to the style sheet URL for September 2005:

![](/assets/images/f5a91e83-6b9d-44ef-8882-04865fec7871_2642x336.jpg)

But again, that 24 Sep 2005 version of styles-site.css no longer exists. When I clicked on the URL, it re-directed to the next earliest version, which happens to be dated 11 December 2005:

```https://web.archive.org/web/20051211052806cs_/http://www.readwriteweb.com/styles-site.css```

So that explains why I have that ugly grey and orange header on the September 2005 version of the RWW homepage — it’s using a style sheet from over two months later, _after_ I’d re-designed the site.

It also didn’t help that I used the same file name (styles-site.css) instead of naming the December version something unique.

As for why the formatting of the September Wayback version is so wonky — three columns have been mushed into one — that is also due to there being no 24 September 05 version of that CSS file. The December version of the RWW design has two columns, so that almost certainly messed up the layout in the Sep version.

Interestingly, I have evidence that I started the move to the 2-column layout just two days after my screenshot. In [a post](https://web.archive.org/web/20051018143905if_/http://www.readwriteweb.com/archives/002841.php) dated September 26, 2005, I wrote: “Just to let you know I've been re-arranging the furniture on Read/WriteWeb over the past couple of days. I went from a 3-column design to a 2-column one and tidied up the CSS.” This suggests that even if Wayback had an early October version of the CSS file, it likely would’ve still messed up the layout of the version for 24 Sep 05.

Again, if I’d just used different file names for the new CSS files, I likely would’ve avoided at least some of the Wayback Machine hassles I’m encountering 18 years later.

Final Thoughts
--------------

I must emphasize here that I LOVE the Wayback Machine and am very thankful it exists. Without it, I would’ve lost all but a few rare screenshots of ReadWriteWeb from that era, the early-to-mid 2000s. (Incidentally, if you’re reading this and by some miracle you have screenshots of RWW from its early days, please let me know!)

One more thing: it’s occurred to me that I might still be able to re-construct RWW from 24 September 2005, since I think I have the version of styles-site.css from that time, somewhere in my hard drive backups. So perhaps I can **bring it back to life** on my own web server. But that’s a project for another day, since I am currently busy preparing to serialize my Web 2.0 memoir.

* * *