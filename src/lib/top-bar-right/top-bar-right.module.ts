import {
  NgModule,
  ModuleWithProviders,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopBarRightComponent } from './top-bar-right.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  exports: [TopBarRightComponent],
  declarations: [TopBarRightComponent],
  providers: [],
})
export class TopBarRightModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: TopBarRightModule,
      providers: []
    };
  }
}
