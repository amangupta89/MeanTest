import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { CartsComponent } from './carts/carts.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CartDetailComponent } from './cart-detail/cart-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'carts', component: CartsComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: CartDetailComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
