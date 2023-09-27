const WorkerPlugin = require("worker-plugin");
const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  mode: "development",
  plugins: [new WorkerPlugin()],
  devServer: {
    static: path.join(__dirname, "."),
    compress: true,
    port: 8000,
    open: true, // Opens the browser after server had been started
    hot: true, // Enable hot module replacement
  },
};
