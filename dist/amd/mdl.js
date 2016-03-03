define(['exports', 'aurelia-templating', 'aurelia-dependency-injection', 'aurelia-pal'], function (exports, _aureliaTemplating, _aureliaDependencyInjection, _aureliaPal) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var MDLComponent = (function () {
    function MDLComponent(element) {
      _classCallCheck(this, _MDLComponent);

      this.element = element;
    }

    _createClass(MDLComponent, [{
      key: 'attached',
      value: function attached() {
        var componentHandler = _aureliaPal.PLATFORM.global.componentHandler;
        if (componentHandler) {
          componentHandler.upgradeElement(this.element);
        } else {
          throw new Error('Material Design Lite component handler not found. Make sure it\'s imported.');
        }
      }
    }]);

    var _MDLComponent = MDLComponent;
    MDLComponent = (0, _aureliaDependencyInjection.inject)(_aureliaPal.DOM.Element)(MDLComponent) || MDLComponent;
    MDLComponent = (0, _aureliaTemplating.customAttribute)('mdl')(MDLComponent) || MDLComponent;
    return MDLComponent;
  })();

  exports.MDLComponent = MDLComponent;
});