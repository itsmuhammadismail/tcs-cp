module.exports = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/:path*",
        destination: "http://uatportal.tcs.com.pk:8000",
      },
    ];
  },
};
