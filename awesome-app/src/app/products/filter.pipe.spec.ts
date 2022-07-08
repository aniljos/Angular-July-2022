import { Product } from '../model/product';
import { FilterPipe } from './filter.pipe';

fdescribe('FilterPipe', () => {

  it('create an instance', () => {
    const pipe = new FilterPipe();
    expect(pipe).toBeTruthy();
  });

  it("should return the input for no searchkey", () => {

    const pipe = new FilterPipe();
    const products = new Array<Product>();
    products.push(new Product(1, "P1", 1000, "D1"));
    products.push(new Product(2, "P2", 2000, "D2"));
    products.push(new Product(3, "P3", 3000, "D3"));
    const output = pipe.transform(products, "");

    expect(output).toBe(products);

  })

  it("should return the filtered ouput for valid searchkey", () => {

    const pipe = new FilterPipe();
    const products = new Array<Product>();
    products.push(new Product(1, "P1", 1000, "D1"));
    products.push(new Product(2, "P2", 2000, "D2"));
    products.push(new Product(3, "P3", 3000, "D3"));
    const output = pipe.transform(products, "P2");

    expect(output.length).toBe(1);

  })


});
