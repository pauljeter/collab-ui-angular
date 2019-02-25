import { Component, OnInit, Input, HostBinding,
  QueryList, ContentChildren, HostListener, OnChanges, ChangeDetectorRef, AfterContentInit } from '@angular/core';
import { uniqueId } from 'lodash';
import { ListItemComponent } from '../list-item';

@Component({
  selector: 'cui-list',
  template: `
    <ng-content></ng-content>
    `,
  styles: []
})
export class ListComponent implements OnInit, OnChanges, AfterContentInit {

  isActive = true;

  constructor(private cd: ChangeDetectorRef) {}

  /** @option Active prop to help determine styles | false */
  @Input() active = null;
  /** @option class optional css class name | '' */
  @Input() class = '';
  /** @option Sets first List item to have focus | true */
  @Input() focusFirst = true;
  /** @option Optional ID value of List | null */
  @HostBinding('id') @Input() id: string = uniqueId('cui-list-');
  /** @option Optional prop to know if multiple children can be active | false */
  @Input() isMulti = false;
  /** @option Optional tabType prop type to manually set child role | 'listItem' */
  @Input() itemRole = 'listItem';
  /** @option Callback function invoked by user selecting an interactive item within List | null */
  @Input() onSelect = '';
  /** @option Sets the ARIA role for the Nav, in the context of a TabContainer | 'list' */
  @HostBinding('attr.role') @Input() role: string = 'list';
  /** @option Sets the orientation of the List | 'vertical' */
  @Input() tabType = 'vertical';
  /** @option Sets List size | null */
  @Input() type = null;
  /** @option Optional wrap prop type to wrap items to next row */
  @Input() wrap = false;

  @HostBinding('class') get className(): string {
    return 'cui-list' +
    ` cui-list--${this.tabType}` +
    ` cui-list${this.wrap && `--wrap` || ''}` +
    `${(this.class && ` ${this.class}`) || ''}`;
  }

  @ContentChildren(ListItemComponent) listItems: QueryList<ListItemComponent>;

  ngOnInit() {
    console.log(this.tabType);
    console.log(this.isTabTypeOptionValid());
    if (this.tabType && !this.isTabTypeOptionValid()) {
      throw new Error(`cui-list: List tabType option must be one of the following:
        vertical, horizontal`);
    }
    if (this.type && !this.isTypeOptionValid()) {
      throw new Error(`cui-list: List type option must be one of the following:
        small, large, space, xlarge`);
    }
  }

  ngAfterContentInit() {
    // set up listItems children with props
    this.listItems.forEach((listItem) => {
      if (this.type) { listItem.type = this.type; }
      listItem.role = this.itemRole;
      listItem.id = uniqueId(`${this.id}__list-item-`);
    });

    this.cd.detectChanges();
  }

  ngOnChanges(changes) {
    console.log('ngOnChanges');
    console.log(changes);
  }

  @HostListener('click', ['$event.target']) handleClick = listItem => {
   this.updateSelected(listItem.id);
  }

  updateSelected(selectedId) {
    this.listItems.forEach((listItem) => {
      listItem.active = !listItem.isReadOnly && (listItem.id === selectedId);
    });

    this.cd.detectChanges();
  }

  private isTabTypeOptionValid = () => (
    ['vertical', 'horizontal'].includes(this.tabType)
  )

  private isTypeOptionValid = () => (
    ['small', 'large', 'space', 'xlarge'].includes(this.type)
  )
}
