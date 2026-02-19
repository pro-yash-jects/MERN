//Imports
const express = require("express");
const connectDB = require("./db");
const User = require("./models/User");
//Config
const PORT = 3000;

//Methods
const app = express();
app.use(express.json());
connectDB();

//Initialising global variables
// let users = [];

//Routes
app.post("/users", async (req, res) => {
  const { firstName, lastName, email, password, dob } = req.body;
  if (!firstName || !lastName || !email || !password || !dob) {
    res.status(400).send("All fields are required");
    console.log("All fields are required");
    return;
  }

  // const existingUser = users.find(user => user.email === email);

  const existingUser = await User.findOne({ email });
  if (existingUser) {
    res.status(409).send("User with this email already exists");
    console.log(existingUser);
    return;
  }
  const newUser = {
    // userId : Date.now(),
    firstName,
    lastName,
    email,
    password,
    dob,
  };
  // users.push(newUser);
  const user = await User.create(newUser);
  res.status(201).json({ message: "User created successfully", newUser });
});

app.get("/users", async (req, res) => {
  // res.json({"message":"List of users:",users});
  const users = await User.find();
  res.json(users);
  return;
});

app.get("/users/:id", async (req, res) => {
  const userId = req.params.id;
  // const user = users.find(u => u.userId === userId);
  // if (!user) {
  //   res.status(404).send('User not found');
  //   console.log('User not found');
  //   return;
  // }
  // res.json(user);
  const user = await User.findById(userId);
  if (!user) {
    res.send("User not found");
    return;
  }
  console.log("Object fetched:", user);
  res.json(user);
  return;
});

app.put("/users/:id", async (req, res) => {
  const id = req.params.id;
  const { firstName, lastName, email, password, dob } = req.body;
  // let user = users.find(u => u.userId == id);
  const user = await User.findByIdAndUpdate(id, req.body, { new: true });
  res.status(201).json(user);
  // const Newuser = {
  //   "userId" : id,
  //   "firstName": firstName || user.firstName,
  //   "lastName" : lastName || user.lastName,
  //   "email": email || user.email,
  //   "password": password || user.password,
  //   "dob": dob || user.dob
  // }
  // const index = users.findIndex(u => u.userId == id);
  // users[index]=Newuser;
  // res.send(users[index])

  return;
});

app.delete("/users/:id", async (req, res) => {
  const id = req.params.id;
  try {
    await User.findByIdAndDelete(id);
    res.send("User deleted successfully.");
  } catch (err) {
    res.status(400).send("User not found.");
  }
});

app.get("/", (req, res) => {
  res.send("Response from the server");
  return;
});

// app.get('/search', (req, res) => {
//   // const query = req.query.q;
//   // res.send(`You searched for: ${query}`);
//   console.log(req.query);
//   res.json(req.query)
//   return;
// });

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
