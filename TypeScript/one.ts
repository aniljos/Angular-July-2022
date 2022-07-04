console.log("in one.ts module");

export function add(){
    console.log("in one.js add");
}

export function multiply(){
    console.log("in one.js multiply");
}

export function calc(){
    console.log("in one.js calc");
}

//exports a function
        //export default add;

//export an object
export default {add, multiply, calc};