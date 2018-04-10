import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { ProductionComponent } from './production.component';
import { ContactLensesComponent, FramesComponent, OtherComponent, RxLensesComponent, ServicesComponent } from './components';
import {SharedModule} from '../../shared/shared.module';

@NgModule({
  declarations: [
    ProductionComponent,
    ContactLensesComponent,
    FramesComponent,
    OtherComponent,
    RxLensesComponent,
    ServicesComponent
  ],
  imports: [
    BrowserModule,
    SharedModule
  ],
  exports: [
    ProductionComponent
  ],
  providers: [],
})
export class ProductionModule { }
