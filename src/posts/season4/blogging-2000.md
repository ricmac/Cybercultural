---
title: "2000: Bloggers Make Friends, but RSS Format Wars Kick Off"
description: "In 2000, the blogroll becomes a trend as bloggers increasingly link to each other. Meanwhile, RSS bifurcates into two opposing formats: Dave Winer's RSS 0.92 and the RDF-based RSS 1.0."
date: 2025-09-17
permalink: "p/blogs-rss-2000/"
tags: ['dotcom', '2000', 'season4']
featureImage: "/assets/images/2671536366_4c5418e326_oc.jpg"
---

![Seattle Central Library, January 2000](/assets/images/2671536366_4c5418e326_ob.jpg){loading="eager"}
*Photo of the Seattle Central Library, taken 1 January 2000 [by Thomas Hawk](https://www.flickr.com/photos/thomashawk/2671536366/).*

By the start of 2000, blogging was becoming a communal activity. One of its pioneers, Cameron Barrett, had a “Sites I Visit Often” list [in his sidebar](https://web.archive.org/web/20000302182058/http://www.camworld.com/) that had gotten longer over the past year and now included many weblogs. Although there wasn’t a word for this kind of list at the time, it would eventually become known as a “blogroll” (the earliest reference to this term I could find was [Doc Searls](https://web.archive.org/web/20010126064700/http://doc.weblogs.com/2000/12/17) in December 2000, who used the word “blogrolling” as a subheader).

![CamWorld blogroll, March 2000](/assets/images/camworld-march2000.jpg)
*CamWorld's impressive "blogroll" in March 2000, even though the term hadn't yet been coined.*

Some webloggers were even meeting in person. On 20 February, [Jessamyn West wrote](https://www.jessamyn.com/journal/feb00.html) in her online journal: “I had a nice day. Mucked about in the morning, headed to the Speakeasy to meet the Seattle Bloggers: Rebecca, Anita, Nina, Lisa, Dan, Clark, Jim, Jesse, and Eric.” She linked to each person’s weblog. 

On her site, [Anita Rowland commented](https://web.archive.org/web/20000417044031/http://www.halcyon.com/anitar/journal/2000/021900.html) that “I'd never met Jessamyn (or any of the webloggers to come) before, but soon we were chattering away like magpies.” Rebecca Blood, another attendee, [wrote on her blog](https://web.archive.org/web/20000303023230/http://rebeccablood.net/index.html) that “I could have hung out all evening.” 

![Weblog gather, February 2000](/assets/images/weblog-gather-feb2000.jpg)
*Anita Rowland's blog post about the "weblog gather" in Seattle.*

On 18 May 2000, Blood and two other bloggers went on an NPR radio show called The Connection, hosted by Christopher Lydon (who used the occasion to [start a blog](https://web.archive.org/web/20000619005103/http://www.wbur.org/connection/archive/2000/05/0518b.shtml) for the show, complete with blogroll). Also [on the radio](http://archives.wbur.org/theconnection/2000/05/18/web-logging.html) that day were Brad Graham, creator of Bradlands.com, and Evan Williams, CEO of Blogger.com. 

Graham had actually [coined the term “blogosphere”](https://www.npr.org/2010/01/06/122277812/the-man-is-gone-but-long-live-the-blogosphere) back in September 1999 — albeit jokingly. However, the term didn’t gain traction until 2002, when it was “recoined” by William Quick. So on the day Lydon interviewed him, the “blogosphere” wasn’t mentioned. (Tragically, Graham died in January 2010, aged just 41.)

During the radio show in May 2000, Graham said that he felt a personal connection to the blogs he liked. At one point Lydon asked if he’d met any webloggers in person?

“I have met a number of bloggers in person, actually, and some of my my heroes and sheroes,” Graham replied. “So yeah, I mean, there is […] a point after which you think, boy, I've been reading this person's writing and sort of reading over their shoulder for quite some time. I bet we would get on really well in the — quote, unquote — in the real world… and by and large, that's been the case.”

![The BradLands, May 2000](/assets/images/the-bradlands-may2000.jpg)
*[Brad Graham's weblog](https://web.archive.org/web/20000520005654/http://www.bradlands.com/), 20 May 2000, just after his radio appearance.*

But of course, not all bloggers lived in a big city and could easily meet up in meatspace. I started blogging in 2002, and lived across the world from people like Graham, Williams and Blood — so there was no opportunity to meet them in person. In any case, the sense of camaraderie amongst webloggers that Graham hinted at was most commonly expressed virtually, in what would come to be known as the blogroll.

Jason Kottke added a blogroll to his site [around October](https://web.archive.org/web/20001013013450/http://kottke.org:80/), after a redesign. He titled his list “Not Recommended At All,” in that ironic way many Gen Xers had back then. As one of the earliest and most read bloggers, Kottke’s links to other bloggers served as a way for newbies to discover their community — clicking a link and then the ‘back’ button (and repeat again) was a good way to explore new weblogs.

![Kottke blogroll, October 2000](/assets/images/kottke-blogroll-oct2000.jpg)
*Jason Kottke's blog, October 2000 — the first appearance of his blogroll.*

But how did one keep up with posts from each site? Surely there was an easier way than clicking multiple links in a sidebar each day…

## RSS Matures, Then Forks

When we left our [exploration of RSS in the previous post](/p/blogs-rss-1999/), it was the end of 1999 and Netscape — which invented the first protocol called "RSS" — had effectively lost interest in it. The last version it published, RSS 0.91 in July 1999, had pivoted the nascent protocol from an RDF-based format most suitable for [portals](/p/portals-1998/), into the kind of XML-based syndication format Dave Winer had been experimenting with.

Over the first half of 2000, Winer became increasingly frustrated that Netscape was not continuing to evolve RSS. So he took matters into his own hands. On 4 June, Winer [re-published the RSS 0.91 spec](https://web.archive.org/web/20000815202339/http://backend.userland.com/rss091) onto one of his sites — removing references to Netscape and noting that it “explains RSS as it's currently practiced.” More controversially, Winer added a copyright notice that asserted ownership of the document by his company, UserLand Software.

![RSS 0.91 announcement, June 2000](/assets/images/rss-091-announcement-june2000.jpg)
*Dave Winer's announcement of a new RSS 0.91 spec, June 2000.*

In a post on his blog Scripting News [on 7 June 2000](https://web.archive.org/web/20000817040045/http://scriptingnews.userland.com/backissues/2000/06/07#rss), Winer began with the provocative words: “Now, let the flames begin.” He then explained his various reasons for re-publishing the RSS 0.91 spec. From a technical perspective, a desire for simplicity was key:

> “Today RSS *is* simple, largely because it only builds on XML 1.0, and does not use namespaces or schemas, and it isn't a dialect of RDF. There's a logical route forward for RSS that says it should adapt to include all these concepts, but in doing so it would become vastly more complex, and imho, at the content provider level, would buy us almost nothing for the added complexity.”

It's worth noting here that RDF (Resource Description Framework), which is a way to [describe and exchange graph data](https://en.wikipedia.org/wiki/Resource_Description_Framework), was itself quite new in 2000. The first RDF spec was announced as a "Candidate Recommendation" [on 27 March 2000](https://web.archive.org/web/20000815062434/http://www.w3.org/TR/2000/CR-rdf-schema-20000327/). The goal at this time was for RDF to be "a foundation for processing metadata." But RDF would continue to evolve over the coming years, especially as the W3C's plan for a "semantic web" took shape.

Let's get back to RSS. Why was Dave Winer worried about RDF in the context of syndication? Because there were discussions happening in a mailing list at this time, in which some developers expressed interest in returning to Netscape’s original plan to make RSS an offshoot of RDF (remember, the original acronym stood for “RDF Site Summary”). Unfortunately, that mailing list is no longer accessible. But in [a 2018 post about RSS history](https://twobithistory.org/2018/12/18/rss.html), Sinclair Target quoted this message sent from Dave Winer on 9 June 2000:

> “I don’t want to go down the namespaces and schema road, or try to make it a dialect of RDF. I understand other people want to do this, and therefore I guess we’re going to get a fork.”

Namespaces were an aspect of RDF that, when applied to RSS, would enable publishers to add new modules — in other words, extend the functionality. The thinking was: by basing RSS on RDF, feeds could interoperate with other RDF vocabularies and tools.

As for who the “other people” were, Target explained more in his post:

> “Arrayed against Winer were several other people, including Rael Dornfest of O’Reilly, Ian Davis (responsible for a search startup called Calaba), and a precocious, 14-year-old Aaron Swartz, who all thought that RSS needed namespaces in order to accommodate the many different things everyone wanted to do with it.”

On 27 June, O'Reilly's Rael Dornfest published a "spec(ish) document" onto the O'Reilly website, outlining an "extensible namespace-based modular RSS."

![RSS Modules spec, June 2000](/assets/images/modular-rss-spec-june2000.png)
*Modular RSS Specification, 27 June 2000.*

Accompanying that page, Dornfest published an “[RSS Modularization Demonstration](https://web.archive.org/web/20010105084500/http://www.oreillynet.com/~rael/data/xml/rss/modular/demo/),” showing four different types of module.

![RSS modules example, 2000](/assets/images/rss-modules-example-2000.png)
*Rael Dornfest's RSS Modularization example, June 2000.*

By this point, it was becoming clear that a fork of RSS was imminent. [Eric van der Vlist reported](https://web.archive.org/web/20001025130548/http://www.xmlhack.com/read.php?item=621) reported on the site XMLHack that the "care taken to guarantee backward compatibility [by Dornfest] has not been sufficient to avoid cold appreciation from Dave Winer who would prefer to shift the focus to content rather than format."

![XML Hack post, June 2000](/assets/images/will-rss-fork-june2000.png)

Around this time, the rival RSS faction was formalized into The RSS-DEV Working Group. The name sounded a bit like a W3C group, but it was not connected to the web's governing body.

So essentially, Dave Winer wanted a simple, XML-based syndication format; but The RSS-DEV Working Group was willing to trade simplicity for extensibility. Dornfest and his pals wanted RSS to cover more use cases than simple syndication. 

There were commercial implications, too. Companies like [Moreover, an innovative news aggregator](/p/moreover/) that took unstructured data (usually via ‘scraping’) and [turned it into structured XML data](https://web.archive.org/web/20010124120400/http://www.www9.org/w9-devpubtools.html), supported a more extensible version of RSS. 

On 14 August, [Dornfest posted a proposal](https://lists.w3.org/Archives/Public/www-rdf-interest/2000Aug/0064.html) for an “RSS 1.0” specification to an RDF mailing list at W3C. Pointedly, he returned to using the original Netscape version of the RSS acronym: “RDF Site Summary.” The W3C immediately added the RSS 1.0 proposal as a link on its [main webpage for RDF](https://web.archive.org/web/20000815053217/http://www.w3.org/RDF/#link-rss10).

![RDF webpage, August 2000](/assets/images/rdf-webpage-aug2000.png)
*RDF frontpage on W3C, August 2000.*

Incidentally, Winer was still a couple of years away from coining his version of what the acronym meant: “Really Simple Syndication.” That didn't come till 2002. In 2000, he simply used “RSS” and didn’t say what the letters stood for.

Progress from the RSS-DEV group was quick. On 6 December 2000, they officially [launched RSS 1.0](https://web.resource.org/rss/1.0/). As explained in the document, the goal was to go back to the roots of Netscape’s original RDF-based version, RSS 0.90:

> “Advanced applications of RSS are demanding richer representation of relationships between intra- and inter-channel elements (e.g. threaded discussions). RDF (Resource Description Framework) provides a framework for just such rich metadata modeling. RSS 0.9 provided a basic (albeit limited) RDF base upon which to layer further structure.”

Aside: I'm not sure if this was coincidental or not, but on the very same day Tim Berners-Lee outlined his vision for the Semantic Web for the first time. According to [a writeup on XML.com](https://www.xml.com/pub/a/2000/12/xml2000/timbl.html) on 6 December, Berners-Lee "explained the importance of RDF/RDF Schema as a language for the description of "things" (resources) and their types."

Winer responded to RSS 1.0 by publishing RSS 0.92 near the end of December. In his blog, he [made it clear](http://scripting.com/2000/12/27.html) this was his project, and his project only:

> "Heads-up, I'm working on new features for RSS that build on 0.91. Calling it 0.92. I am not doing this as part of a working group, or in collaboration with anyone else. I'm doing an app that requires more functionality than 0.91 provides."

![RSS 0.92, December 2000](/assets/images/rss092-dec2000.png)
*[RSS 0.92](https://web.archive.org/web/20010205163200/http://backend.userland.com/rss092), announced in December 2000.*

This set the stage for a battle between two opposing RSS formats as 2001 dawned. 

Bear in mind that at this time, most bloggers — including established ones like Barrett, Kottke and Blood — had yet to adopt either format. So there was still much work to be done to bring RSS to blogging.

***

**The history of blogging and RSS series:**

1. [1999: Blogs Burst Onto the Scene, but RSS Is Slow To Settle](/p/blogs-rss-1999/)
2. 2000: Bloggers Make Friends, but RSS Format Wars Kick Off
3. [2001: Blogging Gets Serious With Warblogs and Movable Type](/p/blogs-rss-2001/)
4. [2002: The Blogosphere Takes Shape, Along With RSS 2.0](/p/blogs-rss-2002/)

[Subscribe here](/subscribe/) to continue tracking this series.