import { EditProductComponent } from './../edit-product/edit-product.component';
import { environment } from '../../../environments/environment';

import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
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

  @ViewChild("editProductRef")
  public editProductComponent?:EditProductComponent;

  //parentProperty 
  public selectedProduct: Product | null = null;
  private url = environment.baseurl;

  constructor(private httpClient: HttpClient) {
      
    this.data = new Array<Product>();
    
    const url = this.url + "/secure_products";
    
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

    const url = this.url + "/secure_products";
    this.httpClient
          .post(url, this.nProduct)
          .subscribe({
            next: () => {

              this.data.push(this.nProduct);
              this.nProduct = new Product();
            },
            error: () => {
              alert("Failed to save")
            }
          })
  }

  editProduct(product: Product){

    this.selectedProduct = product;
  }


  editCancelled(msg: string){
    
    alert("editCancelled: " + msg);
    this.selectedProduct = null;

  }

  editUpdated(updatedProduct: Product){


    const url = this.url + "/secure_products/" + updatedProduct.id;

    this.httpClient
            .put(url, updatedProduct)
            .subscribe({
              next: () => {
                const index = this.data.findIndex(item => item.id === updatedProduct.id);
                if(index !== -1){
                  this.data[index] = updatedProduct;
                  this.selectedProduct = null;
                }
              },
              error: () => {
                  alert("Failed to update");
              }
            })
  }

}
