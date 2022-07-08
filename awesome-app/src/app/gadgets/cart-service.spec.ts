import { TestBed } from '@angular/core/testing';
import { CartServiceImpl } from './cart-service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

fdescribe("CartServiceImpl", () => {


    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [],
            providers: [CartServiceImpl],
            imports: [HttpClientTestingModule],
            
        })
    })

    it("create the service", async () => {

        
        const httpMock = TestBed.inject(HttpTestingController);
        const service = TestBed.inject(CartServiceImpl);
        expect(service).toBeTruthy();

        service.fetchProducts().then((products) => {
            expect(products.length).toBe(3);
            expect(request.request.method).toBe("GET");
        });

        const request = httpMock.expectOne("http://localhost:9000/products");
        request.flush([
            {id:1, name: "", price: 1000, description: ""},
            {id:2, name: "", price: 1000, description: ""},
            {id:3, name: "", price: 1000, description: ""}
        ])
        
    })

})