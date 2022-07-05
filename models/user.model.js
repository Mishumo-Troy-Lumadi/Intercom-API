const mongoose = require('mongoose');

let schema = new mongoose.Schema(
	{
		username: { type: String, unique: true },
		email: { type: String, required: true, unique: true },
		password: { type: String, required: true },
		role: { type: String, enum: ['client', 'admin'], default: 'client' },
	},
	{
		timestamps: true,
	}
);

let model = mongoose.model('User', schema);
module.exports = model;
