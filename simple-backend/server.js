const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

const fakeUsers = [
  { id: 1, name: 'John Doe', email: 'john@example.com', age: 28 },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', age: 34 },
  { id: 3, name: 'Bob Johnson', email: 'bob@example.com', age: 22 },
  { id: 4, name: 'Alice Brown', email: 'alice@example.com', age: 29 }
];

app.get('/api', (req, res) => {
  res.json({ message: 'Welcome to the simple backend API!' });
});

// GET /api/users - Fetch all users
app.get('/api/users', (req, res) => {
  res.json(fakeUsers);
});

// GET /api/users/:id - Fetch single user
app.get('/api/users/:id', (req, res) => {
  const user = fakeUsers.find(u => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).json({ error: 'User not found' });
  res.json(user);
});

// POST /api/users - Add new user (fake, doesn't persist)
app.post('/api/users', (req, res) => {
  const newUser = { id: fakeUsers.length + 1, ...req.body };
  fakeUsers.push(newUser);
  res.status(201).json(newUser);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
