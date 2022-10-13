import { hopeTheme } from 'vuepress-theme-hope'
import * as navbar from './navbar'
import * as sidebar from './sidebar'

export default hopeTheme({
  hostname: 'https://www.yzw.ink/doc2',
  author: {
    name: 'コユキ',
    url: 'https://www.yzw.ink/doc2',
  },
  darkmode: 'toggle',
  iconAssets: '//at.alicdn.com/t/font_2410206_a0xb9hku9iu.css',
  logo: '/logo.png',
  repo: 'https://github.com/1211428762/doctest/tree/doc',
  docsRepo: 'https://github.com/1211428762/doctest/tree/doc',
  pageInfo: ['Author', 'Original', 'Date', 'Category', 'Tag', 'ReadingTime'],

  locales: {
    '/': {
      // navbar
      navbar: navbar.zh,

      // sidebar
      sidebar: sidebar.zh,
      // 默认页脚
      footer: '',

      displayFooter: true,

      blog: {
        // 头像下面的文本
        description: '',
        intro: '/intro.html',
      },
    },

    /**
     * Chinese locale config
     */
    '/en/': {
      // navbar
      navbar: navbar.en,

      // sidebar
      sidebar: sidebar.en,

      footer: 'Default footer',

      displayFooter: true,

      blog: {
        description: 'A FrontEnd programmer',
        intro: '/en/intro.html',
      },
    },
  },

  encrypt: {
    config: {
      '/guide/encrypt.html': ['1234'],
      '/en/guide/encrypt.html': ['1234'],
    },
  },

  plugins: {
    blog: {
      autoExcerpt: true,
    },
    // If you don't need comment feature, you can remove following option
    // The following config is for demo ONLY, if you need comment feature, please generate and use your own config, see comment plugin documentation for details.
    // To avoid disturbing the theme developer and consuming his resources, please DO NOT use the following config directly in your production environment!!!!!
    comment: false, //关闭评论
    //  {
    //   /**
    //    * Using giscus
    //    */
    //   type: 'giscus',
    //   repo: 'vuepress-theme-hope/giscus-discussions',
    //   repoId: 'R_kgDOG_Pt2A',
    //   category: 'Announcements',
    //   categoryId: 'DIC_kwDOG_Pt2M4COD69',

    //   /**
    //    * Using twikoo
    //    */
    //   // type: "twikoo",
    //   // envId: "https://twikoo.ccknbc.vercel.app",

    //   /**
    //    * Using Waline
    //    */
    //   // type: "waline",
    //   // serverURL: "https://vuepress-theme-hope-comment.vercel.app",
    // },

    mdEnhance: {
      enableAll: true,
      presentation: {
        plugins: ['highlight', 'math', 'search', 'notes', 'zoom'],
      },
    },
    pwa: {
      update: 'hint',
      // hintComponent: 'SWHintPopup',
    },
  },
})
