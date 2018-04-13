export interface SaleInterface {
  date: number;
  type: SaleTypeInterface;
  amount: number;
}

export interface SaleTypeInterface {
  id: number;
  name: string;
}

export interface SaleByMonthInterface {
  month: string;
  amount: number;
}

export interface SumSaleInterface {
  sales: SaleInterface[];
  totalAmount: number;
}

export interface SaleDataInterface {
  type: number;
  date: number;
  amount: number;
}
