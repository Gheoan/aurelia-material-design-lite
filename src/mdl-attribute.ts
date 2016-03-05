import { customAttribute } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';
import { DOM, PLATFORM } from 'aurelia-pal';
import { TaskQueue } from 'aurelia-task-queue';

@customAttribute('mdl')
@inject(DOM.Element, TaskQueue)
export class MDLComponent {
  private componentHandler = PLATFORM.global.componentHandler;

  constructor(private element: Element, private taskQueue: TaskQueue) {
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
}
