const fs = require('fs');

fs.readFile('example.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading the file:', err);
        return;
    }
    console.log('File content read asynchronously:');
    console.log(data);
});
// Writing to a file
// fs.writeFileSync('example.txt', 'Hello, this is a sample text file.');
fs.writeFileSync('example.txt', 'This is second line content.');
console.log('File has been written successfully.');
fs.appendFileSync('example.txt', '\nThis is an appended line.');
console.log('this will be logged after the file is appended successfully.');
// Reading a file
console.log("------------------------------");
console.log('Reading the file content:');
const data = fs.readFileSync('example.txt', 'utf8');


// console.log(data);
