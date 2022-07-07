import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/model/cart-item';
import { CartService } from '../cart-service';

@Component({
  selector: 'app-view-cart',
  templateUrl: './view-cart.component.html',
  styleUrls: ['./view-cart.component.css']
})
export class ViewCartComponent implements OnInit {

  public cart: Array<CartItem> = new Array<CartItem>();

  constructor(private cartService: CartService) { 

    this.cart = cartService.getCart();
    this.cartService.subject.subscribe((cart) => {
        this.cart = cart;
    });
  
  }

  ngOnInit(): void {
  }

}
