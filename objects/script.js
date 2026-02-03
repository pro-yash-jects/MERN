// Regular function where 'this' context depends on how the function is called
// function sayName(){
//     console.log(`My name is ${this.name}`);
// }
// const person1 = {
//     name: "Tom",
//     greet: sayName
// };
// const person2 = {
//     name: "Jerry",
//     greet: sayName
// };
// Invoking the functions
// person1.greet(); 
// person2.greet();


// Using arrow function to retain 'this' context
// const user = {
//     name: "Spike",
//     sayName (){
//         setTimeout(()=>{
//         console.log(`My name is ${this.name}`);
//     }, 1000);
//     }
// };
// Invoking the functions
// user.sayName();


//Callback function 
function greet(name){
    console.log(`Hello, ${name}`);
}
function user(cb){
    const username = "TOM";
    cb(username);
}
//Passing function as a parameter
user(greet)

