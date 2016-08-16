console.log('challenge #3 -- app.js loaded!');
var app = angular.module("appThree",[]);
app.controller("infoController", infoController);

function infoController(){
  this.name = "Jon Doe"; // default name
  this.height = 5.6; // default height in feet
}

app.controller("loanController", loanController);

function loanController() {
	this.apr=25;
	this.amount=100000;
	var monthly_interest = (this.apr/100/12) * this.amount;
	this.month = function(calcMonth) {
		return {
			accrued_interest: Math.round(calcMonth * monthly_interest),
			total_balance: Math.round(this.amount + calcMonth * monthly_interest)
		}
	};
}