// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // ------ 项目配置 ------
  devtools: { enabled: false },
  modules: ['@nuxt/ui', '@pinia/nuxt', '@pinia-plugin-persistedstate/nuxt'],
  pages: true, //开启动态路由
  css: ['~/assets/base.css'], // 引入基础样式
  // ----- 项目SEO配置 -----
  app: {
    head: {
      title: '星光灯坊',
      // 设置网站icon
      link: [
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: '/favicon.png',
        },
      ],
    },
  },
  runtimeConfig: {
    jwtSecret: process.env.JWT_SECRET,
  },
})
