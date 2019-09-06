import { Component, OnInit } from '@angular/core';
import { Order } from '../../shared/order';

@Component({
  selector: 'app-section-orders',
  templateUrl: './section-orders.component.html',
  styleUrls: ['./section-orders.component.scss']
})
export class SectionOrdersComponent implements OnInit {

  constructor() { }

  orders: Order[] = [
    { id: 1, customer:
      {id: 1, name: 'Main St Bakery', state: 'AM', email: 'mainst@email.com'},
      total: 230, placed: new Date(2019, 12, 8), fulfilled: new Date(2019, 12, 10) },
    { id: 2, customer:
      {id: 1, name: 'Main St Bakery', state: 'AM', email: 'mainst@email.com'},
      total: 230, placed: new Date(2019, 12, 2), fulfilled: new Date(2019, 12, 4) },
    { id: 3, customer:
      {id: 1, name: 'Main St Bakery', state: 'AM', email: 'mainst@email.com'},
      total: 230, placed: new Date(2019, 11, 5), fulfilled: new Date(2019, 11, 7) },
    { id: 4, customer:
      {id: 1, name: 'Main St Bakery', state: 'AM', email: 'mainst@email.com'},
      total: 230, placed: new Date(2019, 4, 17), fulfilled: new Date(2019, 4, 20) },
    { id: 5, customer:
      {id: 1, name: 'Main St Bakery', state: 'AM', email: 'mainst@email.com'},
      total: 230, placed: new Date(2018, 12, 1), fulfilled: new Date(2018, 12, 6) },
  ];

  ngOnInit() {
  }

}
