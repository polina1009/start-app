import { Component, OnInit } from '@angular/core';
import { ProductionService } from '../../pages/production/production.service';
import { IntervalDateInterface } from '../../pages/production/sale.interface';

const periodMap = {
  day: {
    to: new Date().setHours(0, 0, 0, 0),
    from: new Date().getTime()
  },
  week: {
    to: new Date().setDate(new Date().getDate() - 7),
    from: new Date().getTime()
  },
  month: {
    to: new Date(new Date().setMonth(new Date().getMonth() - 1)).getTime(),
    from: new Date().getTime()
  },
  threeMonth: {
    to: new Date(new Date().setMonth(new Date().getMonth() - 3)).getTime(),
    from: new Date().getTime()
  },
  sixMonth: {
    to: new Date(new Date().setMonth(new Date().getMonth() - 6)).getTime(),
    from: new Date().getTime()
  },
  nineMonth: {
    to: new Date(new Date().setMonth(new Date().getMonth() - 9)).getTime(),
    from: new Date().getTime()
  },
  year: {
    to: new Date().setFullYear(new Date().getFullYear() - 1),
    from: new Date().getTime()
  }
};

@Component({
  selector: 'app-interval-picker',
  templateUrl: './interval-picker.component.html',
  styleUrls: ['./interval-picker.component.css'],
  providers: [ProductionService]
})

export class IntervalPickerComponent implements OnInit {
  constructor(private prodService: ProductionService) {
    // this.prodService.filterSales();
  }

  ngOnInit() {
  }

  setPeriod(perioKey) {
    const from = periodMap[perioKey].from;
    const to = periodMap[perioKey].to;
    console.log(from, to);
    return {
      from: from,
      to: to
    };
  }

}
