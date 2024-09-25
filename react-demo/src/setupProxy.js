const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    createProxyMiddleware({
      target: process.env.REACT_APP_PROXY_LOGIC_HTTPS,
      changeOrigin: true,
      ws: true,
      secure: false,
      pathFilter: '/api/logic',
      pathRewrite: {
        '^/api/logic$': '',
      },
    })
  );
  /**
   * TODO
   * 
   * add WS SIP proxy support
   */

  /*
  app.use(
    createProxyMiddleware({
      target: process.env.PROXY_SIP,
      changeOrigin: true,
      ws: true,
      secure: false,
      pathFilter: '/api/sip',
      pathRewrite: {
        '^/api/sip$': '',
      },
    })
  );
  */
};
