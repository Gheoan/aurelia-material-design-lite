var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { customAttribute } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';
import { DOM, PLATFORM } from 'aurelia-pal';
import { TaskQueue } from 'aurelia-task-queue';
export let MDLComponent = class MDLComponent {
    constructor(element, taskQueue) {
        this.element = element;
        this.taskQueue = taskQueue;
        this.componentHandler = PLATFORM.global.componentHandler;
        if (!this.componentHandler) {
            throw new Error("Material Design Lite component handler not found. Make sure it's imported.");
        }
    }
    attached() {
        this.taskQueue.queueMicroTask(() => {
            this.componentHandler.upgradeElement(this.element);
        });
    }
    detached() {
        this.taskQueue.queueMicroTask(() => {
            this.componentHandler.downgradeElements(this.element);
        });
    }
};
MDLComponent = __decorate([
    customAttribute('mdl'),
    inject(DOM.Element, TaskQueue)
], MDLComponent);
