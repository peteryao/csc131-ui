import { NgModule } from '@angular/core';

import {MdButtonModule, MdCheckboxModule, MdInputModule, MdToolbarModule} from '@angular/material';

@NgModule({
  imports: [
    MdButtonModule,
    MdCheckboxModule,
    MdInputModule,
    MdToolbarModule
  ],
  exports: [
    MdButtonModule,
    MdCheckboxModule,
    MdInputModule,
    MdToolbarModule
  ]
})
export class CustomMaterialModuleModule { }
