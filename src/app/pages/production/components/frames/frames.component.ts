import {Component, Input, OnInit, OnChanges} from '@angular/core';
import {ProductionService } from '../../production.service';
import {SaleInterface, SaleTypeInterface, SumSaleInterface} from '../../sale.interface';

@Component({
  selector: 'app-frames',
  templateUrl: './frames.component.html',
  styleUrls: ['./frames.component.css']
})

export class FramesComponent implements OnInit {
  @Input()
  public type: SaleTypeInterface;

  public amount: number ;

  public sales: SumSaleInterface[];

  constructor(private prodService: ProductionService) {
    this.sales = [];
  }

  public setClick(name: string) {
    console.log(name);
  }

  ngOnInit() {
    this.getSales();
  }

  private getSales(): void {
    const sales = this.prodService.getSalesByType(this.type.id);
    // this.amount.amount = sales.totalAmount;
    console.log(sales);
  }

}
