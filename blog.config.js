const BLOG = {
  title: "ScammerBlock",
  author: "Lukas Naru",
  email: "lukas@scammerblock.com",
  link: "https://blog.scammerblock.com",
  description:
    "ScammerBlock is a platform that helps you stay safe from scams and phishing.",
  lang: "en-US", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES']
  timezone: "America/Los_Angeles", // Your Notion posts' date will be interpreted as this timezone. See https://en.wikipedia.org/wiki/List_of_tz_database_time_zones for all options.
  appearance: "light", // ['light', 'dark', 'auto'],
  font: "Inter", // ['sans-serif', 'serif']
  lightBackground: "#ffffff", // use hex value, don't forget '#' e.g #fffefc
  darkBackground: "#ffffff", // use hex value, don't forget '#'
  path: "", // leave this empty unless you want to deploy Nobelium in a folder
  since: 2024, // If leave this empty, current year will be used.
  postsPerPage: 7,
  sortByDate: false,
  showAbout: false,
  showArchive: false,
  autoCollapsedNavBar: false, // The automatically collapsed navigation bar
  ogImageGenerateURL: "/https://www.scammerblock.com/opengraph-image.png", // The link to generate OG image, don't end with a slash
  socialLink: "https://twitter.com/scammerblock",
  seo: {
    keywords: ["Blog", "Website", "Scams", "Scam", "Phishing", "ScammerBlock"],
    googleSiteVerification: "", // Remove the value or replace it with your own google site verification code
  },
  notionPageId: process.env.NOTION_PAGE_ID, // DO NOT CHANGE THIS！！！
  notionAccessToken: process.env.NOTION_ACCESS_TOKEN, // Useful if you prefer not to make your database public
  analytics: {
    provider: "", // Currently we support Google Analytics and Ackee, please fill with 'ga' or 'ackee', leave it empty to disable it.
    ackeeConfig: {
      tracker: "", // e.g 'https://ackee.craigary.net/tracker.js'
      dataAckeeServer: "", // e.g https://ackee.craigary.net , don't end with a slash
      domainId: "", // e.g '0e2257a8-54d4-4847-91a1-0311ea48cc7b'
    },
    gaConfig: {
      measurementId: "", // e.g: G-XXXXXXXXXX
    },
  },
  comment: {
    // support provider: gitalk, utterances, cusdis
    provider: "", // leave it empty if you don't need any comment plugin
    gitalkConfig: {
      repo: "", // The repository of store comments
      owner: "",
      admin: [],
      clientID: "",
      clientSecret: "",
      distractionFreeMode: false,
    },
    utterancesConfig: {
      repo: "",
    },
    cusdisConfig: {
      appId: "", // data-app-id
      host: "https://cusdis.com", // data-host, change this if you're using self-hosted version
      scriptSrc: "https://cusdis.com/js/cusdis.es.js", // change this if you're using self-hosted version
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
};
// export default BLOG
module.exports = BLOG;
