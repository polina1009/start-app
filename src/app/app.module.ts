import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';


import {HeaderModule} from './common/header';
import {ProductionModule} from './pages/production';
import {ProductionService} from './pages/production/production.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HeaderModule,
    ProductionModule
  ],
  providers: [
    ProductionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
