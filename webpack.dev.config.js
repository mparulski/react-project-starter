#!/usr/bin/env node 

'use strict';

const path = require('path');
const {mergeWithRules} = require("webpack-merge");

const rules = {
  module: {
      rules: {
          test: "match",
          use: "replace",
          exclude: "replace",
          include: "replace",
      },
  },
}

module.exports = env => mergeWithRules(rules)(
    require("@mparulski/es-project-maker-webpack/config/webpack.dev.config"), 
    require(path.resolve("./__config/webpack.dev.config.js"))(env))