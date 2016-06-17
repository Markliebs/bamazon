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
    console.dir("ID * Item Name | Department | Cost | Amount in Stock"), { colors: true };
    for (var i = 0; i < res.length; i++) {
        utils.inspect.styles.string = 'cyan';
        console.log(res[i].itemID + " * " + res[i].ProductName + " | " + res[i].DepartmentName + " | " + res[i].Price + " | " + res[i].StockQuantity);
    }
    console.log("-----------------------------------");

    inquirer.prompt([
    {
        type: 'input',
        name: 'askID',
        message: 'What is the Item ID of the product you would like to purchase?',
    } , {

     type: 'input',
        name: 'askID',
        message: 'How many of that item would you like?',

    }]);
});

