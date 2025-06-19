---
title: "1999: Netscape’s Fall and the Rise of the Mozilla Browser"
description: "By 1999, not only had Netscape fallen behind Microsoft in browser technology, it also had trouble navigating relationships — with both its parent AOL and the developers of its open source project, Mozilla."
date: 2021-10-13
permalink: "p/1999-the-fall-of-netscape-and-the-rise-of-mozilla/"
tags: ['dotcom', '1999']
featureImage: "/assets/images/wdh/mozilla-browser-1999-feature.jpg"
---

![Mozilla 1999](/assets/images/wdh/mozilla-browser-1999-feature.jpg){loading="eager"}

At the beginning of 1999, one company had all the momentum on the Web: Microsoft. While Netscape was adjusting to corporate life with new owner AOL and trying to figure out its browser strategy, Microsoft was preparing to release version 5 of its browser, Internet Explorer. Like the version before it, IE5 would become the default browser on Windows — further expediting the rise of IE as the dominant browser in the market. Indeed, by the end of 1999, IE had up to 80% of the browser market.

While it was smooth sailing for Microsoft’s IE, its competitor Netscape had entered turbulent waters post-acquisition. Not only had Netscape fallen behind Microsoft in browser technology, it also had trouble navigating relationships — with both its parent AOL and the developers of its open source project, Mozilla. By the end of 1999, Netscape was a startup shipwreck. Fortunately, the good ship Mozilla was in much sturdier shape.

Late 1998: Mozilla Starts Afresh
--------------------------------

As noted [in the previous post](/p/1998-mozilla-w3c-dom-wasp/), Netscape had open sourced its browser in March 1998 under the code name Mozilla. In [a June 1998 update](https://www-archive.mozilla.org/apology.html), Netscape developer Michael Toy explained that Mozilla was “was a ‘clean slate’ project, and a serious attempt was made to design this piece of software in a way that would avoid many of the problems experienced in the development and maintenance of Mosaic.”

The trouble was, Netscape still had to maintain the Netscape 4 browser (which derived from Mosaic). The company wanted Netscape 5 to use the new Mozilla code base, but it was far from clear when it would be ready. As Toy wryly put it, Netscape was “completely doomed” — on one hand it had an elderly code base (version 4) which it had to keep working on, and on the other a buggy, relatively untested new code base (Mozilla).

![Scrolling now works](/assets/images/wdh/linux04.gif)
*[11 Nov 1998](https://web.archive.org/web/19990508125555/http://www.mozillazine.org/screenshots/): “Scrolling now works” in Mozilla on Linux.*

A key part of the Mozilla project was the development of a new layout engine, initially called Raptor but then re-named [NGLayout](https://web.archive.org/web/19981201220645/http://www.mozilla.org/newlayout/) (‘next-generation layout’). **UPDATE:** There is a backstory to this, which Peter Linss alerted me to in the comments to this post. NGLayout derived from an unnamed engine that Linss and Rick Gessner designed in 1995. The pair founded a company called Digital Style that same year, which then partnered with Netscape in late 1996. At this point, the layout engine was given a name: Magellan. Netscape subsequently acquired Digital Style in 1997. Linss told me in an email: “We knew the original Magellan name could never be used publicly due to trademark issues, it was just our internal code name for a while. At some point the name shifted to Raptor as a placeholder, then NGLayout, then finally Gecko.”

In addition to NGLayout, in late 1998 Mozilla was working on a set of front-end libraries called [XPFE](https://www-archive.mozilla.org/xpfe/orig/xpfe.html) (which stood for ‘Cross-Platform Front End’). In a [development roadmap](https://web.archive.org/web/19990117015113/http://www.mozilla.org/roadmap.html) first created at the end of October 1998, [JavaScript inventor](/p/1995-the-birth-of-javascript/) Brendan Eich — [who was](https://web.archive.org/web/19990422043006/http://www.mozilla.org/about.html) now responsible for the “architecture and technical direction” of Mozilla — commented that “moving to XPFE and NGLayout means moth-balling all of the old-style FEs \[front ends\], and of course mozilla/lib/layout and its friends.”

Eich, who still worked for Netscape, declared that it was “time to stop banging our heads on the old layout and FE codebase.” This was when Mozilla — and by extension Netscape — decided to abandon the Netscape 4 browser technology altogether. It would be NGLayout, XPFE and other new browser components that Mozilla would build around going forward.

As explained later by Jeff Rule [in developer.com](https://www.developer.com/guides/gecko-and-the-nglayout-engine/):

> “The NGLayout is a complete rewrite of the layout engine used in Netscape 4. Where Netscape 4 was a huge piece of organically developed software with code dating back to Netscape 1.0, NGLayout is written to be modular, super quick, and take up little memory. In addition, it is written to support all the latest standards.”

![Mozilla’s NGLayout page](/assets/images/wdh/mozilla_nglayout_dec98-1024x450.png)
*1 Dec 1998: Mozilla’s NGLayout page.*

Given how fast Microsoft IE was growing in the browser market and the impending arrival of IE5 in March 1999, Netscape was keen to talk up the upcoming Mozilla-based browser. In a press release dated [10 November 1998](https://web.archive.org/web/20030501015644/http://wp.netscape.com/newsref/pr/newsrelease698.html?cp=nwb11flh1) (which turned out to be just a couple of weeks before it was [acquired by AOL](https://web.archive.org/web/20020808041349/http://wp.netscape.com/newsref/pr/newsrelease707.html)), Netscape announced that NGLayout “will form the foundation for its future client products” — meaning its browser products. Netscape made a big show of supporting web standards, noting that the new engine would support “industry standards such as HTML 4.0, Cascading Style Sheets (CSS1 and CSS2), Document Object Model (DOM), Resource Description Framework (RDF) and XML.”

After the acquisition, though, it became clear that corporate politics would cause problems in the development of Mozilla. Even the naming of things was contentious, with Netscape announcing [in early December 1998](https://web.archive.org/web/20030414005121/http://wp.netscape.com/newsref/pr/newsrelease711.html) that its new browser engine — based on NGLayout — would be called Gecko. This branding rankled some Mozilla developers, who also [disliked](https://web.archive.org/web/20110629154746/http://www.mozilla.org/newlayout/gecko.html) Netscape calling the engine “NGT” rather than NGLayout. But as history records, the Gecko name won out in the end (to this day, it’s the name of the Firefox browser engine).

Slow and Steady Milestones
------------------------------------------

As of early 1999, the open source browser name was Mozilla 5.0. The full suite — including the browser client, email and newsgroups, HTML editor, instant messaging, and more — went under the code name [SeaMonkey](https://web.archive.org/web/19990827034637/http://www.mozilla.org/projects/seamonkey/). Publicly, Netscape was saying that SeaMonkey would form the basis of Netscape Communicator 5, its would-be competitor to Microsoft’s range of web-based products.

![Aug 1999 screenshot](/assets/images/wdh/seamonkey_aug99-1024x375.png)
*Aug 1999 screenshot.*

But it was still uncertain how long it would take to complete the browser client, let alone the full SeaMonkey suite. Because Eich and his Mozilla developers had decided to throw away the Navigator 4.x codebase and start from scratch, the new 5.0 browser was expected to take at least a year to build.

Ben Goodger, a New Zealander, got involved in the Mozilla project in 1999. At first he was a volunteer, but by the end of the year he’d been hired by Netscape. In [a blog post](https://web.archive.org/web/20110623034401/http://weblogs.mozillazine.org/ben/archives/009698.html) written later, he described the status of the Mozilla project in early 1999:

> “In early 1999 only the most basic elements of the old Communicator suite were in place in the new browser; you could barely browse or read mail as Netscape’s engineers worked furiously to erect the framework of the application.”

Goodger also noted the “uneasy” relationship between Netscape and the Mozilla open source project. Netscape wanted to guide the Mozilla project, rather than let it evolve independently. Goodger thought that was fair enough, but he criticized Netscape for two things: 1. poor communication with volunteers, and 2. “not having a clear vision for product development.”

![Mozilla lizard](/assets/images/wdh/vanity.gif)
*The Mozilla [lizard](https://web.archive.org/web/20000815085657/http://www.mozilla.org/newlayout/screenshots/).*

As 1999 progressed, the Netscape/Mozilla team continued to second-guess itself about the wisdom of dropping the Netscape 4 code base. In [a one-year anniversary post](https://web.archive.org/web/20000815053213/http://mozilla.org/mozilla-at-one.html) in early April, Frank Hecker mused on what might have been had Mozilla kept working on the Netscape 4 code base (which he refers to as “Mozilla Classic”). He concluded that it would’ve caused even more delay:

> “Would it have been possible to first do a Mozilla Classic-based Communicator 5.0 release and then develop a Gecko-based follow-on release (5.x or 6.0) in the same overall time it will end up taking to do a Gecko-based Communicator 5.0? It’s impossible to know for sure; however such a plan would have arguably created real and significant risks in terms of the length of the development schedule and the complexity of the development process, especially if the two releases were developed in parallel or nearly so.”

Later in the year, tech media began assigning blame for the delay in Netscape 5. In an [October 1999 article](https://web.archive.org/web/19991129050027/http://www.computerworld.com/home/print.nsf/all/991018C762), Computerworld’s Mike Cusumano questioned whether “the open-source model” was the problem. In [a follow-up article](https://web.archive.org/web/19991127104542/http://www.computerworld.com/home/print.nsf/all/991101C9BE) a couple of weeks later, he walked that back and shifted the blame to Netscape for “not rearchitecting the browser code earlier.”

But at least Cusumano could now see the promise in the open source model:

> “Ten or so major corporations, including Intel, appear to be committing resources to the project. Perhaps most promising is Mozilla’s potential as a cross-platform technology base that could greatly simplify Web applications development. There is a renewed vision and “can-do” attitude permeating the Mozilla team.”

![Mozilla browser screenshot](/assets/images/wdh/1999093012.nav_.firstview.gif)
*[1 Oct 1999](https://web.archive.org/web/19991004171503/http://www.mozillazine.org/screenshots/): Mozilla browser screenshot.*

On 8 October 1999, Mozilla Milestone 10 (M10) was released — the latest version of the WIP browser. This prompted Joe Barr of LinuxWorld to [take a closer look](https://web.archive.org/web/19991128232728/http://linuxworld.com/linuxworld/lw-1999-10/lw-10-vcontrol_3.html). Like Cusumano, he too had initially been sceptical of how Netscape would adapt to the open source model. But when he loaded up M10, he was impressed. The browser window, he wrote, “is a clean, well lighted place that would make a Papa proud.”

Although Barr found several bugs, overall he thought M10 was “really usable” and that “Mozilla is maturing nicely and looks like it will be a dandy when it’s finally here.”

The last “milestone” of 1999 was [M12](https://www-archive.mozilla.org/projects/seamonkey/release-notes/m12), released at the end of the year.

Conclusion
----------

By the end of 1999, two things were clear about the state of web browsers:

1.  Microsoft had eaten Netscape’s lunch and was now in a completely dominant position, with up to 80% of the browser market.
2.  Despite the inconvenient delays, Mozilla had made the right decision to start afresh with a new code base. It was too early to say how good the new “Mozilla 5.0” browser was, but the open source project was at least attracting talented developers (like Goodger) and corporate helpers (like Intel).

While the Mozilla project had established itself over 1999 and appeared to have a promising future, it was already game over for Netscape. When a preview of Netscape 6 (version 5 was skipped) was released in April 2000, based on the as-yet-unfinished Mozilla 0.6, Computerworld [deemed it](https://www.computerworld.com/article/2595035/netscape-6-beta-released---users--too-little--too-late.html) “too little, too late.”

Despite Netscape rushing out its version 6 browser, the Mozilla project continued plodding on with its [milestone releases](https://www-archive.mozilla.org/projects/seamonkey/release-notes/) over 2000. It would not [officially release 0.6](https://www-archive.mozilla.org/releases/old-releases) until December 2000.

We’ll explore the progress Mozilla made over 2000 in an upcoming post. But we can safely say a fond farewell to Netscape now. By the end of the 20th century, Netscape’s days as a web development pioneer were over.



See also: [1990s timeline](/wdh/timeline)