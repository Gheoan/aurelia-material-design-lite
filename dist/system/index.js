System.register([], function (_export) {
    'use strict';

    _export('configure', configure);

    function configure(config) {
        config.globalResources('./mdl-attribute');
    }

    return {
        setters: [],
        execute: function () {}
    };
});