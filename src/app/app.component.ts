import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CartService } from './shared/services/cart.service';
import { ShopifyService } from './shared/services/shopify.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent implements OnInit {
  title = 'mean-store-front-end';

  constructor(
    private http: HttpClient,
    private shopify: ShopifyService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
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
