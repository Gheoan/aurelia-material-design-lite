System.register(['aurelia-templating', 'aurelia-pal', 'tether'], function (_export) {
  'use strict';

  var ViewSlot, View, DOM, Tether, TooltipRenderer;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_aureliaTemplating) {
      ViewSlot = _aureliaTemplating.ViewSlot;
      View = _aureliaTemplating.View;
    }, function (_aureliaPal) {
      DOM = _aureliaPal.DOM;
    }, function (_tether) {
      Tether = _tether['default'];
    }],
    execute: function () {
      TooltipRenderer = (function () {
        function TooltipRenderer() {
          _classCallCheck(this, TooltipRenderer);
        }

        _createClass(TooltipRenderer, [{
          key: 'show',
          value: function show(view, target) {
            var element = DOM.createElement('tooltip');
            DOM.appendNode(element);
            this._element = element;

            var slot = new ViewSlot(element, true);
            slot.add(view);
            slot.attached();

            this._tether = new Tether({
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
            DOM.removeNode(this._element);
          }
        }]);

        return TooltipRenderer;
      })();

      _export('TooltipRenderer', TooltipRenderer);
    }
  };
});