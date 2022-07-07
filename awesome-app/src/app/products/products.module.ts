import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListProductsComponent } from './list-products/list-products.component';
import {HttpClientModule} from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './filter.pipe';
import { EditProductComponent } from './edit-product/edit-product.component';
import {RouterModule, Routes} from '@angular/router';
import { AuthGuardService } from '../services/auth-guard.service';

const routes: Routes =[
  {path: "products", component: ListProductsComponent, canActivate:[AuthGuardService]}
]
@NgModule({
  declarations: [
    ListProductsComponent,
    FilterPipe,
    EditProductComponent
  ],
  imports: [
    CommonModule, HttpClientModule, FormsModule, RouterModule.forChild(routes)
  ],
  exports: [
    ListProductsComponent
  ]
})
export class ProductsModule { }
