import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { CartItem } from '../model/cart-item';
import { Product } from '../model/product';


export abstract class CartService{

    abstract fetchProducts(): Promise<Array<Product>>;
}

@Injectable()
export class CartServiceImpl extends CartService{


    private products: Array<Product> = new Array<Product>();
    private cart: Array<CartItem> = new Array<CartItem>();

    constructor(private httpClient: HttpClient){
        super();
    }

    async getProducts(): Promise<Array<Product>>{
        
        if(this.products.length === 0){
            try {

                console.log("calling products");
                this.products = await this.fetchProducts();
                
            } catch (error) {
                
            }
        }
        
        return this.products;
        // return new Promise((resolve, reject)=> {
        //     resolve(this.products);
        // });
    }

    fetchProducts(): Promise<Array<Product>> {

        const url = "http://localhost:9000/products";

        const result$ = this.httpClient.get<Array<Product>>(url);
        return lastValueFrom(result$);

        //return "CartServiceImpl fetchProducts";
    }

}

export abstract class MockCartServiceImpl extends CartService{

    // fetchProducts(): Promise<Array<Product>> {
    //     return "MockCartServiceImpl fetchProducts";
    // }

}