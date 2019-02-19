import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { OverlayModule } from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal';
import { AlertComponent } from '@collab-ui/angular';
import { AlertContainerComponent } from '@collab-ui/angular';
import { AlertService } from '@collab-ui/angular';
import { BadgeModule } from '@collab-ui/angular';
import { IconModule } from '@collab-ui/angular';
import { ListItemSectionModule } from '@collab-ui/angular';
import { SpinnerModule } from '@collab-ui/angular';
import { LoadingModule } from '@collab-ui/angular';
import { ButtonModule } from '@collab-ui/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlaygroundComponent } from './playground/playground.component';

@NgModule({
  declarations: [
    AppComponent,
    PlaygroundComponent,
    AlertComponent,
    AlertContainerComponent,
  ],
  imports: [
    BrowserModule,
    OverlayModule,
    PortalModule,
    AppRoutingModule,
    BadgeModule,
    IconModule,
    ListItemSectionModule,
    SpinnerModule,
    ButtonModule,
    LoadingModule,
  ],
  providers: [AlertService],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  entryComponents: [AlertContainerComponent],
})
export class AppModule { }