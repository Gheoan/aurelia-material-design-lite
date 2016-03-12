import { customElement, bindable } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';
import { InputState } from './InputState';

@customElement('input-switch')
@inject(InputState)
export class InputSwitch {
  inputState: InputState;
  @bindable hasPointer: boolean;

  constructor(inputState: InputState) {
    this.inputState = inputState;
  }

  hasPointerChanged(newValue: boolean) {
    this.inputState.hasPointer = newValue;
  }
}
