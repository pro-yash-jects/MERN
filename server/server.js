const http = require('http');
const serverr = http.createServer((req, res) => {
    res.end('Hello, World!');
})
serverr.listen(3000, () => {
    console.log('Server is running on port 3000');
});