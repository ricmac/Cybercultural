---
title: "1995: MySQL Arrives, Completing the LAMP Stack"
description: "By the end of 1995, the foundational pieces of the open source LAMP stack for web development (Linux, Apache, MySQL, PHP/Perl/Python) were in place. However, MySQL was not initially open source."
date: 2021-09-15
permalink: "p/1995-mysql-lamp-stack/"
tags: ['dotcom', '1995']
featureImage: "/assets/images/wdh/mysql_logo_1280.jpg"
---
![MySql logo](/assets/images/wdh/mysql_logo_1280.jpg)
By the end of 1995, the foundational pieces of the open source LAMP stack for web development (Linux, Apache, MySQL, PHP/Perl/Python) were in place. The acronym itself would not be coined for another few years, but the technology had arrived — albeit at varying stages of maturity and adoption. Version 1.0 of Linux had been [released in 1994](https://en.wikipedia.org/wiki/History_of_Linux) and commercial Linux distribution makers, like Red Hat and SUSE, were off to the races. Perl was the [go-too web programming language](https://webdevelopmenthistory.com/1994-perl-yahoo/) for web developers in 1995, although [PHP launched that year](https://webdevelopmenthistory.com/1995-php-quietly-launches-as-a-cgi-scripts-toolset/) and soon began pulling developers away. [Apache arrived in 1995 too](https://webdevelopmenthistory.com/1995-apache-microsoft-iis-web-server-market/), and quickly ramped up. All of these were open source technologies. MySQL, although it too debuted in 1995, was _not_ initially open source — which is why it took the longest of the LAMP technologies to mature and become widely adopted.

MySQL was initially an internal database system used by a Swedish company called TcX, from May 1995 onwards. It had been created by Michael (Monty) Widenius, who was later joined by David Axmark to partially open source it [in 1996](https://web.archive.org/web/20100326075814/http://dev.mysql.com/tech-resources/interviews/david-axmark.html). Finally, in 2000, MySQL was released under a full, GPL-based license (General Public License). Not coincidentally, its usage skyrocketed after 2000. Many famous web businesses of the 2000s adopted MySQL, including Facebook, YouTube, Twitter and Flickr. MySQL was seen by these and other startups as a cheap (can’t get cheaper than free!), lightweight and fast relational database system for websites and applications. It also supported the leading web programming languages, such as C, Perl and Java.

![LAMP Stack nowadays](/assets/images/wdh/1600px-LAMP_software_bundle.svg_-1024x576.png)
*LAMP Stack nowadays; source: [Wikipedia](https://en.wikipedia.org/wiki/File:LAMP_software_bundle.svg)*

The Web Database Market in the 1990s
------------------------------------

Databases took longer than other web-related software to gather momentum as open source products. In 1995, databases tended to be proprietary and expensive pieces of software. Oracle, Microsoft, IBM, Sybase and Informix were the [leading database vendors](https://www.eweek.com/database/is-ibm-a-player-in-the-relational-database-market/) of that time. There were simply no open source alternatives powerful enough to match them. As noted, MySQL wouldn’t be made publicly available until 1996 — which was also the year PostgreSQL launched. But back in 1995, early web startups had little choice but to pay the likes of Oracle or Microsoft if they needed a database. For instance Amazon, founded in 1994, started out using Oracle databases. Amazon “was built on traditional relational databases from the beginning,” according to an article (sponsored by AWS) [in The Register](https://www.theregister.com/2021/07/20/how_amazon_broke_free_from_oracle/). It used Oracle “to support its consumer operations, handling the core of its retail transactional systems.”

Although it wasn’t fully open source until 2000, MySQL did have the advantage in its early years of being much less expensive than the leading database vendors. If you used MySQL for your company intranet, it was free. [In other cases](https://www.databasejournal.com/features/mysql/article.php/1473901/Setting-Up-a-MySQL-Based-Website---Part-I.htm), you might have to pay $200 — but that was a pittance compared to what the likes of Oracle charged.

The big enterprise systems had their own advantages, however. As noted in an O’Reilly book from 1999 entitled [MySQL and mSQL](https://archive.org/details/mysqlmsql00yarg) (mSQL was a predecessor of MySQL):

> “Neither DBMS supports the full range of SQL. These engines lack some features that may be required by more complex applications. For some applications you also have to work a little harder on the client side to meet needs that you get for free from expensive database engines.”

Note: “get for free” is an odd choice of words, as of course you paid handsomely for those features!

![MySQL homepage, July 1998](/assets/images/wdh/MySQL_july98-892x1024.jpg)
*MySQL homepage, [July 1998](https://web.archive.org/web/19980705170536/http://www.mysql.com/)*

How MySQL Came to Be
--------------------

As hinted at above, MySQL was inspired by another low-cost relational database system: mSQL (Mini SQL). [Wikipedia called mSQL](https://en.wikipedia.org/wiki/MSQL) “the first low-cost SQL-based database management system.” As B. Scott Burkett wrote in [a 1997 article](https://www.linuxjournal.com/article/2206) for Linux Journal, mSQL was especially suited to creating a website using a Linux server paired with an HTTP server like Apache. According to Burkett, database systems like Oracle, Sybase and Informix “cost thousands of dollars, and generally require a seasoned database administrator (DBA) to operate efficiently,” whereas the Linux and mSQL model “costs a whopping $170 USD, and is a breeze to use.”

One of the users of mSQL was Michael (Monty) Widenius, the lead developer of what would become MySQL. Widenius had been involved in database work since 1979, in his role at TcX. [The story goes](https://matob.web.id/random/programming/the-history-and-the-future-of-mysql/) that he developed a simple ISAM \[indexed sequential access method\] database system [in 1982](https://web.archive.org/web/20090313160628/http://www.opensourcereleasefeed.com/interview/show/five-questions-with-michael-widenius-founder-and-original-developer-of-mysql), called UNIREG. In 1994, TcX began developing web applications and initially used UNIREG as its database. However, it wasn’t suitable for the web and this led Widenius to check out mSQL.

But mSQL had a major flaw too: it didn’t support indices, which of course UNIREG did. The O’Reilly book takes up the story from here:

> “Widenius contacted David Hughes—the author of mSQL—to see if Hughes would be interested in connecting mSQL to UNIREG’s B+ ISAM handler. Hughes was already well on his way to mSQL 2, however, and already had his indexing infrastructure in place. TcX decided to create a database server that was more compatible with its requirements.”

And thus MySQL was born.

MySQL’s Slow Rise to the Big League
-----------------------------------

Although MySQL was just an internal tool for TcX in 1995, after it was more widely released in 1996 it began to slowly build traction. It surpassed mSQL in popularity by 1999, and it was consistently more popular than the more sophisticated open source database system, PostgreSQL (even to this day). Part of the reason for its popularity was its wide compatibility, as Widenius explained in [a 2000 interview](https://web.archive.org/web/20000510110724/http://zend.com/zend/hof/widenius.php) with Zend:

> “One of the design goals of MySQL is to be as compatible as possible with as many different platforms and programs as possible. The API is fully compatible with mSQL, for example.”

![MySQL](/assets/images/wdh/mysql_server-1024x643.jpg)
*Source: MySQL and mSQL book (1999)*

Zend, a PHP-based “eBusiness” services company, remarked that “MySQL is the most popular database choice for PHP users as of this writing.” Given that many of the emerging startups of the early 2000s were built with PHP — and indeed by this time the LAMP acronym was in use — clearly there was a lot of momentum for MySQL after 2000. Especially after it finally followed the example of PostgreSQL and went fully open source.

Even so, given that it first appeared in 1995, it took a long time (in internet time, that is) for MySQL to even get close to competing with the likes of Oracle and Microsoft. Looking at its [list of users in mid-1998](https://web.archive.org/web/19980705170729/http://www.mysql.com/users.html), for example, there is not a single big name among them. “Yaboo – Yet Another BOOkmarker” was no Yahoo, and “Bagism a John Lennon fan page” sadly didn’t become an internet sensation.

But 2000 was the breakout year for MySQL. In [June 2000](https://web.archive.org/web/20000621081110/http://www.mysql.com:80/users.html), MySQL was finally able to list a big fish — Yahoo (the real one this time, not the Yaboo pretender) — among its growing list of users.

Conclusion
----------

In the early 2000s, there would be a lot of hand-wringing about which was the better open source database system for the web: MySQL or PostgreSQL. In Database Journal, Ian Gilfillan wrote an article in 2003 entitled [PostgreSQL vs MySQL: Which is better?](https://www.databasejournal.com/features/postgresql/article.php/3288951/PostgreSQL-vs-MySQL-Which-is-better.htm). He concluded that while PostgreSQL “has the upper hand” on features, MySQL was superior at that time on ease-of-use (mainly because it didn’t have as many features) and speed (because it is lightweight).

Ease-of-use and speed will always have an advantage when it comes to the web, because those are the same principles Tim Berners-Lee had in mind when he created it. It’s the reason why a more fully featured hypertext system, like what Doug Engelbart aspired to with his [oN-Line System (NLS)](https://webdevelopmenthistory.com/1969-building-the-on-line-system/), never stood a chance. MySQL fits like a glove into the web’s default template of simplicity and speed, so it’s little wonder it won out over the big enterprise systems and other open source alternatives.

I don’t usually end these historical posts with a note about the far future, but it’s hard to resist pointing out that the MySQL project eventually ended up in the hands of…who else, but Oracle. MySQL AB was acquired by Sun Microsystems in January 2008, which of course was itself acquired by Oracle two years later.

Just days after the MySQL AB sale in 2008, Monty Widenius was [writing about](https://monty-says.blogspot.com/2008/01/maria-engine-is-released.html) his brand new database project: MariaDB. Widenius initially [wanted](https://monty-says.blogspot.com/2008/01/maria-engine-is-released.html?showComment=1201856220000#c2593997869801622074) to make MariaDB the “default transactional engine for MySQL,” because (he noted in a presentation [a few months later](https://docs.huihoo.com/mysql/2008/Future-Design-Hurdles-to-Tackle-in-the-MySQL-Server.pdf)) “MySQL/Sun doesn’t have it’s \[sic\] own transactional storage engine.” Later, after he’d [left Sun](https://monty-says.blogspot.com/2009/02/time-to-move-on.html) to start his own company based on MariaDB, he [described](http://www.josetteorama.com/from-mysql-to-mariadb-michael-%E2%80%9Cmonty%E2%80%9D-widenius-talks-about-databases-and-his-projects/) MariaDB as “a full compatible and binary drop-in replacement of MySQL.”

But despite intense competition from its own creator, MySQL remains the ‘M’ in LAMP to this day.

***