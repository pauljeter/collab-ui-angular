import { NgFor, NgIf } from '@angular/common';
import {
  Component,
  Input,
  Output,
  EventEmitter,
  HostListener,
} from '@angular/core';

import { ITopNavItem } from './topNavItem';

@Component({
  selector: 'cui-top-nav',
  template: `
  <nav class="cui-top-bar__nav">
    <div class="cui-list cui-list--horizontal" role="list">
      <a *ngFor="let item of navItems"
        [routerLink]="item.path"
        routerLinkActive="active"
        role="listItem"
        class="cui-list-item"
      >
        {{item.name}}
      </a>
    </div>
  </nav>
  `,
})
export class TopNavComponent {
  @Input() navItems: Array<ITopNavItem>;
}
