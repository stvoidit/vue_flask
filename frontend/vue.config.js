module.exports = {
  devServer: {
    proxy: 'http://127.0.0.1:5000'
  },
  outputDir: '../backend/static',
  assetsDir: '../static',
  pages: {
    home: {
      entry: 'src/main.js',
      filename: '../templates/home.html',
      title: 'Home',
      chunks: ['chunk-vendors', 'chunk-common', 'home']
    },
    facts: {
      entry: 'src/Facts/main.js',
      filename: '../blueprint_facts/templates_facts/facts.html',
      title: 'Facts',
      chunks: ['chunk-vendors', 'chunk-common', 'facts']
    },
    something: {
      entry: 'src/Something/main.js',
      filename: '../blueprint_something/templates_something/something.html',
      title: 'Something',
      chunks: ['chunk-vendors', 'chunk-common', 'something']
    },
  }
}