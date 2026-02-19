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
  res.status(201).json({message: 'User created successfully',newUser});  
  }
);

app.get('/users', (req, res) => {
  res.json({"message":"List of users:",users});
  return;
});

app.get('/users/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const user = users.find(u => u.userID === userId);
  if (!user) {
    res.status(404).send('User not found');
    console.log('User not found');
    return;
  }
  res.json(user);
  return;
});

// app.put('/users/:id', (req, res) => {
//   const userId = parseInt(req.params.id);
//   const {firstName, lastName, email, password, dob} = req.body;
//   const userIndex = users.findIndex(u => u.userID === userId);
//   if (userIndex === -1) {
//     res.status(404).send('User not found');
//     console.log('User not found');
//     return;
//   }
//   const updatedUser = {
//     userID: userId,
//     firstName: firstName || users[userIndex].firstName,
//     lastName: lastName || users[userIndex].lastName,
//     email: email || users[userIndex].email,
//     password: password || users[userIndex].password,
//     dob: dob || users[userIndex].dob
//   };
//   users[userIndex] = updatedUser;
//   res.json({message: 'User updated successfully', updatedUser});
//   return;
// });


app.put('/users/:id',  (req,res)=>{
  const id = parseInt(req.params.id);
  const {firstName, lastName, email, password, dob} = req.body;
  let user = users.find(u => u.userId == id);
  const Newuser = {
    "userID" : id,
    "firstName": firstName || user.firstName,
    "lastName" : lastName || user.lastName,
    "email": email || user.email,
    "password": password || user.password,
    "dob": dob || user.dob
  }
  const index = users.findIndex(u => u.userId == id);
  users[index]=Newuser;
  console.log(users)
  res.send(users[index])
  return;
})


app.get('/', (req, res) => {
  res.send('Response from the server');
  return;
});

app.get('/search', (req, res) => {
  // const query = req.query.q;
  // res.send(`You searched for: ${query}`);
  console.log(req.query);
  res.json(req.query)
  return;
});



app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
