import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';

@NgModule({
  declarations: [HomeComponent, ProductComponent],
  imports: [CommonModule],
  exports: [HomeComponent],
})
export class ViewsModule {}
