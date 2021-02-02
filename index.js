var express = require('express');
var app = express()
var bodyParser = require("body-parser");

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

var data = require('./data');
const wrap = fn => (req, res, next) => fn(req, res, next).catch(next);

app.get("/", wrap (async function(req,res){
	var {uncompleted, completed} = await data.getTasks();
	res.render('index', {uncompleted, completed});
}));

app.post('/addtask', wrap (async function(req,res){
	var newTask = req.body.newtask;
	await data.addTask(newTask);
	res.redirect("/");
}));

app.post('/removetask', wrap(async function(req,res){
	var completeTask = req.body.check;
	await data.complete(completeTask);
	res.redirect("/");
}));

app.listen(8080, function(){
	console.log('Running on port 8080!')
});

// app.get('/', function(req,res){
// 	res.render('index');
// });

