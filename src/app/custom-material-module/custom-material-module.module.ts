import { NgModule } from '@angular/core';

import {
  MdButtonModule,
  MdCheckboxModule,
  MdInputModule,
  MdToolbarModule,
  MdDialogModule,
  MdProgressBarModule,
  MdGridListModule,
  MdSelectModule
 } from '@angular/material';

@NgModule({
  imports: [
    MdButtonModule,
    MdCheckboxModule,
    MdInputModule,
    MdToolbarModule,
    MdDialogModule,
    MdProgressBarModule,
    MdGridListModule,
    MdSelectModule
  ],
  exports: [
    MdButtonModule,
    MdCheckboxModule,
    MdInputModule,
    MdToolbarModule,
    MdDialogModule,
    MdProgressBarModule,
    MdGridListModule,
    MdSelectModule
  ]
})
export class CustomMaterialModuleModule { }
