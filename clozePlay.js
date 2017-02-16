var inquirer = require("inquirer");
var fs = require("fs");
var ClozeCard = require("./clozeCreate");
var count = 0;
var dataArr=[];

//function to play the cloze card game once question/answers are loaded from JSON file.

var playCloze = function(){	

	if (count < dataArr.length){

		inquirer.prompt([
			{
				type: "input",
				name: "guess",
				message: dataArr[count].text,
			},
		]).then(function(answer){
			var newClozeCard = new ClozeCard(dataArr[count].text, dataArr[count].cloze);
			if (answer.guess.toLowerCase() === dataArr[count].cloze.toLowerCase()){
				console.log("Correct!")
			}
			else {
				console.log("Incorrect.");
			}
			newClozeCard.printComplete();
			count++;
			playCloze();
			});
	}//end if

} //end function playBasic


// constructor with function this.playClozeGame that reads questions/answers from a file and then invokes the actual game function
// written in this form for export purposes

var ClozePlay = function(){

	this.playClozeGame = function() {
		fs.readFile("cloze.txt", "utf8",function(err, data){

			if (err){
		 		return console.log(err);
			}
			else{
				dataArr = JSON.parse(data);
				playCloze();
			}
		});

	};

};	
module.exports = ClozePlay;

