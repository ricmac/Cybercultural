---
title: "My Interview With Tim Berners-Lee, June 2009"
description: "During a trip to Cambridge, MA, in June 2009, I visit the MIT headquarters of the World Wide Web Consortium (W3C). There I interview its director, and the web's inventor, Tim Berners-Lee."
date: 2009-07-08
permalink: "p/tim-berners-lee-interview-2009/"
tags: ['web20', '2009', 'rww']
featureImage: "/assets/images/tbl-ricmac-june09-1280x720.jpg"
---

![Tim Berners-Lee and Richard MacManus, June 2009](/assets/images/tbl-ricmac-june09.jpeg){loading="eager"}
*Tim Berners-Lee and Richard MacManus, June 2009.*

During my recent trip to Boston, I had the opportunity to visit MIT. At the end of a long day of meetings with various MIT tech masterminds, I made my way to the funny shaped building where the World Wide Web Consortium (W3C) and its director Tim Berners-Lee work. Berners-Lee is of course the man who invented the World Wide Web 20 years ago.

This was my first meeting with the Web's creator, whose work and philosophy was a direct inspiration for me when I launched ReadWriteWeb back in 2003. The [very first sentence written on RWW](https://web.archive.org/web/20030809061335/http://www.readwriteweb.com/2003/04/20.html), on 20 April, 2003, was: "The World Wide Web in 2003 is beginning to fulfill the hopes that Tim Berners-Lee had for it over 10 years ago when he created it."

After shaking hands, I told Berners-Lee that ReadWriteWeb's name was in part inspired by the first browser, which he developed, called "_WorldWideWeb_". That was [a read/write browser](https://web.archive.org/web/20020222075240/http://www.readwriteweb.com/2003/05/15.html#a10); meaning you could not only browse and read content, but create and edit content too. It was a shame then when Mosaic, a read-only browser, became the first mainstream web browser in the mid-90s. It wasn't until the rise of Web 2.0 that the read/write philosophy gained widespread acceptance. On that note, we launched into the interview...

![Stata Center, June 2009](/assets/images/stata_building_jun09.jpeg)
*Stata Center, HQ of the W3C, on the day of my visit: June 26, 2009.*

How Linked Data Relates to The Semantic Web
-------------------------------------------

_RM: Earlier this year you gave [an inspiring talk at TED about Linked Data](https://web.archive.org/web/20090709061506/http://www.readwriteweb.com/archives/linked_data_is_blooming_why_you_should_care.php). You described Linked Data as a sea change akin to the invention of the WWW itself — i.e. we've gone from a Web of documents to a Web of data. Can you please explain though how Linked Data relates to the Semantic Web, is it a subset of it?_

TBL: They fit in completely, in that the linked data actually uses a small slice of all the various technologies that people have put together and standardized for the Semantic Web.

We started off with the Semantic Web roadmap, which had lots of languages that we wanted to create. \[However\] the community as a whole got a bit distracted from the idea that _actually_ the most important piece is the interoperability of the data. The fact that things are identified with URIs is the key thing.

The Semantic Web and Linked Data connect because when we've got this web of linked data, there are already lots of technologies which exist to do fancy things with it. But it's time now to concentrate on getting the web of linked data out there.

How Linked Data Has Evolved via Grassroots
------------------------------------------

_RM: Linked Data has had a lot of grassroots support, which you mentioned in your TED speech. This is something Semantic Web technologies, such as RDF, have struggled to get over the years. Has the W3C been pushing the more bottom-up Linked Data world, because of the frustration over [lack of take-up of top-down Semantic Web](https://web.archive.org/web/20090709061506/http://www.readwriteweb.com/archives/rdf_semantic_web_apps.php)?_

TBL: A lot of the initial RDF and OWL projects came out of the academic world; and some of them were projects to show what you could do in a closed world. And the files were zipped up and left on a disc. While they were interesting projects, and while the systems were useful systems, the semantic web community maybe missed the point of the 'web' bit and focused too much on the 'semantic'. However the work that's been done in the Semantic Web, the standards, was really valuable. It's relatively recently for example that [SPARQL](https://web.archive.org/web/20090709061506/http://www.w3.org/TR/rdf-sparql-query/) *\[an RDF query language\]* has been developed.

Somebody drew an analogy the other day: can you imagine trying to promote a world of databases without SQL? Even though it's not an interoperable protocol, it's just a query language. So similarly, all that's been put into RDF, rdfs and OWL is very valuable to the linked data community.

The Linked Data community tend to use a subset of that — of OWL for example. But they certainly use SPARQL. So you could argue that really it wasn't ready to be deployed widely.

Linked Data started as a very informal [Design Issues note](https://web.archive.org/web/20090709061506/http://www.w3.org/DesignIssues/LinkedData.html) that I put in; it was a grassroots movement from very early on. So _yes_ W3C has been emphasizing the importance of Linked Data. It's been the [Semantic Web Interest Group](https://web.archive.org/web/20090709061506/http://www.w3.org/2001/sw/interest/) of course, and various activities, which has been pushing it. But also Linked Data has been _seized on_ — a group of people for example put together [DBpedia](https://web.archive.org/web/20090709061506/http://dbpedia.org/). That wasn't commissioned, that was that they just thought it would be a really cool idea.

![Graph of Linked Data sets on the Web, as at March 2009](/assets/images/web_data_apr09c.jpg)
*Graph of Linked Data sets on the Web, as at March 2009.*

## Linked Data and Governments  

_RM: In [a recent Design Issues note](https://web.archive.org/web/20090709061506/http://www.w3.org/DesignIssues/GovData.html), you urge [governments to put their data online](https://web.archive.org/web/20090709061506/http://www.readwriteweb.com/archives/open_goverment_berners-lee_and_the_uk_to_show_obam.php) as Linked Data (although you'd also be happy for governments to just make available the raw data — presumably so that others can then structure it). What do you realistically expect, for example, the U.S. or U.K. governments to do over the next year? And in the near future, do you foresee different governments interconnecting their Linked Data sets?_

TBL: One can't generalize, governments are (like most big organizations) fascinatingly diverse inside them. So you'll find that there are places inside governments where you get a champion who _gets_ linked data and who's just written a script and produced some linked data. So in the UK government for example, you'll find there's RDFa for civil service jobs. So if somebody wants to make a database of all the jobs, they can do that very easily.

There are other cases where the easiest thing for somebody to do is to just put data up in whatever form it's available. Comma separated values (CSV) files are remarkably popular. They're exported sometimes from spreadsheets. It's remarkable how much information is in spreadsheets. Or sometimes pulled out of a database and then put up on the web. It's not as good, not as useful to the community, as if Linked Data had been put up there and linked. But the first step of actually putting the data out there is the one that nobody else can do.

![Data.gov catalog of public data](/assets/images/Datagovscreen.jpg)
*[Data.gov](https://web.archive.org/web/20090709061506/http://data.gov/), a catalog of public data, was [launched in May by the U.S. government](https://web.archive.org/web/20090709061506/http://www.readwriteweb.com/archives/datagov_finally_launches_looks_nice_but_short_on_d.php).*

The way to go is for government departments to go the extra step and convert \[their data\] into Linked Data. One of the nice things about Linked Data, when they have a pile of it, is that they could run a SPARQL server on it. SPARQL servers are a commodity product, a solution for all of the people who say 'but actually I wanted to have XML.' A SPARQL server will generate an XML file \[and\] allow somebody to write out, effectively, a URL for the XML file.

In fact, I don't see why SPARQL servers shouldn't provide CSV files, something which as far as I know isn't in the standards. But I'd recommend it, certainly in government context, because CSV files are what people have and what people want.

So the message is to use RDF. Linked Data is the [backplane](https://web.archive.org/web/20090709061506/http://en.wikipedia.org/wiki/Backplane), it's the thing that you connect to in both directions. As a producer, your job is to make sure that you produce Linked Data one way or another. And as a consumer, there are lots of ways to consume that data once it's out there as Linked Data.

Semantic Web and Search Engines Like Google, Yahoo
--------------------------------------------------

_RM: You've been talking about the Semantic Web for many years now. Generally the view is that Semantic Web is great in theory, but we're still [not seeing a large number of commercial web apps that use RDF](https://web.archive.org/web/20090712060206/http://www.readwriteweb.com/archives/rdf_semantic_web_apps.php) (we've seen a number of scientific or academic ones). However we have [begun to see some traction with RDFa](https://web.archive.org/web/20090712060206/http://www.readwriteweb.com/archives/understanding_the_new_web_era_web_30_linked_data_s.php) (embedding RDF metadata into XHTML Web content), for example [Google's Rich Snippets](https://web.archive.org/web/20090712060206/http://www.readwriteweb.com/archives/search_options_google_search_evolves.php) and [Yahoo's SearchMonkey](https://web.archive.org/web/20090712060206/http://www.readwriteweb.com/archives/semtech_making_the_web_searchable_searchmonkey.php). Has the takeup of RDFa taken you by surprise?_

TBL: Not really, but the takeup by the **search engines** is interesting. In a way I was happy to see that, it was a milestone for those things to come out of the search engines. The search engines had typically not been keen on the Semantic Web — maybe you could argue that their business is making order out of chaos, and they're actually _happy_ with the chaos. And if you provide them with the order, they don't immediately see the use of it.

Also I think there was misunderstanding in the search engine industry that the Semantic Web meant metadata, and metadata meant keywords, and keywords don't work because people lie. Because traditionally in information retrieval systems, keywords haven't proven up to the task of finding stuff on the Web. One of the reasons is that people lie, the other is that they can't be bothered to enter keywords. So keywords have gotten a bad reputation, then metadata in general was tarred with this 'keywords don't work' brush. Because a lot of Semantic Web data included metadata, then people thought that with Semantic Web data — again, that people will lie and won't have the time to produce it.

![*Google rich snippets example](/assets/images/google-rich-snippets.png)
*Google rich snippets example; image credit: Matt Cutts.*

_Now_ I think there's a realization that when you're putting data online, that people are motivated NOT to lie. For example when your band is going to produce its next album, or when your band is going to play next downtown, you're motivated to put that information up there on the Semantic Web. There's an awful lot of cases when actually data is really important to people; and it's on the web anyway. So I think it's great that some of the search engine companies are starting to read RDFa.

Does this mean that they \[search engines\] will start to absorb the whole RDF data model? If they do, then they will be able to start pulling all of the linked data cloud in.

Will they know what to do with it? Because when it's data in a very organized form, I think some people have been misunderstanding the Semantic Web as being something that tries to make a better search engine — i.e. when you type something into a little box. But of course the great thing about the Semantic Web is that you can query it, you can ask a complicated query of the Semantic Web, like a SQL query (we call it a SPARQL query), and that's such a different thing to be able to do. It really doesn't compare to a search engine.

You've got search for text phrases on one side (which is a useful tool) and querying of the data on the other. I think that those things will connect together a lot.

So I think people will search using a search text engine, and find a webpage. On the front of the webpage they'll find a link to some data, then they'll browse with a data browser, then they'll find a pattern which is really interesting, then they'll make their data system go and find all the things which are like that pattern (which is actually doing a query, but they'll not realize it), then they'll be in data mode with tables and doing statistical analysis, and in that statistical analysis they'll find an interesting object which has a home page, and they'll click on that, and go to a homepage and be _back_ on the Web again.

So the web of linked data and the web of documents actually connect in both directions, with links.

User Interfaces for Semantic Content
------------------------------------

_RM: At the recent SemTech conference, [Tom Tague of Thomson Reuters' Calais project suggested](https://web.archive.org/web/20090712060206/http://www.readwriteweb.com/archives/the_state_of_the_market_in_semantic_technologies.php) that user interfaces for semantic content are key in getting more take-up. With that in mind, I wonder if you've seen some great interfaces or designs for semantic applications in recent months — if so which ones and why did they impress you?_

TBL: I think that whole area is very exciting at the moment. The only piece of hacking I've done over the past few years has been on a thing called [the Tabulator](https://web.archive.org/web/20090712060206/http://www.w3.org/2005/ajar/tab) *\[a data browser and editor\]*, which is addressing exactly that. Partly because I wanted to be able to look at this data. And now there are lots of different ways that people need to be able to look at data. You need to be able to **browse through it** piece by piece, exploring the world of data. You need to be able to look for **patterns** of particular things that have happened. Because this is data, we need to be able to use all of the power that traditionally we've used for data. When I've pulled in my chosen data set, using a query, I want to be able to do maps, graphs, analysis, and statistical stuff.

![*W3C Tabulator](/assets/images/tabulator_july09.jpg)
*W3C Tabulator, a data browser/editor; Image credit: [wiwiss.fu-berlin.de](https://web.archive.org/web/20090712060206/http://www4.wiwiss.fu-berlin.de/bizer/d2r-server/publishing/).*

So when you talk about user interfaces for this, it's really very very broad. Yes I think it's important. There's also the distinction we can make between the **generic interfaces** and the **specific interfaces**.

There will always be specific interfaces; for example if you're looking at calendar data, there's nothing else like a calendar that understands weeks, months and years. If you're looking at a genome, it's good to have a genetics-specific user interface.

However you also need to be able to connect that data, through generic interfaces. So if my genome data was taken during an experiment which happened over a particular period, I need to be able to look at that in the calendar — so I can connect the genetics to the calendar.

So one of the things I hope to see is domain-specific things for various different domains, _and_ the generic user interfaces. And hopefully the generic interfaces will be able to tie together all of the domains.

Wolfram Alpha and Natural Language Interfaces
---------------------------------------------

_RM: An interesting new product was [launched this year](https://web.archive.org/web/20090712073050/http://www.readwriteweb.com/archives/wolframalpha_our_first_impressions.php) called [Wolfram|Alpha](https://web.archive.org/web/20090712073050/http://www.wolframalpha.com/), described as a 'computational knowledge engine.' It's kind of a mix between Google (search) and Wikipedia (knowledge), and its key attribute is that enables you to compute something. The founders think that 'computing' things on the fly is something we're going to see a lot of in future. What's your take on Wolfram|Alpha?_

TBL: There are two parts to that sort of technology. One of them is a sort of stilted natural language interface. We've seen those sort of natural language queries for years. Boris Katz *\[from W3C\]* created a system called [START](https://web.archive.org/web/20090712073050/http://start.csail.mit.edu/start-system.html) _\[a software system designed to answer questions that are posed to it in natural language\]_. I think with the Semantic Web out there, those sorts of interfaces are going to become important, very valuable, because people will be able to ask more complicated things. The search engine has traditionally been limited to just a phrase, but some of the search engines are now starting to realize that if they put data behind them and have computation engines, then you can ask things like 'what's this many pounds in dollars?' and so on. So yes, those interfaces will become important.

Conversational interfaces have always been a really interesting avenue. We've had voice browser work in W3C, that has been an interesting alternative avenue. It's possible that as compute power goes up, we'll see a prolifieration of machines capable of doing voice. It'll move from the mainframe to being able to run on a laptop or your phone. As that happens, we'll get actual voice recognition and pattern natural language at the front end. That will perhaps be an important part of the Semantic Web.

![Wolfram|Alpha, 2009](/assets/images/wolfram_football-2009.jpg)
*Wolfram|Alpha, 2009*

We talked before about what a great challenge the Semantic Web is going to be from a user interface point of view. Conversational interfaces are going to be part of that. Of course it's also going to be really valuable to have compositional interfaces — for the visually impaired and so on.

Wolfram|Alpha is also a large curated database of data sets. Obviously I'm interested in the big data set which is out there, which is Linked Data. This everybody can connect to. I don't really know a lot about the internals of Wolfram|Alpha's data set. I don't know whether they're likely to put any of it out on the web as Linked Data — that might be an interesting addition. I imagine that quite a lot of it may have come _from_ the web of Linked Data.

e-Commerce and Linked Data
--------------------------

_RM: There have been [reports recently](https://web.archive.org/web/20090712073050/http://www.semanticuniverse.com/articles-semantic-web-based-e-commerce-webmasters-get-ready.html) that both Google and Yahoo will be supporting the Good Relations ontology and linked data for e-commerce. Companies such as Best Buy are already putting out product information in RDFa. What would be your advice to e-commerce vendors right now, to help them transition to this world of structured data on the Web. The same question could be asked across many verticals, but e-commerce seems like one area which has some momentum right now. Would you advise them just to put out their data as Linked Data?_

TBL: Yup! Certainly this year is the year to do it. I've been advising governments to do it and when you look at an enterprise, you find that a lot of the issues are the same. But when you put your data from government or enterprise out there, make sure you don't disturb existing ecosystems. Don't threaten those systems, because you've spent years building them up.

Maybe there's an analogy with when the Web first started and the first bookshops went online. They were more or less a flyer, saying 'hey we have a great bookshop at 23 Main St, come on down!'. Let's say that a person named Joe owned one of these early online bookshops. If somebody had suggested to Joe that he should put his catalog online, Joe would've felt that that was very proprietary data. And he'd be worried that other bookshops would see where he was weak, so they'd be able to advertise themselves as filling that niche he's weak in.

But when his competitors Fred and Albert put their catalogs online, then Joe can check which books people are browsing at Fred and Albert's websites. So Joe would be pursuaded to put his book catalog up online. But he doesn't put up the prices... until Albert and/or Fred does. And even if catalog and pricing is up there, _nobody_ puts their stock levels online. And there was a period of time when nobody had their stock levels up. But people got fed up with ordering stuff that wasn't in stock. So the first book shop to actually tell you about stock levels suddenly was then unbelievably attractive to its customers.

So there's this syndrome of **progressive competitive disclosure**. This happens when people realize that if you're going to do business with somebody, if you're going to have your partners up and down the supply chain, really it's useful to check the data web — and life goes much more quickly and open.

Best Buy may be what starts the ball rolling. Now if I want to look out for what's available, I can write a program to see what there is. If somebody wants to compete with Best Buy, to my program they'll be invisible unless they can get their data up in RDF. Doesn't matter whether they use RDFa or RDF XML, as long as it maps in a standard fashion to the RDF model, then they will be visible.

The Internet of Things
----------------------

_RM: I'm fascinated by how the Internet is becoming more and more integrated into the real world. For example the [Internet of Things](https://web.archive.org/web/20090713032026/http://www.readwriteweb.com/archives/5_companies_building_the_internet_of_things.php), where everyday objects become [Internet connected via sensors](https://web.archive.org/web/20090713032026/http://www.readwriteweb.com/archives/pachube_internet-enabled_environments.php). Have you been following this trend closely too, and if so what impact do you think this will have on the Web in say 5 years time?_

TBL: It connects very much with Semantic Web \[and\] with linked data. With Linked Data you've got the ability to give a thing a URI. So I can give a URI to my phone, and I can say _that's_ my phone in Linked Data. And also the company that made it can give a URI to the model of the phone. They can also put online all the specs of the phone, and then I can make a link to say that my phone is an example of that product. So now any system which is dealing with me and has access to that data will be able to figure out the sorts of things I can do with my phone, which actually is really valuable. Especially if the phone breaks.

The Semantic Web has already given URIs to things, and to types of things. When the things themselves have an RFID chip in them, then I think it's a very exciting world. One can take that RFID chip, go to the Internet and find out the data about the thing. Whether we'll be able to do that, whether the manufacturers will be open enough to _allow me_ to turn data about the identifier of the thing into data _about the thing_, is yet to be seen. But it's a very exciting idea.

![Pachube, 2009](/assets/images/pachube-2009.png)
*[Pachube](https://web.archive.org/web/20090713032026/http://www.pachube.com/), an example of the Internet of Things (see [ReadWriteWeb profile](https://web.archive.org/web/20090713032026/http://www.readwriteweb.com/archives/pachube_internet-enabled_environments.php)).*

Similarly, I'd like to be able to scan a barcode and get back nutritional information about what's in — for example — a can of food. But we don't have that yet. To get that sort of thing, which is very powerful, we need to build look-up systems, which allow you to translate an RFID code or a barcode into an HTTP address.

The Semantic Web is a web of things, conceptually. Tying an actual thing down to a part of the web is the last link — the last mile. Give the thing a notion of its own identity in the web.

Richard's Conclusion
--------------------

The over-riding message in this interview with Tim Berners-Lee, is for companies and organizations to **make their data available online**. Preferably as Linked Data, which uses a subset of Semantic Web technologies. But Berners-Lee noted that he'd even be happy with the data in CSV format.

*Editor's note: this interview was originally published as a two-part series on my former tech blog, ReadWriteWeb, over 8-9 July 2009 [[1](https://web.archive.org/web/20020401170332/http://www.readwriteweb.com/archives/interview_with_tim_berners-lee_part_1.php), [2](https://web.archive.org/web/20020401170332/http://www.readwriteweb.com/archives/readwriteweb_interview_with_tim_berners-lee_part_2.php)]. I have re-published the full interview here, as one post, because the original articles have either been deleted or mangled.*