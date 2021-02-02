const {Task} = require('./db');

var tasks = 
	[{
		title: "buy milk222",
		complete: false,
	},
	{
		title: "learn javascript",
		complete: false,
	},
	{
		title: "learn express",
		complete: false,
	},
	{
		title: "finish learning nodejs",
		complete : true,
	}
	];

exports.addTask = async (title) => {
	//タスクを追加する処理を書く
	const newTask 
	= {
		title,
		complete: false
	};
	await Task.create(newTask);
	// tasks.push(newTask);
}

exports.complete = async (title) => {
await Task.findOneAndUpdate({
		title: title,
	},{
		$set: {
			complete: true,
		}
	})
}

exports.getTasks = async () => {
	const uncompleted = await Task.find({complete: false});
	const completed = await Task.find({complete: true});
	return {uncompleted, completed};
}


