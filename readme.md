# Event Management Dashboard

A backend application for managing events, built with Node.js, Express, and MongoDB. This project provides a robust API for user authentication and management, with plans to expand into event creation, scheduling, and tracking features.

## Features
- **User Registration**: Create a new user account with name, email, and password (hashed using bcrypt).
- **User Login**: Authenticate users and issue JSON Web Tokens (JWT) for secure access.
- **User Deletion**: Allow authenticated users to delete their accounts.
- **Error Handling**: Centralized error handling for consistent API responses.
- **Secure Authentication**: JWT-based authentication to protect routes.

## Tech Stack
- **Node.js**: JavaScript runtime for the backend.
- **Express**: Web framework for building RESTful APIs.
- **MongoDB**: NoSQL database for storing user data.
- **Mongoose**: ODM for MongoDB to manage schema and queries.
- **JWT**: JSON Web Tokens for secure authentication.
- **bcrypt**: Password hashing for secure storage.

## Prerequisites
- Node.js (v16 or higher)
- MongoDB (local or cloud instance, e.g., MongoDB Atlas)
- Git

## Setup Instructions
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/<your-username>/<your-repo-name>.git
   cd <your-repo-name>
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Set Up Environment Variables**:
   - Create a `secret.env` file in the root directory.
   - Add the following variables:
     ```env
     PORT=5000
     MONGODB_URI=<your-mongodb-connection-string>
     JWT_SECRET=<your-jwt-secret-key>
     ```
   - Replace `<your-mongodb-connection-string>` with your MongoDB URI (e.g., `mongodb://localhost/event-management` or a MongoDB Atlas URI).
   - Use a secure, random string for `JWT_SECRET`.

4. **Start the Server**:
   ```bash
   npm start
   ```
   The server will run on `http://localhost:5000` (or the port specified in `secret.env`).

## Usage
- The API provides endpoints for user management.
- Use tools like Postman or curl to interact with the API.
- Protected routes (e.g., user deletion) require a JWT in the `Authorization` header as `Bearer <token>`.

### API Endpoints
| Method | Endpoint            | Description                     | Authentication Required |
|--------|---------------------|---------------------------------|-------------------------|
| POST   | `/api/users/register` | Register a new user            | No                      |
| POST   | `/api/users/login`   | Log in and receive a JWT       | No                      |
| DELETE | `/api/users/delete`  | Delete the authenticated user  | Yes                     |



## Project Structure
```
Event-Management-Dashboard/
├── config/
│   └── connectDB.js         # MongoDB connection setup
├── controllers/
│   └── userController.js    # User-related API logic
├── middleware/
│   └── auth.js             # JWT authentication middleware
├── models/
│   └── userModel.js        # Mongoose user schema
├── routes/
│   └── userRoute.js        # Express routes for user endpoints
├── utils/
│   ├── errorHandler.js     # Centralized error handling
│   ├── message.js          # API response messages
│   └── Response.js         # Standardized response utility
├── index.js                # Entry point for the application
├── secret.env              # Environment variables (not tracked in Git)
├── package.json            # Project dependencies and scripts
└── README.md               # Project documentation
```

## Contributing
Contributions are welcome! Please follow these steps:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -m "Add your feature"`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a pull request.

## License
This project is licensed under the MIT License.

## Contact
For questions or feedback, reach out to `<your-email>` or open an issue on GitHub.