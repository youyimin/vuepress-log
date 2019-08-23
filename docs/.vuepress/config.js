module.exports = {
  base: '/vuepress-log/',
  title: 'BFC',
  description: 'normal record',
  head: [
    ['link', { rel: 'icon', href: `/avatar.png` }],
  ],
  themeConfig: {
    themeConfig: {
      logo: '/bfc.jpg',
    },
    nav: [
      { text: 'Home', link: '/' },
      {
        text: 'Documentation',
        items: [
          { text: 'Shortcuts', link: '/documentation/shortcuts' },
          { text: 'Fiddle', link: '/documentation/fiddle' },
          { text: 'Markdown', link: '/documentation/markdown' },
          { text: 'JS Collection', link: '/documentation/js-collection'},
          { text: 'Css Collection', link: '/documentation/css-collection'},
          { text: 'Regex', link: '/documentation/regex'},
          { text: 'Webpack', link: '/documentation/webpack'},
          { text: 'Git', link: '/documentation/git'},
          { text: 'Bash', link: '/documentation/bash'},
        ]
      }
    ]
  },
  markdown: {
    lineNumbers: true,
    config: md => {
      md.use(require('markdown-it-task-lists'),{enabled: true})
    }
  },
  plugins: [
    "vuepress-plugin-cat",
  ]
}