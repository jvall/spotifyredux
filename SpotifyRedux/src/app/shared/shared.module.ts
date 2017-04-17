import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  MdButtonModule,
  MdCheckboxModule,
  MdMenuModule,
  MdToolbarModule,
  MdIconModule,
  MdSidenavModule,
  MdListModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [],
  exports: [
    CommonModule,
    MdButtonModule,
    MdCheckboxModule,
    MdMenuModule,
    MdToolbarModule,
    MdIconModule,
    MdSidenavModule,
    MdListModule,
    BrowserAnimationsModule
  ],
  declarations: []
})
export class SharedModule { }
