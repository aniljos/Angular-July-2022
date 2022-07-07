
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

  //parentProperty 
  public selectedProduct: Product | null = null;

  constructor(private httpClient: HttpClient) {
      
    this.data = new Array<Product>();
    
    const url = "http://localhost:9000/secure_products";
    
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

  editProduct(product: Product){

    this.selectedProduct = product;
  }


  editCancelled(msg: string){
    
    alert("editCancelled: " + msg);
    this.selectedProduct = null;

  }

  editUpdated(updatedProduct: Product){

    const index = this.data.findIndex(item => item.id === updatedProduct.id);
    if(index !== -1){
      this.data[index] = updatedProduct;
      this.selectedProduct = null;
    }

  }

}
