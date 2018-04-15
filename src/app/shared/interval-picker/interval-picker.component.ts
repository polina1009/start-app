import { Component, OnInit, Input } from '@angular/core';
import { ProductionService } from '../../pages/production/production.service';
import {SaleTypeInterface, SaleInterface, SumSaleInterface} from '../../pages/production/sale.interface';

const periodMap = {
  day: {
    from: new Date().setHours(0, 0, 0, 0),
    to: new Date().getTime()
  },
  week: {
    from: new Date().setDate(new Date().getDate() - 7),
    to: new Date().getTime()
  },
  month: {
    from: new Date(new Date().setMonth(new Date().getMonth() - 1)).getTime(),
    to: new Date().getTime()
  },
  threeMonth: {
    from: new Date(new Date().setMonth(new Date().getMonth() - 3)).getTime(),
    to: new Date().getTime()
  },
  sixMonth: {
    from: new Date(new Date().setMonth(new Date().getMonth() - 6)).getTime(),
    to: new Date().getTime()
  },
  nineMonth: {
    from: new Date(new Date().setMonth(new Date().getMonth() - 9)).getTime(),
    to: new Date().getTime()
  },
  year: {
    from: new Date().setFullYear(new Date().getFullYear() - 1),
    to: new Date().getTime()
  }
};

@Component({
  selector: 'app-interval-picker',
  templateUrl: './interval-picker.component.html',
  styleUrls: ['./interval-picker.component.css'],
  // providers: [ProductionService]
})

export class IntervalPickerComponent implements OnInit {

  constructor(private prodService: ProductionService) {
  }

  ngOnInit() {
  }


  setPeriod(perioKey) {
    const from = periodMap[perioKey].from;
    const to = periodMap[perioKey].to;
    this.prodService.filterSales( from, to);
    // console.log('###########');
    this.prodService.changeMessage('Hello Polina!!!!');
  }

}
