import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom, ReplaySubject, Subject } from 'rxjs';
import { CartItem } from '../model/cart-item';
import { Product } from '../model/product';


export abstract class CartService{


    //public subject : ReplaySubject<Array<CartItem>> = new ReplaySubject<Array<CartItem>>();
    public subject : Subject<Array<CartItem>> = new Subject<Array<CartItem>>();

    abstract fetchProducts(): Promise<Array<Product>>;
    abstract addToCart(product: Product, qty: number): void;
    abstract getCart(): Array<CartItem>;

    abstract getProducts(): Promise<Array<Product>>;
}

@Injectable()
export class CartServiceImpl extends CartService
{
   

    private products: Array<Product> = new Array<Product>();
    private cart: Array<CartItem> = new Array<CartItem>();

    

    constructor(private httpClient: HttpClient){
        super();
    }

    async getProducts(): Promise<Array<Product>>{
        
        debugger;
        if(this.products.length === 0){
            try {

                console.log("invoke api to fetch products");
                this.products = await this.fetchProducts();
                
            } catch (error) {
                
            }
        }
        
        return this.products;
        
    }

    fetchProducts(): Promise<Array<Product>> {

        alert("hello");
        const url = "http://localhost:9000/products";

        const result$ = this.httpClient.get<Array<Product>>(url);
        return lastValueFrom(result$);

        //return "CartServiceImpl fetchProducts";
    }

    addToCart(product: Product, qty: number): void {
        
        this.cart.push(new CartItem(product, qty));
        console.log(this.cart);

        this.subject.next(this.cart);

    }
    getCart(): CartItem[] {

        //return a copy of the cart
        return [...this.cart];
    }

}

export abstract class MockCartServiceImpl extends CartService{

    // fetchProducts(): Promise<Array<Product>> {
    //     return "MockCartServiceImpl fetchProducts";
    // }

}