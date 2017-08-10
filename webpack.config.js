module.exports = process.env.OPTIMIZE === 'true'
  ? require('./webpack.config.prod.js')
  : require('./webpack.config.dev.js')
