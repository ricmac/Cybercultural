---
title: "1993: CGI Scripts and Early Server-Side Web Programming"
description: "The Common Gateway Interface (CGI) in 1993 was the start of web applications. On the early Web, it typically took the form of Perl scripts for features like contact forms and guest books."
date: 2021-03-24
permalink: "p/1993-cgi-scripts-and-early-server-side-web-programming/"
tags: ['dotcom', '1993']
featureImage: "/assets/images/wdh/cgi-feature.jpg"
---

![CGI logo](/assets/images/wdh/cgi-feature.jpg){loading="eager"}
*CGI logo created by the NCSA at the University of Illinois; [via Wikipedia](https://en.wikipedia.org/wiki/File:Common_Gateway_Interface_logo.svg).*

A couple of years before [JavaScript was invented](/p/1995-the-birth-of-javascript/), a specification called the Common Gateway Interface (CGI) enabled an early form of interactivity for web pages. But whereas JavaScript performed interactive tasks **inside** the browser (that is, on the client-side), CGI scripts ran via an external program on a server (server-side). After a CGI script was executed on a server, the result was sent back to the originating web page as HTML code. So while a CGI script wasn’t a dynamic component in the browser, like JavaScript was, it did allow early web users in 1993 and 1994 to run interactive programs. In many ways then, it was CGI — not JavaScript — that was the start of web applications.

CGI was invented in 1993 at the National Center for Supercomputing Applications (NCSA), where the pioneering Mosaic web browser also originated. Rob McCool took the lead in writing the CGI specification, as a follow-on from his work creating [NCSA HTTPd](https://en.wikipedia.org/wiki/NCSA_HTTPd) — one of the world’s first web servers and the direct ancestor of the open source Apache web server.

The idea was to create a common specification for the various web servers (others active in 1993 included Tim Berners-Lee’s CERN httpd and Tony Sanders’ Plexus server), so that a software program initiated via a web page could run on any server and send the result back to the web page.

![The NCSA HTTPd Home Page](/assets/images/wdh/ncsa_http_homepage_april97-1024x704.jpg)
*[The NCSA HTTPd Home Page](https://web.archive.org/web/19970414055941/http://hoohoo.ncsa.uiuc.edu/), April 1997*

The Invention of CGI
--------------------

On 17 November 1993, McCool [posted a message](http://1997.webhistory.org/www.lists/www-talk.1993q4/0518.html) to the www-talk mailing list:

> “I have spent some time writing up a formal specification for the Server-gateway interface. I invite any and all comments and suggestions. \[…\] This is a preliminary specification of the Common Gateway Protocol, or CGP. The version defined by this spec will be CGP/1.0.”

A couple of days later, after some initial feedback from the mailing list, [McCool wrote](http://1997.webhistory.org/www.lists/www-talk.1993q4/0540.html):

> “I was thinking about it, and this is not really a protocol but an interface.  
What do you all think about changing it to CGI/1.0?”

![Mosaic browser](/assets/images/wdh/Mosaic-browser-NCSA-home-page.png)
*Mosaic browser showing NCSA home page; [via ResearchGate](https://www.researchgate.net/figure/Screenshot-of-the-Mosaic-browser-displaying-the-NCSAs-home-page-The-browser-was_fig1_304300437).*

After a minor grumble from someone about the term “gateway,” [McCool clarified](http://1997.webhistory.org/www.lists/www-talk.1993q4/0563.html) that it referred to “an interface to external server programs which allow you to interface with services you may not normally have access to.”

More specifically, it referred to connecting a web server to a legacy information system — such as a database. The server that executed the CGI program was thus the “gateway” that allowed information from (for example) a database to be used on a web page. [Put another way](https://stackoverflow.com/questions/2089271/what-is-common-gateway-interface-cgi), CGI tells the web server how to pass data to and from an application.

In modern terms, we can view CGI as an Application Programming Interface (API). So in that sense, as [one tutorial](http://www.whizkidtech.redprince.net/cgi-bin/tutorial) put it, “CGI is the API for the web server.”

![A CGI program initiated via a hyperlink](/assets/images/wdh/cgi1-1024x733.png)
*A CGI program initiated via a hyperlink; [image by Michael Grobe](http://condor.cc.ku.edu/~grobe/docs/forms-intro.shtml), University of Kansas (“Sometime in 1994”)*

By [early December 1993](http://1997.webhistory.org/www.lists/www-talk.1993q4/0685.html), McCool had “written the CGI specification into a set of HTML documents, at URL http://hoohoo.ncsa.uiuc.edu/cgi/.” While that web page is long gone from the web, the Wayback Machine has a copy [from April 1997](https://web.archive.org/web/19970414060000/http://hoohoo.ncsa.uiuc.edu/cgi/). There we can see how McCool defined CGI for the world:

> “The Common Gateway Interface, or CGI, is a standard for external gateway programs to interface with information servers such as HTTP servers.”

In an accompanying [introduction](https://web.archive.org/web/19971210170704/http://hoohoo.ncsa.uiuc.edu/cgi/intro.html), McCool claimed that “there really is no limit as to what you can hook up to the Web,” although he added a note of caution:

> “The only thing you need to remember is that whatever your CGI program does, it should not take too long to process. Otherwise, the user will just be staring at their browser waiting for something to happen.”

Because CGI scripts were executable, they were usually placed inside a special folder. As McCool explained, this was “so that the Web server knows to execute the program rather than just display it to the browser.” This also enabled web masters to lock the folder down, to prevent people from creating potentially dangerous CGI scripts. McCool suggested the folder name _cgi-bin_, which soon became the norm. It became common later in the 90s to see URLs like http&#58;&#47;&#47;www&#46;example&#46;com&#47;cgi-bin&#47;helloworld&#46;pl.

Perl Scripts Proliferate
------------------------

McCool’s [specification](https://web.archive.org/web/19971210170807/http://hoohoo.ncsa.uiuc.edu/cgi/interface.html), CGI/1.1, was soon put to use by the early users of the world wide web. Takeup was helped by the fact that developers could use any programming language to write CGI scripts. McCool listed some in his introduction:

*   C/C++
*   Fortran
*   PERL
*   TCL
*   Any Unix shell
*   Visual Basic
*   AppleScript

In practice though, many CGI applications were written in the scripting language, Perl (this is partly why they came to be known as CGI scripts). Indeed, Perl had a big influence on the creation of CGI, as explained in [this 2016 article](https://opensource.com/life/16/11/perl-and-birth-dynamic-web) by Michael Stevenson on opensource.com. He referenced Jim Davis’ [Gateway to the U Mich Geography server](https://lists.w3.org/Archives/Public/www-talk/1992NovDec/0060.html), released to the WWW-talk mailing list in November 1992:

> “Davis’s script, written in Perl, was a kind of proto-Web API, pulling in data from another server based on formatted user queries.”

The first use cases for CGI were, unsurprisingly, focused on connecting an application to a database. So CGI was used to create things like a contact form, a guest book, a survey, or a search box. Anything that required user input, prompting a round trip from web page to database and back to the web page again, was a good candidate for CGI use.

![Example of CGI being used via an online form](/assets/images/wdh/cgi2-1024x742.png)
*Example of CGI being used via an online form; image by Michael Grobe*

Here’s the above diagram explained in [an introductory article](http://condor.cc.ku.edu/~grobe/docs/forms-intro.shtml) written sometime in 1994 at The University of Kansas:

> “In this diagram, the Web client running on Computer A acquires a form from some Web server running on Computer B. It displays the form, the user enters data, and the client sends the entered information to the HTTP server running on Computer C. There, the data is handed off to a CGI program which prepares a document and sends it to the client on Computer A. The client then displays that document.”

Similar to JavaScript, CGI scripts could be copied and pasted into websites by non-programmers. So if you needed a contact form, you’d search the web until you found a CGI script that enabled that. Usually it was a Perl script and over time websites like [Matt’s Script Archive](https://web.archive.org/web/19980709151514/http://scriptarchive.com/) emerged to provide these code snippets.

[Matt Wright](https://web.archive.org/web/19970130232402/http://www.worldwidemart.com/mattw/) was a high school student in Fort Collins, Colorado, when he started Matt’s Script Archive in 1995. One of his most popular scripts was a contact form called [FormMail](http://www.scriptarchive.com/formmail.html), which was written in Perl and described as “a generic HTML form to e-mail gateway that parses the results of any form and sends them to the specified users.” Unfortunately though, FormMail was inherently insecure and was soon exploited by spammers to send junk mail.

![Matt’s Script Archive](/assets/images/wdh/matts_script_archive98-1024x754.jpg)
*[Matt’s Script Archive](https://web.archive.org/web/19980709151514/http://scriptarchive.com/), July 1998 version*

FormMail highlights a problem with CGI scripts in those early years: because by design they enabled random web users to run programs on your server, these scripts [could easily be hacked](https://web.archive.org/web/20020221182749/http://datacreek.net/webgear/tips/fmailspam.html) if clumsily written. If thousands of other website owners then copied and pasted that same code, it would became a widespread security issue (which happened with FormMail). As a user of [a computer programming forum](http://computer-programming-forum.com/53-perl/f47edf76a5dbbfa4.htm) rather bluntly put it, in a discussion about Wright’s scripts:

> “…the vast majority of people downloading and implementing these scripts have no programming knowledge of their own and, as such, are ‘blissfully’ ignorant of the security risks, Y2K bugs, and the frequent total lack of proper error handling.”

Eventually, members of the Perl community started a website called [Not Matt’s Scripts](http://nms-cgi.sourceforge.net/) to provide alternatives to Wright’s increasingly popular CGI scripts. That website was last updated in 2004. Interestingly, [Matt’s Script Archive](http://www.scriptarchive.com/) lasted five more years (although it now includes security warnings).

Conclusion
----------

One of the themes of web development in the mid-1990s, which I have explored in previous posts about Netscape and Microsoft, is the increasing complexity of web applications. The frontend (the web browser) was increasingly being connected to backend technologies, including the OS in Microsoft’s case. [By 1997](/p/1997-netscape-crossware-vs-the-windows-web/), Netscape was pushing a concept called “crossware” (which Marc Andreessen defined as “on-demand applications that run across networks and operating systems”), and meanwhile Microsoft was building out its Windows-integrated ActiveX technologies.

But CGI in many ways routed around this movement towards complexity, by providing an easy way to access backend functionality via a web page. The “gateway” was really just that — a virtual pipe from the browser to a server, that executed a script and then sent the result back to the browser. This simplicity enabled influential 1990s websites like Yahoo!, eBay and Craigslist to flourish, without necessarily needing to buy into either of Netscape or Microsoft’s vision for the web.

But another theme of web development is that things don’t stay still for long! 1994 saw the emergence of a new scripting language that was based on CGI: [PHP](https://www.php.net/manual/en/history.php.php), which initially stood for “Personal Home Page Tools.” Over time, PHP became a replacement for Perl CGI scripts in many cases. I’ll delve into _that_ story in [the next post in this series](/p/1995-php-quietly-launches-as-a-cgi-scripts-toolset/) about server-side web development.

Read next: [1994: How Perl Became the Foundation of Yahoo](/p/1994-perl-yahoo/)