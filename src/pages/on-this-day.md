---
layout: onthisday
title: On This Day in Internet History
description: "What happened today in tech and internet history."
permalink: /on-this-day/
---

Today in internet history, we commemorate the following events (📰), births (👶), deaths (💀), and holidays (🏖️):

{% if wikimedia.length %}
{% for event in wikimedia %}
- **{{ event.month }} {{ event.day }}, {{ event.year }}**: {{ event.description }}
{% endfor %}
{% else %}
_No significant internet history events found for today._
{% endif %}

Sources: [Wikipedia](https://en.wikipedia.org/)
