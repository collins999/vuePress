module.exports = {
    title: '记录美好生活',
    description: '生活虽然很艰难，但是你认真感觉就会发现美好。',
    // 注入到当前页面的 HTML <head> 中的标签
    head: [
        ['link', { rel: 'icon', href: '/favicon.ico' }], // 增加一个自定义的 favicon(网页标签的图标)
    ],
    base: '/vuePress/', // 这是部署到github相关的配置 下面会讲
    markdown: {
        lineNumbers: true // 代码块显示行号
    },
    themeConfig: {
        nav: [
            { text: '掘金', link: 'https://juejin.im/user/5d79a5535188256df56735f5' }, // 外部链接
            // 下拉列表
            {
                text: 'GitHub',
                items: [{
                    text: 'GitHub地址',
                    link: 'https://github.com/collins999?tab=repositories'
                }]
            }
        ],
        sidebar: [
            {
                title: '变量提升运行机制',
                path: '/operatingMechanism/'
            },
            {
                title: '变量提升运行机制2',
                path: '/algorithm/'
            }
        ],
        // 启动页面滚动效果
        smoothScroll: true,
        // 显示文档更新时间
        lastUpdated: true,
        // 内置搜索
        search: true,
        searchMaxSuggestions: 10
    }
}