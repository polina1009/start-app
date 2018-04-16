import { Component, OnInit } from '@angular/core';
import {ProductionService} from './production.service';

@Component({
  selector: 'app-production',
  templateUrl: './production.component.html',
  styleUrls: ['./production.component.css'],
  providers: [ProductionService]
})
export class ProductionComponent implements OnInit {

  constructor(private prodService: ProductionService) {
  }
  ngOnInit() {
    this.prodService.notificator.subscribe();
  }

}
