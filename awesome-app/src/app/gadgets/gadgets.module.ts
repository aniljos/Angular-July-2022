import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GadgetsShopComponent } from './gadgets-shop/gadgets-shop.component';
import { ViewCartComponent } from './view-cart/view-cart.component';
import { MainComponent } from './main/main.component';
import {RouterModule, Routes} from '@angular/router';

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
    CommonModule, RouterModule.forChild(routes)
  ]
})
export class GadgetsModule { }
