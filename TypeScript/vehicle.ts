interface Vehicle{
    name: string;
    speed: number;
    gears?: number;

    applyBrakes(value: number): void;
}

class Car implements Vehicle{


    name: string;
    speed: number;
    gears?: number;

   

    constructor(name?: string, speed?: number, gears?: number){

        this.name = name;
        this.speed = speed;
        this.gears = gears;
    }

    applyBrakes(value: number): void {
        
        //console.log("calling applyBrakes");
        this.speed -= value;
    }


}


let car1: Vehicle;
car1 = new Car();
car1.name = "BMW"; car1.speed = 200; car1.gears = 6;
console.log("car1", car1);
car1.applyBrakes(70);
console.log("car1", car1);

let car2 =  new Car("Merc", 190, 6);
console.log("car2", car2);



