module.exports = {
  url: process.env.URL || 'https://cybercultural.com',
  siteName: 'Cybercultural',
  siteDescription:
    'Internet history and its impact on our culture.',
  siteType: 'Person', // schema
  locale: 'en_EN',
  lang: 'en',
  skipContent: 'Skip to content',
  author: 'Richard MacManus', // i.e. Lene Saile - author's name. Must be set.
  authorEmail: 'cybercultural@ricmac.org', // i.e. hola@lenesaile.com - email of the author
  authorWebsite: 'https://ricmac.org/', // i.e. https.://www.lenesaile.com - the personal site of the author
  themeColor: '#B80103', //  Manifest: defines the default theme color for the application
  themeBgColor: '#F3F3F3', // Manifest: defines a placeholder background color for the application page to display before its stylesheet is loaded
  meta_data: {
    opengraph_default: '/assets/images/33d48ded-f999-4173-8440-9d752446428b_3400x2134.jpg', // fallback/default meta image
    opengraph_default_alt:
      'Internet history and its impact on our culture. Currently serializing my book, Bubble Blog', // alt text for default meta image
    twitterSite: '', // i.e. @site - twitter profile of the site
    twitterCreator: '', // i.e. @author -  twitter profile of the site
    mastodonProfile: 'https://mastodon.social/@ricmac' // i.e. https://front-end.social/@lene - url to your mastodon instance/profile
  },
  blog: {
    // this is for the rss feed
    name: 'Cybercultural',
    description:
      'Internet history and its impact on our culture.'
  },
  pagination: {
    itemsPerPage: 20
  },
  address: {
    // edit all presets or leave empty. They are being used in the pages for privacy.md and imprint.md
    firma: 'Org name',
    street: '123 Main St.',
    city: 'Ciudad',
    state: 'Estado',
    zip: '12345',
    mobileDisplay: '+34 1234567',
    mobileCall: ' +341234567',
    email: 'cybercultural@ricmac.org',
    cif: ''
  },
  menu: {
    closedText: 'Menu'
  }
};
