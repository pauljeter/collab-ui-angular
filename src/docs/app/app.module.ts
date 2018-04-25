import { HttpClientModule} from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import {
  ButtonModule,
  CardModule,
  DropdownModule,
  LoadingModule,
  ModalModule,
  TopBarModule,
  TopBarRightModule,
  TopNavModule,
} from '../../lib';

import { StylesModule } from './styles/styles.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { DevelopModule } from './develop/develop.module';
import { OverviewComponent } from './overview/overview.component';
import { PlaygroundComponent } from './playground/playground.component';
import { SampleContentComponent } from './sample-content/sample-content.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    OverviewComponent,
    SampleContentComponent,
    PlaygroundComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    AppRoutingModule,
    CoreModule,
    DevelopModule,
    SharedModule,
    StylesModule,
    ButtonModule.forRoot(),
    CardModule.forRoot(),
    DropdownModule.forRoot(),
    LoadingModule.forRoot(),
    ModalModule.forRoot(),
    TopBarModule.forRoot(),
    TopBarRightModule.forRoot(),
    TopNavModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
