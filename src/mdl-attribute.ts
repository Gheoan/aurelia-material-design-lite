import { customAttribute } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';
import { DOM, PLATFORM } from 'aurelia-pal';
import { TaskQueue } from 'aurelia-task-queue';

@customAttribute('mdl')
@inject(DOM.Element, TaskQueue)
export class MDLComponent {
  constructor(private element: Element, private taskQueue: TaskQueue) { }

  attached() {
    const componentHandler = PLATFORM.global.componentHandler;
    if (componentHandler) {
      this.taskQueue.queueMicroTask(() => {
        componentHandler.upgradeElement(this.element);
      });
    } else {
      throw new Error(`Material Design Lite component handler not found. Make sure it's imported.`);
    }
  }

  detached() {
    const componentHandler = PLATFORM.global.componentHandler;
    if (componentHandler) {
      this.taskQueue.queueMicroTask(() => {
        componentHandler.downgradeElements(this.element);
      });
    } else {
      throw new Error(`Material Design Lite component handler not found. Make sure it's imported.`);
    }
  }
}
