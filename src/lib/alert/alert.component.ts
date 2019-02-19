import {
  Component,
  EventEmitter,
  HostBinding,
  Input,
  Output,
} from '@angular/core';

/**
 * Used internally by the alert service.
 */
@Component({
  selector: 'cui-alert',
  templateUrl: 'alert.component.html',
})

export class AlertComponent {
  @Input() private key: string;
  @Input() private type: string;
  @Input() public ariaLabel: string;
  @Input() public closable: boolean;
  @Input() public message: string;
  @Input() public title: string;

  @HostBinding('class') get className(): string {
    return `cui-alert cui-alert--${this.type}`;
  }

  @Output() dismissed = new EventEmitter<string>();

  constructor() {}

  dismiss(): void {
    this.dismissed.emit(this.key);
  }
}
