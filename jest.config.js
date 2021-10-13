module.exports = {
  "moduleFileExtensions": [
    "js",
    "jsx",
    "ts",
    "tsx",
    "json",
    "node"
  ],
  "notify": true,
  "testMatch": [
    "**/__tests__/**/?(*.)+(spec|test).js?(x)",
    "**/?(*.)+(spec|test).js?(x)"
  ],
  "testPathIgnorePatterns": [
    "/dist/",
    "/node_modules/",
    "/src/",
    "/__tests__/helpers/"
  ],
  "transform": {
    "^.+\\.jsx?$": "babel-jest",
    "^.+\\.tsx?$": "ts-jest"
  },
  "verbose": true
}