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
| 4 | Stop claiming About/Search/Subscribe/era pages are blog posts | Strong | Small | **Done** |
| 5 | Give Richard a real Person entity | Reasonable | Small | Not started |
| 6 | Fill out BlogPosting: dateModified, about, keywords | Reasonable | Medium | Not started |
| 7 | Serve clean markdown alongside each post | Reasonable | Small | Not started |
| 8 | Turn `/tags/[year]/` archives into answerable summaries | Narrowed after real data | Content, 27 pages, lighter | Not started |
| 9 | Add related-post links at the foot of each post | Reasonable | Small | Not started |
| 10 | Record lastUpdated and surface it | Reasonable | Small + ongoing | Not started |
| 11 | Name the AI crawlers in robots.txt | Documentary only | Trivial | Not started |
| 12 | Add llms.txt | Speculative | Trivial | Not started |
| 13 | Fix the missing twitter:card tag | Not AEO — just a bug | Trivial | **Done** |
| 14 | Stand up the AEO research routine — monthly, not weekly | swyx's actual point | Small | Not started |

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

## Item 2 — Turn on heading IDs so sections are linkable

**Status: done.** `markdown-it-anchor` added to the active markdown pipeline in `.eleventy.js`, using the repo's own `slugifyString` and the `.heading-anchor` class that already had CSS in `src/assets/css/blocks/prose.css` (it existed but was unreachable — the site's real markdown-it instance never used the richer config in `config/plugins/markdown.js` that had anchors).

Deliberately did **not** swap in `config/plugins/markdown.js` wholesale — it also enables `typographer` and `linkify`, which would rewrite quotes/dashes/URLs across all 220 posts, and duplicates what `eleventy-plugin-external-links` already does.

## Item 3 — Get the book pitch out of the indexed article body

**Status: done.** `post.njk` now closes `</article>` right after `{{ content | safe }}`; the subscribe form, Ko-fi widget and "Buy the Book" section moved to a sibling `<div class="wrapper flow prose post-extras">`.

Side effect found and fixed for free: since Pagefind only indexes inside `data-pagefind-body` once any element carries that attribute, your own site search was indexing "Amazon" and "Bookshop.org" as content on all 220 posts. That's fixed too.

## Item 4 — Stop claiming About/Search/Subscribe/era pages are blog posts

**Status: done**, scoped to what's named below. `page.njk` (About, Uses, 404, wdh-timeline), `search.njk`, and `subscribe.njk` now emit `WebPage` schema instead of `BlogPosting`. The four era layouts (`dotcom.njk`, `web20.njk`, `preweb.njk`, `enshittocene.njk`) now emit `CollectionPage`. New partials: `src/_includes/schemas/webpage-schema.njk`, `src/_includes/schemas/collectionpage-schema.njk`.

Bonus fix: `404.md` already had `noindex: true` in its front matter, but `meta-info.njk` never read it — 404 has been indexable this whole time despite the declared intent. Wired up (`<meta name="robots">` now honors `noindex`), and set the same flag on `search.md`.

**Left alone, on purpose:** 14 other layouts (season1–5, rww, memoir, internethistory, onthisday, year, yearpages, seasons, blog) also set `schema: blog` and likely have the same bug — but their actual content role wasn't verified in this pass, and the plan only named the four era layouts explicitly. Worth a follow-up pass.

## Item 5 — Give Richard a real Person entity

**Status: not started.** No `Person` entity anywhere in the schema, no `sameAs` links. Add one `Person` node to the `@graph` in `base-schema.njk`, referenced by `@id` from every `BlogPosting` author field:
- `sameAs`: ricmac.org, mastodon.social/@ricmac, bsky.app/profile/ricmac.org, the ReadWriteWeb career archive, Amazon/Bookshop author pages
- `knowsAbout`: internet history, Web 2.0, the dot-com era, tech blogging
- `jobTitle`, `alumniOf`/`worksFor` (ReadWriteWeb as an `Organization`), `author` of *Bubble Blog* as a `Book` node with ISBN

## Item 6 — Fill out BlogPosting: dateModified, about, keywords

**Status: not started.** `blogpost-schema.njk` currently has only `headline`, `description`, `image`, `inLanguage`, `publisher`, `author`, `datePublished`. Add `dateModified` (needs item 10), `keywords`/`articleSection` (derivable from existing `tags` front matter, template-only), `wordCount`, an `ImageObject` for `image` instead of a bare URL. `about`/`mentions` (linking to Netscape, BowieNet, etc. as entities) is per-post work — do only for posts that matter.

## Item 7 — Serve clean markdown alongside each post

**Status: not started.** A second permalink per post — `/p/<slug>/index.md` — outputting raw markdown, advertised via `<link rel="alternate" type="text/markdown">`. Better bet than llms.txt (item 12): it's a mechanism a crawler can actually use today, and it degrades gracefully to a clean reading copy regardless of AI adoption.

## Item 8 — Turn `/tags/[year]/` archives into answerable summaries

**Status: not started**, and **narrowed from the original version of this plan.** Originally aimed at "the year pages" broadly. Correction: the 19 posts in `src/posts/years/` (`internet-1994.md` through `internet-2012.md`) already have 3–6 `##` headings each and are the **best-performing content on the site** (`/p/internet-2010/`: 347 clicks, 22,790 impressions, 1.5% CTR). Nothing to fix there.

What's actually thin: the 27 files in `src/pages/yearpages/`, which render `/tags/[year]/` as pagination shells with no prose. Add 2–3 sentences of framing to each, cross-linking to the corresponding `internet-[year]` post where one exists.

## Item 9 — Add related-post links at the foot of each post

**Status: not started.** `src/_data/helpers.js:35` already defines `getSiblingContent(collection, item, limit, random)` — no template calls it. Render three tag-matched siblings below each post (outside the indexed article body, per item 3, which is already fixed).

## Item 10 — Record lastUpdated and surface it

**Status: not started.** All 220 posts have exactly the same six front-matter keys; none has `lastUpdated`, though `sitemap.njk` already uses it if present. Add the convention, feed it into `dateModified` (item 6) and a visible "Updated" line.

## Item 11 — Name the AI crawlers in robots.txt

**Status: not started, low priority.** `robots.njk` is already a bare `User-agent: *` with no relevant disallow — GPTBot, ClaudeBot, PerplexityBot, OAI-SearchBot, Google-Extended and Applebot-Extended are all already permitted. Naming them explicitly grants nothing new; do it only for the documentation value.

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
