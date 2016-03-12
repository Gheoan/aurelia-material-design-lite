import { customAttribute } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';
import { DOM } from 'aurelia-pal';
import { ComponentHandler } from './ComponentHandler';

@customAttribute('mdl')
@inject(DOM.Element, ComponentHandler)
export class Attribute {
  element: Element;
  componentHandler: ComponentHandler;

  constructor(element: Element, componentHandler: ComponentHandler) {
    this.element = element;
    this.componentHandler = componentHandler;
  }

  attached() {
    this.componentHandler.upgrade(this.element);
  }

  detached() {
    this.componentHandler.downgrade(this.element);
  }
}
