const withCSS = require('@zeit/next-css');
const withFonts = require('next-fonts');
const withImages = require('next-images');
const withPlugins = require("next-compose-plugins");

module.exports = {
  reactStrictMode: true,
  async rewrites() {
    return [
      // {
        //   source: "/:path*",
        //   destination: "http://uatportal.tcs.com.pk:8000",
        // },
      ];
    },
    // withPlugins([withCSS, withFonts, withImages])
};
