import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ShopifyService } from './shopify.service';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private shopifyService: ShopifyService) {}

  public getProduct(id: string): Promise<any> {
    let query = `{ product(id: "${id}") {title}}`;
    return new Promise((resolve) => {
      this.shopifyService
        .makeShopifyAPIRequest(query)
        .subscribe((res) => resolve(res));
    });
  }

  public getAllProducts(): Promise<any> {
    let query = `{products(first:5) {edges {node {id}}}}`;
    return new Promise((resolve) => {
      this.shopifyService.makeShopifyAPIRequest(query).subscribe((res) => {
        console.log(res);
        resolve(res);
      });
    });
  }
}
