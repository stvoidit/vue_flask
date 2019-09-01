module.exports = {
  outputDir: 'frontend',
  assetsDir: 'static',
  // indexPath: 'templates/index.html',
  pages: {
    index: {
      entry: 'src/Index/main.js',
      filename: 'templates/index.html',
      title: 'Index',
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    },
    table: {
      entry: 'src/Table/main.js',
      filename: 'templates/table.html',
      title: 'Table',
      chunks: ['chunk-vendors', 'chunk-common', 'table']
    },
  }
}