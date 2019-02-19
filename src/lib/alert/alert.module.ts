import { OverlayModule } from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonModule } from '../button';
import { IconModule } from '../icon';
import { AlertComponent } from './alert.component';
import { AlertContainerComponent } from './alert-container.component';

@NgModule({
  imports: [
    OverlayModule,
    PortalModule,
    CommonModule,
    ButtonModule,
    IconModule,
  ],
  declarations: [
    AlertComponent,
    AlertContainerComponent,
  ],
  exports: [AlertContainerComponent],
  entryComponents: [
    AlertContainerComponent,
  ],
})
export class AlertModule { }
