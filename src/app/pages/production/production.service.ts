import { Injectable } from '@angular/core';
import { sales } from './mock-sales';
import {forEach} from '@angular/router/src/utils/collection';


@Injectable()
export class ProductionService {
  // todo private sales list
  private salesInt = [];
  constructor() {
    sales.forEach(el => {
      this.salesInt.push(el.date);
      this.salesInt.push(el.type);
    });

    // todo prepare sales list
  }
  getDateSales(): any {
    const numbers = this.salesInt.filter(item => 'number' === typeof item);
    return numbers;
    // console.log(numbers);
  }
  getTypeSales(): any {
    const objects = this.salesInt.filter(item => 'object' === typeof item);
    return objects;
    // console.log(objects);
  }

  // getByMonth(from: number, to: number): object {
  //   // from = new Date(to - 1).getMonth();
  //   // to = new Date().getMonth();
  //   return {from: new Date(to - 1).getMonth(), to: new Date().getMonth()};
  // }
}
