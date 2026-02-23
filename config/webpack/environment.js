const { environment } = require('@rails/webpacker')

const path = require('path')

const customConfig = {
  resolve: {
    alias: {
      '@src': path.resolve(__dirname, '..', '..', 'app/javascript/src'),
      '@util': path.resolve(__dirname, '..', '..', 'app/javascript/util'),
    }
  }
}

environment.config.merge(customConfig);

environment.splitChunks()

module.exports = environment
