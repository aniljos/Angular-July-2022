import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../model/product';

// pure: false, impure and the transform method is invoked for every change detection
// pure: true, pure , the transfroms in invoked only if the parameters change
@Pipe({
  name: 'filter',
  pure: true
})
export class FilterPipe implements PipeTransform {

  transform(input: Array<Product>, searchKey: string): Array<Product> {

    console.log("FilterPipe, transform")
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
