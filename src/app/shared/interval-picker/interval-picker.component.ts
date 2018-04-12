import { Component, OnInit } from '@angular/core';
import { ProductionService } from '../../pages/production/production.service';
// import {sales} from '../../pages/production/mock-sales';

@Component({
  selector: 'app-interval-picker',
  templateUrl: './interval-picker.component.html',
  styleUrls: ['./interval-picker.component.css'],
  providers: [ProductionService]
})

export class IntervalPickerComponent implements OnInit {
  constructor(private prodService: ProductionService) {
  }
  getDate(): any {
     const sales = this.prodService.getDateSales();
     console.log('$$$$$$',  sales);
  }
  ngOnInit() {
    this.getDate();
  }

}
