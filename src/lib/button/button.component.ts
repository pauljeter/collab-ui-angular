/*
* @category controls
* @component button
* @design collaboration-design
*/

import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'cui-button',
  template: `
    <button
      [className]="classes"
      (click)="handleClick($event)"
      [disabled]="loading"
      [style.width]="width"
      [attr.aria-label]="ariaLabel"
      #button
      >
        {{label}}
      <ng-content *ngIf='!loading && !label'></ng-content>
      <cui-loading *ngIf='loading'></cui-loading>
    </button>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.None,
})
export class ButtonComponent implements OnInit, AfterViewInit, OnChanges{
  @Input() public label: string;
  @Input() public color: string;
  @Input() public className: string;
  @Input() public disabled: boolean;
  @Input() public loading: boolean;
  @Input() public expand: boolean;
  @Input() public circle: boolean;
  @Input() public size: string;
  @Input() public type: string;
  @Input() public ariaLabel: string;

  @Output() onClick: EventEmitter<any> = new EventEmitter<any>();

  @ViewChild('button') element: ElementRef;

  public classes: string;
  public width = '';
  public initWidth: string;

  constructor() {}

  ngOnInit() {
    this.classes =
      'cui-button' +
      `${(this.color && ` cui-button--${this.color}`) || ''}` +
      `${(this.expand && ` cui-button--expand`) || ''}` +
      `${(this.className && ` ${this.className}`) || ''}` +
      `${(this.disabled && ` cui-button--disabled`) || ''}` +
      `${(this.loading && ` cui-button--loading`) || ''}` +
      ``;
  }

  ngAfterViewInit() {
    this.initWidth = `${this.element.nativeElement.offsetWidth + 0.001}px`;
    setTimeout(() => this.setAriaLabel(), 100);
  }

  ngOnChanges(changes) {
    if (changes.loading && changes.loading.currentValue) {
      this.width = this.initWidth;
    } else {
      this.width = '';
    }
  }

  public handleClick(event: any) {
    this.onClick.emit(event);
  }

  private setAriaLabel() {
    if (!this.ariaLabel) {
      if (this.label) {
        if (typeof this.label !== 'string') {
          throw 'cui-button: label is not a string, you must add an "ariaLabel" for accessibility.';
        } else {
          this.ariaLabel = this.label;
        }
      } else {
        if (this.element.nativeElement.children.length > 0) {
          throw 'cui-button: content is not a string, you must add an "ariaLabel" for accessibility.';
        } else {
          this.ariaLabel = this.element.nativeElement.innerText;
        }
      }
    }
  }
}
