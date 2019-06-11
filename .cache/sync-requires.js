const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-no-data-js": hot(preferDefault(require("F:\\projects\\the_lunch_podcast\\src\\templates\\no-data.js"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("F:\\projects\\the_lunch_podcast\\.cache\\dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("F:\\projects\\the_lunch_podcast\\src\\pages\\404.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("F:\\projects\\the_lunch_podcast\\src\\pages\\index.js"))),
  "component---src-pages-page-2-js": hot(preferDefault(require("F:\\projects\\the_lunch_podcast\\src\\pages\\page-2.js"))),
  "component---src-pages-rss-testing-js": hot(preferDefault(require("F:\\projects\\the_lunch_podcast\\src\\pages\\rss-testing.js")))
}

