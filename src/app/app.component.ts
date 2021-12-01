import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CartService } from './shared/services/cart.service';
import { ProductService } from './shared/services/product.service';
import { ShopifyService } from './shared/services/shopify.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent implements OnInit {
  title = 'mean-store-front-end';

  constructor(private productsService: ProductService) {}

  ngOnInit(): void {
    this.getProducts();
  }

  async getProducts() {
    let products = await this.productsService.getAllProducts();
    console.log(products);
  }
}
