const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api/logic',
    createProxyMiddleware({
      target: 'https://192.168.232.147:8332',
      changeOrigin: true,
      ws: true,
      secure: false,
      pathRewrite: (path) => path.replace(/^\/api\/logic/, ''),
    })
  );
};
