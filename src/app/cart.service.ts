import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Cart, Carts } from './cart';

//import { MessageService } from './message.service';

@Injectable()
export class CartService {

  //constructor(private messageService: MessageService) { }
  constructor() { }

  getCarts(): Observable<Cart[]> {
    // TODO: send the message _after_ fetching the heroes
    //this.messageService.add('HeroService: fetched heroes');
    console.log(Carts);
    return of(Carts);
  }

  getCart(id: number): Observable<Cart> {
    // TODO: send the message _after_ fetching the hero
    //this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(Carts.find(hero => hero.id === id));
  }

}