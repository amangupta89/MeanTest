import { Component, OnInit } from '@angular/core';
// import { Cart } from '../cart';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private cartService:CartService) { }
  
  carts:any;
  results:any;
  
  ngOnInit() {
    this.getCarts();
  }

  getCarts(): void {
    // this.cartService.getCarts().subscribe(data => {
    //   console.log(data);
    //   this.carts = data;
    // });
    this.cartService.getAggCarts().subscribe(data => {
      console.log(data);
      this.results = data;
    });

    // this.cartService.getCarts()
    //   .subscribe(carts => this.carts = carts);
  }

}
