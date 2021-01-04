module.exports = {
  base:'/doctest',
  title: '测试文档 demo',
  description: '练习文档',
  themeConfig: {
    logo: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1514571003,1845775142&fm=26&gp=0.jpg',
    nav: [
      {
        text: '首页', link: "/"
      },
      { text: '指南', link: '/guide/' },
      {
        text: '接口', items: [
          { text: '网站', link: '/interface/web/' }
        ]
      },
      { text: '我的博客', link: 'https://www.cnblogs.com/flypig666' },
      { text: '我的码云', link: 'https://gitee.com/flypig666/projects' },
    ],
    sidebar: {
      "/guide/": ["/guide/", {
        title: "侧边栏下拉框1",
        children: ['/guide/test', "/guide/test2"]
      }],
      "/interface/": ['/interface/', {
        title: "侧边栏下拉框22",
        children: ['/interface/web/']
      }],
    }
  }
}