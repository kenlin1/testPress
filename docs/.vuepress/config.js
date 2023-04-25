const moment = require('moment-timezone');

module.exports = {
  title: 'Press',
  base: '/testPress/',
  head: [
    ['link', { rel: 'icon', href: '/favicon.png' }],
  ],
  themeConfig: {
    nav: [{"text":". Java","link":"/0/"},{"text":". Python","link":"/1/"},{"text":". JavaScript","link":"/2/"},{"text":". C/C++","link":"/3/"},{"text":". HTML/CSS","link":"/4/"},{"text":". SQL","link":"/5/"},{"text":". PHP","link":"/6/"},{"text":". Ruby","link":"/7/"},{"text":". Go","link":"/8/"},{"text":". Swift","link":"/9/"},{"text":". Node.js","link":"/10/"},{"text":". React","link":"/11/"},{"text":". Angular","link":"/12/"},{"text":". Vue.js","link":"/13/"},{"text":". Machine Learning","link":"/14/"},{"text":". Artificial Intelligence","link":"/15/"},{"text":". Data Science","link":"/16/"},{"text":". Deep Learning","link":"/17/"},{"text":". Blockchain","link":"/18/"},{"text":". DevOps","link":"/19/"},{"text":". Cloud Computing","link":"/20/"},{"text":". Big Data","link":"/21/"},{"text":". Augmented Reality","link":"/22/"},{"text":". Virtual Reality","link":"/23/"},{"text":". Internet of Things","link":"/24/"},{"text":". Robotics","link":"/25/"},{"text":". Natural Language Processing","link":"/26/"},{"text":". Computer Vision","link":"/27/"},{"text":". Game Development","link":"/28/"},{"text":". Mobile App Development","link":"/29/"}],
    sidebar: {"/0/":["","0","1","2","3","4"]},
    search: true,
    searchMaxSuggestions: 10,
    smoothScroll: true,
  },
  plugins: {
    '@vuepress/last-updated': {
      transformer: (timestamp, lang) => {
        if (lang === 'zh-CN') {
          return moment(timestamp).tz('Asia/Shanghai').locale(lang).format('lll')
        } else {
          return moment(timestamp).utc().locale(lang).format('lll')
        }
      },
    },
    'vuepress-plugin-clean-urls': {
      normalSuffix: '/',
      indexSuffix: '/',
      notFoundPath: '/404.html',
    },
    'sitemap': {
      hostname: 'https://github.com/kenlin1',
      dateFormatter: time => new moment(time, 'lll').toISOString(),
    },
    'seo': {
      siteTitle: (_, $site) => $site.title,
      title: $page => $page.title,
      description: $page => $page.frontmatter.description,
      tags: $page => $page.frontmatter.tags,
      twitterCard: _ => '/favicon.png',
      type: $page => ['articles', 'posts', 'blog'].some(folder => $page.regularPath.startsWith('/' + folder)) ? 'article' : 'website',
      url: (_, $site, path) => 'https://github.com/kenlin1' + path,
      image: ($page, $site) =>
        $page.frontmatter.image &&
        ($site.themeConfig.domain || '') + $page.frontmatter.image,
      publishedAt: $page =>
        $page.frontmatter.date && new Date($page.frontmatter.date),
      modifiedAt: $page => $page.lastUpdated && new Date($page.lastUpdated)
    },
    'vuepress-plugin-smooth-scroll': {},
    'vuepress-plugin-baidu-autopush':{},
  },
};
