# Seeing AI traffic in GA4

Plan item 0's last open piece: knowing how many people arrive at Cybercultural from
ChatGPT, Perplexity, Claude, Gemini, Copilot and the rest.

The site already has everything it needs on the code side. GA4 is loaded on every page
(`src/_includes/partials/meta-info.njk`), it records the referring hostname on every
session automatically, and it has been doing so all along. Nothing has to be added to the
site. The whole job is in the GA4 interface, and it is about twenty minutes of clicking.

---

## The thing that changed in May 2026

Google added a built-in **AI Assistant** channel to GA4 on 13 May 2026. When someone
lands on the site from a recognised assistant, GA4 now tags the session with the medium
`ai-assistant` and files it under "AI Assistant" in the default channel group, instead of
burying it in "Referral" with every other inbound link.

That means part of this item is already done, for free, without anyone doing anything.
But it has three holes worth knowing about before you go looking:

1. **It is not retroactive.** Anything before 13 May 2026 is still sitting in Referral or
   Direct. The built-in channel cannot tell you what AI traffic looked like last year.
2. **Google has not published the list.** ChatGPT, Gemini, Claude, DeepSeek, Copilot and
   Grok have all been named at various points. **Perplexity appears to be missing**, which
   matters, because Perplexity is one of the more likely referrers for an archive like
   this one.
3. **Google's own AI does not count.** Clicks from AI Overviews and AI Mode arrive tagged
   as ordinary Google organic search. GA4 cannot separate them, and neither can anyone
   else. For a site with 809,000 impressions and 0.6% CTR, this is almost certainly the
   largest AI effect on the site — and it is the one that stays invisible.

So the built-in channel is a good start and not the finish. The steps below fix holes 1
and 2. Nothing fixes hole 3.

---

## Step 1 — The five-minute look (do this first)

Before building anything, find out whether there is any traffic here at all. On a personal
site this number is often very small, and it is better to know that before spending time
on reports.

1. Open GA4 and pick the Cybercultural property.
2. Left sidebar: **Reports → Acquisition → Traffic acquisition**.
3. Set the date range (top right) to **Last 12 months**.
4. Above the first column of the table, change the dimension dropdown from
   "Session default channel group" to **Session source**.
5. In the search box just above the table, type `chatgpt`. Then `perplexity`. Then
   `claude`. Then `gemini`. Then `copilot`.

Each search shows you sessions from that source over the last year. If those searches come
back empty or in single digits, that is the honest answer for now, and steps 2–4 are worth
doing anyway so the measurement is in place when it does start.

While you are here, also switch the dimension to **Session default channel group** and look
for an **AI Assistant** row. If it is there, Google's built-in channel is live on this
property.

---

## Step 2 — Build the custom channel group (the main piece)

A custom channel group is the one that is **retroactive** — it re-buckets data GA4 already
collected, so it can show you AI traffic from before May 2026. It also catches Perplexity
and the long tail that Google's list leaves out, and once it exists it appears as an option
in the normal reports rather than needing an exploration every time.

1. **Admin** (the gear icon, bottom left) **→ Data display → Channel groups**.
2. Click **Create new channel group**.
3. Name it `AI Assistants`. Description: whatever helps you in six months.
4. You will see a copy of the default channel list. Click **Add new channel**.
5. Name the channel `AI Assistants`.
6. Set the condition to: **Source** → **matches regex** → paste the regex from the bottom
   of this file.
7. Click **Apply**, then **Done**.
8. **Drag the new "AI Assistants" channel above "Referral"** in the list. This matters more
   than anything else on this page: GA4 files each session into the *first* channel whose
   rule it matches, so if Referral sits above it, Referral swallows everything and the new
   channel stays empty.
9. **Save group**.

To use it afterwards: **Reports → Acquisition → Traffic acquisition**, change the first
column's dimension to **Session custom channel group (AI Assistants)**.

Standard GA4 properties allow two custom channel groups, so there is room for one more
later if you ever want a different cut.

---

## Step 3 — Check the data retention setting

Explorations (step 4) can only reach back as far as GA4 has kept the event-level data, and
some properties are still set to the 2-month default. Standard reports are unaffected, so
this only matters for step 4 — but it costs nothing and it is easy to forget.

**Admin → Data collection and modification → Data retention** → set **Event data retention**
to **14 months** → **Save**.

This is not retroactive either. Whatever was already dropped is gone. Setting it now means
the next twelve months are there when you want them.

---

## Step 4 — The exploration: which posts is AI sending people to?

The channel group tells you *how much*. This tells you *what for* — which is the part that
actually feeds the rest of the AEO plan, because it says which pages AI systems consider
worth citing.

1. Left sidebar: **Explore** → **Blank**.
2. In the **Variables** column (far left), next to **Segments**, click **+**.
3. Choose **Session segment**.
4. Name it `AI assistants`.
5. Under "Add new condition", search for and pick **Session source**.
6. Set it to **matches regex** and paste the same regex from the bottom of this file.
7. **Save and apply**.
8. Still in Variables, next to **Dimensions**, click **+** and add **Landing page + query
   string** and **Session source**. Next to **Metrics**, click **+** and add **Sessions**
   and **Engaged sessions**.
9. Drag **Landing page + query string** into **Rows** (middle column), drag **Sessions** and
   **Engaged sessions** into **Values**, and drag your `AI assistants` segment into
   **Segment comparisons**.
10. Set the date range at the top of the Variables column to the longest span you have.

You now have a list of the pages AI assistants send people to, ranked. Add **Session source**
as a second row dimension if you want to see which assistant favours which post — that is
the genuinely interesting question, and the answer tends to differ a lot by assistant.

---

## What this will never show you

Worth writing down, because the numbers will look lower than reality and it is easy to draw
the wrong conclusion from that:

- **Sessions with no referrer.** The ChatGPT iOS and Android apps, ChatGPT's Atlas browser,
  and most in-app browsers strip the referrer header. Those visits land in **Direct**, and
  nothing distinguishes them from someone typing the URL. Estimates of how much AI traffic
  this hides run to more than half; treat that as an estimate, not a measurement.
- **AI Overviews and AI Mode**, as above — counted as Google organic.
- **Citations that nobody clicked.** If ChatGPT summarises a Cybercultural post and the
  reader never clicks through, GA4 records nothing at all. Given the site's Search Console
  numbers — shown 809,000 times, clicked 4,980 — this is the dominant case, and it is
  exactly the gap the AEO plan exists to address. GA4 measures the clicks that survive it,
  not the citations.
- **AI crawlers.** GPTBot, ClaudeBot, PerplexityBot and friends do not run JavaScript, so
  GA4 never sees them. Cloudflare's own analytics can show them; GA4 cannot.

The useful way to read the resulting number: it is a floor and a trend line, not a total.
Whether it goes up over the next few months is the signal. Its absolute size is not.

---

## The regex

Paste this into both step 2 and step 4. GA4 matches it against the session source as a
partial match, so no anchors are needed.

```
chatgpt|openai|perplexity|claude\.(ai|com)|anthropic|gemini\.google|bard\.google|aistudio\.google|notebooklm|copilot|edgeservices\.bing|m365\.cloud\.microsoft|grok|x\.ai|deepseek|mistral|meta\.ai|you\.com|poe\.com|phind|huggingface|kagi|andisearch|iask\.ai|komo\.ai|felo\.ai|genspark|exa\.ai|monica\.im|liner\.com|elicit|consensus\.app|scite\.ai
```

What each piece is for:

| Pattern | Catches |
|---|---|
| `chatgpt`, `openai` | `chatgpt.com`, `chat.openai.com`, and ChatGPT's `utm_source=chatgpt` |
| `perplexity` | `perplexity.ai`, `www.perplexity.ai` — the one Google's built-in list misses |
| `claude\.(ai\|com)`, `anthropic` | Claude, on both its old and current domains |
| `gemini\.google`, `bard\.google`, `aistudio\.google`, `notebooklm` | Google's assistant products (**not** AI Overviews) |
| `copilot`, `edgeservices\.bing`, `m365\.cloud\.microsoft` | Microsoft Copilot in its several homes |
| `grok`, `x\.ai` | Grok |
| `deepseek`, `mistral`, `meta\.ai` | DeepSeek, Le Chat, Meta AI |
| `you\.com`, `poe\.com`, `phind`, `huggingface` | The second tier of AI chat and search |
| `kagi`, `andisearch`, `iask\.ai`, `komo\.ai`, `felo\.ai`, `genspark`, `exa\.ai`, `monica\.im` | Smaller AI search engines |
| `liner\.com`, `elicit`, `consensus\.app`, `scite\.ai` | Research assistants — plausible for an archive of primary sources |

Two notes on it:

- **Bare `bing.com` is deliberately left out.** Including it would sweep every ordinary Bing
  search into the AI bucket. Only Copilot's own hostnames are matched.
- **A few patterns are loose enough to catch a stray domain** — `you\.com` would also match
  `foryou.com`, `grok` would match a site called `grokking.org`. On a site this size that is
  a handful of sessions at most, and step 1's Session source view will show you by name if
  anything odd turns up. Tighten it then, not before.

---

## Then what

Once the channel group exists and a few weeks have passed, the AEO plan's item 14 (the
monthly research routine) has a second real data source alongside Search Console: not just
what Google shows people, but what AI systems actually send. That pairing is the point of
item 0.

*Written 21 September 2026. GA4's AI Assistant channel behaviour is new and Google has been
changing the recognised source list without announcing it, so re-check step 1 before
trusting a flat number.*
