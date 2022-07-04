console.log("Hello Typescript");

var x; // any (implicit)
x = 10;
x = "hello";
x = {id: 10};

var y = 100; // number(type inference);
var user = {id: 10, name: "ANil"}; // user object

//Compiler errors
//y = "some string"; // type checking
//user = 100;
//user.location = "Mumbai";

var z: number;
z = 100;
//Compiler errors
//z = "test";

var employee: {id: number, name: string, salary: number, location?: string};

employee = {id: 1, name: "abc", salary: 80000};




