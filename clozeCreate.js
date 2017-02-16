var inquirer = require("inquirer");
var fs = require("fs");
var cardArr = [];

// function used to create the cloze cards

var createCard = function(){
	
	inquirer.prompt([
		{
		type: "confirm",
		name: "continue",
		message: "Create a cloze flash card?",
		default: true
		},

		]).then(function(answers) {

			if (answers.continue){

				inquirer.prompt([
					{
					type: "input",
					name: "question",
					message: "Type a fill-in-the-blank question. Use ... to indicate the blank."
					},
					{
					type: "input",
					name: "answer",
					message: "Type the answer for the fill in the blank."
					},					



				]).then(function(resp){

					var clozeCard = new ClozeCard(resp.question, resp.answer);
					cardArr.push(clozeCard);
					createCard();

					});

			}//end if answers.continue
			else //write the cards to the JSON file
			{
				var clozeJSON = JSON.stringify(cardArr);

				fs.writeFile("cloze.txt", clozeJSON ,function(err){
					if (err){
		 				return console.log(err);
					}
				});
			} 

  });

}// end createCard





//constructor for the cloze card


function  ClozeCard(text,cloze){
	this.text = text;
	this.cloze = cloze;
}



ClozeCard.prototype.printComplete = function() {
	console.log(this.text.replace("...", this.cloze));
}



var ClozeCreate = function(){

	this.createClozeCards = function(){
		fs.readFile("cloze.txt", "utf8",function(err, data){
			if (!data){
				createCard();
			}
			else {
				if (err){
			 		return console.log(err);
				}
				else{
					cardArr = JSON.parse(data);
					createCard();
				}
			}	
		});
	};

};



module.exports = ClozeCard;
module.exports = ClozeCreate;

