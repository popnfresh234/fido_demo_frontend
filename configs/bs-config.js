const { createProxyMiddleware } = require("http-proxy-middleware");

const apiProxy = createProxyMiddleware("/api/**", {
  target: "https://localhost:8080",
  changeOrigin: true,
  secure: false,
  pathRewrite: {
    "^/api/": "/", // remove base path
  },
});

module.exports = {
  port: 8000,
  server: {
    baseDir: "./dist/frontend",
    middleware: {
      10: apiProxy,
    },
  },
  https: {
    key: "./src/ssl/webcomm_demo_frontend_local.key.pem",
    cert: "./src/ssl/webcomm_demo_frontend_local.crt.pem",
  },
  files: ["./dist/frontend"],
};
