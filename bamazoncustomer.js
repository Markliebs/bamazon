var mysql = require('mysql');
var inquirer = require('inquirer');
var utils = require('util');
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root", //Your username
    password: "", //Your password
    database: "bamazon_DB"
})

var productList = [];

connection.connect(function (err) {
    if (err) throw err;
    console.log("Welcome to BAMaZon!")
    console.log("Here are the available items for sale!")
        ;
})
reset();

function reset() {
    connection.query('SELECT * FROM Products', function (err, res) {
        if (err) throw err;
        console.dir("ID * Item Name | Department | Cost | Amount in Stock", { colors: true });
        for (var i = 0; i < res.length; i++) {
            utils.inspect.styles.string = 'cyan';
            console.dir(res[i].itemID + " * " + res[i].ProductName + " | " + res[i].DepartmentName + " | " + res[i].Price + " | " + res[i].StockQuantity, { colors: true });
            productList.push(res[i].ProductName);
        }
        console.log("-------------------------------------------------------------");

        var questions = [
            {
                type: 'list',
                name: 'itemList',
                message: 'Which item would you like to purchase?',
                choices: productList,
            },
            {

                type: 'input',
                name: 'howMany',
                message: 'How many of that item would you like?',
                validate: function (value) {
                    if (isNaN(value)) {
                        return 'Please enter a valid number';
                    }
                    return true;
                }

            }
        ];

        inquirer.prompt(questions).then(function (answers) {
            utils.inspect.styles.string = 'blue';
            console.dir("Excellent Choice!", { colors: true });


            if (answers.howMany > (res[1].StockQuantity - answers.howMany)) {
                console.log('Insufficient quantity.  Please select a smaller quantity');
                reset();
            } else {
                //  console.log(res[productList.indexOf(answers.itemList)]);
                //  console.log(productList.indexOf(answers.itemList));
                //Displays what was purchased, how many, and the cost
                console.log('You have ordered ' + answers.howMany + ' ' + answers.itemList + '(s) at $' + res[productList.indexOf(answers.itemList)].Price + '\n');
                //Shows total amount of purchase
                console.log('Your total cost is $' + (answers.howMany * res[productList.indexOf(answers.itemList)].Price));
                console.log("Thank you for your purchase!");
                //updates databases
                connection.query('UPDATE products SET StockQuantity = "' + (res[productList.indexOf(answers.itemList)].StockQuantity - answers.howMany) + '" WHERE ProductName = "' + res[productList.indexOf(answers.itemList)].ProductName + '"');


var disconnect = function(){
	inquirer.prompt({
		type: 'list',
		name: 'quit',
		message: 'Would you like to quit?',
		choices:['Yes','No']
	}).then(function(user){
		if (user.quit == 'Yes') {
			connection.end();			
		} else {
			reset();
		};
	});
};

disconnect(); 
           }
        });
    });
}





