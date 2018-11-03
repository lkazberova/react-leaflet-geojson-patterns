module.exports = {
  components: 'src/**/*.js',
  ignore: [
    '**/*.test.js',
    '**/leaflet.pattern.js',
    '**/BasePattern.js',
    '**/index.js',
  ],
  webpackConfig: require('./example/node_modules/react-scripts/config/webpack.config.dev.js'),
  styleguideDir: './example/public/documentation',
  template: {
    head: {
      links: [
        {
          rel: 'stylesheet',
          href: '//cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/leaflet.css'
        }
      ]
    }
  }
}
