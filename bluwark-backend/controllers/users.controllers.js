const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const UserService = require("../services/users.service");

class UserController {
	// create a user
	async createUser(req, res) {
		const {
			firstName,
			lastName,
			emailAddress,
			companyName,
			password,
			confirmPassword,
		} = req.body;

		try {
			// Check if user already exists
			const existingUser = await UserService.findOne({ emailAddress });

			if (existingUser) {
				return res.status(400).json({
					success: false,
					message: "Email address already exists",
				});
			}

			//  // Validate password and confirm password match
			// if (password !== confirmPassword) {
			// 	return res.status(400).json({
			// 		success: false,
			// 		message: "Password and confirm password must match",
			// 	});
			// }

			// Create a new user object with hashed password
			const newUser = {
				firstName,
				lastName,
				emailAddress,
				companyName,
				password,
                confirmPassword
			};

			// Save the user to the database
			const createdUser = await UserService.create(newUser);

			res.status(201).json({
				success: true,
				message: "User created successfully",
				data: createdUser,
			});
		} catch (error) {
			res.status(500).json({
				success: false,
				message: "Error creating user",
				error: error.message,
			});
		}
	}

	// update a user
	async updateUser(req, res) {
		const userId = req.params.id;
		const updateUser = req.body;

		try {
			// check if user exists
			const existingUser = await UserService.findOne({ _id: userId });

			if (!existingUser) {
				return res.status(403).json({
					success: false,
					message: "User doesn't exist",
				});
			}

			// if everything is fine
			const updatedUser = await UserService.update(userId, updateUser);

			res.status(201).json({
				success: true,
				message: "User updated",
				data: updatedUser,
			});
		} catch (error) {
			res.status(500).json({
				success: false,
				message: "Error updating user",
				error: error.message,
			});
		}
	}

	// delete a user
	async deleteUser(req, res) {
		const userId = req.params.id;

		try {
			// check if user exists
			const existingUser = await UserService.findOne({ _id: userId });

			if (!existingUser) {
				return res.status(403).json({
					success: false,
					message: "User doesn't exist",
				});
			}

			// if user exists
			const deletedUser = await UserService.delete(userId);

			res.status(201).json({
				success: true,
				message: "User deleted successfully",
				data: deletedUser,
			});
		} catch (error) {
			res.status(500).json({
				success: false,
				message: "Error deleting user",
				error: error.message,
			});
		}
	}

	// find a single user
	async findUser(req, res) {
		const userId = req.params.id;

		try {
			// find user by ID
			const user = await UserService.findOne({ _id: userId });

			if (!user) {
				return res.status(403).json({
					success: false,
					message: "User not found",
				});
			}

			res.status(201).json({
				success: true,
				message: "User found successfully",
				data: user,
			});
		} catch (error) {
			res.status(500).json({
				success: false,
				message: "Error finding user",
				error: error.message,
			});
		}
	}

	// find all users
	async findAllUsers(req, res) {
		try {
			const users = await UserService.findAll();

			res.status(201).json({
				success: true,
				message: "Users found successfully",
				data: users,
			});
		} catch (error) {
			res.status(500).json({
				success: false,
				message: "Error fetching users",
				error: error.message,
			});
		}
	}
}

module.exports = new UserController();
