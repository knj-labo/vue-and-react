const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  outputDir: '../react/dist',
  configureWebpack: {
    output: {
      filename: '[name].js', // Static name for the main bundle
      chunkFilename: 'chunk-[name].js' // Static base name with dynamic chunk names
    }
  }
})
