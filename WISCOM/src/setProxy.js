const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    createProxyMiddleware('/developers', {
      target: 'https://dswuwis.store',
      changeOrigin: true,
    }),
  );
};