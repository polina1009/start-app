import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HeaderComponent } from './header.component';
import { LogoComponent, NavMenuComponent } from './components';


@NgModule({
  declarations: [
    HeaderComponent,
    LogoComponent,
    NavMenuComponent
  ],
  imports: [
    BrowserModule
  ],
  exports: [
    HeaderComponent
  ],
  providers: [],
})
export class HeaderModule { }
