# Making Cybercultural citable

An AEO (answer engine optimization) plan for Cybercultural. Fifteen changes, ordered by what they're actually likely to buy. The site's problem is not that answer engines can't reach it — they can, today. It's that the site is shown far more often than it's clicked. (This plan originally pinned that on posts having no subheadings; a re-scan in September 2026 found that claim rested on a faulty count — see item 1.)

Audited from the repo at `main` (dabf37a) · 220 posts, 49 pages · 19 September 2026 · revised against the swyx thread and Search Console data.

See also: [`aeo-baseline-2026-09-19.md`](./aeo-baseline-2026-09-19.md) for the raw Search Console numbers this plan is built on.

Template items 2, 3, 4 and 13 below are **already implemented** on this branch (`claude/project-thread-f2v83w`) — see the git log. What's left is the content work (items 0, 1, 8, 9, 10) and the optional items (5, 6, 7, 11, 12, 14).

---

## First, what's actually in the swyx thread

The thread that prompted this ([x.com/swyx/status/2078244735794413786](https://x.com/swyx/status/2078244735794413786)) contains **no AEO tactics at all**. Not one specific recommendation about markup, structure or content. It is entirely about the *process* of having an agent research AEO for you, plus a long tail of replies arguing about whether that's worth doing.

Root post:
> btw if you havent set your {codex | claude | gemini | devin} automations to autoresearch how to improve your seo/aeo every week you are really truly missing out on free, should-be-commoditizing-but-weirdly-untapped alpha

What swyx adds downthread: AEO will be responsible for **$1m of his revenue next year**; ChatGPT referred ~300 people to his site this year, which he tracks; the agent produces *"nothing weird at all, just… surfacing seo industry stuff that you or i obviously should spend zero braintime on"*; the move is to *"say yes to reasonable experiments and then give it a week with real prod data"*; and on cost, *"give it npx wrangler, if you implement traffic sampling it actually is quite costless"* — relevant since Cybercultural runs on Cloudflare.

He also raises one sharp, unanswered question: **on-policy vs. generalizable AEO** — *"does claude optimizing your aeo disproportionately work on claude?"* Applies directly to this document, which Claude wrote.

The replies push back credibly and reshaped this plan:
- **Edward Schaefer:** *"Autoresearch is easy. actually updating titles, pages, and links at scale is where people get stuck."*
- **@dhinnaship:** Claude SEO research runs *"just regurgitate the same Moz and Ahrefs checklists after week two."*
- **Daniel Mercer:** *"someone still has to own the changes and tell a real effect from traffic noise. that's usually the bottleneck."*
- **RH Fardin:** *"Auto-publishing the recommendations is how you speedrun a manual action."*

Net effect: item 0 (measurement baseline) was added because of Daniel Mercer's point, and item 14 (the research routine) was capped to monthly rather than weekly because of @dhinnaship's.

---

## Summary

| # | Change | Evidence | Effort | Status |
|---|---|---|---|---|
| 0 | Establish a measurement baseline before changing anything | Prerequisite | Small | **Done** — see baseline file; GA4 side in `ga4-ai-referrers.md` |
| 1 | Add subheadings to the 45 posts that have none | Weaker than first thought | Content, 45 posts | In progress — 2 of 6 starting posts done |
| 2 | Turn on heading IDs so sections are linkable | Strong | Small, with care | **Done** |
| 3 | Get the book pitch out of the indexed article body | Strong | Small | **Done** |
| 4 | Stop claiming About/Search/Subscribe/era pages are blog posts | Strong | Small | **Done** — incl. the follow-up pass on all remaining layouts |
| 5 | Give Richard a real Person entity | Reasonable | Small | **Done** |
| 6 | Fill out BlogPosting: dateModified, about, keywords | Reasonable | Medium | **Done** |
| 7 | Serve clean markdown alongside each post | Reasonable | Small | Done |
| 8 | Turn `/tags/[year]/` archives into answerable summaries | Narrowed after real data | Content, 27 pages, lighter | Not started |
| 9 | Add related-post links at the foot of each post | Reasonable | Small | Not started |
| 10 | Record lastUpdated and surface it | Reasonable | Small + ongoing | **Done** — key, visible line, `npm run check:dates`, backlog worked through |
| 11 | Name the AI crawlers in robots.txt | Documentary only | Trivial | **Done** |
| 12 | Add llms.txt | Speculative | Trivial | Not started |
| 13 | Fix the missing twitter:card tag | Not AEO — just a bug | Trivial | **Done** |
| 14 | Stand up the AEO research routine — monthly, not weekly | swyx's actual point | Small | Not started |
| 15 | Reframe titles/descriptions on broad-entity posts to match searcher intent | Strong, from query+page data | Content, ~6 posts, needs Richard | Not started — recommendations only |

---

## Item 0 — Establish a measurement baseline before changing anything

**Status: done.** Search Console (queries + pages, 3-month window) and the correlation analysis are in [`aeo-baseline-2026-09-19.md`](./aeo-baseline-2026-09-19.md).

Headline: **809,000 impressions, 4,980 clicks, 0.6% CTR, average position 7.** Well below what position 7 should typically yield — the site is shown far more than it's clicked, which is close to a textbook description of the AEO problem, visible in the site's own data.

The GA4 AI-referrer half of this item now has a walkthrough of its own: [`ga4-ai-referrers.md`](./ga4-ai-referrers.md). Nothing is needed in the site code — GA4 has recorded the referring hostname on every session all along — so the work is entirely in the GA4 interface.

Two things changed the shape of it. Google added a built-in **AI Assistant** channel on 13 May 2026, so some of this is already happening automatically; but it is not retroactive, it appears to omit Perplexity, and clicks from AI Overviews and AI Mode are still counted as ordinary Google organic and cannot be separated by anyone. The recommended step is therefore a **custom channel group**, which does apply retroactively and does catch Perplexity, plus an exploration segment for seeing which posts AI systems send people to.

Worth holding in mind when the number arrives: it is a floor, not a total. Referrers are stripped by the ChatGPT apps and most in-app browsers, and a citation nobody clicks leaves no trace at all — which, given 809,000 impressions against 4,980 clicks, is the dominant case.

## Item 1 — Add subheadings to the 45 posts that have none

**Status: in progress.** The original count of 103 was wrong, and so was the correlation this item was built on. The scan behind both only counted ATX headings (`## Heading`) and missed setext headings — a line of text underlined with dashes, which CommonMark renders as an `<h2>` just the same. 57 posts use setext exclusively and 4 mix both styles.

Re-scanned by rendering every post through the site's own markdown-it instance and counting `<h2>`–`<h6>` in the output:

| | Posts |
|---|---|
| ATX headings only (`##`) | 114 |
| Setext headings only (underlined) | 57 |
| Mixed | 4 |
| **No headings at all** | **45** |
| Total | 220 |

**The correlation claimed below did not survive this.** Four of the six worst-converting high-impression pages already had subheadings all along:

| Page | Impressions | CTR | Rendered `<h2>` |
|---|---|---|---|
| `src/posts/misc/the-golden-age-of-microblogging.md` | 57,409 | 0.06% | 6 (setext) |
| `src/posts/misc/marc-andreessen-2004.md` | 45,801 | 0.19% | 0 → **6 added** |
| `src/posts/wdh/1995-the-birth-of-javascript.md` | 40,777 | 0.39% | 5 (setext) |
| `src/posts/season4/2001-wayback-machine.md` | 13,706 | 0.09% | 0 → **6 added** |
| `src/posts/wdh/1993-mosaic-launches-and-the-web-is-set-free.md` | 11,658 | 0.09% | 6 (setext) |
| `src/posts/misc/bowienet-the-inside-story-of-its.md` | 5,426 | 0.39% | 7 (setext) |

So "every one of the six worst-converting pages has zero subheadings" was an artifact of the scan, not a finding. Two of six had none. The headed `internet-[year]` posts still average roughly 1.3% CTR against these six at 0.06–0.39%, so *something* separates the two groups — but on this data it is not the presence of subheadings, and this item is no longer the strongest evidence in the plan. Worth considering as alternative explanations: the `internet-[year]` posts answer a question people actually type ("what was the internet like in 2006"), they are a consistent series that interlinks, and their titles match the query almost verbatim. That is a title-and-intent story more than a structure story.

**Done so far:** 6 `##` headings each added to `marc-andreessen-2004.md` and `2001-wayback-machine.md` — the only two of the six that genuinely had none. Additions only; no existing prose was altered.

**Remaining, and worth re-prioritising given the above:**

- 45 posts have no headings, but 31 of them are `src/posts/memoir/` chapters — narrative book chapters where subheadings may be deliberately absent. That is Richard's call, not a mechanical fix. The non-memoir remainder is 14 posts.
- Before bulk-editing those 14, test the hypothesis on the two posts just changed. If CTR on them does not move, this item is not worth 45 posts of hand-editing.
- Anything that *does* get headings: write 3–6 `##` per post, phrased concretely ("How BowieNet got built") not as generic labels. Heading IDs already work (item 2 is done), so every new heading is automatically linkable. Avoid "Conclusion" — two of the setext posts already use it, and it is exactly the generic label that gives an answer engine nothing.
- Optional cleanup, no rendered change: converting the 57 setext posts to `##` would stop this miscount recurring. Purely cosmetic in the output.

## Item 15 — Reframe titles/descriptions on broad-entity posts to match searcher intent

**Status: not started — this is investigation and recommendations, not a content edit. Titles are Richard's own writing/branding; nothing below has been changed on the pages themselves.**

Item 1 flagged this as the likely real explanation once the subheading correlation fell apart. This item tests it properly by joining the baseline's top-50 queries against its top-50 pages by title, since Search Console's own query-per-page breakdown wasn't captured.

**The `internet-[year]` titles are near-literal copies of the queries that drive them.** All 19 posts share one title template, `What the Internet Was Like in [Year]`, against query variants like "what was the internet like in 1996", "internet in 1996", "1996 internet". A searcher scanning the results page sees their own question restated as the title — that's an unusually strong signal to click, and this series averages ~1.3% CTR against the site's 0.6% baseline.

**The six worst-converting high-impression posts are titled as narratives about a moment, not as answers to a query — and the query data suggests most of their impressions come from broad, generic head terms rather than anything narrative-shaped:**

| Post | Impressions | CTR | Title | Best-guess driving query (from top-50) |
|---|---|---|---|---|
| `the-golden-age-of-microblogging` | 57,409 | 0.06% | "The Golden Age of Microblogging, With Soup.io and Tumblr" | none in top 50 — likely broad "tumblr"/"microblogging" terms outside it |
| `marc-andreessen-2004` | 45,801 | 0.19% | "Marc Andreessen in 2004: Adapting to a New Web Era" | "marc andreessen" — 34,845 impr, 0.17% CTR on its own, i.e. almost the entire page |
| `1995-the-birth-of-javascript` | 40,777 | 0.39% | "1995: The Birth of JavaScript" | "when/why was javascript created" sum to only 1,487 impr — the other ~39,000 are from queries not in the top 50 |
| `wayback-machine-launch-2001` | 13,706 | 0.09% | "2001: The Internet Gets a Memory With the Wayback Machine" | none in top 50 — likely "wayback machine" itself, a huge generic term |
| `1993-mosaic-launches-and-the-web-is-set-free` | 11,658 | 0.09% | "1993: Mosaic Launches and the Web Becomes Open Source" | none in top 50 — likely "mosaic browser" |
| `bowienet-the-inside-story` | 5,426 | 0.39% | "BowieNet: The Inside Story of Its Creation" | "bowienet" — 2,284 impr, less than half the page's total |

Where the query is identifiable ("marc andreessen"), it confirms the pattern directly: it's a single, enormous, generic proper-noun search, and this page's 0.17% CTR on it *is* basically the page's overall 0.19% CTR. Someone typing "marc andreessen" is very likely after who he is now (bio, current company, net worth) — not a specific week in 2004 when he was easing out of Opsware. The title correctly describes the article; it just isn't what a generic-name searcher is expecting, so most of them don't click, and an AI Overview answering "who is Marc Andreessen" from broader sources doesn't need this page either.

The other five plausibly follow the same shape even without a matching top-50 query: they rank for a well-known name or thing (Tumblr, the Wayback Machine, Mosaic, BowieNet) at huge volume, but the title signals a narrow historical vignette rather than the general "what is this" answer most of that volume wants.

**This is a different problem from item 1's subheadings, and only partly fixable by editing titles.** For a head term this broad, some of the CTR gap may be structural — Cybercultural's angle is deliberately narrow and historical, and a chunk of that traffic was never going to click through regardless of title. What a title/description change can realistically do is filter better, not convert everything:

- Lead the meta `description` (the part of the snippet Google swaps in most often) with a plain factual answer to the broad query before the historical angle — e.g. for BowieNet, open with what it was and when, then pivot to "the inside story of its creation," so both the quick-answer searcher and the deep-dive searcher recognize a match.
- Where a title can signal the narrow angle without costing the broad match, do it (e.g. "...His Ning Pivot Before Web 2.0" tells a "marc andreessen" searcher up front this is a specific story, which won't raise CTR on the broad term but may reduce wasted impressions/improve position over time as engagement quality improves).
- Test on one post before touching all six, the same way item 1 is being tested on two posts before 14 more — pick the post with the clearest single driving query (`marc-andreessen-2004`, since "marc andreessen" is almost the whole page) and watch whether a description-only change moves its CTR before rewriting titles Richard has already published under.

**Not done here:** no titles or descriptions were changed. Richard should review before anything on this list ships — these are his headlines, and getting them wrong costs more than the status quo.

## Item 2 — Turn on heading IDs so sections are linkable

**Status: done.** `markdown-it-anchor` added to the active markdown pipeline in `.eleventy.js`, using the repo's own `slugifyString` and the `.heading-anchor` class that already had CSS in `src/assets/css/blocks/prose.css` (it existed but was unreachable — the site's real markdown-it instance never used the richer config in `config/plugins/markdown.js` that had anchors).

Deliberately did **not** swap in `config/plugins/markdown.js` wholesale — it also enables `typographer` and `linkify`, which would rewrite quotes/dashes/URLs across all 220 posts, and duplicates what `eleventy-plugin-external-links` already does.

## Item 3 — Get the book pitch out of the indexed article body

**Status: done.** `post.njk` now closes `</article>` right after `{{ content | safe }}`; the subscribe form, Ko-fi widget and "Buy the Book" section moved to a sibling `<div class="wrapper flow prose post-extras">`.

Side effect found and fixed for free: since Pagefind only indexes inside `data-pagefind-body` once any element carries that attribute, your own site search was indexing "Amazon" and "Bookshop.org" as content on all 220 posts. That's fixed too.

## Item 4 — Stop claiming About/Search/Subscribe/era pages are blog posts

**Status: done**, scoped to what's named below. `page.njk` (About, Uses, 404, wdh-timeline), `search.njk`, and `subscribe.njk` now emit `WebPage` schema instead of `BlogPosting`. The four era layouts (`dotcom.njk`, `web20.njk`, `preweb.njk`, `enshittocene.njk`) now emit `CollectionPage`. New partials: `src/_includes/schemas/webpage-schema.njk`, `src/_includes/schemas/collectionpage-schema.njk`.

Bonus fix: `404.md` already had `noindex: true` in its front matter, but `meta-info.njk` never read it — 404 has been indexable this whole time despite the declared intent. Wired up (`<meta name="robots">` now honors `noindex`), and set the same flag on `search.md`.

**Follow-up pass, done 21 September 2026.** The 12 remaining layouts that still set `schema: blog` were checked against what they actually render, and all had the same bug: each one claimed to be a `BlogPosting` whose `datePublished` was the moment of the build, so the date changed on every deploy. Now:

- `CollectionPage` — `blog.njk` (/notes/), `memoir.njk`, `rww.njk`, `year.njk`, `season1.njk`, `season2.njk`, `season4.njk`, `season5.njk`, `yearpages.njk`. All nine paginate a collection of posts, like the four era layouts already converted.
- `WebPage` — `seasons.njk`, `internethistory.njk`, `onthisday.njk`. Prose or interactive pages that list links rather than paginate a collection.

`post.njk` is now the only layout emitting `BlogPosting`, and a full build confirms it: 220 `BlogPosting` (exactly the 220 posts), 93 `CollectionPage`, 9 `WebPage`.

The same `&#39;` escaping bug found in item 6 applied to the other three schema partials, and hit every page on the site: the Book node's name shipped as "Silicon Valley&#39;s Web 2.0 Revolution" in the `@graph` on all 323 pages. All four partials now use the `toJsonLd` filter.

## Item 5 — Give Richard a real Person entity

**Status: done**, live on `main` (commit 7809d7f). No `Person` entity anywhere in the schema, no `sameAs` links. Add one `Person` node to the `@graph` in `base-schema.njk`, referenced by `@id` from every `BlogPosting` author field:
- `sameAs`: ricmac.org, mastodon.social/@ricmac, bsky.app/profile/ricmac.org, the ReadWriteWeb career archive, Amazon/Bookshop author pages
- `knowsAbout`: internet history, Web 2.0, the dot-com era, tech blogging
- `jobTitle`, `alumniOf`/`worksFor` (ReadWriteWeb as an `Organization`), `author` of *Bubble Blog* as a `Book` node with ISBN

## Item 6 — Fill out BlogPosting: dateModified, about, keywords

**Status: done.** `blogpost-schema.njk` now emits, on top of what it had:

- `dateModified` — reads the `lastUpdated` front-matter key that item 10 introduces, falling back to the publication date, so it never claims an edit that didn't happen. It's the same key `sitemap.njk` already honours.
- `keywords` and `articleSection` — from the post's own tags. No new taxonomy: the labels are the ones already shown in the post byline, now kept in `src/_data/tagMeta.js` and read from there by both the byline and the schema. The season tags are labels for this site's own series and mean nothing to a search engine, so they stay in the byline and out of `keywords`.
- `about` — a `Thing` per topic tag, with `sameAs` pointing at the matching Wikipedia entity: Web 2.0, the dot-com bubble, internet culture, ReadWriteWeb, and the history of the internet as the fallback for a post whose tags say nothing narrower. Per-post entities (Netscape, BowieNet, Mosaic) are still per-post work and are not done.
- `wordCount` — counted from the post's markdown source, so the book pitch and subscribe form that item 3 moved out of the article body don't inflate it.
- `image` as an `ImageObject` with the file's real pixel width and height, read at build time, instead of a bare URL string.

Four posts carry `lastUpdated: 2026-09-21` — the four that were genuinely edited that day (the two that got subheadings, the two that got the generic "Conclusion" heading renamed) — so `dateModified` says something real on the posts that have actually changed, and `sitemap.njk` reports a true `lastmod` for them. That is the beginning of item 10, not the whole of it.

One fix came with it: every string in the JSON-LD now goes through a `toJsonLd` filter. Nunjucks escapes HTML by default, and script contents are not entity-decoded, so an apostrophe in a title or description was reaching the JSON as a literal `&#39;`. That affected the existing `headline` and `description` fields on every post.

## Item 7 — Serve clean markdown alongside each post

**Status: done.** A second permalink per post — `/p/<slug>/index.md` — outputting raw markdown, advertised via `<link rel="alternate" type="text/markdown">`. Better bet than llms.txt (item 12): it's a mechanism a crawler can actually use today, and it degrades gracefully to a clean reading copy regardless of AI adoption.

Built by `src/post-markdown.11ty.js`, which paginates over `collections.posts` and writes `<post url>index.md` for all 220 posts. The source is cleaned rather than dumped: front matter becomes a short header (title, description, published/updated dates, author, canonical source URL), site-relative links and image paths are made absolute, `markdown-it-attrs` braces are dropped, and `{% youtube %}` shortcodes become plain YouTube links. The `<link rel="alternate" type="text/markdown">` is emitted from `src/_includes/partials/meta-info.njk`, gated on `schema == 'blog'` so only posts advertise one.

## Item 8 — Turn `/tags/[year]/` archives into answerable summaries

**Status: not started**, and **narrowed from the original version of this plan.** Originally aimed at "the year pages" broadly. Correction: the 19 posts in `src/posts/years/` (`internet-1994.md` through `internet-2012.md`) already have 3–6 `##` headings each and are the **best-performing content on the site** (`/p/internet-2010/`: 347 clicks, 22,790 impressions, 1.5% CTR). Nothing to fix there.

What's actually thin: the 27 files in `src/pages/yearpages/`, which render `/tags/[year]/` as pagination shells with no prose. Add 2–3 sentences of framing to each, cross-linking to the corresponding `internet-[year]` post where one exists.

## Item 9 — Add related-post links at the foot of each post

**Status: not started.** `src/_data/helpers.js:35` already defines `getSiblingContent(collection, item, limit, random)` — no template calls it. Render three tag-matched siblings below each post (outside the indexed article body, per item 3, which is already fixed).

## Item 10 — Record lastUpdated and surface it

**Status: started.** The key is `lastUpdated`, read by both `sitemap.njk` (as `lastmod`) and the post schema (as `dateModified`, item 6), falling back to the publication date when a post doesn't carry it. Four posts carry it so far.

**Decided 21 September 2026: the date is written by hand, not derived from git.** The question was worth asking, and the repo answers it. Git records every commit that touched a post, and most of them are not revisions a reader would notice: `380d20b` ("re-organized folders") moved 174 files, `dabf37a` ("updated Bluesky domain") changed one link across 6 posts, `16b8d98` ("updating canonical for rww posts") rewrote front matter in 23. Take git at its word and 164 of the 220 posts look modified since the date they claim. Filter down to commits that actually rewrote the prose and it's 15. A script cannot tell a rewritten introduction from a find-and-replace, and a `dateModified` with no visible change behind it is the kind of freshness signal search engines learn to discount.

So what is automated is the reminder, not the value: **`npm run check:dates`** (`config/build/check-updated-dates.js`) lists the posts whose text has changed since the date they claim, largest change first. It counts a commit as a revision only if it came after the one that added the post, changed the markdown below the front matter, touched at most three posts, and changed at least 25 words — the last two thresholds being the judgement call, and meant to be tuned. It only ever reports; it is deliberately not part of `npm run build`, and it needs a full clone (`git fetch --unshallow` if git only has a shallow one).

The visible line is now in too: `post.njk` prints "Updated Sep 2026" in the byline, after the publication date, on any post carrying `lastUpdated`. Month and year only — the exact day stays in the `datetime` attribute for machines, since a to-the-day revision date reads like a changelog on a post from 2023. Four posts show it today; the rest are untouched. That was the half of this item that matters most — a modified date the reader can't see is a claim with nothing behind it.

**Worked through the 15, 21 September 2026.** Each one's actual diff was read rather than taken on the tool's word. Nine were real revisions and now carry `lastUpdated` set to the date of the revision, not today: `internet-2005` and `2005-growth-of-web-20-and-rww` (both substantially rewritten in the same commit), `book-release-bubbleblog` (retitled, testimonials section added), `indie-review-2025` (sections rewritten), `bubble-blog-web20-memoir` (the subscription-plan passage cut), `bowienet-the-inside-story-of-its` (two intro paragraphs cut), `roadmap-bubbleblog` (book links and TOC rewritten), `on-selling-your-website` (several passages rewritten), and `039-tim-berners-lee-2009` (a researched aside added about Berners-Lee using the same acronym to Marc Andreessen in 1993). That makes nine.

Six were not revisions and were deliberately left alone: `blogging-1999` and `blogging-2000` gained the series navigation block when the 2001 post shipped; `014-the-sponsor-ads-era-2006` and `twitter-in-2007-the-open-platform` had broken image markup repaired and alt text added; `internet-2000` had its feature image swapped; and `2009-interview-with-tbl` gained a screenshot of the original 2009 post, which Richard judged — rightly — to be illustration rather than revision. None of them changes a word the post says, so none should tell a search engine it was revised.

Those six will keep appearing in `npm run check:dates`, since nothing in the repo records that they were considered and dismissed. If that gets irritating, the fix is a small ignore list rather than a looser threshold.

## Item 11 — Name the AI crawlers in robots.txt

**Status: done.** `robots.njk` now names GPTBot, OAI-SearchBot, ChatGPT-User, ClaudeBot, Claude-User, Claude-SearchBot, PerplexityBot, Perplexity-User, Google-Extended, Applebot-Extended, DuckAssistBot, Amazonbot, MistralAI-User, meta-externalagent and CCBot in a single explicit `Allow: /` group. As predicted this grants nothing the wildcard rule didn't already; the value is that the two opt-in tokens (Google-Extended, Applebot-Extended) are now an explicit yes rather than an absence, and the file says out loud what the site's policy is. The group repeats `Disallow: /404.html`, because a named group replaces the wildcard group rather than adding to it.

## Item 12 — Add llms.txt

**Status: not started, speculative.** No major answer engine has publicly committed to reading it. Cheap and harmless if you want the optionality, but item 7 has an actual mechanism behind it and this doesn't.

## Item 13 — Fix the missing twitter:card tag

**Status: done.** `<meta name="twitter:card" content="summary_large_image">` added to `meta-info.njk`.

## Item 14 — Stand up the AEO research routine — monthly, not weekly

**Status: not started.** The thread's only actual recommendation. Monthly, not weekly (per @dhinnaship's point above). Should read Search Console + the AI-referrer segment (item 0), never auto-publish (per RH Fardin's point), and must be allowed to report "nothing this month." The on-policy question above applies here most: a routine's later suggestions are the least trustworthy part of this whole plan.

---

## Questions still open

1. **The 22 RWW posts canonical to ricmac.org.** Deliberate, or inherited? Affects who gets cited for that material.
2. **How much of the About page becomes structured claims** (item 5)? Leaning minimal-but-real.
3. **Which posts get subheadings first (item 1)** — two were done (see item 1). The rest is now an open question, not a settled one: the evidence that subheadings drive the CTR gap did not survive the re-scan, and 31 of the 45 remaining posts are memoir chapters. Measure the two before doing more.
4. **Do you want the research routine (item 14)?** Monthly, grounded in your own numbers, proposing only.

---

Originally drafted and iterated as a published Artifact; this file is the portable copy for local work. The live version (with the fuller narrative, tables and callouts) is at: https://claude.ai/artifact/KSZQ2RiPhGemJTpzpxie4e
