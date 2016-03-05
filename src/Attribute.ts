import { customAttribute } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';
import { DOM } from 'aurelia-pal';
import { ComponentHandler } from './ComponentHandler';

@customAttribute('mdl')
@inject(DOM.Element, ComponentHandler)
export class Attribute {

  constructor(private element: Element, private componentHandler: ComponentHandler) { }

  attached() {
    this.componentHandler.upgrade(this.element);
  }

  detached() {
    this.componentHandler.downgrade(this.element);
  }
}
