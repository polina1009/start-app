export interface SaleInterface {
  date: number;
  type: SaleTypeInterface;
  amount: number;
}

export interface SaleTypeInterface {
  id: string;
  name: string;
}

export interface SaleByMonthInterface {
  month: string;
  amount: number;
}
