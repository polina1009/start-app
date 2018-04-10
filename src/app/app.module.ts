import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';


import {HeaderModule} from './common/header';
import {ProductionModule} from './pages/production';
import {SharedModule} from './shared/shared.module';


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
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
