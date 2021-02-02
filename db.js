const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true, useUnifiedTopology: true});

const schema = {
	title: {
		type: String,	
	},
	complete: {
		type: Boolean,
	},
};

exports.Task = mongoose.model('Task', schema);
