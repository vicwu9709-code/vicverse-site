/** @type {import("pliny/config").PlinyConfig } */
const siteMetadata = {
  title: 'Vicverse',
  author: 'Vic',
  headerTitle: 'Vicverse',
  description: '一个以水下探索为主线，记录技术学习、游戏体验、音乐分析和自我重构的个人网站。',
  language: 'zh-CN',
  theme: 'dark',
  siteUrl: 'https://vicverse.me',
  siteRepo: '',
  siteLogo: `${process.env.BASE_PATH || ''}/static/images/logo.png`,
  socialBanner: `${process.env.BASE_PATH || ''}/static/images/twitter-card.png`,
  mastodon: '',
  email: 'vicwu9709@gmail.com',
  github: '',
  x: '',
  facebook: '',
  youtube: '',
  linkedin: '',
  threads: '',
  instagram: '',
  medium: '',
  bluesky: '',
  locale: 'zh-CN',
  stickyNav: false,
  analytics: {
    umamiAnalytics: {
      umamiWebsiteId: process.env.NEXT_UMAMI_ID,
    },
  },
  newsletter: {
    provider: '',
  },
  comments: {
    provider: '',
  },
  search: {
    provider: 'kbar',
    kbarConfig: {
      searchDocumentsPath: `${process.env.BASE_PATH || ''}/search.json`,
    },
  },
}

module.exports = siteMetadata
