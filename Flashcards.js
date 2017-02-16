var BasicCreate = require("./basicCreate");
var BasicPlay = require("./basicPlay");
var inquirer = require("inquirer");
var ClozeCreate = require("./clozeCreate");
var ClozePlay = require("./clozePlay");

var loginType = process.argv[2];

if (loginType === "admin"){
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
						var MyClozePlay = new ClozePlay();
						MyClozePlay.playClozeGame();

						break;
					case "Create Cloze Cards":

						var MyClozeCreate = new ClozeCreate();
						MyClozeCreate.createClozeCards();

						break;
					default:
						console.log ("An error occurred.")

				}

	  });
}
else {
		inquirer.prompt([
	  	{
	    	type: "list",
	    	name: "doingWhat",
	    	message: "What do you want to do?",
	    	choices: ["Play Basic Cards", "Play Cloze Cards"]
	  	},


			]).then(function(answers) {

				switch (answers.doingWhat) {

					case "Play Basic Cards":

						var MyBasicPlay = new BasicPlay();
						MyBasicPlay.playBasicGame();
						break;

					case "Play Cloze Cards":
						
						var MyClozePlay = new ClozePlay();
						MyClozePlay.playClozeGame();
						break;

					default:
						console.log ("An error occurred.")

				}

	  });

}