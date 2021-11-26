import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cartObs: BehaviorSubject<Array<any>> = new BehaviorSubject(new Array());

  constructor() {
    let cart = new Array();
    this.cartObs.next(cart);
  }

  get cart() {
    return this.cartObs.getValue();
  }

  set cart(cart) {
    this.cartObs.next(cart);
  }
}
