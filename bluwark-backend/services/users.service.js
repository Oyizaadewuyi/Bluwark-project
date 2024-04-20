const UserModel = require("../models/user.model"); 

class UserService {
	// Create a new user
	async create(user) {
		return await UserModel.create(user);
	}

	// Update a user by ID
	async update(id, userUpdate) {
		return await UserModel.findByIdAndUpdate(id, userUpdate, { new: true });
	}

	// Delete a user by ID
	async delete(id) {
		return await UserModel.findByIdAndDelete(id);
	}

	// Find a single user by filter
	async findOne(filter) {
		return await UserModel.findOne(filter);
	}

	// Find all users matching a filter
	async findAll(filter) {
		return await UserModel.find(filter);
	}
}

module.exports = new UserService();
