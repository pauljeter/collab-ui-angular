import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal, PortalInjector } from '@angular/cdk/portal';
import {
  ComponentRef,
  Injectable,
  Injector,
  OnDestroy,
} from '@angular/core';
import { AlertConfig, AlertType } from './alert-config';
import { AlertContainerComponent } from './alert-container.component';

@Injectable()
export class AlertService implements OnDestroy {
  private _overlayRef?: OverlayRef | null = null;
  private _alertContainerRef?: ComponentRef<AlertContainerComponent> | null = null;

  constructor(private _overlay: Overlay, private _injector: Injector) {}

  info(title: string, message: string, config?: AlertConfig): string {
    return this._open('info', title, message, config);
  }

  success(title: string, message: string, config?: AlertConfig): string {
    return this._open('success', title, message, config);
  }

  warning(title: string, message: string, config?: AlertConfig): string {
    return this._open('warning', title, message, config);
  }

  error(title: string, message: string, config?: AlertConfig): string {
    return this._open('error', title, message, config);
  }

  hide(key: string): void {
    if (this._alertContainerRef) {
      this._alertContainerRef.instance.removeAlert(key);
    }
  }

  private _open(type: AlertType, title: string, message: string, config?: AlertConfig): string {
    const _config = {...new AlertConfig(), ...config};
    _config.type = type;
    _config.title = title;
    _config.message = message;

    if (!this._overlayRef) {
      this._overlayRef = this._overlay.create();
    }
    const container = this._attachAlertContainer(this._overlayRef, _config);
    return container.addAlert(_config);
  }

  private _attachAlertContainer(overlayRef: OverlayRef, config: AlertConfig): AlertContainerComponent {
    if (this._alertContainerRef) {
      return this._alertContainerRef.instance;
    }

    const injector = new PortalInjector(this._injector, new WeakMap([[AlertConfig, config]]));
    const containerPortal = new ComponentPortal(AlertContainerComponent, null, injector);
    this._alertContainerRef = overlayRef.attach(containerPortal);
    const onDestroySub = this._alertContainerRef.instance._onDestroy.subscribe(() => {
      onDestroySub.unsubscribe();
      this._dispose();
    });
    return this._alertContainerRef.instance;
  }

  ngOnDestroy() {
    if (this._alertContainerRef) {
      this._alertContainerRef.instance.destroy();
    }
  }

  private _dispose(): void {
    this._alertContainerRef = null;
    this._overlayRef.dispose();
    this._overlayRef = null;
  }
}

/**
* @component alert
* @section default
*
* @angular

import { Component } from '@angular/core';
import { AlertService } from '@collab-ui/angular';

@Component({
  selector: 'demo-alert-default',
  template: `
    <button cui-button (click)="onClick()" aria-label='Click to Open'>
      Info/Default
    </button>
    `,
})

export class AlertDefault {
  constructor(private alertService: AlertService) {}

  onClick() {
    this.alertService.info('Alert', 'Who\'s awesome?  You are!', {
      ariaLabel: 'Close Alert',
      orderNewest: false,
      onHide: () => console.log('onHide info'),
    });
  }
}

**/

/**
* @component alert
* @section success
*
* @angular

import { Component } from '@angular/core';
import { AlertService } from '@collab-ui/angular';

@Component({
  selector: 'demo-alert-success',
  template: `
    <button cui-button (click)="onClick()" aria-label='Click to Open'>
      Success
    </button>
    `,
})

export class AlertSuccess {
  constructor(private alertService: AlertService) {}

  onClick() {
    this.alertService.success('Alert', 'Who\'s awesome?  You are!', {
      ariaLabel: 'Close Alert',
      orderNewest: false,
      onHide: () => console.log('onHide info'),
    });
  }
}

**/

/**
* @component alert
* @section warning
*
* @angular

import { Component } from '@angular/core';
import { AlertService } from '@collab-ui/angular';

@Component({
  selector: 'demo-alert-warning',
  template: `
    <button cui-button (click)="onClick()" aria-label='Click to Open'>
      Warning
    </button>
    `,
})

export class AlertWarning {
  constructor(private alertService: AlertService) {}

  onClick() {
    this.alertService.warning('Alert', 'Who\'s awesome?  You are!', {
      ariaLabel: 'Close Alert',
      orderNewest: false,
      onHide: () => console.log('onHide info'),
    });
  }
}

**/

/**
* @component alert
* @section error
*
* @angular

import { Component } from '@angular/core';
import { AlertService } from '@collab-ui/angular';

@Component({
  selector: 'demo-alert-error',
  template: `
    <button cui-button (click)="onClick()" aria-label='Click to Open'>
      Error
    </button>
    `,
})

export class AlertError {
  constructor(private alertService: AlertService) {}

  onClick() {
    this.alertService.error('Alert', 'Who\'s awesome?  You are!', {
      ariaLabel: 'Close Alert',
      orderNewest: false,
      onHide: () => console.log('onHide info'),
    });
  }
}

**/

/**
* @component alert
* @section hide
*
* @angular

import { Component } from '@angular/core';
import { AlertService } from '@collab-ui/angular';

@Component({
  selector: 'demo-alert-hide',
  template: `
    <button cui-button (click)="showAlert()" aria-label='Click to Open'>
      Show Alert
    </button>
    <button cui-button (click)="hideAlert()" aria-label='Click to Hide'>
      Hide Alert
    </button>
    `,
})

export class AlertDefault {
  key: string;
  constructor(private alertService: AlertService) {}

  showAlert() {
    this.key = this.alertService.info('Alert', 'Who\'s awesome?  You are!');
  }

  hideAlert() {
    this.alertService.hide(this.key);
  }
}

**/
