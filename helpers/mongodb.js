const mongoose = require('mongoose');

function connect(url) {
	try {
		mongoose.connect(url, {}, (err) => {
			if (err) {
				console.warn('Database Connection Failed: ' + err.message);
			} else {
				console.info('Database Connected');
			}
		});
	} catch (error) {
		console.error('Database Error: ' + error.message);
	}
}

module.exports = { connect };
