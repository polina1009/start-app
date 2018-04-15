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
    this.getSales();
    this.prodService.currentMessage.subscribe(message => {
      this.message = message;
      this.getSales();
    });
  }

  newMessage() {
    this.prodService.changeMessage('Hello Polina!!!!');
  }

  private getSales(): void {
    this.sales = this.prodService.getSalesByType(this.type.id);
    console.log('*******', this.sales);
  }

}
