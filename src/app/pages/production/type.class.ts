import { SaleTypeInterface } from './sale.interface';

export class TypeClass implements SaleTypeInterface {
  public id: string;
  public name: string;
  constructor(type) {
    this.id = type.id;
    this.name = type.name;
  }
}
