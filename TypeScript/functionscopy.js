//function statement
// 2 implicit args, this, arguments
//global object -- window
function sum(x, y){
    console.log("in sum...", arguments);
}
// function sum(){
//     console.log("in sum no args...");
// }

sum(2, 3);
sum();
sum(2,3,4,5);

//function expression
const add = function(x, y){
    console.log("in add...");
}
add(2,3);



//Arrow Function
let calc = (x, y)=>{
    console.log("in calc..");
}
calc(2,3);

calc = (x, y) => x + y;  
//calc = (x, y) => console.log("");
const result = calc(3, 8);
console.log(result);



const obj = {
    id: 10,
    print: function(){
        console.log("id", this.id);

        setTimeout(()=>{
            console.log("id after 2secs", this.id);
        }, 2000);
    }
}

obj.print();
