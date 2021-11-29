import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopifyService } from './services/shopify.service';
import { CartService } from './services/cart.service';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [MainLayoutComponent, HeaderComponent, FooterComponent],
  imports: [CommonModule, AppRoutingModule],
  exports: [MainLayoutComponent, HeaderComponent, FooterComponent],
  providers: [ShopifyService, CartService],
})
export class SharedModule {}
