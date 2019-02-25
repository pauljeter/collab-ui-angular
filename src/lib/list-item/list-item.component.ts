import { Component, OnInit, Input, HostBinding, Output, EventEmitter, HostListener } from '@angular/core';
import { uniqueId } from 'lodash';

@Component({
  selector: 'a[cui-list-item], div[cui-list-item]',
  exportAs: 'cuiListItem',
  template: `
      <div *ngIf="label; else content">{{label}}</div>

      <ng-template #content>
        <ng-content></ng-content>
      </ng-template>
  `
})
export class ListItemComponent implements OnInit {

  constructor() { }

  /** @option Active prop to help determine styles | false */
  @Input() active = false;
  /** @option class Optional css class name | '' */
  @Input() class = '';
  /** @option Disabled attribute for ListItem to determine styles | false */
  @Input() disabled = false;
  /** @option Sets ListItem id | null */
  @HostBinding('attr.id') @Input() id: string = uniqueId('cui-list-item-');
  /** @option Determines if ListItem is clickable | false */
  @Input() isReadOnly = false;
  /** @option ListItem label text | '' */
  @Input() label = '';
  /** @option external link associated input | '' */
  @HostBinding('attr.href') @Input() link = '';
  /** @option ListItem ref name | 'navLink' */
  // @Input() role = 'listItem';
  @HostBinding('attr.role') @Input() role = 'listItem';
  /** @option Prop that controls whether to show separator or not | false */
  @Input() separator = false;
  /** @option ListItem Title | '' */
  @Input() title = '';
  /** @option ListItem size | '' */
  @Input() type = '';
  /** @option ListItem value for OnSelect value | '' */
  @Input() value = '';

  @Output() selected: EventEmitter<any> = new EventEmitter();

  @HostBinding('class') get className(): string {
    return 'cui-list-item' +
    `${(this.type && ` cui-list-item--${this.type}`) || ''}` +
    `${(this.active && ` active`) || ''}` +
    `${(this.disabled && ` disabled`) || ''}` +
    `${(this.isReadOnly && ` cui-list-item--read-only`) || ''}` +
    `${(this.separator && ` cui-list-item--separator`) || ''}` +
    `${(this.class && ` ${this.class}`) || ''}`;
  }

  @HostBinding('attr.title') get theTitle() { return this.title || this.label; }

  @HostListener('click', ['$event.target']) handleClick = listItem => {
    if (this.isReadOnly) {
      event.stopImmediatePropagation();
    }
   }

  ngOnInit() {
    if (this.type && !this.isTypeOptionValid()) {
      throw new Error(`cui-list-item: ListItem type option must be one of the following:
        small, large, xlarge, space, header, 36, 52, 60`);
    }
    if (this.value && !this.isValueOptionValid()) {
      throw new Error(`cui-list-item: ListItem value option must be one of the following types:
        string, number, object, array`);
    }
  }

  private isTypeOptionValid = () => (
    ['', 'small', 'large', 'xlarge', 'space', 'header', 36, 52, 60].includes(this.type)
  )

  private isValueOptionValid = () => (
    ['string', 'number', 'object', 'array'].includes(typeof this.value)
  )
}
