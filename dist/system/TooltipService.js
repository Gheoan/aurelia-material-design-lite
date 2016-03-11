System.register(['aurelia-dependency-injection', 'aurelia-metadata', 'aurelia-templating', './invokeLifecycle', './TooltipRenderer'], function (_export) {
  'use strict';

  var Container, inject, Origin, CompositionEngine, CompositionContext, Controller, invokeLifecycle, TooltipRenderer, TooltipService;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_aureliaDependencyInjection) {
      Container = _aureliaDependencyInjection.Container;
      inject = _aureliaDependencyInjection.inject;
    }, function (_aureliaMetadata) {
      Origin = _aureliaMetadata.Origin;
    }, function (_aureliaTemplating) {
      CompositionEngine = _aureliaTemplating.CompositionEngine;
      CompositionContext = _aureliaTemplating.CompositionContext;
      Controller = _aureliaTemplating.Controller;
    }, function (_invokeLifecycle) {
      invokeLifecycle = _invokeLifecycle.invokeLifecycle;
    }, function (_TooltipRenderer) {
      TooltipRenderer = _TooltipRenderer.TooltipRenderer;
    }],
    execute: function () {
      TooltipService = (function () {
        function TooltipService(container, compositionEngine, renderer) {
          _classCallCheck(this, _TooltipService);

          this._container = container;
          this._compositionEngine = compositionEngine;
          this._renderer = renderer;
        }

        _createClass(TooltipService, [{
          key: 'show',
          value: function show(settings) {
            var _this = this;

            var container = this._container;
            var target = settings.target;
            var model = settings.model;
            var tempViewModel = settings.viewModel;

            var viewModel = Origin.get(tempViewModel).moduleId;

            var instructions = {
              container: container,
              model: model,
              viewModel: viewModel
            };

            this._viewModel = viewModel;
            this._model = model;

            invokeLifecycle(viewModel, 'canActivate', model).then(function (canActivate) {
              if (canActivate) {
                _this._compositionEngine.createController(instructions).then(function (controller) {
                  controller.automate();
                  _this._controller = controller;

                  _this._renderer.show(controller.view, target);
                });
              }
            });
          }
        }, {
          key: 'hide',
          value: function hide() {
            var _this2 = this;

            invokeLifecycle(this._viewModel, 'canDeactivate', this._model).then(function (canDeactivate) {
              if (canDeactivate) {
                _this2._renderer.hide();
              }
            });
          }
        }]);

        var _TooltipService = TooltipService;
        TooltipService = inject(Container, CompositionEngine, TooltipRenderer)(TooltipService) || TooltipService;
        return TooltipService;
      })();

      _export('TooltipService', TooltipService);
    }
  };
});