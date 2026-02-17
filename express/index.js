const express = require('express');
const PORT = 3000;

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Response from the server');
  return;
});

app.get('/about', (req, res) => {
  const user = {
    name: 'John Doe',
    age: 30,
    email: 'abc@gmail.com'
  }
  res.json(user);
  return;
  
});

app.get('/search', (req, res) => {
  // const query = req.query.q;
  // res.send(`You searched for: ${query}`);
  console.log(req.query);
  res.json(req.query)
  return;
});

app.get('/user/:id', (req, res) => {
  const userId = req.params.id;
  console.log(userId);
  res.send(`User ID: ${userId}`);
  return;
});

app.post('/test', (req, res) => {
  const data = req.body;
  console.log(data);
  res.send('Data received successfully');
  return;
});

app.post('/greet', (req, res) => {
  const {name,age} = req.body;
  res.send(`Welcome ${name}!, Your age is ${age}`);
  return; 
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
