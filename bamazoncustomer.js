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

//     connection.query('SELECT * FROM Products', function(err, res){
//     if(err) throw err;
//     console.log(res);
// })

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
            console.log('Insufficient quantity.  Please select a smaller quantity')
            //Starts over so user can make another purchase
            purchase();
        } else {
            //Displays what was purchased, how many, and the cost
            console.log('You have ordered ' + answers.howMany + ' ' + answers.itemList + '(s) at $' + res[0].Price + '\n');
            //Shows total amount of purchase
            console.log('Your total cost is $' + (res[0].Price * answers.itemList) + '\n');
            //updates databases
            connection.query('UPDATE products SET StockQuantity = "' + (res[0].StockQuantity - answers.amount) + '" WHERE ProductName = "' + user.product + '"');

        }
    });
});







        // if (answers.howMany >= 1) {
        //     console.log("Please hold while we check our inventory.");
//         } else {
//             console.log("We're sorry but that item is sold out.")
//         };
//     });
// });

