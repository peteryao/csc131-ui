import { NgModule } from '@angular/core';

import {
  MdButtonModule,
  MdCheckboxModule,
  MdInputModule,
  MdToolbarModule,
  MdDialogModule,
  MdProgressBarModule,
 } from '@angular/material';

@NgModule({
  imports: [
    MdButtonModule,
    MdCheckboxModule,
    MdInputModule,
    MdToolbarModule,
    MdDialogModule,
    MdProgressBarModule
  ],
  exports: [
    MdButtonModule,
    MdCheckboxModule,
    MdInputModule,
    MdToolbarModule,
    MdDialogModule,
    MdProgressBarModule
  ]
})
export class CustomMaterialModuleModule { }
