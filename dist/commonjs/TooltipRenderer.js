'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _aureliaTemplating = require('aurelia-templating');

var _aureliaPal = require('aurelia-pal');

var _tether = require('tether');

var _tether2 = _interopRequireDefault(_tether);

var TooltipRenderer = (function () {
  function TooltipRenderer() {
    _classCallCheck(this, TooltipRenderer);
  }

  _createClass(TooltipRenderer, [{
    key: 'show',
    value: function show(view, target) {
      var element = _aureliaPal.DOM.createElement('tooltip');
      _aureliaPal.DOM.appendNode(element);
      this._element = element;

      var slot = new _aureliaTemplating.ViewSlot(element, true);
      slot.add(view);
      slot.attached();

      this._tether = new _tether2['default']({
        element: element,
        target: target,
        classes: {
          element: false,
          target: false,
          enabled: false
        },
        classPrefix: 'tooltip',
        attachment: 'bottom left',
        constraints: [{ to: 'window', attachment: 'together' }],
        addTargetClasses: false
      });
    }
  }, {
    key: 'hide',
    value: function hide() {
      this._tether.destroy();
      _aureliaPal.DOM.removeNode(this._element);
    }
  }]);

  return TooltipRenderer;
})();

exports.TooltipRenderer = TooltipRenderer;