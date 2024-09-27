---
title: "1995: PHP Quietly Launches as a CGI Scripts Toolset"
description: "If CGI scripts were the start of interactive programming on the web, then Personal Home Page Tools (PHP Tools) was the natural next step — at least on the server-side."
date: 2021-04-13
permalink: "p/1995-php-quietly-launches-as-a-cgi-scripts-toolset/"
tags: ['dotcom', '1995']
featureImage: "/assets/images/wdh/php_elephant_wdh.jpg"
---
![PHP elephant logo](/assets/images/wdh/php_elephant_wdh.jpg){loading="eager"}
If CGI scripts were [the start of interactive programming on the web](https://webdevelopmenthistory.com/1993-cgi-scripts-and-early-server-side-web-programming/), then PHP was the natural next step — at least on the server-side. Just a month after Brendan Eich [created the JavaScript scripting language](https://webdevelopmenthistory.com/1995-the-birth-of-javascript/) at Netscape, an independent developer from Canada named Rasmus Lerdorf released the first version of a toolset he called Personal Home Page Tools (PHP Tools). At this point, it wasn’t a scripting language (although it would eventually become one). As of June 1995, when Lerdorf [announced the project](https://groups.google.com/g/comp.infosystems.www.authoring.cgi/c/PyJ25gZ6z7A/m/M9FkTUVDfcwJ) to the _comp.infosystems.www.authoring.cgi_ mailing list, it was a utility library and templating engine for the Common Gateway Interface (CGI). In modern terms, we can think of it as similar to a JavaScript library like React — although obviously much less complicated, since this was 1995.

Lerdorf described PHP Tools as “a set of small tight cgi binaries written in C” that would perform common CGI scripting functionality — such as creating a form, using form data elsewhere on the website, password-protecting pages, logging page view statistics, tracking referrers, displaying last access information on a web page, and “performing server-side includes without needing server support for it.”

![How PHP worked](/assets/images/wdh/php-intro.png)
*How PHP worked; image: [the PHP Presentation System](http://talks.php.net/show/perth1/5)*

Although Lerdorf had no plans at this time to turn PHP Tools into a scripting language, he did have ambitions to extend it. In a 2002 book he co-authored for O’Reilly Media, [he wrote](https://www.oreilly.com/library/view/programming-php/1565926102/ch01s02.html):

> “The announcement talks only about the tools that came with PHP, but behind the scenes the goal was to create a framework to make it easy to extend PHP and add more tools. The business logic for these add-ons was written in C—a simple parser picked tags out of the HTML and called the various C functions. It was never my plan to create a scripting language.”

Lerdorf [later joked](https://www.infoworld.com/article/2933858/php-at-20-from-pet-project-to-powerhouse.html) that “in 1995, I thought I had unleashed a C API upon the Web. Obviously, that’s not what happened, or we’d all be C programmers.”

1994: The Creation of PHP
-------------------------

Before we go any further, it’s worth knowing how Lerdorf came to create PHP Tools in the first place.

According to an [earlier version](https://web.archive.org/web/20010129191300/https://www.php.net/manual/en/intro-history.php) of The PHP Manual, written by the PHP Documentation Group, Lerdorf created PHP Tools sometime between September and November of 1994. He described how it all started in a later article [for Web Techniques Magazine](https://web.archive.org/web/19990117005231/http://www.webtechniques.com/features/1998/02/lerdorf/lerdorf.shtml):

> “PHP began as a simple CGI wrapper written in Perl that I used to keep track of who had accessed my online resume. I then rewrote the wrapper in C to speed it up and use less resources. At the same time, I needed a way to glue my home page to a database, so I wrote the Form Interpreter (FI), a tool to embed SQL queries inside Web pages and handle form input.”

So the PHP acronym originally stood for ‘Personal Home Page’, because its first purpose was to track hits to Lerdorf’s resume on his home page. Also note that PHP Tools was technically two tools. Indeed, he would later put the FI acronym back into the name of the project for version 2 (before it got taken out again for PHP 3.0). PHP has had a string of strange names over the years, up to and including the current one — PHP: Hypertext Preprocessor (a recursive acronym).

![Example PHP code](/assets/images/wdh/Screen-Shot-2021-04-13-at-4.37.42-PM-1024x543.png)
*Example code; image: [the PHP Presentation System](http://talks.php.net/show/lugod/4)*

Lerdorf tells more about the origin story of PHP Tools in an [IEEE Computer Society article](https://www.researchgate.net/publication/260584004_Inventing_PHP_Rasmus_lerdorf) from 2012:

> “I wrote the same code over and over—basically, CGI \[Common Gateway Interface\] scripts written in C. I wrote code to handle forms, POST data, filtering, and other common Web things that you have to write in C when you’re writing CGI programs. It was kind of tedious and boring, so if I could reduce the amount of time I had to spend programming, maximize the output, and get to the solution quicker, then that was my goal with PHP. I put all my common stuff into a C library, hacked it into the NCSA \[National Center for Computing Applications\] webserver, and then added a templating system on top of it to let me easily call into it.”

Again, it’s striking from a 2021 perspective how similar this sounds (at least in purpose) to many of the JavaScript libraries and frameworks we’re familiar with today. But remember, JavaScript itself was brand new in mid-1995 and was not released publicly until later that year. At the time, it was CGI scripts that were the go-to tool for web developers or designers to add interactive elements to their web pages. PHP Tools was one of the first library and templating tools — what we now commonly call a framework — built on top of the CGI system that Rob McCool and others had specced out at the end of 1993.

![Lerdorf’s homepage](/assets/images/wdh/lerdorf_homepage_2001-1024x542.jpg)
*[Lerdorf’s homepage](https://web.archive.org/web/20010412101829/http://lerdorf.com/) circa 2001*

So why didn’t Lerdorf use Perl, which was the most common way to produce CGI scripts in 1994? Although he did use Perl for the original CGI wrapper that tracked access to his online resume, he soon ditched it for C. As he explained at [a conference](https://www.youtube.com/watch?v=fYTKm2oUzAg) in 2017, he considered Perl too slow and noted that “you still had to write Perl code to spit out HTML.” He wanted to simply drop some template code into the HTML and let the server do the work. As he put it:

> “Really what I wanted \[was a\] simple templating language that was built into the web server, so I didn’t have to fork and exec another process, but the web server itself could read HTML like any other but then do intelligent substitutions — and you could inject your own code, via C, into it.”

[Another web page](https://www.php.net/manual/phpfi2.php) that Lerdorf contributed to has further details about why he changed his original resume script from Perl to C:

> “The web server where I had my resume was extremely overloaded and had constant problems forking processes. I rewrote the Perl wrapper in C to get rid of the considerable overhead of having to fork Perl each time my resume was accessed.”

1995: Minor Adoption and Eventual Public Release
------------------------------------------------

Lerdorf used the tools he’d developed for his own work from late-1994 and into 1995, as a self-described “IT consultant” and web programmer in Toronto. This soon piqued the interest of other web programmers, as he explained [a few years later](https://web.archive.org/web/19990117005231/http://www.webtechniques.com/features/1998/02/lerdorf/lerdorf.shtml):

> “These tools were never intended for public use, but as so often happens, people who saw my Web pages asked for a copy of what I was using. So, I bundled up my two tools, named them the Personal Home Page Tools, and added some documentation; thus was born PHP version 1.0.”

There’s no indication that the takeup of PHP Tools in early 1995 was major — most likely it was restricted to other developers that Lerdorf either worked with or interacted with on message boards.

By the time Lerdorf was ready to announce PHP Tools in June 1995, he had [collected together](https://web.archive.org/web/20100726224334/http://articles.sitepoint.com/print/phps-creator-rasmus-lerdorf) about 30 different scripts:

> “I ended up with about 30 different little CGI programs written in C before I got sick of it, and combined all of them into a single C library. I then wrote a very simple parser that would pick tags out of HTML files and replace them with the output of the corresponding functions in the C library.”

When Lerdorf announced PHP Tools on the _comp.infosystems.www.authoring.cgi_ mailing list that June, he didn’t get a single reply. But he continued to plug his new toolset on the mailing list when the opportunity arose, often to the sound of crickets. This message [on 13 July 1995](https://groups.google.com/g/comp.infosystems.www.authoring.cgi/c/VfmwNSq8pf0/m/mHlnqx7NdLcJ) was typical of his attempts:

![Lerdorf message 13 Jul 1995](/assets/images/wdh/Screen-Shot-2021-04-13-at-5.07.46-PM.png)

Despite struggling to interest the mailing list participants, Lerdorf continued to work on his toolset and over September and October 1995 he released new versions with significant new features. According to [the official history](https://www.php.net/manual/en/history.php.php), September’s release had “Perl-like variables, automatic interpretation of form variables, and HTML embedded syntax.” In October, following “a complete rewrite of the code,” he introduced a scripting interface for the first time:

> “The language was deliberately designed to resemble C in structure, making it an easy adoption for developers familiar with C, Perl, and similar languages. Having been thus far limited to UNIX and POSIX-compliant systems, the potential for a Windows NT implementation was being explored.”

In November, he was back on the mailing list trying to rustle up interest. In response to [a question](https://groups.google.com/g/comp.infosystems.www.authoring.cgi/c/7HtVEgy4zc4/m/YLwTonVhZagJ) about connecting CGI programs to a database, Lerdorf mentioned his new scripting language:

> “If you are interested in mSQL as a backend database for your web pages, you should probably also have a look at the PHP package which allows you to embed SQL queries right in your HTML files. PHP also provides a full scripting language right in HTML tags (similar to LiveScript) which is useful for people even if they are not using mSQL.”

This was the first public mention of the scripting language in PHP Tools (at least on this mailing list). The “similar to LiveScript” comment shows just how early it was for scripting languages on the web — LiveScript was a pre-release name for what was eventually branded JavaScript, in December of that year. Perhaps that’s why, even with this scripting language innovation, Lerdorf still could not get the CGI scripts mailing list to pay attention to his PHP Tools project.

Another likely reason for the lack of uptake of PHP Tools in 1995 is that Perl was the default method of writing CGI scripts at the time, as discussed in [my previous post](https://webdevelopmenthistory.com/1993-cgi-scripts-and-early-server-side-web-programming/). So Perl programming and its relation to the CGI spec was what a lot of CGI scripters were focused on in 1995 — for example check out [this mailing list thread](https://groups.google.com/g/comp.infosystems.www.authoring.cgi/c/FUf8lZqH0Sc/m/XiYSW5kKGnwJ) from October, which discussed problems using Sendmail with Perl CGI scripts. Aside: the infamous Perl CGI directory [Matt’s Script Archive](https://web.archive.org/web/19980415235300/http://worldwidemart.com/scripts/) started around this time too (his Guestbook script is listed as being released in October 1995).

Foundations Were Set, But PHP Still Had a Ways To Go
----------------------------------------------------

PHP didn’t start to gain traction until after the release of the second generation of PHP in April 1996, which Lerdorf called PHP/FI (as noted above, the FI stood for “Forms Interpreter” — one of the initial tools he’d created). When [announcing this new version](https://groups.google.com/g/comp.infosystems.www.authoring.cgi/c/GiQYyXLUijs/m/AvSFDw7msYYJ), Lerdorf called PHP/FI “a server-side HTML embedded scripting language.” He said it was “most likely the fastest and simplest tool available for creating database-enabled web sites.”

![Lerdorf message 16 April 1996](/assets/images/wdh/Screen-Shot-2021-04-13-at-5.30.03-PM-1024x398.png)

PHP/FI was a big step up from the PHP Tools he’d released the previous year. The official history [states](https://www.php.net/manual/en/history.php.php) that this “second-generation implementation began to truly evolve PHP from a suite of tools into a programming language in its own right.”

It would be another year or two before PHP gained widespread popularity. It evolved markedly after 1996 and many other influential developers helped shape its future — notably Zeev Suraski and Andi Gutmans for PHP 3, which was developed over 1997 and launched in June 1998. I’ll cover those developments in later posts, but for now let’s celebrate what Rasmus Lerdorf created by himself from 1994 to 1995. Back then it was a small toolset and wannabe-framework for creating server-side, database-connected web apps.

Perhaps the kernel of genius, that eventually inspired its future growth, was enabling the PHP code to be embedded in HTML — just like JavaScript, which was also released in 1995. Ultimately though, PHP and JavaScript were two very different ways to add interactivity to a website. PHP is best viewed as [a forerunner](http://obswww.unige.ch/~simond/Examples/PHP/php.iquest.net/intro.phtml) of corporate server-side web programming tools, like Netscape’s LiveWire Pro product and Microsoft’s ASP (Active Server Pages).

Rasmus Lerdorf [said in 2002](https://web.archive.org/web/20100726224334/http://articles.sitepoint.com/print/phps-creator-rasmus-lerdorf), “I did not develop the PHP we know today. Dozens, if not hundreds of people, developed PHP. I was simply the first developer.” That may be so, but the fact that PHP kept evolving for the times — and indeed, outlasted similar frameworks from both Netscape and Microsoft — is testament to the experimentalism of Lerdorf in the early days, along with his willingness to let others build on the foundations he set.

***