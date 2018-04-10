import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { IntervalPickerComponent } from './interval-picker';


@NgModule({
  declarations: [
    IntervalPickerComponent
  ],
  imports: [
    BrowserModule
  ],
  exports: [
    IntervalPickerComponent
  ],
  providers: [],
})
export class SharedModule { }
