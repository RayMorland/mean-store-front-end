import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { shopifyToken } from './credentials';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent implements OnInit {
  title = 'mean-store-front-end';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    console.log('hello');
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'X-Shopify-Storefront-Access-Token': shopifyToken,
    });
    this.http
      .post(
        'https://morlandsdevstore.myshopify.com/api/graphql.json',
        {
          query:
            'query{products (first: 5) {edges {node {id title description}}}}',
        },
        { headers: headers }
      )
      .subscribe((res) => {
        console.log(res);
      });
  }
}
