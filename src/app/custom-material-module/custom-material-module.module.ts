import { NgModule } from '@angular/core';

import {
  MdButtonModule,
  MdCheckboxModule,
  MdInputModule,
  MdToolbarModule,
  MdDialogModule,
  MdProgressBarModule,
  MdGridListModule
 } from '@angular/material';

@NgModule({
  imports: [
    MdButtonModule,
    MdCheckboxModule,
    MdInputModule,
    MdToolbarModule,
    MdDialogModule,
    MdProgressBarModule,
    MdGridListModule
  ],
  exports: [
    MdButtonModule,
    MdCheckboxModule,
    MdInputModule,
    MdToolbarModule,
    MdDialogModule,
    MdProgressBarModule,
    MdGridListModule
  ]
})
export class CustomMaterialModuleModule { }
