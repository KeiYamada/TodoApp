const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true, useUnifiedTopology: true});


const mongoose = requrie('mongoose');

const schema = {
	title: {
		type: String,	
	},
	complete: {
		type: Boolean,
	},
};

exports.Todo = mongoose.model('Todo', schema);
