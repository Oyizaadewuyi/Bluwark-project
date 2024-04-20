const mongoose = require("mongoose");

const connectDB = async () => {
	try {
		const connect = await mongoose.connect(process.env.DATABASE_URI, {});
		console.log(`MongoDB Connected: ${connect.connection.host}`);
	} catch (error) {
		console.error(error.message);
		process.exit(1);
	}
};

module.exports = connectDB;
