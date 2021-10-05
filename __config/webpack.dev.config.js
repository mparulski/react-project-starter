const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = () => ({
    entry: `./src/App.tsx`,
    output: {
        path: path.resolve(__dirname, "../dist"),
        filename: "app.min.js",
        crossOriginLoading: "anonymous"
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "../public/index.html")
        })
      ],
})