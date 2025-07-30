---
title: "1992: The Web vs Gopher, and the First External Browsers"
description: "Three non-CERN web browsers were released over 1992 — Erwise, ViolaWWW and MidasWWW — at a time when there were less than 20 websites in the world. It was a turning point for the young Web."
date: 2021-11-18
permalink: "p/1992-web-vs-gopher/"
tags: ['dotcom', '1992', 'season2']
featureImage: "/assets/images/wdh/MidasWWW_Solaris-1000x563.jpg"
---

![1992 web browsers](/assets/images/wdh/MidasWWW_Solaris-1000x563.jpg){loading="eager"}
*MidasWWW browser in 1992; [via Ancient Web Browsers](https://browsers.flanigan.us/browsers/midaswww/).*

Throughout 1992, there were just a scattering of websites on the World Wide Web — somewhere between [ten and twenty](https://en.wikipedia.org/wiki/List_of_websites_founded_before_1995). A W3C page from late 1992 lists [less than 30](https://www.w3.org/History/19921103-hypertext/hypertext/DataSources/WWW/Servers.html) web servers online at the time (not all of them had web sites attached to them). So the Web in 1992 was still a niche system, used almost entirely by academics. However, there were signs that the Web was starting to get noticed by people who used other internet protocols, like Gopher.

In September 1992, O’Reilly published a book by Ed Krol entitled [The Whole Internet User’s Guide and Catalog](https://archive.org/details/wholeinternetuse00krol). It contained the first mention in a book of the World Wide Web. In Chapter 13, Krol described the WWW as “one of the most flexible tools — probably the most flexible tool — for prowling around the Internet.” He compared it to Gopher and WAIS, two other client-server information systems running over the internet.

Krol cautioned that the Web was “very much under development” and “don’t be surprised if it doesn’t occasionally work the way you’d like.” Although he recommended that readers check out the nascent Web by accessing CERN’s line-mode browser via a “traditional terminal,” he also made mention of two relatively new browsers: Viola and Erwise.

We’ll delve into those two products, the first web browsers built outside of CERN, shortly. But first, let’s look at the ways Krol compared the early Web to competing Internet information systems. He made some perceptive points about the appeal of the WWW, which were not obvious at the time.

![The Whole Internet User’s Guide and Catalog, 1992](/assets/images/wdh/whole_internet_www_92-1024x536.jpg)
*The Whole Internet User’s Guide and Catalog, 1992*

Krol identified three ways that the Web was potentially a better Internet information system than Gopher.

Firstly the ability to link to documents on other web pages. Krol noted that Gopher “doesn’t have any concept of a ‘link’ between something interesting on one server, and something related somewhere else.”

Second, Krol wrote, “the Web does a much better job of providing a uniform interface to different kinds of services.” The fact that the Web could access information on both Gopher and WAIS, essentially via a browser converting it into hypertext, was proof of this. Tim Berners-Lee himself described the Web in [a 1992 document](https://www.w3.org/History/1992/WWW/FAQ/WAISandGopher.html) as “the SUPERSET of the FTP, WAIS, Gopher and HTTP spaces.”

Third, continued Krol, you can organize data on the Web — primarily by using links as references and navigation aids. “The Gopher doesn’t have any way of organizing news articles,” he wrote.

Finally, Krol pointed out that “the Web eliminates the barrier between your data and ‘public data’.” What he meant is that you can create a web page for yourself, that you could set as private, which included links to public documents. In some ways, Krol was anticipating the rise of company intranets later in the 1990s.

Overall, Krol did a remarkable job of both identifying the Web’s limitations in 1992 (“The current browsers focus mostly on textual documents”) and seeing its massive potential. He foresaw that one day browsers and servers would enable access to video and sound, and that the Web could become a way to “structure your workplace.”

Erwise
------

In April 1992, the first external graphical web browser was released by a group of four Finnish university students. Called [Erwise](https://en.wikipedia.org/wiki/Erwise), the browser was designed for Unix computers that ran the [X Window System](https://en.wikipedia.org/wiki/X_Window_System), a framework for graphical user interfaces — such as a browser. It used the [W3 common access library](https://en.wikipedia.org/wiki/Libwww) developed by Tim Berners-Lee and Jean-François Groff over 1991-92 (later named _libwww_).

![Erwise browser](/assets/images/wdh/erwise5.jpeg)
*Erwise browser (in Finnish); source: [xconomy.com](https://media.xconomy.com/wordpress/wp-content/images/2009/03/06213055/erwise5.jpg)*

According to a [2009 interview](https://xconomy.com/national/2009/03/03/the-greatest-internet-pioneers-you-never-heard-of-the-story-of-erwise-and-four-finns-who-showed-the-way-to-the-web-browser/) ([full text](https://web.archive.org/web/20130727092207/http://www.xconomy.com/national/2009/03/03/the-greatest-internet-pioneers-you-never-heard-of-the-story-of-erwise-and-four-finns-who-showed-the-way-to-the-web-browser/?single_page=true)) conducted by Juha-Pekka Tikka with three of the developers behind Erwise, the group was inspired to build a browser after seeing Berners-Lee and his colleague Robert Cailliau present the Web at their University. As explained by Tikka:

> “The four Finns completed their browser by April 1992: only a couple thousand lines of code were needed, so the work was feasible. They demonstrated it to their professor, Martti Mäntylä, showing how Erwise could surf Web pages—there were just 12 in the world at the time, according to Nyberg, Sydänmaanlakka, and Rantanen. The students got a top grade from their professor.”

Erwise had underlined links that you needed to double-click to “jump” to the linked page. Like Berners-Lee’s graphical browser WWW, when you opened a document it opened a new window. It also had an intriguing search feature, that in some way presaged Google. As Tikka wrote:

> “If Erwise couldn’t find a search word on one page, it would start to look for the term on other Web pages. Such a function would become the basis of crawler or spider programs that today’s search engines rely on.”

Berners-Lee himself reviewed Erwise in [a November 1992 note](https://www.w3.org/History/19921103-hypertext/hypertext/Erwise/Review.html). He generally liked Erwise, however there were some quirks he didn’t take to. For example, on the implementation of opening a new window for each new document:

> “If one sets single-window mode, the old one is deleted, so the effect is of jumping around the screen, which is confusing.”

He also complained about the “lack of documentation” (if there was any, it was in Finnish — so not much help to Berners-Lee). This prevented him from using the search feature, for instance.

Alas, Erwise did not get developed beyond 1994, by which time Mosaic had taken the Web world by storm.

ViolaWWW
--------

Also released as a final product in 1992, [ViolaWWW](https://en.wikipedia.org/wiki/ViolaWWW) was a graphical browser created by Berkeley student Pei-Yuan Wei. It started out as a product more akin to Apple’s HyperCard than Berners-Lee’s WWW browser. This version (called “0.8”) was released in 1991, according to [Wei’s archived website](https://web.archive.org/web/19990830034431/http://viola.org/vintage/montage.html). He described it as “a spare time project done between classes while the author was an undergraduate,” and noted that it was “heavily influence\[d\] by HyperCard(tm) concepts.”

![Viola 0.8](/assets/images/wdh/v8_samples.gif)
*Viola 0.8; more like HyperCard than WWW*

In [a 1994 writeup](https://web.archive.org/web/19990830042452/http://viola.org/violaIntro.html), Wei explains his rather grand ambition to create not just a web browser, but a “toolkit/language system,” which he called Viola. It even included a scripting language, which was “C-like in syntax.” The browser, ViolaWWW, was simply one application of the bigger system. The main drawback of this setup was that it was hard for users to install the browser. They first had to install Viola, which Tim Berners-Lee wrote in his book “took time and was complicated.”

One impressive feature of VioilaWWW was that developers could, using the Viola language, create “mini applications” that could be embedded into HTML. This functionality anticipates the invention of Java applets a few years later. Indeed, Berners-Lee admiringly [compared](https://www.w3.org/DesignIssues/TimBook-old/History.html) Viola “in some ways with the later Java” and said that ViolaWWW, with its “downloadable applets and cute rotating icons,” was similar to Sun’s later browser, HotJava.

![CERN homepage circa 1992, on the Viola browser](/assets/images/wdh/cern_homepage_viola_1992-1024x1004.jpg)
*CERN homepage circa 1992, on the Viola browser.*

Outside of ViolaWWW, Viola was used to create “an electronic version of the resource catalog portion of the book The Whole Internet Catalog” (the same book I discussed in the opening of this post). Wei’s description of it shows that from very early on, he didn’t want his system to be constrained by desktop computers. Even though multimedia kiosks were a trend that didn’t last long in the early 90s, Wei’s experiments hint at some of the re-working of browsers that would be done at the start of the mobile era in the late 2000s.

> “This application uses HyperCard style card-flipping technique to flip among four basic screen layouts. As it was intended for a kiosk type setting, the user interface is very specific and limited (compared to a general hypertext browser). But, the rendering code, the objects responsible for the page display, is shared by this application and the ViolaWWW browser application. Basically, just the user interface shell is different.”

![Wei’s kiosk interface](/assets/images/wdh/wei_whole_internet-1024x491.jpg)
*Wei’s kiosk interface, sharing same rendering code as ViolaWWW.*

When Berners-Lee [briefly compared](https://www.w3.org/History/19921103-hypertext/hypertext/Erwise/vsViola.html) Viola to Erwise in November 1992, he focused more on the similarities between the two projects than any major differences:

> “These products are both aimed at the same market, but they have quite different feel to them. The level of functionality is very similar. Both look neat, in different ways. Both crashed with certain x-servers in beta test. Both have obvious hooks for smart extensions. Both were produced by students, one as a degree project, one as a fun project.”

But in [another note](https://www.w3.org/People/Berners-Lee/FAQ.html#browser), Berners-Lee acknowledges the larger influence that ViolaWWW had on the early web. He wrote that “there was a year or so when Viola was the best way to browse the web, was the engine driving the installation of new servers, and the recommended browser at CERN for example.”

![Viola browser](/assets/images/wdh/viola-browser-1992.jpg)
*Viola browser in early 1993.*

Building a New Publication Medium
---------------------------------

Erwise and ViolaWWW were joined by a third external browser in November 1992. Stanford Linear Accelerator Center (SLAC) physicist Tony Johnson [released](https://www.w3.org/History/19921103-hypertext/hypertext/WWW/MidasWWW/Announce1.html) [MidasWWW](https://www.w3.org/History/1992/WWW/MidasWWW/), a graphical browser for Unix. One of its defining features was that it could [display postscript documents](https://livinginternet.com/w/wi_slac.htm), “which was the preferred online format for physics researchers because it could be printed on most printers.” Also released around this time was a Macintosh browser, written by CERN’s Robert Cailliau and Nicola Pellow, called Samba. It was, [wrote Berners-Lee](https://www.w3.org/People/Berners-Lee/FAQ.html#browser), “an attempt to port the design of the original WWW browser, which I wrote on the NeXT machine, onto the Mac platform.”

Ultimately, Erwise and ViolaWWW would be superceded by Mosaic — which we’ll meet in the next post. But it didn’t matter. That three new, non-CERN web clients were released over 1992, at a time when there were less than twenty websites in the world, was a turning point for the young Web.

Berners-Lee griped in his book that none of the 1992 browsers included an HTML editor, like his own WWW browser did. But he also acknowledged that the new browsers allowed the Web to grow as a publication medium, if not so much as a collaboration medium. It was this use case — using the Web as a publication medium — that would motivate two University of Illinois students to start developing their own new browser by the end of 1992. We’ll get into their story, the birth of Mosaic, in the next post.



Read next: [1993: Mosaic Launches and the Web is Set Free](/p/1993-mosaic-launches-and-the-web-is-set-free/)