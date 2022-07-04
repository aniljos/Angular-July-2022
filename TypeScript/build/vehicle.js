class Car {
    applyBrakes(value) {
        //console.log("calling applyBrakes");
        this.speed -= value;
    }
}
let car1;
car1 = new Car();
car1.name = "BMW";
car1.speed = 200;
car1.gears = 6;
console.log("car1", car1);
car1.applyBrakes(70);
console.log("car1", car1);
