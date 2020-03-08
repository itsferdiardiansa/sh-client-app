const path = require('path')

const override = config => {
  config.resolve = {
    ...config.resolve,
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@utils': path.resolve(__dirname, 'src/utils'),
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@helpers': path.resolve(__dirname, 'src/helpers'),
      '@micro-ui': path.resolve(__dirname, 'src/micro-ui'),
      '@hoc': path.resolve(__dirname, 'src/hoc'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@containers': path.resolve(__dirname, 'src/containers'),
      '@store': path.resolve(__dirname, 'src/store')
    }
  }

  return config
} 

module.exports = override 