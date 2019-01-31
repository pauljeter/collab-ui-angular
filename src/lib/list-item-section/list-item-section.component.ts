import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'cui-list-item-section',
  template: `
    <div [ngClass]="setMyClasses()">
      <ng-content></ng-content>
    </div>
  `,
  styles: []
})
export class ListItemSectionComponent implements OnInit {

  constructor() { }

  /** @option Determine the ListItemSection's position | 'center' */
  @Input() position = 'center';
  /** @option Optional css class name | '' */
  @Input() class = '';

  ngOnInit() {
    if (this.position && this.position !== 'left' && this.position !== 'center' && this.position !== 'center-align') {
      throw new Error('cui-list-item-section: ListItemSection position must be one of the following: left, center, right, center-align');
    }
  }

  setMyClasses() {
   const myClasses = `cui-list-item__${this.position}` +
    `${(this.class && ` ${this.class}`) || ''}`;

    return myClasses;
  }
}
