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
      { text: '指南', link: '/guide/', items: [{ text: 'test', link: '/test/' }] },
      {
        text: '浪漫的程序员', items: [
          { text: '案例', link: '/interface/web/' }
        ]
      },
      { text: '扩展', link: '/expand/', items: [{ text: 'test', link: '/test/' }] },
    ],
    sidebar: {
      "/guide/": ["/guide/", {
        title: "表单组件",
        children: ['/guide/form-complete', "/guide/form-case"]
      }, {
        title: "表格组件",
        children: ['/guide/table-complete', "/guide/table-case"]
      }],
      "/test/": ["/test/", {
        title: "测试",
        children: ['/test/subtest']
      }],
      "浪漫的程序员": ['/interface/', {
        title: "侧边栏下拉框22",
        children: ['/interface/web/']
      }],
    }
  }
}