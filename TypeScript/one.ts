console.log("in one.ts module");

function add(){
    console.log("in one.js add");
}

function multiply(){
    console.log("in one.js multiply");
}

function calc(){
    console.log("in one.js calc");
}

//exports a function
        //export default add;

//export an object
export default {add, multiply, calc};