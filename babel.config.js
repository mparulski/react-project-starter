module.exports = {
  "presets": [
    [
      "@babel/preset-env",
      {
        "modules": false,
        "targets": {
          "browsers": "cover 99.5%, last 3 versions, not ie 11"
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
    "@babel/plugin-transform-arrow-functions"
  ]
}