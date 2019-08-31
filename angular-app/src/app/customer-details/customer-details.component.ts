import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(params => console.log(params));
   }
  customerDetailsList = [{id: 1, name: 'prasanth', age : 31, address: 'palakkad'},
   {id: 2, name: 'vimal', age: 30, address: 'Kuzhalmanam'}, {id: 3, name: 'rajeesh', age: 29, address: 'Edappal'}];
  ngOnInit() {
  }

}
