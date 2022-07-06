import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Product } from '../../model/product';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit, OnChanges{


  //child property
  @Input()
  public product: Product = new Product();
  public temp:Product = new Product();

  @Output()
  public cancelled: EventEmitter<string> = new EventEmitter<string>();

  constructor() {

    console.log("[EditProductComponent constructor]", this.product);
    
   }
 

  ngOnInit(): void {

    console.log("[EditProductComponent ngOnInit]", this.product);
    
   
  }

  ngOnChanges(changes: SimpleChanges): void {

    console.log("[EditProductComponent ngOnChanges]", changes);

    //Shallow copy
    //this.temp = this.product;
    //Deep copy
    Object.assign(this.temp, this.product);
    
  }

  save(){
    ///Object.assign(this.product, this.temp);
  }

  cancel(){

    this.cancelled.emit("edit was cancelled");
  
  }

}
