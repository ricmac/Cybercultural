---
title: "1969: Building the oN-Line System"
description: "On October 1, 1969, ten months after the historic Mother Of All Demos, Doug Engelbart from the Augmentation Research Center gave a second demonstration of the pioneering oN-Line System (NLS)."
date: 2021-02-02
permalink: "p/1969-building-the-on-line-system/"
tags: ['preweb']
featureImage: "/assets/images/wdh/de_1969_nls.jpg"
---
![Doug Engelbart](/assets/images/wdh/de_1969_nls.jpg)
It’s the evening of Friday the 1st of December, 2000. Nearly 32 years to the day when Douglas Engelbart presented [the mother of all demos](https://webdevelopmenthistory.com/1968-the-mother-of-all-demos/). Now 75 years old, Engelbart is at the National Building Museum in Washington, DC. It’s a black-tie event, which is unusual for Engelbart to attend. He’s dressed awkwardly in a rented black tuxedo, with a red carnation attached to the breast of the jacket, and he’s nervously smoothing his thinning white hair. He’s about to be awarded the 2000 National Medal of Technology.

The medal is the highest award for technology innovation in the United States. It’s been a long time coming for Douglas Engelbart, who has spent most of the years since the 1968 demo struggling to implement his software. Unlike Steve Jobs and Bill Gates, Engelbart never managed to turn his undoubted brilliance into fame and money.

It had all started out so promising. The December 1968 demo had established Engelbart’s credentials as a rock star in the computer industry. Just under a year later, on 21 November 1969, his group at the Stanford Research Institute became one of the first two nodes on the ARPANET — the forerunner of today’s Internet.

But the commercial world was about to encroach on Engelbart’s territory. In 1971, his right-hand man Bill English jumped ship to the trendy research labs of Xerox-PARC. Soon after, half of Engelbart’s team followed. It was Xerox-PARC that Steve Jobs later raided for inspiration that would lead to the Apple Macintosh. As for Engelbart, he didn’t make the jump into the commercial world until 1977 — and then only because he was forced to. That year, Stanford Research Institute sold his software (and Engelbart along with it) to a company called Tymshare, Inc. The software had previously been known by the acronym NLS, which stood for “oN-Line System”. Tymshare immediately re-named it ‘Augment’ and marketed the system as office automation software. So the software was quickly adapted to the commercial world. But for Engelbart himself, the transition was much harder. The following years would be increasingly difficult and frustrating for him.

Nevertheless, on the evening of 1 December 2000, Doug Engelbart is finally being given his due. The assembled gala guests at the National Building Museum are told that Engelbart, “more than any other person,” created the foundations of personal computing. The list of accomplishments for the medal is read out and it’s basically a checklist of what Engelbart demonstrated to the world in December 1968: “continuous, real-time interaction based on cathode-ray tube displays and the mouse, hypertext linking, text editing, on-line journals, shared-screen teleconferencing, and remote collaborative work.” These were the foundations for what would become the World Wide Web over two decades later.

The audience claps enthusiastically as Engelbart makes his way up to the stage, where a grinning Secretary of Commerce Norman Mineta is waiting with the gleaming gold medal. As Mineta holds the medal up for him to see, Engelbart looks at it — but he doesn’t smile. He stares at the medal, his mouth downturned and his eyes blank. This wasn’t what he’d set out to achieve, all those years ago: to augment human intelligence with computers.

![Photo](/assets/images/wdh/DCE_SComm_hirez2-1024x672.jpg)
*Photo [via Doug Engelbart Institute](https://www.dougengelbart.org/content/view/224/217/#galleryNMT-3)*

NLS Hardware
------------

So what had Engelbart actually built, after the promising demo at the end of 1968? After all, at that time it was just prototype software — not even a beta. But over 1969, solid progress was made in building out the oN-Line System (NLS).

In [a 1970 “final report”](https://apps.dtic.mil/sti/pdfs/AD0709211.pdf) by Engelbart and his staff at the Augmentation Research Center (ARC), the hardware and software of NLS developed over the past couple of years is outlined. The report states that “the configuration of the ARC computer facility has been relatively stable over the past two years,” but there “have been some peripheral additions, in particular the ARPA network interface and an external core system.”

The hardware at the time consisted of a leased computer from XDS (Xerox Data Systems), the core of which was described as follows:

> “A central processor with timesharing hardware operates from a 64K memory in 4 banks with 24-bit words and a cycle time of 1.8 microseconds.”

![SDS 940 Computer – console](/assets/images/wdh/102649032p-03-01.jpg)
*SDS 940 Computer – console; [Computer History Museum](https://www.computerhistory.org/revolution/mainframe-computers/7/181/730?position=0)*

Specifically, the computer was an [SDS 940](https://en.wikipedia.org/wiki/SDS_940) from Scientific Data Systems (SDS), a company that was acquired by Xerox in 1969. The computer was subsequently re-named the XDS 940. It was the first machine to directly support time-sharing, which allowed multiple users with different programs to use the computer at the same time.

The following is a block diagram of the computer as leased from XDS:

![block diagram of the computer](/assets/images/wdh/NLS_diagram1-1024x653.jpg)

The “special devices” that ARC added to this computer system are shown in the following diagram. They included the mouse, keyboard and Engelbart’s doomed chord keyset, along with a closed-circuit television system and monitor for display.

![special devices](/assets/images/wdh/NLS_diagram2-1024x501.jpg)

It’s particularly worth noting the “executive control,” which provided an interface to the 940 through the Memory Interface Connection (MIC). This allowed “asychronous access” to the core computing system “by any of the 6 devices connected to it” (the mouse, keyboard, etc.). In practical terms, this meant the executive control system co-ordinated the operation of the six devices with the core.

It turns out the display system was the most demanding. “We have spent more effort on maintenance of the display system than any other part of the facility,” the report noted.

The hardware was generally reliable, though. The computer up-time was “extremely high,” while the disc-file system reliability was said to be “fair.” But, as to be expected with any cutting edge computer system — particularly at the dawn of networked hardware — there were teething issues:

> “We had a period of several months of above-normal error rate, and 5 day down while clocks were rewritten; however, the troubles now seen to have been corrected.”

Also interesting, in the context of how NLS eventually led to the World Wide Web a couple of decades later, is the network interface. According to the 1970 report, the network interface in the ARC system “provides communication between the 940 and an Interface Message Processor (IMP) on the ARPA Computer Network.”

![Interface Message Processor](/assets/images/wdh/x105.82p-03-05.jpg)
*Interface Message Processor (IMP); [Computer History Museum](https://www.computerhistory.org/revolution/networking/19/407)*

NLS Software
------------

On the software side, in accordance with Engelbart’s bootstrapping philosophy — where each new feature is created using the features created before it — the NLS software was developed using an “evolutionary” process.

> “The operation and evolution of NLS takes place within a rich environment of software systems, many of which were created specifically to aid in its development.”

The report identifies the timesharing system (TSS) as the key underlying software for NLS:

> “Each user runs NLS as a subsystem of TSS and consequently has access to other TSS subsystems such as the KDS file system, the QED text-handling system, and the DDT symbolic debugging system.”

Although TSS was originally developed at the Berkeley campus of the University of California, the report notes that “the responsibility for maintenance of the ARC version presently lies with the \[ARC\] Center itself.” The ARC team also made improvements to TSS in anticipation of the ARPAnet. “Much work has been done in restructuring the TSS system to provide space for accommodating the storage requirements of the ARPA Network,” the report states a little later.

Incidentally, the company where Engelbart would end up in 1977 — Tymshare — [also got started](https://www.computerhistory.org/revolution/mainframe-computers/7/181) by using the SDS 940.

![Tymshare machine room](/assets/images/wdh/500004509-03-01.jpg)
*Tymshare machine room; [Computer History Museum](https://www.computerhistory.org/revolution/mainframe-computers/7/181/725)*

A feature of NLS in its early days was the large number of programming languages used.

> “The evolution of NLS has been facilitated greatly through the use of an extensive collection of languages and their respective compilers, most of which were developed by ARC itself.”

Although this variety seems to have helped with the bootstrapping process, the report admits that as a result “compiling, loading, and debugging the system is a complex process.”

It was a far cry from the user-friendly era of JavaScript in the 1990s. The ARC team were dealing with the NARP assembly language, and had also created “a collection of special-purpose languages (SPl’s) unique to NLS implementation.” One of these SPI’s was MOL940, which went by the name of MOL. It was described as “a machine-orented language for the XDS940 and was created by ARC to aid in the programming of NLS.”

![The MOL940 spec](/assets/images/wdh/MOL940-1024x762.jpg)
*[The MOL940 spec](http://bitsavers.trailing-edge.com/pdf/sri/arc/rulifson/MOL940_Preliminary_Specification_For_An_Algol-Like_Machine_Oriented_Language_For_The_SDS_940_Mar68.pdf) from March 1968.*

One new NLS software development, created with an eye on the internet future, was the Typewriter-Oriented Documention-Aid System (TODAS), “which will make much of the power of NLS available to users at remote locations through hard-copy terminals such as Teletypes.”

Also noteworthy is the feature that would eventually become hyperlinking:

> “The ability to examine the contents of NLS files has been enhanced by the implementation of a powerful set of JUMP commands, including provision for jumping between files using file links. (A file link is simply an occurrence of a file name, properly embedded within the text of another file.)”

The result of all these hardware and software innovations was onLine System, NLS, which was designed to be used as “an augmentation tool.” Here’s how the report describes NLS as at 1970:

> “NLS, as currently implemented, is a highly sophisticated text-manipulation system oriented toward on-line use with displays.”

It was basically a prototype web system, created before even the internet’s precursor (ARPAnet) had come online. As a technical system, it was undoubtedly an impressive achievement for Engelbart and his team. However, it was unclear what the future of NLS would be — after all, it was still a research project.

The report notes that “external forces” (an curious euphemism for ARPAnet) might play a role in the future direction of NLS:

> “External forces are generated by our participation in the ARPA Network experiment and by an increased awareness for the need to communicate with the “outside world” — people outside the Center who are engaged in related work.”

Little did they know that the “outside world” would literally turn into the **whole world** over the next few decades.

A View From Space
-----------------

On October 1, 1969, ten months after the historic mother of all demos, a visibly more confident Doug Engelbart gave [a second demonstration](https://youtu.be/Odv_vNFGOX4) of NLS. It was at the 32nd Annual Meeting of the American Society for Information Science (ASIS), in San Francisco. By now the 44-year old Engelbart was at the top of his game. He sported a full salt n’ pepper beard and he looked happy and relaxed.

![Doug Engelbart](/assets/images/wdh/DE_1969_relaxed-1024x784.jpg)

About 24 people now worked for Engelbart and there were 6 workstations connected to the SDS 940. The 1969 demo was more detailed than the first and focused on a few early use cases for NLS. It was (let’s be honest) a dry, analytical demo, but it had clearly been tailored to its technical audience. Engelbart concluded the presentation on an upbeat note though. “Some day it’ll be standard technology, available to everyone,” he said. He compared NLS to a car. “Right now it’s equivalent to the 1901 automobile — very expensive and it’s for the rich to play with.”

Those were prescient words, because of course computers today are as prevelent as cars — much more so, in fact.

As the video of the 1969 presentation faded out, it cut to a view of Engelbart’s lab. A large photo was on display in the lab — it was of the planet earth, taken from space. The photo was similar to the photo of earth used on the cover of the first Whole Earth Catalog in fall 1968, around the time of the mother of all demos. It summed up the state of computer technology at the end of the 1960s. Like the US space program, the US government-funded computer industry had explored the frontiers of technology. Engelbart and his team must’ve felt like astronauts in the realm of bits and bytes. They’d had a view of the information space that few others had gleaned.

![Whole Earth](/assets/images/wdh/113727_ed001f3459c3761f_b.jpg)
*Via [Smithsonian](https://collection.cooperhewitt.org/objects/51866727/with-image-113727/)*

The future of computing edged even closer for Engelbart just a few weeks after the October 1969 demo. On October 29, 1969, his SRI lab received the first ever message sent on the ARPANET, the precursor to today’s Internet. The message had been sent by a programmer at UCLA and was supposed to read “login.” Instead, it read “Lo” — before the system crashed.

But “Lo” was all that needed to be communicated. As in: Lo, the internet era has begun!

*Lead image [via Doug Engelbart Institute](https://www.dougengelbart.org/content/view/378/#Dougs-Lab-Environment-1)*

***