---
title: "The Enshittocene: How the Internet Got Worse in the 2010s"
description: "The 2010s was a period of the internet colonized by platforms, which caused 'enshittification' of web products. Users and developers both suffered, but are fighting back now through the decentralized web."
date: 2024-11-29
permalink: "p/enshittification/"
tags: ['enshittocene']
featureImage: "/assets/images/annie-pm-Ox0ppJImhpE-unsplashb.jpg"
---

![enshittification](/assets/images/annie-pm-Ox0ppJImhpE-unsplashb.jpg){loading="eager"}

What followed [Web 2.0](/web20/) was not Web 3.0 (or [Web3](https://thenewstack.io/web3-stack-what-web-2-0-developers-need-to-know/) for that matter), but a degraded version of the internet. Maybe we should call it Web -1.0, but a more scatological term has taken hold instead: [enshittification](https://en.wikipedia.org/wiki/Enshittification). It describes a period, roughly during the 2010s, when internet platform companies like Facebook, Twitter and Apple purposefully made their online products less user friendly, more difficult for developers to build on, and more prone to disrupting online publishers. Here are three examples:

1. Over time, [Facebook’s news feed](/p/019-web20-summit-2006-lou-reed/) has become less and less under the control of users. Now, [opaque algorithms](https://ricmac.org/2018/03/28/millennials-social-networks/) decide which items to put in your feed and whether (for example) your timeline posts with links will be properly circulated. This has a major impact on publishers, whose work is often devalued in Facebook’s feed through algorithmic choices completely outside of their control.
2. Twitter started out as an [open development platform](/p/twitter-in-2007-the-open-platform/) — or at least that’s how it was talked about by some of its own VCs. But starting [around 2012](https://www.theverge.com/2012/7/9/3135406/twitter-api-open-closed-facebook-walled-garden), Twitter betrayed the many developers who had built products on its APIs; sometimes even entire businesses. After shutting out developers, the third-party app ecosystem around Twitter shrivelled, which resulted in less features and functionality for users. And that was before [Elon Musk took over](https://thenewstack.io/what-elon-musks-twitter-takeover-means-for-developers/)!
3. Apple does not allow [external browser engines](https://thenewstack.io/apples-browser-engine-ban-is-holding-back-web-app-innovation/) on its iOS devices, meaning that its own browser engine — WebKit — has an effective monopoly over iOS. This put a damper on third-party developers hoping to build sophisticated web applications for iOS, because some of the functionality available in (for example) Google Chrome isn’t available in Apple's Safari browser. It’s a more subtle form of enshittification, but over time it’s meant there has been less competition for iOS apps (which Apple gets a cut of if they are premium apps), which in turn means less app choice for users.

![Apple browser ban](/assets/images/apple-browser-ban.jpeg)
*Image [via Feross](https://twitter.com/feross/status/1439801611623174144/photo/1).*

## What Happened to the Web 2.0 Renaissance?

If you have read [my serialised memoir](/p/roadmap-bubbleblog/), you might think Web 2.0 was a glorious period for the internet. And it was! During Web 2.0, roughly 2004-2012, we saw a renaissance of the ideals of the decentralised web. The likes of Facebook and Twitter [promoted developer platforms](/p/twitter-in-2007-key-facts/) and encouraged [third-party apps to build on them](/p/internet-2007/). So in the first decade of this century, users and third-party developers seemed to be paramount. 

However, in the quest for constant user growth and attendant increase in revenue, during the 2010s the successful Web 2.0 companies started to make choices that weren’t in the best interests of users (or developers). Cory Doctorow, who coined the word 'enshittification', [described it](https://pluralistic.net/2023/01/21/potemkin-ai/#hey-guys) as a kind of unvirtuous cycle:

> “Here is how platforms die: first, they are good to their users; then they abuse their users to make things better for their business customers; finally, they abuse those business customers to claw back all the value for themselves. Then, they die.”

The only problem with this theory is that platforms like Facebook and Twitter refuse to die! Some even seem to get ever more powerful, like Amazon. As Doctorow noted, Amazon started out in the late-90s as a scrappy e-commerce operation that offered great value to users:

> “…for many years, it operated at a loss, using its access to the capital markets to subsidize everything you bought. It sold goods below cost and shipped them below cost. It operated a clean and useful search. If you searched for a product, Amazon tried its damndest to put it at the top of the search results.”
 
But now, he continues, searching Amazon “doesn't produce a list of the products that most closely match your search, it brings up a list of products whose sellers have paid the most to be at the top of that search.” 

## Developer Enshittification

It’s not just user experience that has suffered from platform power. Even the programming tools that developers use have been enshittified. 

In 2014, Facebook developer Christopher Chedeau gave [a presentation at Oscon](https://www.youtube.com/watch?v=tXeBZ3WujTs) about a relatively new JavaScript framework called React. Its key innovation was the creation of a “virtual DOM” (the DOM — "Document Object Model" — is a programming interface that allows JavaScript to interact with and manipulate the structure, content, and style of an HTML document).

[As Chedeau explained](https://thenewstack.io/after-a-decade-of-react-is-frontend-a-post-react-world-now/), React gives you two “virtual” copies of the DOM — a before and after for each interaction — from which you run a “diffing” process to establish what exactly has changed. React then applies those changes to the actual DOM — meaning only a portion of the DOM is changed, with the rest of it staying as-is. That, in turn, means that only a portion of the webpage needs to be re-rendered for the end user.

![React theory](/assets/images/06976199-react_2014_oscon.jpg)
*Facebook developer Christopher Chedeau explaining React at Oscon 2014.*

If that sounds complex for developers, it is. But it was a revolutionary method of developing web apps and was especially suited to large applications where data changed a lot (like Facebook). Influential web developers took note, and adoption of React grew after 2014.

Despite its popularity, however, it didn’t take long for complaints to start rolling in about React. By the end of 2015, some developers were complaining of React “fatigue” because of the steep learning curve. More importantly, there was growing dissatisfaction with the heavy load that React-based web apps put on browsers. This is due to the large amount of JavaScript shipped to the end user, which means performance issues for many users. 

[According to Alex Russell](https://infrequently.org/2022/12/performance-baseline-2023/) from the Microsoft Edge browser team, “sites continue to send more script than is reasonable for 80+% of the world’s users, widening the gap between the haves and the have-nots.” Russell calls this “an ethical crisis for frontend” and puts the blame squarely on React and the frameworks that utilize it. 

In other words, React — which was introduced to the world by Facebook — has enshittified the web development world.

![React enshittification](/assets/images/d39221bc-russell-react-2021.png)
*Rebelling against React.*

## Decentralized Web: The Rebel Alliance

[The Enshittocene](/enshittocene/) as an internet era ran from the early 2010s through to the early 2020s, at which point the generative AI era took over (although some would argue that AI is further evidence of enshittification). Regardless of timeframe, the Enshittocene represents the inverse of the renaissance that was Web 2.0. Whereas Web 2.0 promised that [a thousand flowers would bloom](https://www.theregister.com/2011/10/19/google_planning_upgrades_google/#:~:text=a%20thousand%20flowers%20bloom), in the form of web applications and user-generated content, what ended up happening was the opposite: a handful of internet platforms became dominant and throttled innovation.

![Flowers bloom](/assets/images/flowers-bloom.jpg)
*A slide from a presentation I did in 2009 about Web 2.0 trends ([via ReadWriteWeb](https://web.archive.org/web/20090521113602/http://www.readwriteweb.com/archives/linked_data_is_blooming_why_you_should_care.php)).*

Far from flowers blooming in an open field, the 2010s saw the return of the dot-com [walled gardens](/p/1997-netscape-crossware-vs-the-windows-web/) — except this time, the walls were erected even higher. As Bluesky founder and CEO Jay Graber [said recently](https://about.flipboard.com/fediverse/jay-graber/), "we're in this trap where users are locked in and developers are locked out."

However, there is now a concerted effort to knock those walls down again using [decentralized web technology](https://thenewstack.io/developers-mastodon-and-bluesky-want-your-twitter-bots/). Indeed, Bluesky is among a number of new social media apps that is trying to build an open ecosystem again. That trend was pioneered by the [creators of ActivityPub](https://thenewstack.io/the-creator-of-activitypub-on-whats-next-for-the-fediverse/), the W3C web standard for open social networking. Mastodon is the biggest app built on ActivityPub, but there is hope that a bunch of different "[fediverse](https://thenewstack.io/fediforum-showcases-new-fediverse-apps-and-developer-network/)" apps will emerge to challenge centralized incumbants — Lemmy is a copy of Reddit, PeerTube is a YouTube clone, PixelFed is Flickr 3.0, and so on.

![Mastodon, November 2024](/assets/images/mastodon-28nov2024-ricmac.jpg)
*Mastodon, a beacon of hope in the post-Enshittocene landscape.*

 A resistance has formed among developers and indie publishers, and "users" who have rebelled against the centralized status quo and want to reclaim their online identities. It's a new world for those who have chosen to leave the Enshittocene behind them. Won't you join us?

p.s. in the Cybercultural header, you'll see the icons of [Mastodon](https://mastodon.social/@ricmac) and [Bluesky](https://bsky.app/profile/cybercultural.com). Click one or both of those links to connect with me on the decentralized web.

*Lead image: annie pm [on Unsplash](https://unsplash.com/photos/pink-and-white-heart-illustration-Ox0ppJImhpE)*
