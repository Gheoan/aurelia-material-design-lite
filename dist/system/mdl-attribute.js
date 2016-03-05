System.register(["aurelia-templating", "aurelia-dependency-injection", "aurelia-pal", "aurelia-task-queue"], function (_export) {
    "use strict";

    var customAttribute, inject, DOM, PLATFORM, TaskQueue, __decorate, MDLComponent;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    return {
        setters: [function (_aureliaTemplating) {
            customAttribute = _aureliaTemplating.customAttribute;
        }, function (_aureliaDependencyInjection) {
            inject = _aureliaDependencyInjection.inject;
        }, function (_aureliaPal) {
            DOM = _aureliaPal.DOM;
            PLATFORM = _aureliaPal.PLATFORM;
        }, function (_aureliaTaskQueue) {
            TaskQueue = _aureliaTaskQueue.TaskQueue;
        }],
        execute: function () {
            __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
                var c = arguments.length,
                    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
                    d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            };

            MDLComponent = (function () {
                function MDLComponent(element, taskQueue) {
                    _classCallCheck(this, MDLComponent);

                    this.element = element;
                    this.taskQueue = taskQueue;
                    this.componentHandler = PLATFORM.global.componentHandler;
                    if (!this.componentHandler) {
                        throw new Error("Material Design Lite component handler not found. Make sure it's imported.");
                    }
                }

                _createClass(MDLComponent, [{
                    key: "attached",
                    value: function attached() {
                        var _this = this;

                        this.taskQueue.queueMicroTask(function () {
                            _this.componentHandler.upgradeElement(_this.element);
                        });
                    }
                }, {
                    key: "detached",
                    value: function detached() {
                        var _this2 = this;

                        this.taskQueue.queueMicroTask(function () {
                            _this2.componentHandler.downgradeElements(_this2.element);
                        });
                    }
                }]);

                return MDLComponent;
            })();

            _export("MDLComponent", MDLComponent);

            _export("MDLComponent", MDLComponent = __decorate([customAttribute('mdl'), inject(DOM.Element, TaskQueue)], MDLComponent));
        }
    };
});