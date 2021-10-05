const path = require("path");

module.exports = () => ({
    entry: `./src/App.tsx`,
    output: {
        path: path.resolve(__dirname, "../dist"),
        filename: "app.min.js",
        crossOriginLoading: "anonymous"
    },
})