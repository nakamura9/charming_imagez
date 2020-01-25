require('babel-register')({
    presets: ["es2015","react"]
  });
 
const router = require('./src/components/sitemap-routes').default;
const Sitemap = require('../').default;
 
(
    new Sitemap(router)
        .build('https://www.charming-imagez.com')
        .save('./sitemap.xml')
);