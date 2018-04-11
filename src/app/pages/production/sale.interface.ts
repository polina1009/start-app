export interface SaleInterface {
  date: number;
  type: SaleTypeInterface;
}

export interface SaleTypeInterface {
  id: string;
  name: string;
}
