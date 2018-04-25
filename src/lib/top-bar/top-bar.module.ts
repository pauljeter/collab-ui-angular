import {
  NgModule,
  ModuleWithProviders,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TopBarComponent } from './top-bar.component';
import { TopNavModule } from '../top-nav/top-nav.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    TopNavModule.forRoot(),
  ],
  exports: [TopBarComponent],
  declarations: [TopBarComponent]
})
export class TopBarModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: TopBarModule,
      providers: []
    };
  }
}
