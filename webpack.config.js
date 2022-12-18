const path = require('path')

module.exports = {
  entry: './src/init.js',
  mode: 'development',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
}
