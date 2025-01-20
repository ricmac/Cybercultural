import fetch from 'node-fetch';
import dayjs from 'dayjs';

export default async function () {
  const today = dayjs();
  const month = today.format('MM');
  const day = today.format('DD');

  const url = `https://en.wikipedia.org/api/rest_v1/feed/onthisday/all/${month}/${day}`;

  // Positive tech-related keywords
  const techKeywords = [
    'internet',
    'technology',
    'computer',
    'software',
    'website',
    'browser',
    'social media',
    'startup',
    'programming',
    'ai',
    'artificial intelligence',
    'cybersecurity',
    'digital',
    'web',
    'online',
    'cloud',
    'app',
    'e-commerce',
    'computing',
    'computer',
    'LLM',
    'World Wide Web',
    'Google',
    'Facebook',
    'dot-com',
    'Web 2.0'
  ];

  try {
    const response = await fetch(url, {
      headers: {
        'Accept': 'application/json'
      }
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch data: ${response.statusText}`);
    }

    const data = await response.json();

    // Combine the events, births, deaths, and holidays
    const allEvents = [
      ...(data.events || []),
      ...(data.births || []),
      ...(data.deaths || []),
      ...(data.holidays || [])
    ];

    // Use regular expressions for keyword matching
    const keywordRegex = new RegExp(`\\b(${techKeywords.join('|')})\\b`, 'i');

    // Filter events strictly for tech-related keywords
    const filteredEvents = allEvents.filter(event => keywordRegex.test(event.text));

    // Format the filtered events with categories and emojis
    const formattedEvents = filteredEvents.map(event => {
      // Determine the category based on its type
      let category = '';

      if (data.events && data.events.includes(event)) {
        category = '📰'; // Event category gets the 🙌 emoji
      } else if (data.births && data.births.includes(event)) {
        category = '👶'; // Birth category gets the 🍼 emoji
      } else if (data.deaths && data.deaths.includes(event)) {
        category = '💀'; // Death category gets the 💀 emoji
      } else if (data.holidays && data.holidays.includes(event)) {
        category = '🏖️'; // Holiday category gets the 🏖️ emoji
      }

      // Return the event with the emoji (no parentheses)
      return {
        year: event.year,
        month: today.format('MMMM'),
        day: today.format('D'),
        description: `${event.text} ${category}`
      };
    });

    // Return the formatted events
    return formattedEvents;

  } catch (error) {
    console.error("Error fetching 'On This Day' data:", error);
    return [];
  }
}