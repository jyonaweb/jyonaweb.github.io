
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 21518, hash: '8df4b2de286cca8230700a06bf913a656763ce8ce119edc474cb021b765de5d6', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17203, hash: '51515826e833048c20995e6c9a3633cfb9e5d234801a1d77a5b71856b7c5dc7d', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 84327, hash: 'ca8b3da197d584863d98f559172b22c836722d01102b8550538601a9954c72a5', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-O4XPZ3ZN.css': {size: 342454, hash: 'mYQFsXNOW/Y', text: () => import('./assets-chunks/styles-O4XPZ3ZN_css.mjs').then(m => m.default)}
  },
};
