import { Component, OnInit } from '@angular/core';
import {ProductionService} from './production.service';
import {SaleInterface, SumSaleInterface} from './sale.interface';
// import { Sales } from './sales';

@Component({
  selector: 'app-production',
  templateUrl: './production.component.html',
  styleUrls: ['./production.component.css'],
  providers: [ProductionService]
})
export class ProductionComponent implements OnInit {

  message: string;

  constructor(private prodService: ProductionService) {
  }
  ngOnInit() {
    this.prodService.currentMessage.subscribe(message => this.message = message);
  }

}
