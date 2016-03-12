'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _aureliaDependencyInjection = require('aurelia-dependency-injection');

var _aureliaPal = require('aurelia-pal');

var _aureliaTaskQueue = require('aurelia-task-queue');

var ComponentHandler = (function () {
  function ComponentHandler(taskQueue) {
    _classCallCheck(this, _ComponentHandler);

    this.componentHandler = _aureliaPal.PLATFORM.global.componentHandler;

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
  ComponentHandler = (0, _aureliaDependencyInjection.inject)(_aureliaTaskQueue.TaskQueue)(ComponentHandler) || ComponentHandler;
  return ComponentHandler;
})();

exports.ComponentHandler = ComponentHandler;