const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");
const Joi = require("joi");

const UserSchema = new Schema(
	{
		firstName: {
			type: String,
			required: true,
		},
		lastName: {
			type: String,
			required: true,
		},
		emailAddress: {
			type: String,
			required: true,
			unique: true,
			lowercase: true,
            trim:true,
		},
		companyName: {
			type: String,
			required: true,
		},
		password: {
			type: String,
			required: true,
			minlength: 6,
		},
	},
	{ timestamps: true }
);

// Hash password before saving
UserSchema.pre("save", async function (next) {
	const user = this;
	if (!user.isModified("password")) return next();

	const salt = await bcrypt.genSalt(10);
	user.password = await bcrypt.hash(user.password, salt);
	next();
});

// Validate password confirmation
UserSchema.virtual("confirmPassword")
	.get(function () {
		return this._confirmPassword;
	})
	.set(function (value) {
		this._confirmPassword = value;
	});

UserSchema.pre("validate", function (next) {
	if (this.password !== this.confirmPassword) {
		this.invalidate(
			"confirmPassword",
			"Password and confirm password must match"
		);
	}
	next();
});

const UserModel = model("User", UserSchema);

module.exports = UserModel;
