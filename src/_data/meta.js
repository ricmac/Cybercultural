const meta = {
  url: process.env.URL || 'https://cybercultural.com',
  siteName: 'Cybercultural',
  siteDescription: 'Internet history and its impact on our culture.',
  defaultimage: '/assets/images/33d48ded-f999-4173-8440-9d752446428b_3400x2134.jpg',
  siteType: 'Organization', // schema
  locale: 'en_US',
  lang: 'en',
  skipContent: 'Skip to content',
  author: {
    name: 'Richard MacManus',
    email: 'cybercultural@ricmac.org',
    website: 'https://ricmac.org/',
    url: 'https://cybercultural.com/about/'
  },
  organization: {
    name: 'Cybercultural',
    url: 'https://cybercultural.com',
    logo: '/assets/images/Cybercultural-logo.png',
    description: 'Internet history and its impact on our culture.'
  },
  themeColor: '#B80103', //  Manifest: defines the default theme color for the application
  themeBgColor: '#F3F3F3', // Manifest: defines a placeholder background color for the application page to display before its stylesheet is loaded
  meta_data: {
    opengraph_default: '/assets/images/33d48ded-f999-4173-8440-9d752446428b_3400x2134.jpg', // fallback/default meta image
    opengraph_default_alt: 'Internet history and its impact on our culture. Currently serializing my book, Bubble Blog', // alt text for default meta image
    twitterSite: '', // i.e. @site - twitter profile of the site
    twitterCreator: '', // i.e. @author -  twitter profile of the site
    mastodonProfile: 'https://mastodon.social/@ricmac' // url to your mastodon instance/profile
  },
  blog: {
    // this is for the rss feed
    name: 'Cybercultural',
    description: 'Internet history and its impact on our culture.'
  },
  pagination: {
    itemsPerPage: 20
  },
  menu: {
    closedText: 'Menu'
  }
};

export default meta;
