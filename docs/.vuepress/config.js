module.exports = {
  title: 'zpp的blog', // 页签标题 : A001_VuePress博客搭建的简单教程&问题分析 # | Wiki 1001
  description: 'blog zpp', // meta 中的描述文字，意义不大，SEO用
  // 注入到当前页面的 HTML <head> 中的标签
  head: [
      // 增加一个自定义的 favicon(网页标签的图标)
      // 这里的 '/' 指向 docs/.vuepress/public 文件目录 
      // 即 docs/.vuepress/public/img/geass-bg.ico
      ['link', { rel: 'icon', href: '/img/mine.ico' }], 
  ],
  base: '/ppz034/', // 这是部署到github相关的配置
  markdown: {
      lineNumbers: true // 代码块显示行号
  },
  dest: 'dist',
  themeConfig: {
    sidebarDepth: 2, // e'b将同时提取markdown中h2 和 h3 标题，显示在侧边栏上。
    lastUpdated: 'Last Updated' ,// 文档更新时间：每个文件git最后提交的时间,
    // 顶部导航栏
    nav:[
    ],
    sidebar:{ 
    }
   }
}