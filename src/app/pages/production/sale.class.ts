import {SaleInterface, SaleTypeInterface} from './sale.interface';

export class SaleClass implements SaleInterface {
  public date: number;
  public type: SaleTypeInterface;
  public amount: number;

  constructor(sale) {
    this.date = sale.date;
    this.type = {...sale.type as SaleTypeInterface};
    this.amount = sale.amount;
  }

}
