import { Injectable } from '@angular/core';
import { sales } from './mock-sales';
import {SaleByMonthInterface, SaleInterface} from './sale.interface';
import { SaleClass } from './sale.class';
import {forEach} from '@angular/router/src/utils/collection';


@Injectable()
export class ProductionService {

  // todo private sales list
  private salesList: SaleInterface[]; // Just implemented interface without default state

  private static getPreparedSales(salesList): SaleInterface[] { // real return type description
    return salesList.map((sale): SaleInterface => new SaleClass(sale));
  }

  constructor() {
    // sales.forEach(el => {
    //   this.salesInt.push(el.date);
    //   this.salesInt.push(el.type);
    // });

    this.salesList = []; // Setting default state
    this.setSales();

    // todo prepare sales list
  }

  getSalesByMonth(from: number, to: number): SaleByMonthInterface[] {
    const filteredSales = this.salesList.filter((sale) => sale.date <= to && sale.date >= from);
    return filteredSales.map((sale): SaleByMonthInterface => {
      return {
        month: new Date(sale.date).toLocaleDateString('en-us', { month: 'short' }),
        amount: sale.amount
      };
    });
  }

  getDateSales(): any {  // Remake method
    const numbers = this.salesList.filter(item => 'number' === typeof item);
    return numbers;
    // console.log(numbers);
  }
  getTypeSales(): any {
    const objects = this.salesList.filter(item => 'object' === typeof item);
    return objects;
    // console.log(objects);
  }

  // getByMonth(from: number, to: number): object {
  //   // from = new Date(to - 1).getMonth();
  //   // to = new Date().getMonth();
  //   return {from: new Date(to - 1).getMonth(), to: new Date().getMonth()};
  // }

  private setSales(): void {
    this.salesList = ProductionService.getPreparedSales(sales);

    console.log(this.salesList);
  }
}
