const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  devServer: {
    host: '127.0.0.1',
    port: 8080,
    client: {
      webSocketURL: 'ws://192.168.17.32:8080/ws',
    },
    headers: {
      'Access-Control-Allow-Origin': '*',
    }
  },

})
