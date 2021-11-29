import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { ShopifyService } from '../../services/shopify.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass'],
})
export class HeaderComponent implements OnInit {
  cartLength = 0;

  constructor(
    private http: HttpClient,
    private shopify: ShopifyService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.cartService.cartObs.subscribe((res) => (this.cartLength = res.length));
    console.log('hello');
    this.shopify.makeShopifyAPIRequest(1).subscribe((res) => {
      console.log(res);
      this.cartService.cartObs.subscribe((res) => {
        console.log(res);
      });
    });
  }

  addItem() {
    this.cartService.cart = [...this.cartService.cart, 1];
  }
}
