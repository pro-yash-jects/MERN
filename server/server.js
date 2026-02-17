const http = require('http');
const serverr = http.createServer((req, res) => {
    // res.end('Hello, World!');
    if (req.url === '/') {
        res.end('Welcome to the homepage!');
    } else if (req.url === '/about') {
        const user = {
            name: 'John Doe',
            age: 30,
            email: 'abc@gmail.com'
        };
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(user));
    } else {
        res.statusCode = 404;
        res.end('Page not found.');
    }

})
serverr.listen(3000, () => {
    console.log('Server is running on port 3000');
});