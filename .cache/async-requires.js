// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-templates-no-data-js": () => import("F:\\projects\\the_lunch_podcast\\src\\templates\\no-data.js" /* webpackChunkName: "component---src-templates-no-data-js" */),
  "component---cache-dev-404-page-js": () => import("F:\\projects\\the_lunch_podcast\\.cache\\dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */),
  "component---src-pages-404-js": () => import("F:\\projects\\the_lunch_podcast\\src\\pages\\404.js" /* webpackChunkName: "component---src-pages-404-js" */),
  "component---src-pages-index-js": () => import("F:\\projects\\the_lunch_podcast\\src\\pages\\index.js" /* webpackChunkName: "component---src-pages-index-js" */),
  "component---src-pages-page-2-js": () => import("F:\\projects\\the_lunch_podcast\\src\\pages\\page-2.js" /* webpackChunkName: "component---src-pages-page-2-js" */),
  "component---src-pages-rss-testing-js": () => import("F:\\projects\\the_lunch_podcast\\src\\pages\\rss-testing.js" /* webpackChunkName: "component---src-pages-rss-testing-js" */)
}

exports.data = () => import(/* webpackChunkName: "pages-manifest" */ "F:\\projects\\the_lunch_podcast\\.cache\\data.json")

