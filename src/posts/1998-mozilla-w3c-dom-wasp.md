---
title: "1998: Open Season with Mozilla, W3C’s DOM, and WaSP"
description: "1998 was the year the web started to open up. It was when open source projects like Mozilla and open standards like DOM began to steer the web towards a more open, equitable future."
date: 2021-06-30
permalink: "p/1998-mozilla-w3c-dom-wasp/"
tags: ['WDH']
featureImage: "/assets/images/wdh/wdh_1998_feature2.jpg"
---
![1998 web open source](/assets/images/wdh/wdh_1998_feature2.jpg)
By the start of 1998, Netscape was preparing to make a drastic move. Not only was its arch-nemesis Microsoft rapidly catching up in the browser market, Internet Explorer was also arguably a superior technical platform for web development. After 1997, [the year of DHTML](https://webdevelopmenthistory.com/1997-the-year-of-dhtml/), Microsoft’s powerful document object model (DOM) had become the foundation for a new web standard that would define interactive content for years to come: the W3C’s DOM specification.

Netscape made its move on January 22, 1998, when the company [announced](https://web.archive.org/web/20021001071727/wp.netscape.com/newsref/pr/newsrelease558.html) its “bold plans to make the source code for the next generation of its highly popular Netscape Communicator client software available for free licensing on the Internet.” This was the beginnings of Mozilla, a non-profit organisation that was unveiled at the end of March 1998 [by Marc Andreessen](https://web.archive.org/web/19990501131022/http://www10.netscape.com/columns/techvision/source.html):

> “Building on the Internet tradition of collaboratively developed software, such as Linux, Netscape is making available today the first developer release of source code for the 5.0 prerelease version of Netscape Communicator Standard Edition, otherwise known by its original code name, Mozilla.”

It was a desparate — yet ultimately savvy — move by Netscape to open source not only its browser, but its suite of online products connected to the browser (email, calendar, etc.). At the end of 1997, Netscape had roughly 62% of [the browser market](https://www.visualcapitalist.com/internet-browser-market-share/), compared to IE’s 35%. But Andreessen and his colleagues knew the writing was on the wall, because IE was now pre-installed on the world’s dominant OS: Windows. Sure enough, by the end of 1998, IE had usurped Netscape Navigator. It had risen to 50% and Netscape had fallen to 48%.

![A still from the documentary Code Rush](/assets/images/wdh/mozilla_98-1024x586.jpg)
*A still from the documentary [Code Rush](https://www.youtube.com/watch?v=4Q7FTjhvZ7Y), about the 1998 release of Mozilla.*

It was effectively the end of Netscape. On November 24, 1998, America Online (AOL) announced it would acquire the struggling browser company in a deal worth US$4.2 billion. Not that Microsoft had everything go its way in 1998. The United States government began its antitrust trial against Microsoft that year — primarily because of IE’s bundling into Windows. The trial kicked off in May 1998 and was ultimately decided against Microsoft three years later. But by the time of that judgement, Netscape had less than 10% of the browser market.

It may seem like Microsoft won the browser war (despite the court case), but looking back we can see that 1998 was the year the web started to open up. It was when open source projects like Mozilla and open standards like DOM began to steer the web towards a more open, equitable future. It was also the year that a coalition of independent web developers arrived on the scene to promote open standards — The Web Standards Project (WaSP). All of these developments would impact the web’s direction for years to come.

Netscape’s Angst and Strangled Ambition
---------------------------------------

1998 was very challenging for one company in particular, though: Netscape. A [June 1998 “interview”](https://web.archive.org/web/19990501111953/http://www10.netscape.com/columns/techvision/innovators_be.html) between Marc Andreessen and his star developer, JavaScript inventor Brendan Eich, is illustrative of how Netscape had become resigned to its commercial fate and was now seeking solace in open source — including JavaScript. (It was less of an interview, by the way, and more of an article by Eich with an introduction by his boss.)

After acknowledging that work on the nascent W3C DOM standard would be good for developers and users alike, Eich argued that JavaScript would help deal with the incompatibilities in the meantime:

> “In the interim, once you have JavaScript in the browser and some level of HTML capability in competing browsers, you can write extra JavaScript – a pretty thin layer – that papers over the differences between the browsers. That universal layer of JavaScript figures out which browser it’s running on and uses its available facilities. So JavaScript can play a big role in bridging the gap until the DOM standard is set.”

It was almost as if Eich was pleading with developers to not abandon Netscape. Look, you can use JavaScript to develop for IE _and_ our browser!

![Brendan Eich](/assets/images/wdh/eich_1998-1024x586.jpg)
*Brendan Eich in [Code Rush](https://www.youtube.com/watch?v=4Q7FTjhvZ7Y).*

By this point, Eich was a member of the Mozilla.org team and his focus had shifted to how to drive open source forward in the web market. But Mozilla would take a while to ramp up, so Netscape needed a way to convince developers to not abandon its browser completely. To achieve this, it came up with the term “cross-browser DHTML,” which was defined in [a 1998 article](https://web.archive.org/web/19981203074526/http://developer.netscape.com/docs/technote/dynhtml/xbdhtml/xbdhtml.html) as “the subset of DHTML functionality which can be used compatibly across platforms and across Navigator 4.0 and Internet Explorer 4.0.” The intent of “cross-browser DHTML” was noble, but as a browser strategy it paled in comparison to the giant ambition of Andreessen’s original conception of Mosaic to [bring interactivity to the web](https://webdevelopmenthistory.com/1995-the-birth-of-javascript/) — and indeed the ambition Eich had for JavaScript from 1995. Those ambitions were being slowly squeezed away by the pressure of Microsoft.

Perhaps it’s not surprising, then, that Eich wasn’t yet willing to admit that Microsoft’s DOM was better than Netscape’s. The way he saw the W3C’s work on the DOM specification, the standards body was “not really basing it on anybody’s implementation, which may be for the best.” While that statement was debatable, the two companies (and others) did play nicely to formalize a standard over 1998, under the direction of the W3C.

DOM Days
--------

The chair of the W3C DOM Working Group was [Lauren Wood](https://www.laurenwood.org/), a technologist from SoftQuad Software — a Canadian company best known for creating HoTMetaL, one of the first HTML editors. SoftQuad also had an editor for SGML (standard generalized markup language), the meta-language that HTML was based on. Wood was heavily involved in these and other XML-related products, which led to her work on various W3C projects. In 2004, she reminisced about the early days of the DOM project [on her blog](https://www.laurenwood.org/anyway/2004/04/dom-level-3-a-w3c-recommendation/):

> “The early days of the DOM WG were a political rollercoaster, of course. These were the days of the Netscape/Microsoft browser wars; we were having a DOM WG meeting at Netscape at the time that someone placed the IE “e” on top of Netscape’s sign at their corporate headquarters. The DOM support in the browsers was one of the battlegrounds but to give everyone on the WG credit, most people did genuinely try to find technical solutions to technical problems with as little corporate politics as possible.”

![Lauren Wood, 2001](/assets/images/wdh/lauren-wood.jpeg)
*Lauren Wood, [2001](http://xmlhack.com/read.php_item=1489)*

While Wood wasn’t willing to dish the dirt on the corporate battles, she did point out one major technical point of difference within the working group. It reflected the fact that the Level 1 DOM catered to both the practical-minded HTML crowd and the emerging and more academic XML set.

> “The biggest splits actually came between those who were “HTML-centric” and those who were “XML-centric” \[…\] the “array” style of walking the document and the “tree” style of walking the document came about because neither side could convince the other that their trusted methods for finding the element they wanted were not needed. So the DOM Level 1 ended up with both ways of looking at an XML or HTML document.”

Discussions on the DOM WG mailing list could get heated on this point. [John Cowan](https://en.wikipedia.org/wiki/John_W._Cowan), a programmer and an editor of the XML 1.1 specification, [claimed](https://lists.w3.org/Archives/Public/www-dom/1998OctDec/0227.html) at one point that “the DOM isn’t really a tree.”

![DOM WG mailing list](/assets/images/wdh/Screenshot-2021-07-02-at-10.25.28-AM.png)

Over time, the “HTML-centric” view of the DOM as a tree became the most common way to explain the standard. The DOM ([as we understand it now](https://dom.spec.whatwg.org/#introduction-to-the-dom)) allows developers to treat a document as a logical tree: with each branch ending in a node, and each node containing objects. The idea is that DOM methods allow programmatic access to that tree.

Sometimes it takes years to arrive at this kind of accepted wisdom. One can only imagine the arguments over technical minutiae that Wood had to manage in all those face-to-face working group meetings. In [a 2007 O’Reilly Media article](https://web.archive.org/web/20070911033621/http://www.oreillynet.com/pub/a/womenintech/2007/09/07/working-for-standards.html), which ran as part of a ‘Women in Technology’ series, Wood remarked that “working on standards committees poses special challenges.” She elaborated:

> “It takes persistence, patience, and a special sense of humor—the type of qualities you also find in caregivers for three-year-olds. (And believe me, sometimes committee members throw tantrums, just like kids. Although the tantrums are quieter, and there’s no rolling around on the floor screaming, they’re tantrums nonetheless.)”

Other than back and forth over technical issues like “[the behaviour of NodeIterators](https://lists.w3.org/Archives/Public/www-dom/1998AprJun/0000.html),” progress was smooth on the DOM spec over 1997 and through the first half of 1998. On 20 July 1998, Wood [sent a message](https://lists.w3.org/Archives/Public/www-dom/1998JulSep/0034.html) to the www-dom@w3.org mailing list:

> “The latest Level 1 DOM specification has just been released, at http://www.w3.org/TR/WD-DOM/. There have been significant changes since the last public draft.”

Perhaps the biggest change was that XML was no longer separated out — “all the XML interfaces are in the Core document,” Wood wrote. She also added, “We took out NodeIterator” (clearly a point of contention that was unable to be resolved).

A point worth noting here is that this DOM spec (Level 1) wasn’t entirely consistent with the “Dynamic HTML” approaches of either Netscape or Microsoft. As explained in [a W3C FAQ](https://www.w3.org/TR/REC-DOM-Level-1/introduction.html):

> “Although the Document Object Model was strongly influenced by “Dynamic HTML”, in Level 1, it does not implement all of “Dynamic HTML”. In particular, events have not yet been defined.”

On 19 August 1998, editor Arnaud Le Hors [announced](https://lists.w3.org/Archives/Public/www-dom/1998JulSep/0259.html) the proposed recommendation for the [DOM Level 1 Specification](https://www.w3.org/TR/1998/PR-DOM-Level-1-19980818/). On 1 October, the W3C issued [a press release](https://www.w3.org/Press/1998/DOM-REC):

> “The specification reflects cross-industry agreement on a standard API (Applications Programming Interface) for manipulating documents and data through a programming language (such as Java or ECMAScript).”

WaSP: A Pest to Browser Companies
---------------------------------

Despite the sterling work by Wood, Le Hors and their fellow W3C wonks, web developers were becoming increasingly frustrated at the empty promises of browser companies. Both Netscape and Microsoft gave lip service to implementing standards, yet they continued to focus on their own proprietary features.

To fight back against browser incompatibilities, in August 1998 [The Web Standards Project](https://www.webstandards.org/) (which came to be known as WaSP) was [launched](https://web.archive.org/web/19990203235822/http://webstandards.org/WSP_release_MAIN.txt) by a group of independent web developers.

> “Calling on browser makers to live up to promises made in July 1997, the WSP ( http://www.webstandards.org ) is urging browser makers to fully support the standards created by the Worldwide Web Consortium (W3C) in the upcoming round of browser releases, as well as support emerging standards that are being developed.”

![WaSP website](/assets/images/wdh/WASP_Dec98-1024x607.jpg)
*WaSP website, [Dec 98](https://web.archive.org/web/19981205153032/http://www.webstandards.org/)*

The WaSP group was concerned that the beta versions of Netscape’s Navigator 4.5 and Microsoft’s Internet Explorer 5.0 were “adding more proprietary enhancements without providing complete support for existing standards.” It also called out the “patchwork support” for the DOM in these upcoming browsers.

It turns out that concerns about Netscape’s DOM support was the impetus for creating the WaSP group, according to [a Wired writeup](https://web.archive.org/web/19990209081311/http://www.wired.com/news/news/technology/story/14303.html) of the launch. Wired’s Chris Oakes quotes one of the founders, [Glenn Davis](https://en.wikipedia.org/wiki/Glenn_Davis_(web_design)), who was internet-famous for a website called ‘Cool Site of the Day’:

> “…the genesis of the Web Standards Project came when Davis saw an article saying that Netscape wouldn’t support the W3C’s document object model before the release of the 5.0 version of its browser. That time frame was far too long, in Davis’ view. And he discovered he wasn’t alone.”

After discussing Netscape’s DOM delay on a mailing list, Davis and others (including Ann Navarro, George Olsen, Jeffrey Zeldman and Tim Bray) created the WaSP project.

Oakes wrote [another article in Wired](https://web.archive.org/web/19981205172503/https://www.wired.com/news/news/technology/story/14565.html) a couple of weeks later about the release of the “near-final” DOM Level 1 spec. “When implemented, the standard will relegate static content to the past,” he wrote (of course, it did nothing of the sort!). Oakes was on surer ground when he quoted representatives from Microsoft and Netscape about their support for the upcoming DOM standard. Microsoft said that IE5 would support “the core DOM as listed in the proposed recommendation” (but made no mention of the rest of the spec), while Netscape would only commit to supporting “elements of the DOM.”

As Oakes outlined in his article, a big reason for Netscape’s reticence to declare full support for the DOM standard was delays on its new browser engine, [NGLayout](https://www-archive.mozilla.org/newlayout/roadmap.html) (which stood for ‘next-generation layout’). NGLayout was part of the Mozilla project and was eventually re-named Gecko, the name it still bears today as the engine for Firefox. NGLayout actually supported the DOM standard at least as much as IE5, but the problem was that Netscape Communicator 5 still used the old Navigator engine. As [explained to Ars Technica](https://arstechnica.com/information-technology/2004/06/collins-interview/2/) in 2004 by Mozilla.org’s Scott Collins, it was a last-minute decision to swap out the Navigator code with NGLayout. Which necessitated a complete re-write of the browser. That’s what developers were complaining about in August 1998 — they knew that support for the DOM in the latest Netscape browser would be at least 6 months away (although it ended up taking two years).

Conclusion
----------

We’ll get into more details about the Mozilla project in upcoming posts, but suffice to say that by the end of 1998, neither Netscape nor its open source offshoot Mozilla was in any position to challenge Microsoft in the browser market.

But at least web developers now had a surer footing in terms of DOM standards, with the Level 1 spec in place and Microsoft supporting the core. And with the emergence of the WaSP group, developers had what would turn out to be a valuable advocate going forward for open standards on the web. They also had the option of contributing to Mozilla, which despite its problems was still viewed by many developers as a crucial power check against Microsoft.

So while Microsoft may’ve taken over the browser market by the end of 1998, the open web had strengthened on a few important fronts too.

*Feature image: center photo via [Mozilla stomps IE](http://home.snafu.de/tilman/mozilla/stomps.html), Oct 1997.*

***