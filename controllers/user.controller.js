const { User } = require('../models');
const bcrypt = require('bcrypt');

exports.create = async (req, res) => {
	try {
		const content = req.body;

		if ( content.email && content.password) {
			if (content.password) {
				const hash = await bcrypt.hash(content.password, 10);
				content.password = hash;
			}

			const user = await new User(content).save();
			res.status(201).json(user);
		} else {
			res.sendStatus(400);
		}
	} catch (error) {
		res.sendStatus(500);
	}
};

exports.all = async (req, res) => {
	try {
		var users = await User.find();

		users = users.map((user) => {
			user.password = undefined;
			return user;
		});

		res.status(200).json(users);
	} catch (error) {
		res.sendStatus(500);
	}
};

exports.one = async (req, res) => {
	try {
		const id = req.params.id;

		if (id) {
			const user = await User.findById(id);
			user.password = undefined;
			res.status(200).json(user);
		} else {
			res.sendStatus(400);
		}
	} catch (error) {
		res.sendStatus(500);
	}
};

exports.update = async (req, res) => {
	try {
		const content = req.body;
		const id = req.params.id || req.body.id;

		if (id) {
			if (content.password) {
				const hash = await bcrypt.hash(content.password, 10);
				content.password = hash;
			}

			const user = await User.findByIdAndUpdate(
				id,
				{ $set: content },
				{ new: true }
			);
			res.status(200).json(user);
		} else {
			res.sendStatus(400);
		}
	} catch (error) {
		res.sendStatus(500);
	}
};

exports.delete = async (req, res) => {
	try {
		const id = req.params.id || req.body.id;

		if (id) {
			await User.findByIdAndRemove(id);
			res.sendStatus(200);
		} else {
			res.sendStatus(400);
		}
	} catch (error) {
		res.sendStatus(500);
	}
};
