import functionsOfOne from './one.js'; //default import 
import { add as sum } from './one.js'; //named import
//import  * as onefns from './one.js'  //named import
console.log("in two.ts module");
function process() {
    console.log("in two.js process");
    functionsOfOne.add();
    // onefns.add();
    // onefns.calc()
    sum();
}
export default process;
