const express = require("express");
const app = express();
const swaggerUi = require("swagger-ui-express");
const YAML = require("yamljs");
const swaggerDocument = YAML.load("./swagger.yaml");
// Swagger setup
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const PORT = 3000;

// Middleware
app.use(express.json());
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// Basic Routes
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.get("/about", (req, res) => {
  res.send("About Page");
});

app.post("/contact", (req, res) => {
  res.send("Contact Page");
});

// Route with parameter
app.get("/user/:id", (req, res) => {
  res.send(`User ID: ${req.params.id}`);
});

// Query parameter
app.get("/search", (req, res) => {
  res.send(`Search Query: ${req.query.q}`);
});

// RESTful API
let users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
];

// Create user
app.post("/users", (req, res) => {
  const newUser = { id: users.length + 1, name: req.body.name };
  users.push(newUser);
  res.status(201).json(newUser);
});

// Read all users
app.get("/users", (req, res) => {
  res.json(users);
});

// Read user by ID
app.get("/users/:id", (req, res) => {
  const user = users.find((u) => u.id == req.params.id);
  res.json(user);
});

// Update user
app.put("/users/:id", (req, res) => {
  const user = users.find((u) => u.id === Number(req.params.id));
  user.name = req.body.name;
  res.json(user);
});

//Delete user
app.delete("/users/:id", (req, res) => {
  users = users.filter((u) => u.id !== Number(req.params.id));
  res.status(204).send();
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
