/**
 * @component modal
 * @category containers
 */

import {
  Component,
  Input,
} from '@angular/core';

@Component({
  selector: 'cui-modal',
  templateUrl: './modal.component.html',
})
export class ModalComponent {
  @Input()
  public get csActive() {
    return this._csActive;
  }

  @Input()
  public csType = 'full';

  public set csActive(value) {
    //this._csActive = !!value;
    if (value === undefined) {
      this._csActive = false;
    } else if (value) {
      this._csActive = value;
      setTimeout(() => {
        this._csVisible = true;
      }, 0);
    } else {
      this._csVisible = false;
      setTimeout(() => {
        this._csActive = value;
      }, 500);
    }
  }

  private _csActive: boolean;
  private _csVisible: boolean;
}

/**
 * @section sizes
 * @component modal
 * @category containers
 * @name Modal Sizes
 * @description
 *
 * @html
 *
 * @js
 *
 */
