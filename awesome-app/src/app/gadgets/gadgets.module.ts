import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GadgetsShopComponent } from './gadgets-shop/gadgets-shop.component';
import { ViewCartComponent } from './view-cart/view-cart.component';
import { MainComponent } from './main/main.component';
import {RouterModule, Routes} from '@angular/router';
import { CartService, CartServiceImpl, MockCartServiceImpl } from './cart-service';
import { AppShareModule } from '../app-share/app-share.module';

const routes: Routes = [
  {path: "gadgets", component: MainComponent, children: [
    {path: "shop", component: GadgetsShopComponent},
    {path: "cart", component: ViewCartComponent}
  ]},
  
]

@NgModule({
  declarations: [
    GadgetsShopComponent,
    ViewCartComponent,
    MainComponent
  ],
  imports: [
    CommonModule, RouterModule.forChild(routes), AppShareModule
  ],
  providers: [
    {provide: CartService, useClass: CartServiceImpl}
  ]
})
export class GadgetsModule { }
