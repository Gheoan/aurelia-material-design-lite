define(["exports", "aurelia-templating", "aurelia-dependency-injection", "aurelia-pal", "./ComponentHandler"], function (exports, _aureliaTemplating, _aureliaDependencyInjection, _aureliaPal, _ComponentHandler) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var Attribute = (function () {
        function Attribute(element, componentHandler) {
            _classCallCheck(this, Attribute);

            this.element = element;
            this.componentHandler = componentHandler;
        }

        _createClass(Attribute, [{
            key: "attached",
            value: function attached() {
                this.componentHandler.upgrade(this.element);
            }
        }, {
            key: "detached",
            value: function detached() {
                this.componentHandler.downgrade(this.element);
            }
        }]);

        return Attribute;
    })();
    exports.Attribute = Attribute;
    exports.Attribute = Attribute = __decorate([(0, _aureliaTemplating.customAttribute)('mdl'), (0, _aureliaDependencyInjection.inject)(_aureliaPal.DOM.Element, _ComponentHandler.ComponentHandler)], Attribute);
});