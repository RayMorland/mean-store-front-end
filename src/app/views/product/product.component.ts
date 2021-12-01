import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.sass'],
})
export class ProductComponent implements OnInit {
  product: any;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.getProduct();
  }

  async getProduct() {
    let product = await this.productService
      .getProduct('Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzcwMTUyMzA5OTY2NzM=')
      .then((product) => (this.product = product.data.product));
  }
}
