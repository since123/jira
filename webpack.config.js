var webpack = require("webpack");
module.exports = {
  mode: "production",
  plugins: [
    //...
    new webpack.ProvidePlugin({
      process: "process/browser.js",
    }),
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("development"),
    }),
    // new webpack.DefinePlugin({
    //   "process.env": {
    //     NODE_ENV: JSON.stringify("production")
    //   }
    // })
  ],
};
