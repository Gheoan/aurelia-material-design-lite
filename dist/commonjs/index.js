'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.configure = configure;

var _aureliaFramework = require('aurelia-framework');

function configure(config) {
  config.globalResources('./Attribute');
}