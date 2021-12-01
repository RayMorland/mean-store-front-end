import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { shopifyToken } from '../../credentials';

@Injectable({
  providedIn: 'root',
})
export class ShopifyService {
  constructor(private http: HttpClient) {}

  public makeShopifyAPIRequest(query: any): Observable<any> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/graphql',
      'X-Shopify-Storefront-Access-Token': shopifyToken,
    });

    return this.http.post(
      'https://morlandsdevstore.myshopify.com/api/2021-10/graphql.json',
      query,
      { headers: headers }
    );
  }
}
