System.register(['aurelia-framework'], function (_export) {
  'use strict';

  var FrameworkConfiguration;

  _export('configure', configure);

  function configure(config) {
    config.globalResources('./Attribute');
  }

  return {
    setters: [function (_aureliaFramework) {
      FrameworkConfiguration = _aureliaFramework.FrameworkConfiguration;
    }],
    execute: function () {}
  };
});