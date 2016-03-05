import { customAttribute } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';
import { DOM, PLATFORM } from 'aurelia-pal';
import { TaskQueue } from 'aurelia-task-queue';

@customAttribute('mdl')
@inject(DOM.Element, TaskQueue)
export class MDLComponent {
  private componentHandler;

  constructor(private element: Element, private taskQueue: TaskQueue) {
    const componentHandler = PLATFORM.global.componentHandler;
    if (!componentHandler) {
      throw new Error(`Material Design Lite component handler not found. Make sure Material Design Lite is imported.`);
    }
    this.componentHandler = componentHandler;
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
