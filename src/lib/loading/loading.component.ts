/*
* @component loader-spinner
* @category communication
*/

import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'cui-loading, CSLoading',
  template: `
    <div class="cui-loading">
      <span class="icon icon-unread-badge_8"></span>&nbsp;
      <span class="icon icon-unread-badge_8"></span>&nbsp;
      <span class="icon icon-unread-badge_8"></span>
    </div>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.None,
})
export class LoadingComponent {
  constructor() {}
}

/*
* @section default
* @component loader-spinner
*/
