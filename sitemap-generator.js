const es2015 = require('babel-preset-es2015');
const presetReact = require('babel-preset-react');
require('babel-register')({
  presets: [es2015, presetReact],
});
//Import our routes
const Sitemap = require('react-router-sitemap').default;

const App = require('./src/root/App/routes.js').default;

function generateSitemap() {
  return (
    new Sitemap(App)
      .build('https://www.sweatersrossys.com')
      //Save it wherever you want
      .save('./sitemap.xml')
  );
}

generateSitemap();
