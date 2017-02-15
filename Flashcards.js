var BasicCreate = require("./basicCreate");
var BasicPlay = require("./basicPlay");
var inquirer = require("inquirer");


inquirer.prompt([
  	{
    	type: "list",
    	name: "doingWhat",
    	message: "What do you want to do?",
    	choices: ["Play Basic Cards", "Create Basic Cards", "Play Cloze Cards", "Create Cloze Cards"]
  	},


		]).then(function(answers) {

			switch (answers.doingWhat) {

				case "Play Basic Cards":

					var MyBasicPlay = new BasicPlay();
					MyBasicPlay.playBasicGame();
					
				break;
				case "Create Basic Cards":

					var MyBasicCreate = new BasicCreate();
					MyBasicCreate.createBasicCards();

					
				break;
				case "Play Cloze Cards":

				break;
				case "Create Cloze Cards":

				break;
				default:
					console.log ("An error occurred.")


			}




  });