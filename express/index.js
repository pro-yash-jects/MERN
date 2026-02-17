const express = require('express');
const PORT = 3000;

const app = express();

app.get('/', (req, res) => {
  res.send('Response from the server');
});

app.get('/about', (req, res) => {
  const user = {
    name: 'John Doe',
    age: 30,
    email: 'abc@gmail.com'
  }
  res.json(user);
  
});

app.get('/yash', (req, res) => {
  res.send('My name is Yash');
});

app.get('/search', (req, res) => {
  // const query = req.query.q;
  // res.send(`You searched for: ${query}`);
  console.log(req.query);
  res.json(req.query)
});

app.get('/user/:id', (req, res) => {
  const userId = req.params.id;
  console.log(userId);
  res.send(`User ID: ${userId}`);
});

app.post('/test', (req, res) => {
  res.send('This is a POST request');
});
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
