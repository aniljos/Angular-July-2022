import { Component } from "@angular/core";

@Component({
    selector: 'databinding',
    templateUrl: './databinding.component.html'
})
export class DataBindingComponent{

    public name: string;
    public count: number;
    public ctrPlaceHolder: string;
    public isPanelVisible: boolean;

    constructor(){
        this.name = "Anil Joseph";
        this.count = 10;
        this.ctrPlaceHolder= "The Count";
        this.isPanelVisible = false;
    }

    public inc(evt: any){
        this.count++;
        console.log(evt);
    }

}