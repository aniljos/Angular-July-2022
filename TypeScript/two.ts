import functionsOfOne from './one.js'

console.log("in two.ts module");


function process(){

    console.log("in two.js process");
    functionsOfOne.add();
}

export default process;