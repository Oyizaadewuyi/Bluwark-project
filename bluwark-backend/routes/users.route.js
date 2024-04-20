const express = require("express");
const router = express.Router();

const {
	createUser,
	loginUser,
	updateUser,
	deleteUser,
	findUser,
	findAllUsers,
} = require("../controllers/users.controllers");

// Create a user
router.post("/signup", createUser);

// Login a user
router.post("/signin", loginUser);

// Get a user by ID
router.get("/users/:id", findUser);

// Update a user by ID
router.patch("/users/:id", updateUser);

// Delete a user by ID
router.delete("/users/:id", deleteUser);

// Get all users
router.get("/users", findAllUsers);

module.exports = router;
