# Express App with Swagger Docs

This is a simple Express.js API built for learning and demonstrating how to set up a RESTful backend with Swagger documentation.

## 🚀 Features

- Express.js server
- Basic RESTful API routes
- YAML-based Swagger UI for API documentation
- In-memory data store (users)
- JSON request body handling

## 📁 Project Structure

express-app/
├── index.js # Main server file
├── swagger.yaml # API documentation in OpenAPI 3.0 format
├── package.json
└── node_modules/

## 🧪 API Routes

- `GET /` → Home route
- `GET /about` → About page
- `POST /contact` → Contact form
- `GET /users` → Get all users
- `GET /users/:id` → Get a specific user
- `POST /users` → Add a new user
- `PUT /users/:id` → Update user
- `DELETE /users/:id` → Delete user

## 📄 Swagger Documentation

Once the server is running, you can view the Swagger UI at:

👉 `http://localhost:3000/api-docs`

The API spec is defined in the `swagger.yaml` file using the OpenAPI 3.0 format.

## 🛠️ Setup Instructions

### Prerequisites

- Node.js installed
- Git installed (optional)

### Install dependencies

```bash
npm install

```
