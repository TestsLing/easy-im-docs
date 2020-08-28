module.exports = {
  'zh': [
    {
      text: '文档',
      icon: 'reco-api',
      items: [
        {
          text: '腾讯IM', items: [
            { text: '1.0', link: '/views/tencent/1.0/base/index' },
            // { text: '1.x', link: '/views/1.x/' },
          ],
        },
        {
          text: '网易IM', items: [
            { text: '1.0', link: '/views/yunxin/1.0/' },
          ]
        }
      ]
    },
    // {text: '文档', link: '/views/im/', icon: 'reco-api'},
    { text: '常见问题', link: '/views/other/question', icon: 'reco-faq' },
    { text: '博文', link: '/categories/blog/', icon: 'reco-blog'},
    { text: '优秀博客', link: '/views/other/theme-example.html', icon: 'reco-category'},
    // { text: '订阅', link: 'https://vuepress-theme-reco.recoluan.com/rss.xml', icon: 'reco-rss'},
    { text: '留言板', link: '/views/other/messageBoard.html', icon: 'reco-suggestion'},
    { text: 'GitHub', link: 'https://github.com/TestsLing/easy-im', icon: 'reco-github'}
  ],
  // 'en': [
  //   { text: 'Documents',
  //     icon: 'reco-api',
  //     items: [
  //       {
  //         text: 'Theme', items: [
  //           { text: '1.x', link: '/en/views/1.x/' }
  //         ],
  //       },
  //       {
  //         text: 'Plugin', items: [
  //           { text: 'plugin', link: '/en/views/plugins/' }
  //         ]
  //       }
  //     ]
  //   },
  //   { text: 'FAQ', link: '/en/views/other/question', icon: 'reco-faq' },
  //   { text: 'Examples', link: '/en/views/other/theme-example.html', icon: 'reco-category'},
  //   { text: 'RSS', link: 'https://vuepress-theme-reco.recoluan.com/rss.xml', icon: 'reco-rss'},
  //   { text: 'GitHub', link: 'https://github.com/vuepress-reco/vuepress-theme-reco', icon: 'reco-github'}
  // ]
}
