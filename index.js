
var express = require('express');
var app = express()
var bodyParser = require("body-parser");

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

var data = require('./data');

// app.post('/apptask', function(req, res){
// 	res.render('index')
// });
app.post('/addtask', function (req,res){
	var newTask = req.body.newtask;
	data.addTask(newTask);
	res.redirect("/");
});
app.get("/", function(req,res){
	var {uncompleted, completed} = data.getTasks();
	res.render('index', {uncompleted, completed});
});

app.listen(8080, function(){
	console.log('Running on port 8080!')
});

app.post('/removetask', function(req,res){
	var completeTask = req.body.check;
	data.complete(completeTask);
	res.redirect("/");
});


// app.get('/', function(req,res){
// 	res.render('index');
// });

