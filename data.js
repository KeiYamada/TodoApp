const {Todo} = require('db');

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

exports.addTask = (title) => {
	//タスクを追加する処理を書く
	const newTask 
	= {
		title,
		complete: false
	};

	tasks.push(newTask);
}


exports.complete = (title) => {
	const task = tasks.find( (task) => {
		return task.title == title;
	});

	if(!task) return;

	task.complete = true;

}

exports.getTasks = () => {
	const uncompleted = tasks.filter ((task) => {
		return !task.complete;
	})

	const completed = tasks.filter ((task) => {
		return task.complete;
	})

	return {uncompleted, completed};
}


