const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = () => ({
    entry: {
        app: `./src/App.tsx`},
    output: {
        path: path.resolve(__dirname, "../dist"),
        filename: "[name]-[hash].js",
        crossOriginLoading: "anonymous"
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "../public/index.html")
        })
      ],
})