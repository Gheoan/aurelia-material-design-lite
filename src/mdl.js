import { customAttribute } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';
import { DOM, PLATFORM } from 'aurelia-pal';

@customAttribute('mdl')
@inject(DOM.Element)
export class MDLComponent {
  constructor(element: Element) {
    this.element = element;
  }

  attached() {
    const componentHandler = PLATFORM.global.componentHandler;
    if (componentHandler) {
      componentHandler.upgradeElement(this.element);
    } else {
      throw new Error(`Material Design Lite component handler not found. Make sure it's imported.`);
    }
  }
}
