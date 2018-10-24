
    // service worker caching
    new SWPrecacheWebpackPlugin({
      cacheId: 'my-vue-app',
      filename: 'service-worker.js',
      staticFileGlobs: ['dist/**/*.{js,html,css}'],
      minify: true,
      stripPrefix: 'dist/',
      runtimeCaching: [
      {
        urlPattern: /^https:\/\/fonts\.googleapis\.com\//,
        handler: 'cacheFirst'
      },
      {
        urlPattern: /^https:\/\/fonts\.gstatic\.com\//,
        handler: 'cacheFirst'
      },
      {
        urlPattern: /^https:\/\/code\.getmdl\.io\//,
        handler: 'cacheFirst'
      },
      {
        urlPattern: /^https:\/\/thecatapi\.com\/api\/images\/get\.php\?id/,
        handler: 'cacheFirst'
      },
      {
        urlPattern: /^https:\/\/cdn2\.thecatapi\.com\/images\//,
        handler: 'cacheFirst'
      },
      {
        urlPattern: /^https:\/\/(\d+)\.media\.tumblr\.com\//,
        handler: 'cacheFirst'
      },
      {
        urlPattern: /^http:\/\/(\d+)\.media\.tumblr\.com\//,
        handler: 'cacheFirst'
      }]
    })
