function sayName(){
    console.log(`My name is ${this.name}`);
}

const person1 = {
    name: "Tom",
    greet: sayName
};

const person2 = {
    name: "Jerry",
    greet: sayName
};

person1.greet(); 
person2.greet();