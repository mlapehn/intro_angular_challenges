
console.log('challenge #2 -- app.js loaded!');
var app = angular.module("appTwo", []);

app.controller("WelcomeController", WelcomeController);

function WelcomeController() {
	this.full_name = "Jamie Scovern";
	this.age = 30;
	this.city = "Bala Cynwyd";
	this.state = "Pennsylvania";
	this.shout = function(str) {
		return str.toUpperCase()+"!";
	};
}

app.controller("ClassController", ClassController);

function ClassController() {
	this.class_name="DEN-WDI-1";
	this.enrolled_students=14;
	this.start_date = new Date(2016,5,13);
	this.end_date = new Date(2016,8,2);
	this.daysRemaining = function() {
		var today = new Date();
		today=today.getTime();
		var end = this.end_date.getTime();
		var msInDay = 1000*60*60*24;
		return Math.round( (end - today)/msInDay );
	};
}