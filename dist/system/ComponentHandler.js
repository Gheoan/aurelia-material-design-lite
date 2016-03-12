System.register(['aurelia-dependency-injection', 'aurelia-pal', 'aurelia-task-queue'], function (_export) {
  'use strict';

  var inject, PLATFORM, TaskQueue, ComponentHandler;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_aureliaDependencyInjection) {
      inject = _aureliaDependencyInjection.inject;
    }, function (_aureliaPal) {
      PLATFORM = _aureliaPal.PLATFORM;
    }, function (_aureliaTaskQueue) {
      TaskQueue = _aureliaTaskQueue.TaskQueue;
    }],
    execute: function () {
      ComponentHandler = (function () {
        function ComponentHandler(taskQueue) {
          _classCallCheck(this, _ComponentHandler);

          this.componentHandler = PLATFORM.global.componentHandler;

          this.taskQueue = taskQueue;
          if (!this.componentHandler) {
            throw new Error("Material Design Lite component handler not found. Make sure it's imported.");
          }
        }

        _createClass(ComponentHandler, [{
          key: 'upgrade',
          value: function upgrade(element) {
            var _this = this;

            this.taskQueue.queueMicroTask(function () {
              _this.componentHandler.upgradeElement(element);
            });
          }
        }, {
          key: 'downgrade',
          value: function downgrade(element) {
            var _this2 = this;

            this.taskQueue.queueMicroTask(function () {
              _this2.componentHandler.downgradeElements(element);
            });
          }
        }]);

        var _ComponentHandler = ComponentHandler;
        ComponentHandler = inject(TaskQueue)(ComponentHandler) || ComponentHandler;
        return ComponentHandler;
      })();

      _export('ComponentHandler', ComponentHandler);
    }
  };
});