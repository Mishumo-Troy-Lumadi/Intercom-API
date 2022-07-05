const { User } = require('../models');
const bcrypt = require('bcrypt');

exports.signin = async (req, res) => {
	try {
		const content = req.body;

		if (content.password && content.email) {
			const user = await User.findOne({ email: content.email });

			if (user) {
				if (await bcrypt.compare(content.password, user.password)) {
					user.password = undefined
					res.status(200).json(user);
				} else {
					res.sendStatus(401);
				}
			} else {
				res.sendStatus(401);
			}
		} else {
			res.sendStatus(400);
		}
	} catch (error) {
		res.sendStatus(500);
	}
};
