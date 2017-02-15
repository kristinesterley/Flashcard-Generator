var inquirer = require("inquirer");
var fs = require("fs");
var cardArr = [];
//constructor for the basic card

function BasicCard(front,back){
	this.front = front;
	this.back = back;
}


// function used to create the basic cards

var createCard = function(){
	
	inquirer.prompt([
		{
		type: "confirm",
		name: "continue",
		message: "Create a basic flash card?",
		default: true
		},

		]).then(function(answers) {

			if (answers.continue){

				inquirer.prompt([
					{
					type: "input",
					name: "question",
					message: "Type the question for the front of the card:"
					},
					{
					type: "input",
					name: "answer",
					message: "Type the answer for the back of the card:"
					},					



				]).then(function(resp){

					var basicCard = new BasicCard(resp.question, resp.answer);
					cardArr.push(basicCard);
					createCard();

					});

			}//end if answers.continue
			else //write the cards to the JSON file
			{
				var basicJSON = JSON.stringify(cardArr);

				fs.writeFile("basic.txt", basicJSON ,function(err){
					if (err){
		 				return console.log(err);
					}
				});
			} 

  });


}// end createCard







var BasicCreate = function(){

	this.createBasicCards = function(){
		fs.readFile("basic.txt", "utf8",function(err, data){

			if (err){
		 		return console.log(err);
			}
			else{
				cardArr = JSON.parse(data);
				createCard();
			}
		});
	};

};


module.exports = BasicCreate;




