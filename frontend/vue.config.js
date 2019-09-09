module.exports = {
  devServer: {
    proxy: 'http://127.0.0.1:5000'
  },
  outputDir: 'frontend',
  assetsDir: 'static',
  pages: {
    facts: {
      entry: 'src/Facts/main.js',
      filename: 'templates/facts.html',
      title: 'Facts',
      chunks: ['chunk-vendors', 'chunk-common', 'facts']
    },
    something: {
      entry: 'src/Something/main.js',
      filename: 'templates/something.html',
      title: 'Something',
      chunks: ['chunk-vendors', 'chunk-common', 'something']
    },
  }
}