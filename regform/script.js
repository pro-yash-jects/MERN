console.log("Script loaded successfully.");

const students=[
    {name:"Alice",age:20,course:"Mathematics"},
    {name:"Bob",age:22,course:"Physics"},
    {name:"Charlie",age:19,course:"Computer Science"}
];

for (let i=0;i<students.length;i++){
    console.log(`Name: ${students[i].name}, Age: ${students[i].age}, Course: ${students[i].course}`);
}