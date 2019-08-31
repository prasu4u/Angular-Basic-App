import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  constructor() { }
  customerList = [{id: 1, name: 'prasanth'}, {id: 2, name: 'vimal'}, {id: 3, name: 'rajeesh'}];

  ngOnInit() {
  }

}
