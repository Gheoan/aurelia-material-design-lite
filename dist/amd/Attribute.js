define(['exports', 'aurelia-templating', 'aurelia-dependency-injection', 'aurelia-pal', './ComponentHandler'], function (exports, _aureliaTemplating, _aureliaDependencyInjection, _aureliaPal, _ComponentHandler) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var Attribute = (function () {
    function Attribute(element, componentHandler) {
      _classCallCheck(this, _Attribute);

      this.element = element;
      this.componentHandler = componentHandler;
    }

    _createClass(Attribute, [{
      key: 'attached',
      value: function attached() {
        this.componentHandler.upgrade(this.element);
      }
    }, {
      key: 'detached',
      value: function detached() {
        this.componentHandler.downgrade(this.element);
      }
    }]);

    var _Attribute = Attribute;
    Attribute = (0, _aureliaDependencyInjection.inject)(_aureliaPal.DOM.Element, _ComponentHandler.ComponentHandler)(Attribute) || Attribute;
    Attribute = (0, _aureliaTemplating.customAttribute)('mdl')(Attribute) || Attribute;
    return Attribute;
  })();

  exports.Attribute = Attribute;
});