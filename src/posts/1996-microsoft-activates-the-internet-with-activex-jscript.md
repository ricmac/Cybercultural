---
title: "1996: Microsoft Activates the Internet With ActiveX & JScript"
description: "In March 1996, Bill Gates announced a set of internet technologies called ActiveX. It was the moment web companies had feared — Microsoft was embedding the Internet into Windows."
date: 2021-02-16
permalink: "p/1996-microsoft-activates-the-internet-with-activex-jscript/"
tags: ['dotcom', '1996']
featureImage: "/assets/images/wdh/MS_PDC96_feature.jpg"
---
![Bill Gates PDC 1996](/assets/images/wdh/MS_PDC96_feature.jpg){loading="eager"}
In [March 1996](https://channel9.msdn.com/Events/PDC/PDC-1996/PDC-1996-Keynote-with-Bill-Gates), at Microsoft’s annual Professional Developers Conference (PDC), Bill Gates announced a set of internet technologies called ActiveX. “Part of the unique thing that Microsoft is doing,” he said regarding Microsoft’s approach to the Internet, “\[…\] is a strong level of integration into Windows.” This was the [purpose](https://news.microsoft.com/1996/03/12/microsoft-announces-activex-technologies/) of ActiveX, to “form a robust framework for creating interactive content using software components, scripts and existing applications.”

It was the moment Netscape, Sun Microsystems, and other web-focused companies had feared — Microsoft was embedding the Internet into its powerful Windows ecosystem.

The 1996 PDC, which came to be known as “the Internet PDC,” strongly signalled Microsoft’s intention to integrate the Internet into everything it did. The conference [slogan](https://www.dbase.com/Knowledgebase/dbulletin/bu07acti.htm) was “Activate the Internet,” but what Microsoft also activated was its considerable software armory against two fast-rising competitors — Netscape and Sun Microsystems. It was no coincidence that media reports following the conference compared ActiveX to both Netscape plug-ins _and_ Java applets.

With a combination of ActiveX and its upcoming Internet Explorer 3 browser (IE3), Microsoft believed it could capture web developer attention en masse and route millions of users from Netscape onto Internet Explorer.

“The browser will be at the center of the \[Windows\] system,” said Gates, in a sentence that must’ve been particularly chilling for Netscape. Here’s how Gates explained Microsoft’s Internet strategy:

> “The idea is that when you’re using local data, using remote data, it should be the same. And so what we want to do is have everything that comes up on the screen use the browser. The browser will be at the center of the system. What used to be called user, the central part of Windows that does dialogues, that will be our HTML engine; and so extended HTML will be everywhere.”

![Slide from Bill Gates’ 1996 PDC keynote.](/assets/images/wdh/PDC96a-1024x604.jpg)
*Slide from Bill Gates’ 1996 PDC keynote.*

Gates was asked later in the keynote, as part of a series of PR softball questions, whether Microsoft would soon have “majority browser market share.” Smiling, Gates replied that “it is certainly our goal to achieve that” and that “we do expect our share, which is fairly low today, to be very significant over the next year.”

While it’s hard to quantify browser market share [from the early days](https://en.wikipedia.org/wiki/Usage_share_of_web_browsers#Older_reports_(pre-2000)), in retrospect we can view 1996-97 — and specifically the release of IE3 — as the turning point for Microsoft. It would indeed end up with majority market share, by the end of [1998](https://www.wired.com/2009/09/0928ie-beats-netscape/).

JScript
-------

It wasn’t just browser share that Microsoft went on to take from Netscape. Microsoft also took JavaScript and molded it to fit the Windows ecosystem.

Microsoft’s version was called JScript, in order to avoid the copyrighted word “Java.” But that was the only thing they couldn’t directly copy. Since Netscape and Sun Microsystems had [released](https://tech-insider.org/java/research/1995/1204.html) JavaScript in 1995 as an “open, freely licensed proposed standard available to the entire Internet community,” Microsoft was able to freely reverse-engineer it and [release its version](https://news.microsoft.com/1996/07/18/microsoft-announces-activex-scripting/) as an “open implementation.” JScript was accordingly released as a part of Internet Explorer 3.0 in August 1996, the same month Netscape Navigator 3.0 was launched with JavaScript 1.1.

Windows integration was the primary reason Microsoft didn’t use Netscape’s version of JavaScript. In May 1996, it was [announced](https://news.microsoft.com/1996/05/29/microsoft-internet-explorer-3-0-beta-now-available/) that JScript was a part of the ActiveX suite of technologies. In case it wasn’t already obvious by that point, Microsoft reiterated its desire to match [Netscape’s “ONE” strategy](/p/1996-netscape-lays-the-groundwork-for-web-applications/) of moving beyond web pages and into the realm of web applications:

> “For developers and webmasters, Microsoft Internet Explorer 3.0 introduces a comprehensive, next-generation architecture for creating active Web content, bringing Internet capabilities beyond the browser to applications and operating systems.”

The key phrase there was “beyond the browser,” an unsubtle dig at Netscape — which of course was primarily known as a browser company. Microsoft’s key business advantage was that it could tightly integrate its IE browser with the Windows OS. While this would later put it in hot water legally, from a technical perspective it allowed JScript access to different objects exposed by the IE browser (such as ActiveXObject, which I’ll discuss below). This was the key point of difference with JavaScript as implemented in Netscape, which did not have access to those same objects.

ActiveX
-------

ActiveX, [announced](https://news.microsoft.com/1996/03/12/microsoft-announces-activex-technologies/) in March 1996 at the PDC conference, was Microsoft’s new component object model for the Web. It had been re-tooled from two existing Microsoft technologies, Component Object Model (COM) and Object Linking and Embedding (OLE). The easiest way to think of ActiveX is that it provided building blocks for interactive applications. Merlin Hughes explained it nicely in a March 1997 [InfoWorld article](https://www.infoworld.com/article/2077620/javabeans-and-activex-go-head-to-head.html):

> “In effect, software development with a component object model is like building with Legos building blocks. Instead of building an entire application from scratch, you build an application by hooking together your existing building blocks. This approach not only saves time, money, and effort, but it produces more consistent, reliable applications.”

![Bill Gates at PDC 1996, talking about the road ahead.](/assets/images/wdh/bill_gates_road-1024x670.jpg)
*Bill Gates at PDC 1996, talking about the road ahead.*

As part of the ActiveX package, Microsoft actually released two separate scripting languages: JScript (the copy of JavaScript) and VBScript (a scripting language based on Microsoft’s Visual Basic). Using either became known as “Active Scripting.” Some inside Microsoft thought VBScript should’ve been the only scripting language supported in IE3. However, by 1996 JavaScript had achieved enough adoption that Microsoft executives knew they had to offer a version of JavaScript too. As noted in [JavaScript: The First Twenty Years](JavaScript: The First Twenty Years), “the IE team’s goal was for IE 3 to be compatible with Netscape 3 and that required including JavaScript support.”

As we shall soon see, the compatibility issue would rear its ugly head in other ways. But first let’s clarify how ActiveX was used in IE3.

Developers could build ActiveX controls (basically, small web applications) using JScript, VBScript, or another language. IE3 allowed those ActiveX controls to be embedded in web pages, thus providing dymanic functionality. It was similar to what plug-ins enabled in Netscape Navigator — indeed, there was literally an ActiveX plug-in that Netscape users could install to view certain ActiveX content.

The scripting languages were also seen as a way to connect together different ActiveX controls on a web page. In March, prior to the JScript announcement, Microsoft stated that “Active scripts, including those created in Visual Basic, Scripting Edition, or JavaScript-compatible scripts, can be used to “glue” together these building blocks to create rich Web-based applications.”

Although ActiveX was designed to be an architecture that could be used by any programming language and on any platform, the reality turned out to be rather different. Some platforms didn’t provide support for ActiveX, including at least one of Microsoft’s own operating systems! Web designer Jeffrey Veen discovered this in late-1996, when he downloaded IE3 onto the Win3.1 OS (first released in 1992 and still officially supported in 1996). Veen wrote in [a December 1996 article](https://www.wired.com/1996/12/microsoft-released-ie3-for-win3-but-wheres-activex/) in Wired:

> “ActiveX controls need to be almost completely rewritten for every platform supported by Internet Explorer, and that means different code for Mac, Win95, Win3.1, and even different flavors of WinNT. But after talking to a Microsoft product manager, I found out that the Win3.1 version doesn’t support ActiveX due to a “lack of developer demand.”

The User Experience
-------------------

For browser users, ActiveX was most commonly experienced as multimedia. In its March announcement, Microsoft stated:

> “ActiveX Controls enable developers to embed a wide variety of software components, such as graphics viewers, animation sequences, credit-card transaction objects or spreadsheet applets directly into hypertext markup language (HTML) pages.”

One key difference with Netscape’s plug-ins was that ActiveX controls would be automatically downloaded and installed for IE3 users, with [little or no](https://cio-wiki.org/wiki/ActiveX) user intervention. However, this also introduced significant security risks — which soon caused problems for Microsoft.

As explained in this [O’Reilly tutorial](https://www.oreilly.com/library/view/web-security-and/1565922697/ch04s03.html), ActiveX controls were inserted into HTML using the &#60;OBJECT&#62; tag. Here’s their example:

```html
<OBJECT ID="Exploder1" WIDTH=86 HEIGHT=31
 CODEBASE="http://simson.vineyard.net/activex/Exploder.ocx"
 CLASSID="CLSID:DE70D9E3-C55A-11CF-8E43-780C02C10128">
<PARAM NAME="_Version" VALUE="65536">
<PARAM NAME="_ExtentX" VALUE="2646">
<PARAM NAME="_ExtentY" VALUE="1323">
<PARAM NAME="_StockProps" VALUE="0">
</OBJECT>
```

The executable code is then downloaded from a web server and run inside the user’s IE3 browser.

![ActiveX controls](/assets/images/wdh/axtivex_controls.png)
*Image: [O’Reilly Media](https://www.oreilly.com/library/view/web-security-and/1565922697/ch04s03.html)*

When IE3 was [launched](https://news.microsoft.com/1996/08/13/microsoft-launches-microsoft-internet-explorer-3-0-with-exclusive-free-content-offers-from-top-web-sites/) on 13 August, 1996, Microsoft played up its “active content” strategy:

> “Developers use ActiveX to make Web sites come alive using multimedia effects, interactive objects and sophisticated applications, creating a user experience comparable to that of high-quality CD-ROM titles.”

At this time, Microsoft boasted that “more than 1,000 ActiveX Controls” were available on IE3 at launch.

Example JScript App
-------------------

An example of how JScript could access functionality not available via JavaScript, is its use of ActiveXObject to [connect to an Excel spreadsheet](https://documentation.help/MS-Office-JScript/jsobjActiveXObject.htm). Here’s some example code (// lines are comments):

```js
var ExcelSheet;
ExcelSheet = new ActiveXObject(“Excel.Sheet”);
// Make Excel visible through the Application object.
ExcelSheet.Application.Visible = true;
// Place some text in the first cell of the sheet.
ExcelSheet.ActiveSheet.Cells(1,1).Value = “This is column A, row 1”;
// Save the sheet.
ExcelSheet.SaveAs(“C:\TEST.XLS”);
// Close Excel with the Quit method on the Application object.
ExcelSheet.Application.Quit();
// Release the object variable.
ExcelSheet = “”;
```

Without going into too much detail here, you can see that this bit of JScript enables a web page to interact with an Excel spreadsheet. Although it’s worth noting that the above example would’ve required lax security practices in order to work on the World Wide Web. As the documentation quoted above put it: “Creating an object on a remote server can only be accomplished when Internet security is turned off.”

Incompatibilities
-----------------

Another problem in 1996 was that interactive code inserted into HTML didn’t always work. A lot depended on which browser you used (indeed, which browser _version_ you had installed) and which OS you had.

For a start, IE3 had limited support for Netscape’s version of JavaScript. JavaWorld’s Gordon McComb explained why in a [1 October 1996](https://www.infoworld.com/article/2077267/new-javascript-features-in-navigator-3-0.html?page=2) article:

> “It \[IE3\] also adds support for JavaScript, but the support is limited almost entirely to the JavaScript language specification used for Netscape 2.0 (now referred to as JavaScript 1.0). Therefore, if your pages contain JavaScript 1.1 elements for Netscape 3.0, you can count on them not working (or causing an error) in Internet Explorer 3.0.”

And thus the incompatibility nightmares began in web browsers. In practical terms, it meant developers were forced to write multiple versions of code in order for both IE3 and NN3 to understand it. Much of that code would be ignored by the browsers, as McComb noted:

> “Internet Explorer 3.0 will ignore the JavaScript \[1.1\] code (since it does not yet understand JavaScript version 1.1) and execute only the code in the VBScript container. Conversely, Netscape 3.0 does not understand VBScript and will ignore code in its &#60;SCRIPT&#62; container.”

It wasn’t just incompatibilities between the Netscape and Microsoft browsers. Cross-platform compatibility for each browser was a pipe dream at this point, too. Then there were the various issues caused by different versions of the same browser. Here’s McComb [a month later](https://www.infoworld.com/article/2077284/frequently-sought-solutions.html):

> “The JavaScript language specification has been too fluid to assure compatibility across versions. Bugs, quirks, and glitches exist from version to version, making it extremely difficult to ensure that pages work reliably for everyone. As an example, certain aspects of using the document.write() method with frames were “broken” in Netscape 2.01 for some platforms. The problem was fixed for users of 2.02 and 3.0, but there are still copies of 2.01 in use.”

A Fine Mess
-----------

This was all a consequence of the web browser market broadening to include two major participants: Netscape and Microsoft. Both, as we’ve seen, had differing objectives. Netscape wanted to be a platform for “network-centric applications,” with its browser as the “universal client.” Microsoft, on the other hand, still wanted to promote Windows-centric applications — although it had conceded that the Internet must be integrated into the system. Microsoft saw its IE browser as being the central UI of this system.

In the next post in this series about the evolution of JavaScript (and browsers in general), we will look at the emerging push for web standards. Because it was clear by the end of 1996 that the web development industry needed to find some common ground between the Netscape and Microsoft approaches.

***

Read next: [1996: Flash and CSS Bring Design to the Web](/p/1996-flash-css-web-design/)