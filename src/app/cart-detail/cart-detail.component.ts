import { Component, OnInit, Input } from '@angular/core';
import { Cart } from '../cart';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { CartService } from '../cart.service';


@Component({
  selector: 'app-cart-detail',
  templateUrl: './cart-detail.component.html',
  styleUrls: ['./cart-detail.component.css']
})
export class CartDetailComponent implements OnInit {
  
  @Input() cart: any;

  constructor(private route: ActivatedRoute,
    private cartService: CartService,
    private location: Location) { }

  ngOnInit() {
    this.getCart();
  }

  getCart(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.cartService.getCart(id).subscribe(data => {
      console.log(data);
      this.cart = data;
    });
  }

  goBack(): void {
    this.location.back();
  }

}
