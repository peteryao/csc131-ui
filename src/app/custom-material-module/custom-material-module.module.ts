import { NgModule } from '@angular/core';

import {
  MdButtonModule,
  MdCheckboxModule,
  MdInputModule,
  MdToolbarModule,
  MdDialogModule } from '@angular/material';

@NgModule({
  imports: [
    MdButtonModule,
    MdCheckboxModule,
    MdInputModule,
    MdToolbarModule,
    MdDialogModule
  ],
  exports: [
    MdButtonModule,
    MdCheckboxModule,
    MdInputModule,
    MdToolbarModule,
    MdDialogModule
  ]
})
export class CustomMaterialModuleModule { }
