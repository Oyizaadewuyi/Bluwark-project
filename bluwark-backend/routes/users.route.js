const express = require("express");
const router = express.Router();

const {
	createUser,
	updateUser,
	deleteUser,
	findUser,
	findAllUsers,
} = require("../controllers/users.controllers");

// Create a user
router.post("/signup", createUser);

// Get a user by ID
router.get("/:id", findUser);

// Update a user by ID
router.patch("/:id", updateUser);

// Delete a user by ID
router.delete("/:id", deleteUser);

// Get all users
router.get("/", findAllUsers);

module.exports = router;
