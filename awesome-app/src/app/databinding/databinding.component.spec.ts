import { DataBindingComponent } from './databinding.component';
import { TestBed } from "@angular/core/testing"

fdescribe("DatabindingComponent", () => {

    it("create the componenet", () => {

        const fixture = TestBed.createComponent(DataBindingComponent);
        expect(fixture).toBeTruthy();
        expect(fixture.componentInstance).toBeTruthy();
        expect(fixture.nativeElement).toBeTruthy()
    })

    it("increment count", () => {

        const fixture = TestBed.createComponent(DataBindingComponent);
        expect(fixture.componentInstance.count).toBe(10);
        fixture.componentInstance.inc({});
        expect(fixture.componentInstance.count).toBe(11);
    })

    it("increment count and update UI", () => {

        const fixture = TestBed.createComponent(DataBindingComponent);
        //update the view
        fixture.detectChanges()
        //handle to the view
        const nativeElement = fixture.nativeElement;
        //handle to the h4 with id=ctr
        let content = nativeElement.querySelector("#ctr").textContent;
        expect(content).toContain("10");
        //incremnet count
        fixture.componentInstance.inc({});
        //update the view
        fixture.detectChanges()
        content = nativeElement.querySelector("#ctr").textContent;
        expect(content).toContain("11");
    })



})