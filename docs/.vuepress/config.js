module.exports = {
  base: '/doctest/',
  title: '基于vue2.xUi框架,面向pc,移动端的实用组件',
  dest: './dist',    // 设置输出目录,

  repo: 'https://github.com/1211428762/doctest', // 添加 github 链接.
  description: 'flow-Ui',
  themeConfig: {
    logo: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1514571003,1845775142&fm=26&gp=0.jpg',
    nav: [
      {
        text: '首页', link: "/"
      },
      { text: '表单表格组件', link: '/guide/', },
      {
        text: '浪漫的程序员', items: [
          { text: '学弟学妹的面试宝典', link: '/funs/interview/' },
          { text: '心跳', link: '/funs/heart/' },
          { text: '气泡', link: '/funs/buble/' },
        ]
      },
      { text: 'flow-UI', items: [{ text: 'flow', link: '/flow/' }] },
    ],
    sidebar: {
      "/guide/": ["/guide/", {
        title: "表单组件",
        children: ['/guide/form-complete', "/guide/form-case"]
      }, {
          title: "表格组件",
          path: '/guide/table-complete'
          // children: ['/guide/table-complete', "/guide/table-case"]
        },
      ],
      "/flow/": [{ title: "引言", path: "/flow/" }, {
        title: "button",
        path: "/flow/button",
      }, {
        title: "viewport",
        path: "/flow/viewport",
      }, {
        title: "dialog",
        path: "/flow/dialog",
      },
      {
        title: "area",
        path: "/flow/area",
      },
      {
        title: "toast",
        path: "/flow/toast",
      },
      {
        title: "badge",
        path: "/flow/badge",
      }, {
        title: "flow-chart",
        path: '/flow/flow-chart'
      }
      ],

    }
  }
}