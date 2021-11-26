import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass'],
})
export class HeaderComponent implements OnInit {
  cartLength = 0;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.cartObs.subscribe((res) => (this.cartLength = res.length));
  }
}
