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
        text: '接口', items: [
          { text: '网站', link: '/interface/web/' }
        ]
      }
    ],
    sidebar: {
      "/guide/": ["/guide/", {
        title: "表单组件",
        children: ['/guide/test', "/guide/test2"]
      }],
      "/test/": ["/test/", {
        title: "测试",
        children: ['/test/subtest']
      }],
      "/interface/": ['/interface/', {
        title: "侧边栏下拉框22",
        children: ['/interface/web/']
      }],
    }
  }
}