"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _aureliaDependencyInjection = require('aurelia-dependency-injection');

var _aureliaPal = require('aurelia-pal');

var _aureliaTaskQueue = require('aurelia-task-queue');

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var ComponentHandler = (function () {
    function ComponentHandler(taskQueue) {
        _classCallCheck(this, ComponentHandler);

        this.taskQueue = taskQueue;
        this.componentHandler = _aureliaPal.PLATFORM.global.componentHandler;
        if (!this.componentHandler) {
            throw new Error("Material Design Lite component handler not found. Make sure it's imported.");
        }
    }

    _createClass(ComponentHandler, [{
        key: "upgrade",
        value: function upgrade(element) {
            var _this = this;

            this.taskQueue.queueMicroTask(function () {
                _this.componentHandler.upgradeElement(element);
            });
        }
    }, {
        key: "downgrade",
        value: function downgrade(element) {
            var _this2 = this;

            this.taskQueue.queueMicroTask(function () {
                _this2.componentHandler.downgradeElements(element);
            });
        }
    }]);

    return ComponentHandler;
})();
exports.ComponentHandler = ComponentHandler;
exports.ComponentHandler = ComponentHandler = __decorate([(0, _aureliaDependencyInjection.inject)(_aureliaTaskQueue.TaskQueue)], ComponentHandler);