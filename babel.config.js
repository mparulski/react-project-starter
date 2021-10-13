module.exports = {
  "presets": [
    [
      "@babel/preset-env",
      {
        "targets": {
          "browsers": "cover 99.5%, last 3 versions, not ie 11"
        }
      }
    ],
    [
      {
        "targets": {
          "node": "current"
        }
      }
    ],
    [
      "@babel/preset-react",
      {
        "runtime": "automatic"
      }
    ]
  ],
  "plugins": [
    "@babel/plugin-proposal-throw-expressions",
    "@babel/plugin-transform-arrow-functions",
    "@babel/plugin-transform-runtime"
  ]
}