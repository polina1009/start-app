import { Injectable } from '@angular/core';
import { sales } from './mock-sales';
import {SaleByMonthInterface, SaleInterface} from './sale.interface';
import { SaleClass } from './sale.class';


@Injectable()
export class ProductionService {

  // todo private sales list
  private salesList: SaleInterface[]; // Just implemented interface without default state

  private static getPreparedSales(salesList): SaleInterface[] { // real return type description
    return salesList.map((sale): SaleInterface => new SaleClass(sale));
  }

  constructor() {

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
  }
  getTypeSales(): any {
    const objects = this.salesList.filter(item => 'object' === typeof item);
    return objects;
  }

  private setSales(): void {
    this.salesList = ProductionService.getPreparedSales(sales);

    console.log(this.salesList);
  }
}
