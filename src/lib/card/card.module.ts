import {
  NgModule,
  ModuleWithProviders,
} from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardComponent } from './card.component';

@NgModule({
  imports: [CommonModule],
  exports: [CardComponent],
  declarations: [CardComponent],
})
export class CardModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CardModule,
      providers: []
    };
  }
}
