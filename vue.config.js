const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer:{
    open:{app:{name:'chrome'}}
  },
  publicPath: process.env.NODE_ENV === 'production' ? '/personal-blog/' : '/'
})
