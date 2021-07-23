module.exports = {
  base: '/doctest/',
  title: '测试文档 demo',
  dest: './dist',    // 设置输出目录
  repo: 'https://github.com/1211428762/doctest', // 添加 github 链接.
  description: '练习文档',
  themeConfig: {
    logo: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1514571003,1845775142&fm=26&gp=0.jpg',
    nav: [
      {
        text: '首页', link: "/"
      },
      // { text: '待开发', link: '/pending/', items: [{ text: 'test', link: '/test/' }] },
      {
        text: '浪漫的程序员', items: [
          { text: '学弟学妹的面试宝典', link: '/funs/interview/' },
          { text: '心跳', link: '/funs/heart/' },
          { text: '气泡', link: '/funs/buble/' },
        ]
      },
      { text: 'flow-UI', link: '/expand/', items: [{ text: 'flow', link: '/flow/' }] },
    ],
    sidebar: {
      "/guide/": ["/guide/", {
        title: "表单组件",
        children: ['/guide/form-complete', "/guide/form-case"]
      }, {
          title: "表格组件",
          children: ['/guide/table-complete']
          // children: ['/guide/table-complete', "/guide/table-case"]
        },
        {
          title: "流程图组件",
          children: ['/guide/flow-chart']
          // children: ['/guide/table-complete', "/guide/table-case"]
        }],
      "/flow/": [{ title: "引言", path: "/flow/" }, {
        title: "button",
        path: "/flow/button",
        // children: ['/flow/subtest']
      }, {
        title: "viewport",
        path: "/flow/viewport",
        // children: ['/flow/viewport']
      }, {
        title: "dialog",
        path: "/flow/dialog",
        // children: ['/flow/viewport']
      }],

    }
  }
}