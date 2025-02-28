---
title: "1995: Apache and Microsoft IIS Shake Up the Web Server Market"
description: "The Apache project was publicly announced in April 1995. It was followed soon after by Microsoft's first web server software, Internet Information Server (IIS)."
date: 2021-08-31
permalink: "p/1995-apache-microsoft-iis-web-server-market/"
tags: ['dotcom', '1995']
featureImage: "/assets/images/wdh/1995_apache_iis_feature.jpg"
---

![Apache and IIS](/assets/images/wdh/1995_apache_iis_feature.jpg){loading="eager"}

From January 1995 through till the end of December, the Web [grew from](https://www.mit.edu/people/mkgray/growth/) just over 10,000 websites to 100,000. But in order to publish a website at that time, you needed to host it on a web server. In simple terms, a web server is a piece of software that specializes in delivering a web page to a client (the browser) using the HTTP protocol. Not only does it _serve_ web pages, it quite literally _serves_ the client’s wishes. As [The Web Server Book](https://archive.org/details/webserverbooktoo00magi), published in July 1995 by Jonathan Magid, R. Douglas Matthews and Paul Jones, put it, “A server is usually an automatic program that waits for client requests.”

![Source: The Web Server Book; 1995](/assets/images/wdh/Screenshot-2021-08-26-at-4.31.13-PM.png)
*Source: The Web Server Book; 1995*

Before Apache
-------------

In the first several months of 1995, if you wanted to start a web site you’d probably choose a web server from either CERN, NCSA or Netscape. Tim Berners-Lee created the first web server in 1990: [CERN HTTPd](https://www.w3.org/Daemon/) (Hypertext Transfer Protocol daemon). It was still being used in 1995, but began to be phased out the following year. The National Center for Supercomputing Applications (NCSA) at the University of Illinois — the creators of the Mosaic web browser — released the second major web server, in 1993: NCSA HTTPd. As Berners-Lee himself tells it in his book, [Weaving the Web](https://www.w3.org/People/Berners-Lee/Weaving/):

> “When NCSA were developing Mosaic, they called me at one point and asked if I would mind if they made a server. \[…\] What they meant, but left unsaid, was that they’d be writing another server that would be competing for ‘market share’ with the server I had written.”

In reality though, there wasn’t a competitive market for web servers at that time — or indeed, right up till the start of 1995. For one thing, Microsoft had yet to release a web server product (and in the 90s, it wasn’t an online market until Microsoft showed up). NCSA HTTPd and CERN HTTPd were both free and open source, which is why most early web builders chose one or the other — and usually the NCSA server. According to _The Web Server Book_, at the second International WWW Conference, held in Chicago in October 1994, a straw poll of attendees showed that “90 percent of present Webmasters used the NCSA server” (page 63).

![Running a Perfect Web Site with Apache](/assets/images/wdh/1996_apache_book-1024x613.jpg)
*Source: [Running a Perfect Web Site with Apache](https://archive.org/details/isbn_9780789707451), 1996 book co-written by Brian Behlendorf and David Chandler.*

As well as simple web pages and associated media files (such as images), NCSA HTTPd could by default process sophisticated [CGI applications](/p/1993-cgi-scripts-and-early-server-side-web-programming/). However, there were certain features — like security and encryption — that had to be set up separately. If you wanted those things to run ‘out of the box’, as budding e-commerce websites like Amazon and eBay did, you needed to purchase a professional web server product. Which didn’t come cheap.

By the end of 1994, Netscape had released two web server products. The Netsite Communications Server was [priced at](https://web.archive.org/web/20080406122059/http://www.mcom.com/MCOM/products_docs/server.html) $1,495, but that was just the starter product. The Netsite Commerce Server, retailing for $5,000, was “designed for the conduct of electronic commerce, including online transactions and the exchange of sensitive documents over networks.”

A [1995 administrator guide](https://techpubs.jurassic.nl/library/manuals/2000/007-2629-001/pdf/007-2629-001.pdf) to Netsite Communications Server, from the now defunct company Silicon Graphics, gives us a glimpse of how the server processed CGI (Common Gateway Interface) requests:

> “When the CGI request comes in, the server creates a copy of itself, called a CGI process. This process has no purpose other than to set up communication between your CGI program and the server. Because it is a copy of the server, it has access to a great deal of information about the incoming request.”

![CGI process in Netsite](/assets/images/wdh/cgi_process_netsite2.jpg)
*CGI process in Netsite; Silicon Graphics, 1995*

Enter Apache
------------

[Brian Behlendorf](http://brian.behlendorf.com/) was the first Webmaster at Wired Magazine and “[the chief engineer](https://web.archive.org/web/20190128065900/http://www.linux-mag.com/id/472/)” of Wired’s first website, HotWired, launched on October 27, 1994. HotWired used the NCSA web server, but according to [a 1997 Salon writeup](https://www.salon.com/1997/10/30/feature_364/), it “couldn’t handle password authentication on the scale that HotWired needed.” Since the server was open source, Behlendorf coded up a “patch” to fix the problem.

As he chatted to other webmasters on the CERN-hosted WWW-Talk mailing list, Behlendorf discovered that others had also been writing patches for the NCSA server. By this point its creator, Rob McCool (who we met in [the 1993 CGI post](/p/1993-cgi-scripts-and-early-server-side-web-programming/)), had moved on from NCSA and joined Netscape. This meant that many of the submitted patches were not being integrated into the NCSA server. All of this mailing list and private email chatter eventually led to the formation of the Apache Web Server Project, [in February 1995](http://httpd.apache.org/ABOUT_APACHE.html). Incidentally, Behlendorf was the one who came up with the name Apache, although he later claimed to be oblivious to the pun (“a patchy” web server) at the time.

There were no grand plans, originally. As Behlendorf wrote in [a 1999 O’Reilly book](https://www.oreilly.com/openbook/opensources/book/brian.html), “building our own server was more an act of self-preservation than an attempt to build the next great web server.”

![v0.6.2](/assets/images/wdh/apache_homepage_1995-1024x861.jpg)
*v0.6.2; Source: The Web Server Book, 1995*

The Apache project was [publicly announced](https://groups.google.com/g/comp.infosystems.www.servers.unix/c/GAEOIZi530U/m/LURNqsg9FhwJ) to the comp.infosystems.www.servers.unix mailing list on April 27, 1995. One of the eight co-founders of the group, Randy Terbush, did the honors:

*Folks, we in the Apache Group are happy to announce a new public-domain HTTP server based on patches to NCSA’s 1.3 httpd called “Apache”. It fixes many bugs, in both performance and functionality, and it includes the following new features:*

*Content negotiation (for all you who want to do HTML 3 right!)*
*Multiple Domain Names (http://foo.com/ & http://bar.com/)*
*Custom error responses (internal redirects to pages or script)*
*Send “as is” file types – for including HTTP headers with documents*
*More HTTP spec compliance*
*DBM-file based user authentication*

*Currently in version 0.6.2, the server has been tested and is being used by HotWired, the movie databases at Cardiff and Msstate, the MIT AI Lab, Organic, and Hyperreal. OS’s include SunOS, Solaris, SGI, HPUX, and BSDI.*

This version would soon be improved, most notably by [Robert Thau](http://www.panix.com/~rst/), who “designed a new server architecture (code-named Shambhala) which included a modular structure and API for better extensibility, pool-based memory allocation, and an adaptive pre-forking process model.” Apache 1.0, released on December 1, 1995, was based on Thau’s new design.

Enter Microsoft
---------------

1995 was the year that Microsoft went all-in on the Internet. Bill Gates sent his famous “[Internet Tidal Wave](https://www.wired.com/2010/05/0526bill-gates-internet-memo/)” memo to senior staff on May 26, 1995, and the Internet Explorer browser debuted a few short months later. But even before it released this client application for surfing the Web, Microsoft had launched its first web server software — Internet Information Server (IIS) — on May 30, 1995. (When Bill Gates told his people to jump, they did so at pace.)

The backstory of IIS is closely aligned with the beginnings of the microsoft.com website in 1994. As Microsoft’s Dave Kramer explained in [a 1999 retrospective](https://web.archive.org/web/20000303094011/http://www.microsoft.com/misc/features/features_flshbk.htm) of those early years, the 1994 website “started delivering content on Windows NT 3.1 using the European Microsoft Windows Academic Consortium (EMWAC) WWW server software.”

![Microsoft’s website, some time between April 1994 and August 1995.](/assets/images/wdh/microsoft_website_1995.gif)
*Microsoft’s website, some time between April 1994 and August 1995.*

The release of Windows 95 in August 1995 was the catalyst for the microsoft.com team to migrate off the EMWAC web server and onto a pre-release version of IIS. This happened in mid-1995, wrote Kramer, because “the EMWACS servers were straining to keep up with the burgeoning server loads.”

![Microsoft.com at the time of the Windows 95 launch](/assets/images/wdh/flshbk_COLLAGE2.gif)
*Microsoft.com at the time of the Windows 95 launch.*

Although IIS made an immediate impact in the web server market, it wasn’t a true competitor to Apache because they served two different markets. Apache was a web server used by individuals, startups and basically anyone wanting a free, well-supported open source web server. IIS, on the other hand, was squarely aimed at the enterprise market; and even then, it was really just a complementary piece to Microsoft’s enterprise operating system, Windows NT.

The Web Server Market
---------------------

NCSA began putting more effort into their web server at about the same time Apache launched in April 1995, but it was already too late. The momentum had shifted to the new community-led project. Although NCSA ended 1995 as the leading web server, its trend line was careening down a steep cliff. Apache’s trend line was the exact opposite and was heading relentlessly upwards (see the chart below).

![Netcraft stats](/assets/images/wdh/Screen-Shot-2021-08-28-at-3.45.18-PM-1024x652.png)
*Source: [Netcraft](https://news.netcraft.com/archives/2003/08/01/august_2003_web_server_survey.html), Aug 2003*

On April 3, 1996, the Apache Group announced in [a press release](https://web.archive.org/web/19970709170309/http://www.apache.org/press/04apr96.txt) that its web server had just become the most popular server on the internet, according to a survey by the research company Netcraft.

> “The latest Netcraft survey found that Apache and its derivatives claimed a 29% marketshare as of April 1st, making it more used than any other webserver on the market. The NCSA server, which had previously held the number one position, now holds a 26% share of webservers surveyed.”

While IIS never took direct aim at Apache, Microsoft had Netscape’s web server products squarely in its crosshairs. It knew that Netscape primarily made money off its web servers, not its browser. So the release of IIS in 1995 hit Netscape even harder than the release of IE later that same year.

IIS immediately began eating into Netscape’s market share. [By April 1997](https://www.itprotoday.com/windows-78/iis-surpasses-netscape-web-servers), IIS had passed Netscape, according to Netcraft. You can see this by tracking the yellow line in the chart above, which represents what started out as Netscape Netsite in 1994 and ended up as the SunOne. The re-branding came about because AOL (Netscape’s acquirer in 1998) made [an agreement in 1999](https://esj.com/articles/2000/06/14/netscapes-journey-from-netsite-to-iplanet.aspx) to fold Netscape’s web server products into those of Sun Microsystems.

Apache and the LAMP Stack
-------------------------

The story of web servers in the 1990s really comes down to two victors (Apache and, to a lesser degree, Microsoft) and two losers (NCSA and Netscape). However, as I will explain in upcoming posts, Apache was the web server that most influenced the future direction of web development. It became one of the foundational pieces of the LAMP stack (Linux, Apache, MySQL, PHP/Perl/Python), an acronym coined at the end of 1998 to denote a set of open source solutions to build web applications. The LAMP stack was what led to the Dot Com boom and the Web 2.0 boom that followed after.

Another foundational piece of the LAMP stack, MySQL, was also launched in 1995. That will be the subject of our next post, so stay tuned.

***

Read next: [1995: MySQL Arrives, Completing the LAMP Stack](/p/1995-mysql-lamp-stack/)