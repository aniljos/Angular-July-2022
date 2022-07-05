
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {Product} from "../../model/product";

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {

 
  public data: Array<Product>;
  public searchKey: string = "";
  public nProduct: Product = new Product();

  constructor(private httpClient: HttpClient) {
      
    this.data = new Array<Product>();
    
    const url = "http://localhost:9000/products";
    this.httpClient
              .get<Array<Product>>(url)
              .subscribe((data) => {
                console.log("data", data);
                this.data = data;
              });

   }
  ngOnInit(): void {
  }

  saveProduct(){

    this.data.push(this.nProduct);
    this.nProduct = new Product();

  }

}
