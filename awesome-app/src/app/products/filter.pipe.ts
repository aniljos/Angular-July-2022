import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../model/product';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(input: Array<Product>, searchKey: string): Array<Product> {

    //No search key
    if(!searchKey){
      return input;
    }
    else{

          return input.filter((product) => {
              return product.id?.toString() === searchKey 
                    || product.name?.toLowerCase().includes(searchKey.toLowerCase())
                    || product.description?.toLowerCase().includes(searchKey.toLowerCase())
                    || product.price?.toString().includes(searchKey);
          })

    }

    
  }

}
