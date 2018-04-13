import { Injectable } from '@angular/core';
import { sales } from './mock-sales';
import {SaleByMonthInterface, SaleInterface, SumSaleInterface, SaleDataInterface} from './sale.interface';
import { SaleClass } from './sale.class';


@Injectable()
export class ProductionService {

  // todo private sales list
  private salesList: SaleInterface[]; // Just implemented interface without default state
  private filteredSalesList: SaleInterface[];
  private totalSale: SumSaleInterface[];

  private static getPreparedSales(salesList): SaleInterface[] { // real return type description
    return salesList.map((sale): SaleInterface => new SaleClass(sale));
  }
  constructor() {

    this.salesList = []; // Setting default state
    this.filteredSalesList = [];
    this.totalSale = [];
    this.setSales();
    this.filterSales(1483221600000, 1483221600000);

  }
  // getSalesByMonth(from: number, to: number): SaleByMonthInterface[] {
  //   const filteredSales = this.salesList.filter((sale) => sale.date <= to && sale.date >= from);
  //   return filteredSales.map((sale): SaleByMonthInterface => {
  //     return {
  //       month: new Date(sale.date).toLocaleDateString('en-us', { month: 'short' }),
  //       amount: sale.amount
  //     };
  //   });
  // }

  getSalesByType(type: number): SumSaleInterface {
    let total = 0;
    const salesList = this.filteredSalesList.filter((el) => {
      total += el.amount;
      console.log(total);
      return el.type.id === type;
    });
     return {
       sales: salesList,
       totalAmount: total
     };
  }

  private setSales(): void {
    this.salesList = ProductionService.getPreparedSales(sales);
  }


  private filterSales(from: number, to: number): void {
    this.filteredSalesList = this.salesList.filter((interval) => interval.date <= to && interval.date >= from);
  }
}
