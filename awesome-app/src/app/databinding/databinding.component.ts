import { Component } from "@angular/core";

@Component({
    selector: 'databinding',
    templateUrl: './databinding.component.html'
})
export class DataBindingComponent{

    public name: string;
    public count: number;
    public ctrPlaceHolder: string;

    constructor(){
        this.name = "Anil Joseph";
        this.count = 10;
        this.ctrPlaceHolder= "The Count"
    }

    public inc(evt: any){
        this.count++;
        console.log(evt);
    }

}