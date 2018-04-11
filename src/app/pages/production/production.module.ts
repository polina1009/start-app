import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { ProductionComponent } from './production.component';
import { ContactLensesComponent, FramesComponent, OtherComponent, RxLensesComponent, ServicesComponent, ProductionChartComponent } from './components';
import {SharedModule} from '../../shared/shared.module';
import {ProductionService} from './production.service';

@NgModule({
  declarations: [
    ProductionComponent,
    ContactLensesComponent,
    FramesComponent,
    OtherComponent,
    RxLensesComponent,
    ServicesComponent,
    ProductionChartComponent
  ],
  imports: [
    BrowserModule,
    SharedModule
  ],
  exports: [
    ProductionComponent
  ],
  providers: [
    ProductionService
  ],
})
export class ProductionModule { }
