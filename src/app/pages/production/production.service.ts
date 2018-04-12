import { Injectable } from '@angular/core';
import { sales } from './mock-sales';
import {SaleByMonthInterface, SaleInterface, SaleTypeInterface} from './sale.interface';
import { SaleClass } from './sale.class';


@Injectable()
export class ProductionService {

  // todo private sales list
  private salesList: SaleInterface[]; // Just implemented interface without default state
  private filteredSalesList: SaleInterface[];

  private static getPreparedSales(salesList): SaleInterface[] { // real return type description
    return salesList.map((sale): SaleInterface => new SaleClass(sale));
  }
  constructor() {

    this.salesList = []; // Setting default state
    this.filteredSalesList = [];
    this.setSales();
    this.filterSales(1483221600000, 1483221600000);

    // todo prepare sales list
  }
  // getSalesByMonth(from: number, to: number): SaleByMonthInterface[] {
  //   const filteredSales = this.salesList.filter((sale) => sale.date <= to && sale.date >= from);
  //   return this.filteredSales.map((sale): SaleByMonthInterface => {
  //     return {
  //       month: new Date(sale.date).toLocaleDateString('en-us', { month: 'short' }),
  //       amount: sale.amount
  //     };
  //   });
  // }

  private setSales(): void {
    this.salesList = ProductionService.getPreparedSales(sales);

    console.log(this.salesList);
  }
  private filterSales(from: number, to: number): void {
    this.filteredSalesList = this.salesList.filter((interval) => interval.date <= to && interval.date >= from);
    console.log(this.filteredSalesList);
  }
}
