var inquirer = require("inquirer");
var fs = require("fs");
var count = 0;
var dataArr=[];

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
			if (answer.guess === dataArr[count].back){
				console.log("You got it!");
			}
			else {
				console.log("Incorrect.");
			}
			count++;
			playBasic();

			});

	}//end if


} //end function playBasic


//begin code execution here - read in all of the questions, then call the code to play the game

fs.readFile("basic.txt", "utf8",function(err, data){

	if (err){
		 return console.log(err);
	}
	else{
		dataArr = JSON.parse(data);
		playBasic();
	}
});

	


