/**
 * The site's tag taxonomy in one place: the display label already used in post
 * bylines, plus the real-world subject each tag stands for.
 *
 * `label`    — how the tag is written for humans (byline, schema keywords).
 * `about`    — the entity the tag implies, emitted as a schema.org Thing on
 *              every post carrying that tag (AEO plan item 6). Tags that are
 *              editorial groupings rather than subjects have no `about`.
 * `keyword`  — set false for tags that mean nothing outside this site, so they
 *              stay in the byline but out of the schema's keywords.
 * `section`  — set false for tags that aren't a section of the site, so they
 *              are never picked as a post's articleSection.
 *
 * Note for anyone adding an export here: Eleventy only lifts a data file's
 * default export to the top level when it is the file's only export, so
 * everything this file publishes has to hang off the one object below.
 */
const taxonomy = {
  tags: {
    web20: {
      label: 'Web 2.0',
      about: {name: 'Web 2.0', sameAs: ['https://en.wikipedia.org/wiki/Web_2.0']}
    },
    dotcom: {
      label: 'Dot-com',
      about: {name: 'Dot-com bubble', sameAs: ['https://en.wikipedia.org/wiki/Dot-com_bubble']}
    },
    preweb: {
      label: 'Pre-web',
      about: {
        name: 'History of the Internet',
        sameAs: ['https://en.wikipedia.org/wiki/History_of_the_Internet']
      }
    },
    platforms: {
      label: 'Platforms',
      about: {name: 'Platform economy', sameAs: ['https://en.wikipedia.org/wiki/Platform_economy']}
    },
    rww: {
      label: 'RWW',
      about: {
        name: 'ReadWriteWeb',
        sameAs: [
          'https://en.wikipedia.org/wiki/ReadWrite',
          'https://ricmac.org/career-archive/readwriteweb/'
        ]
      }
    },
    memoir: {label: 'Memoir'},
    notes: {label: 'Notes'},
    year: {label: 'Yearly Reviews'},
    season1: {label: 'Season 1', keyword: false, section: false},
    season2: {label: 'Season 2', keyword: false, section: false},
    season4: {label: 'Season 4', keyword: false, section: false},
    season5: {label: 'Season 5', keyword: false, section: false}
  },

  /** Every post is at minimum about this, when no tag says anything narrower. */
  defaultAbout: {
    name: 'History of the Internet',
    sameAs: ['https://en.wikipedia.org/wiki/History_of_the_Internet']
  }
};

export default taxonomy;
