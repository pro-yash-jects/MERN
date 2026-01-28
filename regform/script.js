// console.log("Script loaded successfully.");

// const students=[
//     {name:"Alice",age:20,course:"Mathematics"},
//     {name:"Bob",age:22,course:"Physics"},
//     {name:"Charlie",age:19,course:"Computer Science"}
// ];
// let a = students.length;

// for (let i=0;i<a;i++){
//     console.log(`Name: ${students[i].name}, Age: ${students[i].age}, Course: ${students[i].course}`);
// }

// const greet =  function(){
//     console.log("Hello");
// }
// greet();

// function calculator(a,b,operation){
//     return operation(a,b);
// }

// const add = function(x,y){
//     return x+y;
// }

// const subtract = function(x,y){
//     return x-y;
// }

// const multiply = function(x,y){
//     return x*y;
// } 
// const divide = function(x,y){
//     if (y !== 0){
//         return x/y;
//     } else {
//         return "Error: Division by zero";
//     }
// }

// console.log(calculator(10,5,add));        // Output: 15
// console.log(calculator(10,5,subtract));        
// console.log(calculator(10,5,multiply));     // Output: 50
// console.log(calculator(10,5,divide));      // Output: 2
// console.log(calculator(10,0,divide));      // Output: Error: Division by zero


function greet1(){
    console.log("Hello");    
}

const greet2 = function (){
    console.log("Hello Wolrd");
}
function callMe(fn){
    fn();
}


callMe(greet1);
callMe(greet2);


callMe(function(){
    console.log("Hello World")
})


const greet3 = (name) => console.log(`Hello ${name}`);

greet3("yash")