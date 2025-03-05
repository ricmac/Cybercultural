---
title: "1994: How Perl Became the Foundation of Yahoo"
description: "The founding of Yahoo is one of the iconic Silicon Valley business stories. What’s lesser known is the web development story of Yahoo throughout 1994, based on a scripting language called Perl."
date: 2021-08-10
permalink: "p/1994-perl-yahoo/"
tags: ['dotcom', '1994']
featureImage: "/assets/images/wdh/yahoo_94_feature.jpg"
---

![1994: How Perl Became the Foundation of Yahoo](/assets/images/wdh/yahoo_94_feature.jpg){loading="eager"}

In January 1994, two Stanford University graduate students — Jerry Yang and David Filo — created a web directory named “Jerry and David’s Guide to the World Wide Web.” It went by various other names in early 1994 (such as “Hierarchical Hotlist” and “Jerry & Dave’s Guide to WWW”), before being christened "Yahoo!" in April of that year. Throughout the rest of 1994, Yang and Filo quietly developed the website in their Stanford dorm rooms. Finally, in January 1995 the pair bought the domain name yahoo.com and become a company a couple of months later.

The founding of Yahoo is one of the iconic Silicon Valley business stories. What’s lesser known is the web development story of Yahoo throughout 1994 — which is the focus of this article. In particular, we’ll explore how a scripting language invented by Larry Wall in 1987, called Perl, became the glue that made Yahoo stick in the public consciousness.

> I want to see people using Perl to glue things together creatively, not just technically but also socially.
— [Larry Wall](https://www.azquotes.com/quote/1103655), Usenet article, 1997.

As covered in [a previous post](/p/1993-cgi-scripts-and-early-server-side-web-programming/), Perl was increasingly being used in 1993 to build CGI scripts on the web. It gained a reputation at that time as a language for web users who were not trained programmers, but could nonetheless create interactive scripts using Perl (or, more likely, by copying and pasting Perl code). The development of Yahoo in 1994 represented the emergence of Perl as a web language for building a ‘dot-com’ business — even though what Yahoo’s founders initially built wasn’t much more sophisticated than the CGI scripts created by amateur teenagers in 1993. In any case, Yahoo co-founder David Filo later [told Perl creator](https://www.salon.com/1998/10/13/feature_269/) Larry Wall that Yahoo “could never have been started without Perl.”

A quick note about what Yahoo was, as a product, during the year 1994. It was a simple directory of websites, structured as a hierarchy. As 1994 began, there were just 623 websites on the Web, according to [a study](https://stuff.mit.edu/people/mkgray/net/web-growth-summary.html) by MIT Researcher Matthew Gray. Yes, less than 1,000 websites in the entire world! So Yang and Filo’s directory was designed to help early web users navigate this small but growing world of websites. (Incidentally, the software program Gray used to measure the size of the Web was called [World Wide Web Wanderer](https://en.wikipedia.org/wiki/World_Wide_Web_Wanderer), aka the Wanderer — and it was a Perl-based web crawler, first deployed in June 1993.)

Thanks to some [Twitter sluething](https://twitter.com/waxpancake/status/1381343951022555137) by [Andy Baio](https://twitter.com/waxpancake/) and [Joe Crawford](https://twitter.com/artlung) earlier this year, the May 1994 Perl script that generated an early version of the Yahoo directory is available to view [on GitHub](https://gist.github.com/artlung/74184de3c381966a14f97a8605d17572). Here’s a slice of that Perl code, which in this case served to create the directories:

```perl
    #
    # big for loop to make appropriate directories
    #
    foreach $j (split (/\003/, $Key[$i])) {
      #
      #
      # print ("($j, $Topic{$j}) \n");
      #
      #
      if ($i != 0) {
	#
	# make sure this is same as below for references
	#
	@_ = split(/\000/, &canon_path($j));
	shift(@_);		# get rid of top_
	$curdir = join("/",@_);	# form directory path
	$curdir =~ s/[\000\s]+$//g; # remove any trailing whitespace
	$curdir =~  s/[\000\s]+/_/g;	# sub white spaces with _
	$curdir = $hotdir."/".$curdir;
	if (!(-e $curdir)) {
	  $dirlist .= " ".$curdir;
	  $dircnt++;
	  if ($dircnt > 15) {	# some random number i made up...
#	    
	    print "mkdir -m g+w $dirlist<br>\n";
#	    
	    system "mkdir -m g+w $dirlist";
	    $dirlist ="";
	    $dircnt=0;	    
	  }
	}
      }
    }
    if ($dircnt > 0) {
#      
      print "mkdir -m g+w $dirlist<br>\n";
#      
      system "mkdir -m g+w $dirlist";
      $dirlist ="";
      $dircnt=0;
    }
```

Even though the Perl scripts helped automate part of the process of creating the Yahoo directory — in particular the generation of the web pages — the groundwork of filtering and categorizing websites was a manual process. As explained in [a Stanford case study](https://hugepdf.com/download/yahoo-1995-first-round-financing-stanford-technology-ventures-stvp-1998-005-prog_pdf#):

> “Jerry’s Guide was a labor of love–lots of labor, since no software program could evaluate and categorize sites. Filo persuaded Yang to resist the engineer’s first impulse to try to automate the process. “No technology could beat human filtering,” Filo argued.”

So there was balance of manual labour (filtering and categorizing the data) and machine labour via Perl scripts (turning the data into web pages, the search functionality, etc). It’s interesting to reflect how important the human hand was to these early internet businesses. Nowadays, over a quarter of a century after Yahoo was developed, we’re increasingly reliant on machine learning for tasks like content filtering and categorization. On the other hand, we’ve also learned that the social media feeds we consume today, which are almost entirely automated with software algorithms, aren’t as good as we’d hoped for! So there’s a reason that leading aggregators, like Techmeme for technology news, still rely on the human touch when it comes to filtering content.

![Pre-Yahoo directory, March 1994](/assets/images/wdh/yahoo_mar94-1024x752.png)
*Pre-Yahoo directory, [March 1994](https://web.archive.org/web/20020306054244/http://public.yahoo.com/~filo/stanford/940324/); via [Andy Baio](https://twitter.com/waxpancake/status/1381343947985805313)*

What Else Was Going on in 1994?
-------------------------------

1994 was a time of experimentation — the [dot-com boom](/dotcom/) was a year away and most people were still trying to figure out if (not when) the web would go mainstream. Even the web application that Yahoo was built on top of, the web browser, wasn’t yet a viable market. Yang and Filo were developing the bones of Yahoo before corporate browsers like Netscape and Internet Explorer came along — they were reliant on the Mosaic browser, which (like Yahoo) was built by college students. As it turned out though, Netscape the company was founded in April 1994 — around the time the Yahoo name was first attached to Yang and Filo’s directory.

Yahoo’s founders, then, were among the web’s earliest users and builders. In [an interview with Sun Microsystems](https://web.archive.org/web/19961020055342/http://www.sun.com/950523/yahoostory.html) carried out in May 1995, Filo explained that he and Yang had been using the web “pretty much ever since \[NCSA\] Mosaic came out in mid to late ’93. And before Mosaic, we used gopher a bit… and of course we used e-mail and newsgroups before that.”

![David Filo of Yahoo and Marc Sacoolas of Sun](/assets/images/wdh/yahoo_sun_pic.gif)
*David Filo (left) of Yahoo and Marc Sacoolas of Sun. Photo credit: Sun via [Internet Archive](https://web.archive.org/web/19961220102912/http://www.sun.com/sunsoft/cdware/images/yahoo.gif).*

The Sun interview also provided some insight into the user experience of the directory in its early days, which relied heavily on the hierachical structure:

> “For us ideally, we would like to have maybe 30 entries at most in any one category, so that you don’t have to wade through a lot of stuff. So we always try to put a lot of hierarchy in. You have to be real specific about what you’re looking for. We kind of look at it as complementary. You can browse it, and not necessarily just browse it from the top level. But if you search for a keyword, it will also tell you where in the hierarchy your request is located. So, you can go into the hierarchy at that point and find related items.”

One of the few other historically successful dot-com companies founded in 1994 was Amazon, which eventually became a heavy user of Perl too. However, it didn’t start out that way. Amazon.com was originally “a C++ binary called Obidos,” wrote former Amazon engineer Charlie Cheever [on Quora](https://www.quora.com/How-did-Google-Amazon-and-the-like-initially-develop-and-code-their-websites-databases-etc). This was corroborated in [a blog post](https://sites.google.com/site/steveyegge2/tour-de-babel) by former Amazon employee [Steve Yegge](https://en.wikipedia.org/wiki/Steve_Yegge), who worked for Amazon from 1998 to 2005. At the time he wrote that post, 2004, Yegge said that “C++, Java and Perl are all we write in.” He wasn’t a fan of any of those languages, though — he likened Perl to “that old bicycle you’ve put 100k or 200k miles on, and you’ll always have a warm fuzzy spot for it, even though you’ve since moved on to a more modern bike that weighs 5 lbs and doesn’t make your ass hurt so much.”

It’s fair to say that Perl in 1994 was not generally viewed as a foundational technology for building a startup. Rather, it was a way for web enthusiasts to build CGI scripts, which mostly served to connect a web server to a legacy information system (often a database). Yahoo’s founders chose to use Perl probably because it was a language originally developed for text manipulation, which is exactly what was needed for a text-based directory of the early web. Also, unlike Amazon, Yahoo didn’t start out as a serious business — for all of 1994 and a bit of 1995, Yahoo was a part-time hobby by two Stanford University students.

Closing
-------

While Yahoo was undergoing various tweaks and polishes throughout the year, Larry Wall was working on the next major version of Perl: Version 5. It was released at the end of 1994, and ended up being the primary version of Perl for many years to come. Version 5 was almost a complete rewrite of Perl. In [a presentation](https://www.shlomifish.org/lecture/Perl/Newbies/vhll-slides.pdf) in October 1994, Wall described v5 as “usually 25-40% faster,” with “simpler grammar” and “much better diagnostics and docs.”

Although Perl came to be used by many of the largest websites — including Amazon, Craigslist and eBay — it gradually became eclipsed by other web programming languages. One of them, PHP, actually [began as a CGI wrapper written in Perl](/p/1995-php-quietly-launches-as-a-cgi-scripts-toolset/). But it was Python in particular which usurped Perl, because it was an easier language to learn and not as messy. As of August 2021, Python is the second-most popular programming language in the world according to [the TIOBE index](https://www.tiobe.com/tiobe-index/) (behind only C). Perl, on the other hand, is now ranked 20th — having peaked way back in 2005.

![TIOBE index for Perl](/assets/images/wdh/tiobe_perl-1024x527.png)

In many ways, Yahoo was the bridge between the amateur CGI scripts era of 1993-94 and the full-on commercialization of the web in the dot-com era. And Perl, as the first general-purpose web programming language, was how the Yahoo founders glued those two eras together.

*Feature image via Stanford University Libraries [1997 documentary](https://www.youtube.com/watch?v=MpgAN3wVWfo).*

***

Read next: [1995: The Birth of JavaScript](/p/1995-the-birth-of-javascript/)