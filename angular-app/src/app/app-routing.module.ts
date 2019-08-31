import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import { CustomerComponent } from './customer/customer.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';

const routes: Routes = [{ path: 'customer', component: CustomerComponent },
{ path: 'customerdetails/:id', component: CustomerDetailsComponent },
];
@NgModule({
  exports: [RouterModule],
  declarations: [],
  imports: [
    CommonModule, [RouterModule.forRoot(routes)]
  ]
})

export class AppRoutingModule { }
