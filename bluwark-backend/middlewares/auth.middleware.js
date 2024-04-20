const Joi = require("joi");

function validateUserSignup(req, res, next) {
	const schema = Joi.object({
		firstName: Joi.string().required(),
		lastName: Joi.string().required(),
		emailAddress: Joi.string().email().required(),
		password: Joi.string().min(6).required(),
		confirmPassword: Joi.string().valid(Joi.ref("password")).required(),
		companyName: Joi.string().required(),
	});

	const { error } = schema.validate(req.body);
	if (error) {
		return res.status(400).json({ message: error.details[0].message });
	}

	next();
}

module.exports = validateUserSignup;
