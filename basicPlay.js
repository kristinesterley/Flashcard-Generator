var inquirer = require("inquirer");
var fs = require("fs");
var count = 0;
var dataArr=[];
var correct = 0;
var incorrect = 0;

//function to play the basic card game

var playBasic = function(){	

	if (count < dataArr.length){

		inquirer.prompt([
			{
				type: "input",
				name: "guess",
				message: dataArr[count].front,
			},


		]).then(function(answer){
			if (answer.guess.toLowerCase() === dataArr[count].back.toLowerCase()){
				correct++;
				console.log("You got it!");
			}
			else {
				incorrect++;
				console.log("Incorrect. The correct answer is: " + dataArr[count].back);
			}
			console.log("Correct: " + correct);
			console.log("Incorrect: " + incorrect);
			count++;
			playBasic();

			});

	}//end if


} //end function playBasic


var BasicPlay = function(){

	this.playBasicGame = function() {
		fs.readFile("basic.txt", "utf8",function(err, data){

			if (err){
		 		return console.log(err);
			}
			else{
				dataArr = JSON.parse(data);
				playBasic();
			}
		});

	};

};	
module.exports = BasicPlay;

