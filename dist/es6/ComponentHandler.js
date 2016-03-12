import { inject } from 'aurelia-dependency-injection';
import { PLATFORM } from 'aurelia-pal';
import { TaskQueue } from 'aurelia-task-queue';

interface componentHandler {
  /**
   * Upgrades a specific element rather than all in the DOM.
   *
   * @param {!Element} element The element we wish to upgrade.
   */
  upgradeElement(element: Element): void;
  /**
   * Downgrade a given element
   *
   * @param {!Element} element
   */
  downgradeElements(element: Element): void;
}

@inject(TaskQueue)
export class ComponentHandler {
  componentHandler: componentHandler = PLATFORM.global.componentHandler;
  taskQueue: TaskQueue;

  constructor(taskQueue: TaskQueue) {
    this.taskQueue = taskQueue;
    if (!this.componentHandler) {
      throw new Error("Material Design Lite component handler not found. Make sure it's imported.");
    }
  }

  upgrade(element: Element) {
    this.taskQueue.queueMicroTask(() => {
      this.componentHandler.upgradeElement(element);
    });
  }

  downgrade(element: Element) {
    this.taskQueue.queueMicroTask(() => {
      this.componentHandler.downgradeElements(element);
    });
  }
}
