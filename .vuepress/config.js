const path = require('path')
const themeConfig = require('./config/theme/')

module.exports = {
  dest: 'public',
  // base: '/vuepress-theme-reco-doc/',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }],
    ['meta', { name: 'author', content: 'EasyIM' }],
    ['meta', { name: 'keywords', content: 'EasyIM,IM,docs,tencentIM,easyIM,easyIM文档,IM文档,即时通信IM' }],
    // ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#42b983' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: '/icon_vuepress_reco.png' }],
    ['link', { rel: 'mask-icon', href: '/icon_vuepress_reco.svg', color: '#42b983' }],
    ['meta', { name: 'msapplication-TileImage', content: '/icon_vuepress_reco.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }],
    ['script', { 'ata-ad-client': 'ca-pub-5123799675896802', async: 'async', src: '//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js' }]
  ],
  theme: 'reco',
  themeConfig,
  locales: {
    '/': {
      lang: 'zh-CN', // 将会被设置为 <html> 的 lang 属性
      title: "EasyIM",
      description: '📦 基于腾讯IM的php-sdk'
    },
    // '/en/': {
    //   lang: 'en-US',
    //   title: "vuepress-theme-reco",
    //   description: 'A simple and beautiful vuepress Blog & Doc theme.'
    // }    
  },
  markdown: {
    // lineNumbers: true
  },
  plugins: [
    [
      '@vuepress/pwa', 
      {
        serviceWorker: true,
        updatePopup: {
          message: "发现新内容可用",
          buttonText: "刷新"
        }
      }
    ],
    [
      '@vuepress/google-analytics',
      {
        ga: 'UA-149716079-2'
      }
    ],
    [
      '@vuepress/plugin-register-components',
      {
        components: [
          {
            name: 'reco-home-page-one',
            path: path.resolve(__dirname, './components/HomePageOne.vue')
          }
        ],
        componentsDir: path.resolve(__dirname, './demo')
      }
    ],
    '@vuepress-reco/extract-code',
    'flowchart',
    ['sitemap', {
      hostname: 'http://docs.aoppp.com'
    }],
    ['@vuepress-reco/rss', {
      site_url: 'http://docs.aoppp.com',
      copyright: ''
    }],
    require('./plugins/notification/index')
  ]
}  