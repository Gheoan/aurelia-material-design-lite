import { ViewSlot, View } from 'aurelia-templating';
import { DOM } from 'aurelia-pal';
import Tether from 'tether';

export class TooltipRenderer {
  _element: Element;
  _tether: Tether;

  show(view: View, target: Element) {
    const element = DOM.createElement('tooltip');
    DOM.appendNode(element);
    this._element = element;

    const slot = new ViewSlot(element, true);
    slot.add(view);
    slot.attached();

    // creating a new tether every show() helps with position
    this._tether = new Tether({
      element,
      target,
      classes: {
        element: false,
        target: false,
        enabled: false,
      },
      classPrefix: 'tooltip',
      attachment: 'bottom left',
      constraints: [{ to: 'window', attachment: 'together' }],
      addTargetClasses: false,
    });
  }

  hide() {
    // stop Tether from caring about this.element
    // do not delete the reference to this.tether because it will probably be used again
    this._tether.destroy();
    DOM.removeNode(this._element);
  }
}
