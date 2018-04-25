import {
  NgModule,
  ModuleWithProviders,
} from '@angular/core';
import { CommonModule } from '@angular/common';

import { Dropdown } from './dropdown.directive';
import { DropdownMenu } from './dropdown-menu.directive';
import { DropdownToggle } from './dropdown-toggle.directive';
import { DropdownService } from './dropdown.service';

@NgModule({
  imports: [CommonModule],
  exports: [Dropdown, DropdownMenu, DropdownToggle],
  declarations: [Dropdown, DropdownMenu, DropdownToggle],
})
export class DropdownModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: DropdownModule,
      providers: [DropdownService]
    };
  }
}
