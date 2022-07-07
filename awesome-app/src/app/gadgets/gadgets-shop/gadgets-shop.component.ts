import { Product } from './../../model/product';
import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart-service';

@Component({
  selector: 'app-gadgets-shop',
  templateUrl: './gadgets-shop.component.html',
  styleUrls: ['./gadgets-shop.component.css'],
  //providers: []
})
export class GadgetsShopComponent implements OnInit {

  public products: Array<Product> = new Array<Product>();

  constructor(private cartService: CartService) {

      //console.log(cartService.fetchProducts());
   }

   ngOnInit(): void {

   
    this.fetchProductsFromService();

  }

  async fetchProductsFromService(){
    try {
      
      const products = await this.cartService.fetchProducts();
      console.log("ngOnInit products", products);
      this.products = products;

    } catch (error) {
      console.log("ngOnInit error", error);
    }
  }


  add(product:Product, qty: string){

  }

}
