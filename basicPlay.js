var inquirer = require("inquirer");
var fs = require("fs");
var count = 0;
var dataArr=[];

fs.readFile("basic.txt", "utf8",function(err, data){
// this is called a callback function

	if (err){
		 return console.log(err);
	}
	else{
		dataArr = JSON.parse(data);
		playBasic();
	}
});

	

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

