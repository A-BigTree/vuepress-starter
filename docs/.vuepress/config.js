const nav = require("./nav.js")


module.exports = {
    plugins: ['vuepress-plugin-auto-sidebar'],
    title: 'ABigTree的博客🌳',
    description: '技术学习笔记',
    base: "/blog/",
    port: 6060,
    head: [
        ['link', {rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.7.1/katex.min.css'}],
        ['link', {
            rel: "stylesheet",
            href: "https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/2.10.0/github-markdown.min.css"
        }]
    ],
    markdown: {
        extendMarkdown: md => {
            md.use(require("markdown-it-disable-url-encode"));
            md.use(require("markdown-it-katex"));
            md.set({html: true});
        }
    },
    themeConfig: {
        nav
    }
}