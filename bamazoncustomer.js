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
    console.log("ID * Item Name | Department | Cost | Amount in Stock");
    for (var i = 0; i < res.length; i++) {
        utils.inspect.styles.string = 'cyan';
        console.log(res[i].itemID + " * " + res[i].ProductName + " | " + res[i].DepartmentName + " | " + res[i].Price + " | " + res[i].StockQuantity);
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
        console.log("test");
    });
});

