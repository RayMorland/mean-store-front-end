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
      'Content-Type': 'application/json',
      'X-Shopify-Storefront-Access-Token': shopifyToken,
    });

    query = {
      query: 'query{products (first: 5) {edges {node {id title description}}}}',
    };

    return this.http.post(
      'https://morlandsdevstore.myshopify.com/api/graphql.json',
      query,
      { headers: headers }
    );
  }
}
