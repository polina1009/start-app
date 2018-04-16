import {Component, Input, OnInit} from '@angular/core';
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
  public amount: number;

  message: string;

  public sales: SumSaleInterface;

  constructor(private prodService: ProductionService) {
    this.amount = 0;
    // this.sales = [];
  }

  public setClick(name: string) {
    console.log(name);
  }

  ngOnInit() {
    this.getSalesAndRender();
    this.prodService.notificator.subscribe(message => {
      // this.message = message;
      this.getSalesAndRender();
    });
  }

  newMessage() {
    // this.prodService.changeMessage('Hello!!!!');
  }

  private getSalesAndRender(): void {
    this.sales = this.prodService.getSalesByType(this.type.id);
    this.amount = this.sales.totalAmount;
    // console.log('*******', this.sales);
  }

}
