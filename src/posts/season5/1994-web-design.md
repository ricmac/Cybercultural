---
title: "1994: Publishing comes to the Web — and design matters"
description: "1994 marks the Web’s shift into a publishing medium. As site authors seek control over formatting and design, the WWW-Talk mailing list hosts an early debate over style sheets and presentation."
date: 2026-02-10T16:20:00Z
permalink: "p/1994-web-design/"
tags: ['dotcom', '1994', 'season5']
featureImage: "/assets/images/netscape-mozilla-team-1994.jpg"
---

![Netscape team, 1994](/assets/images/netscape-mozilla-team-1994.jpg){loading="eager"}
*Netscape's browser project was codenamed Mozilla during 1994; [via Macintosh Garden](https://macintoshgarden.org/apps/mosaic-netscape-09x).*

If web design is not yet [a profession in 1993](/p/1993-global-network-navigator/) because of the technical limitations of HTML and early browsers, then 1994 is the year web authors start asking the question: why can't we control formatting and presentation? At this point, the leading browser vendors — first Mosaic and then Netscape — see layout as their responsibility.

What little was possible in visual design for website authors in 1994 is dictated by the capabilities of Mosaic and the newly launched Netscape Navigator. As the year progresses, sites grow slightly more sophisticated in their use of images and graphical icons, but authors still cannot choose fonts or control background colour. And while tables appear as an experimental layout feature in some browsers by late 1994, they don't become a practical design tool until 1995.

![Netscape What's New, 1994](/assets/images/netscape-whatsnew-1994.jpg)
*Netscape What's New, 1994; [via YouTube](https://www.youtube.com/watch?v=wjkwTrPZ9Dk).*

## Should browsers define layout?

At the start of 1994, there was general acknowledgment amongst the participants of the WWW-Talk mailing list that web authors had limited control of layout and presentation — it simply wasn't specified in HTML at the time. So in the absense of styling controls in HTML, early browsers implemented their own presentation ideas. On February 17, 1994, Mosaic's Marc Andreessen [left the following comment](http://1997.webhistory.org/www.lists/www-talk.1994q1/0648.html) after a user complained about "an extra blank line" on his HTML menu:

> "It's not a bug -- it's a rendering choice made by the browser. As we kneel before the altar of the "ha ha, you can't control what your documents look like in HTML" philosophy, you, dear sinner (nay, blasphemer), can but take solace in the fact that Mosaic is putting a blank line at the start of all toplevel lists, including yours, entirely on purpose. (Why? Primarily because we thought that looked the best for most documents on the Web at the time, as I remember.)"

Although Andreessen's tone was snarky, he had a point: if HTML won't specify how a document should look, then it's up to browsers to make those decisions. HTML was never designed to be a formatting language; its purpose was (and still is) to define the structure of a web page. Indeed, Tim Berners-Lee wrote in his 2025 memoir that he originally viewed HTML as "plumbing" for the Web.

![Yahoo website in 1994](/assets/images/yahoo-1994-viakottke.png)
*Yahoo! was founded in 1994, and here's what its website looked like in late-94; [via Jason Kottke](https://kottke.org/plus/misc/yahoo-1994/).*

Even in early 1994, there were active discussions about introducing "style sheets" to the Web. This wasn't a new idea, either. As the [W3C's Bert Bos wrote](https://www.w3.org/Style/CSS20/history.html) many years later:

> "The separation of document structure from the document's layout had been a goal of HTML from its inception in 1990. Tim Berners-Lee wrote his NeXT browser/editor in such a way that he could determine the style with a simple style sheet. However, he didn't publish the syntax for the style sheets, considering it a matter for each browser to decide how to best display pages to its users."

Perhaps that explains why Marc Andreessen was skeptical about style sheets. On February 28, 1994, he [complained that](http://1997.webhistory.org/www.lists/www-talk.1994q1/0683.html) "style sheets are an artificial construct inflicted on us because of the whole non-presentation philosophy we've been using." His point was that browsers should continue to handle layout and that a new styling language would add too much complexity. 

Others on the WWW-Talk list disagreed. [Mark Fisher argued](http://1997.webhistory.org/www.lists/www-talk.1994q1/0684.html) that "attaching style sheets to documents would allow authors to get their message across in the format they intended" and would reduce the "typographical errors" users were seeing.

## The shift to web publishing

These arguments over web standards can look dry and pendantic when read many years later, but what they demonstrate is a real desire for the Web to be more than a system for sharing documents. It was becoming clear that users of the Web in 1994 increasingly saw it as a new publishing medium, which meant a need for design tools.

![TIME magazine website, October 1994](/assets/images/time-mag-website-oct1994.jpg)
*During the second half of 1994, traditional publishers began experimenting on the web. This is TIME magazine's website in October 1994; [via Boardwatch magazine](https://archive.org/details/Boardwatch1994-12/).*

The momentum to add style sheets grew during the second quarter of 1994, as WWW-Talk members pushed back against the idea that browsers should control layout. In summarizing a recent standards meeting, Yechezkal-Shimon Gutfreund [noted in May](http://1997.webhistory.org/www.lists/www-talk.1994q2/0641.html) that "many people would like to have more control over the actual rendering of the document (alignment, font size, tabbing, highlight color, etc, etc.)" Rob Raisch agreed, pointing out that style sheets were very important for the future of web publishing:

> "Tools like Mosaic are only really useful to the end-user. They support few of the requirements a publisher looks for in a publishing platform."

Although some people supported Andreessen's stance to keep it simple, a consensus was slowly forming to give web publishers better ways to control formatting. Chris Lilley, a computer scientist who would go on to co-author the graphics formats PNG and SVG, argued [on the WWW-HTML mailing list](http://1997.webhistory.org/www.lists/www-html.1994q2/0009.html) that it was entirely reasonable "to have some control over formatting AS WELL AS sending searchable, parsable text." 

In other words, he didn't view having control over the design of a web page as being incompatible with machine-readable text. While the Web's primary purpose was to be a global hypertext system, that didn't mean it couldn't look good too.

In [a follow-up](http://1997.webhistory.org/www.lists/www-html.1994q2/0010.html), Lilley noted "that commercial sites want a corporate look, an image, and are prepared to pay real money to get it."

![IUMA circa 1994](/assets/images/iuma-aug94b.jpg)
*The [Internet Underground Music Archive (IUMA) website in 1994](/p/iuma-1994/), showing what was possible using colorful graphics and minimal HTML; image via David Beach and Jeff Patterson.*

## CSS proposed and Netscape launches

October 1994 was a key month for the now fast-growing Web.

On October 10, 1994, [a new styling standard was proposed](https://www.w3.org/People/howcome/p/cascade.html) by Håkon Wium Lie, a colleague of Tim Berners-Lee at CERN. Lie called his proposal "Cascading HTML style sheets" and wrote that the goal was to provide "a simple mapping between HTML elements and presentation hints." The word "cascade" referenced an ordered list of style sheets, which was Lie's way of giving the end-user some control over formatting — for example, a sight-impaired user might want to make the text on a web page much larger than the author had declared.

![CERN office 1994](/assets/images/GZe_cwiXEAAxyeK.jpeg)
*Håkon Wium Lie, writing on X [in October 2024](https://x.com/wiumlie/status/1844153238746169382), thirty years after he proposed CSS: "the @CERN office where CSS was first created in 1994. I shared it with @timberners_lee and Henrik Frystyk Nielsen. You can see Tim's Next machine in the middle, my Sun workstation on the left."*

Lie's proposal came out around the time of the launch of the World Wide Web Consortium (W3C), a new governing body for the Web led by its inventor, Tim Berners-Lee. Also in this month, Netscape — a new company formed by Andreessen and Jim Clark in April — [launched a beta version](http://1997.webhistory.org/www.lists/www-talk.1994q4/0187.html) of its first product, a web browser initially called Mosaic Netscape 0.9 (later [renamed Netscape Navigator](/p/netscape-1994/)).

There was a delicate balance between the growth of web standards, now being managed by the W3C, and the launch of new commercial companies like Netscape. But as more and more people started using the Web, inevitably they tended to use the most popular web browser — Mosaic, in either its original form or the new Netscape version. Both these products still only supported basic HTML elements (HTML 2.0 was a new proposal under discussion at this point) and style sheets weren't anywhere close to being in the picture.

That was the problem with web standards: they took years to be formalized, and thus supported.

![Netscape browser, 1994](/assets/images/netscape-1994-feature-1280.jpg){loading="eager"}
*Netscape browser, 1994; screenshot [via YouTube](https://www.youtube.com/watch?v=wjkwTrPZ9Dk).*

## Website design in 1994

By the end of 1994, there were [roughly 10,000 websites](https://www.mit.edu/people/mkgray/net/web-growth-summary.html) on the web. It was still early days and most of the websites were quite basic in structure. The [Solstice website](https://web.archive.org/web/19970416111430/http://solstice.crest.org/renewables/pv-tour-switzerland/toc.html) for the Center for Renewable Energy and Sustainable Technology (CREST) in Switzerland is a good example. The layout is very simple, since tables weren't an option yet, but there are some nice graphics at the top of the page that give the page a splash of color.

![Solstice 1994](/assets/images/solstice1-1994.png)

At the bottom of the Solstice homepage, there is even a graphical menu system — using the traditional "Index" and "Next" navigation system. But note that the typography is basic; this is because authors couldn't choose which fonts their pages would render in.

![Solstice 1994](/assets/images/solstice2-1994.png)

Some of the more adventurous websites of 1994 used more graphics, but they were still quite primitive in terms of layout. An unofficial website for The Rolling Stones is a good example. The site, [stones.com](https://arquivo.pt/wayback/19961013214456/http://www.leo.org:80/~tromsdor/stones.html), had been created by some tech-savvy fans from MIT, along with the computer software company Sun Microsystems. According to the launch announcement [in September 1994](https://web.archive.org/web/19970605085559/http://www.stones.com/Press.html):

> “With the help of Sun Microsystems Inc., Thinking Pictures [an MIT spinoff] has put the Rolling Stones on-line, creating their own electronic "home page," a user-friendly graphical interface for navigating information across the global Internet.”

Although it wasn’t an official website, Thinking Pictures CEO Stephan Fitch told media that “the site has the blessings of the Stones.”

![stones.com 1994](/assets/images/stoned-website-1994.png)

The graphical interface mainly consisted of small icons, many using familiar images (a CD icon for the "Albums" page, etc.). But there were a few custom-made icons too — notably the famous Rolling Stones tongue for the home page.

The stones.com website had been built by Björn Tromsdorf, whose [personal homepage](https://arquivo.pt/wayback/19961013214518/http://www.leo.org:80/~tromsdor/index.html) further showcased his icon designs. It also featured a typical 1994 design pattern for personal websites: a pixelated photo followed by your name in headline text (just as common would've been to write "Björn's Home Page").

![Bjorn Tromsdorf 1994](/assets/images/Bjorn-Tromsdorf-1994.png)

One of the most innovative website designs of 1994 was [Microsoft's homepage](https://web.archive.org/web/20140807175436/http://www.microsoft.com/en-us/discover/1994/), which used an image map for its navigation system. In a reconstruction of the site in 2014, the web design firm [Paravel commented](https://web.archive.org/web/20140807175637/http://www.microsoft.com/en-us/discover/1994/readme.html):

> "It's a very simple site, but recreating the Image Map navigation was the biggest piece of the puzzle. The image was excellently recreated by Dan Schlitzkus. We converted it to a GIF, but it's possible it could have been an X-BitMap which was in use around the time."

![Microsoft 1994](/assets/images/microsoft-1994-website.png)
*2014 reconstruction of Microsoft homepage in 1994; [via Wayback Machine](https://web.archive.org/web/20140807175436/http://www.microsoft.com/en-us/discover/1994/).*

Paravel deduced that the original page likely used a server-side CGI image map using the `<IMG ISMAP>` attribute, part of the HTML 2.0 draft specification that was [being hammered out over 1994](https://hepunx.rl.ac.uk/~adye/blooberry/html-old/history/html20.htm).

Paravel's Dave Rupert later [told Creative Bloq](https://www.creativebloq.com/web-design/how-microsofts-1994-homepage-was-rebuilt-41514640) that "replicating the original Microsoft.com homepage after helping redesign its modern counterpart felt like restoring an old Mustang."

I'll have more online Mustangs to show off in the next post in Cybercultural's history of web design (1993-2012), so stay tuned and [subscribe to be notified](/subscribe/) if you haven't already.