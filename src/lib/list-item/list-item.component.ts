import { Component, OnInit, Input, HostBinding, Output, EventEmitter } from '@angular/core';
import { uniqueId } from 'lodash';

@Component({
  selector: 'a[cui-list-item], div[cui-list-item]',
  exportAs: 'cuiListItem',
  template: `
    <ng-content></ng-content>
  `
})
export class ListItemComponent implements OnInit {

  constructor() { }

  /** @option Active prop to help determine styles | false */
  @Input() active: false;
  /** @option Children nodes to render inside ListItem | null  */
  @Input() class = '';
  /** @option Node in which the selection begins | null */
  @Input() customAnchorNode: '';
  /** @option ListItem Custom Prop Name for child with custom Ref | null */
  @Input() customRefProp: '';
  /** @option Disabled attribute for ListItem to determine styles | false */
  @Input() disabled: false;
  /** @option Specifies if ListItem should automatically get focus | false */
  @Input() focus: false;
  /** @option Specifies if ListItem should automatically get focus when page loads | false */
  @Input() focusOnLoad: false;
  /** @option Sets ListItem id | null */
  @Input() id: null;
  /** @option Determines if ListItem is clickable | false */
  @Input() isReadOnly: false;
  /** @option ListItem index number | null */
  @Input() itemIndex: null;
  /** @option ListItem label text | '' */
  @Input() label: '';
  /** @option external link associated input | '' */
  @Input() link: '';
  /** @option ListItem ref name | 'navLink' */
  @Input() refName: 'navLink';
  /** @option Aria role | 'listItem' */
  @Input() role: 'listItem';
  /** @option Prop that controls whether to show separator or not | false */
  @Input() separator: false;
  /** @option ListItem Title | '' */
  @Input() title: '';
  /** @option ListItem size | '' */
  @Input() type: '';
  /** @option ListItem value for OnSelect value | '' */
  @Input() value: '';

  @HostBinding('class') get className(): string {
    return 'cui-list-item' +
    `${(this.type && ` cui-list-item--${this.type}`) || ''}` +
    `${(this.active && ` active`) || ''}` +
    `${(this.disabled && ` disabled`) || ''}` +
    `${(this.isReadOnly && ` cui-list-item--read-only`) || ''}` +
    `${(this.separator && ` cui-list-item--separator`) || ''}` +
    `${(this.class && ` ${this.class}`) || ''}`;
  }
  @HostBinding('id') get theId() {
    return this.id || uniqueId('cui-list-item-');
  }

  @HostBinding('attr.aria-current') get theAriaCurrent() {
    return this.focus;
  }

  @HostBinding('attr.role') get theRole() { return this.role || null; }
  @HostBinding('tabIndex') get theTabIndex() {
    return (!this.disabled && this.focus) ? 0 : -1;
  }

  @Output() setSelected = new EventEmitter();
  @Output() handleListKeyDown = new EventEmitter();

  ngOnInit() {
    if (this.type && this.isTypeOptionValid()) {
      throw new Error('cui-list-item: ListItem type option must be one of the following: left, center, right, center-align');
    }
    if (this.value && this.isValueOptionValid()) {
      throw new Error('cui-list-item: ListItem position must be one of the following: left, center, right, center-align');
    }

    console.log('1', this.id);
    this.id = this.id || uniqueId('cui-list-item-');
    console.log('2', this.id);
  }

  private isTypeOptionValid = () => (
    ['', 'small', 'large', 'xlarge', 'space', 'header', 36, 52, 60].includes(this.type)
  )

  private isValueOptionValid = () => (
    ['string', 'number', 'object', 'array'].includes(typeof this.value)
  )

   handleClick = e => {
     const {
       disabled,
       itemIndex,
       label,
      //  onClick,
       value
     } = this;

     if (disabled) {
       e.preventDefault();
       e.stopPropagation();
     }

     e.persist();

     const emitData: any = { e, itemIndex, value, label};
     this.setSelected.emit(emitData);
    //  onClick && onClick(e);
   }

   handleKeyDown = e => {
     const {
       disabled,
       itemIndex,
      //  onKeyDown
     } = this;

     if (disabled) {
      e.preventDefault();
      e.stopPropagation();
    }

    e.persist();
    const emitData: any = { e, itemIndex};
    this.handleListKeyDown.emit(emitData);
    // onKeyDown && onkeydown(e);
   }
}
