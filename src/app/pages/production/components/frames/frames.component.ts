import {Component, Input, OnInit} from '@angular/core';
import {ProductionService } from '../../production.service';
import {SaleInterface, SaleTypeInterface} from '../../sale.interface';

@Component({
  selector: 'app-frames',
  templateUrl: './frames.component.html',
  styleUrls: ['./frames.component.css']
})

export class FramesComponent implements OnInit {
  @Input()
  public type: SaleTypeInterface;

  public sales: SaleInterface[];

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
    console.log(sales);
  }

}
