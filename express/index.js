const express = require('express');
const PORT = 3000;

const app = express();
app.use(express.json());
let users = [];

app.post('/users', (req, res) => {
  const {firstName, lastName, email, password, dob} = req.body;
  if (!firstName || !lastName || !email || !password || !dob) {
    res.status(400).send('All fields are required');
    console.log('All fields are required');
    return;
  }
  const existingUser = users.find(user => user.email === email);
  if (existingUser) {
    res.status(409).send('User with this email already exists');
    console.log('User with this email already exists');
    return;
  }
  const newUser = {
    userID : Date.now(),
    firstName,
    lastName,
    email,
    password,
    dob
  }
  users.push(newUser);
  res.status(201).json(newUser);  
  }
);

app.get('/users', (req, res) => {
  res.json(users);
  return;
});


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
  if (!name || !age) {
    res.status(400).send('Name and age are required');
    console.log('Name and age are required');
    return;
  }
  res.send(`Welcome ${name}!, Your age is ${age}`);
  return; 
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
