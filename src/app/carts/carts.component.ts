import { Component, OnInit } from '@angular/core';
import { Cart } from '../cart';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-carts',
  templateUrl: './carts.component.html',
  styleUrls: ['./carts.component.css']
})
export class CartsComponent implements OnInit {

  constructor(private cartService: CartService) { }

  //carts:Cart[];
  carts:any;
  selectedCart: Cart;
  
  ngOnInit() {
    this.getCarts();
  }

  onSelect(cart: Cart): void {
    this.selectedCart = cart;
  }

  getCarts(): void {
    this.cartService.getCarts().subscribe(data => {
      this.carts = data;
    });
  }
  

}
