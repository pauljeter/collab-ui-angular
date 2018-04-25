import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {
  CardModule,
  // DropdownModule,
  ModalModule,
 } from '../../../lib';
import { SharedModule } from '../shared/shared.module';
import { CategoryComponent } from './category/category.component';
import { ComponentComponent } from './component/component.component';
import { SectionComponent } from './section/section.component';
import { CodeExampleComponent } from './code-example/code-example.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    CardModule.forRoot(),
    // DropdownModule.forRoot(),
    ModalModule.forRoot(),
    SharedModule,
  ],
  declarations: [CategoryComponent, ComponentComponent, SectionComponent, CodeExampleComponent, NotFoundComponent],
})
export class CoreModule {}
