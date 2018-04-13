import { Injectable } from '@angular/core';
import { sales } from './mock-sales';
import {SaleByMonthInterface, SaleInterface, SumSaleInterface} from './sale.interface';
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
    // this.getSalesByMonth(1483394400000, 1485900000000);

  }
  // getSalesByMonth(): SaleByMonthInterface[] {
  //   const filteredSales = this.salesList.filter((sale) => sale.date <= to && sale.date >= from);
  //   return this.filteredSalesList.map((sale): SaleByMonthInterface => {
  //     return {
  //       month: new Date(sale.date).toLocaleDateString('en-us', { month: 'short' }),
  //       amount: sale.amount
  //     };
  //   });
  // }

  getSalesByType(type: number): SumSaleInterface {
    let total = 0;
    const salesList = this.filteredSalesList.filter((el) => {
      if (el.type.id === type) {
        total += el.amount;

        return true;
      }
    });
    // console.log(salesList);
     return {
       sales: salesList,
       totalAmount: total
     };
  }

  private setSales(): void {
    this.salesList = ProductionService.getPreparedSales(sales);
  }


  public filterSales(from: number, to: number): void {
    this.filteredSalesList = this.salesList.filter((interval) => interval.date <= to && interval.date >= from);
  }
}
