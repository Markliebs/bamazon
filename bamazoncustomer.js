var mysql=require('mysql');
var inquirer=require('inquirer');
var connection=mysql.createConnection({
	host:"localhost",
	port: 3306,
	user:"root", //Your username
	password:"", //Your password
	database:"bamazon_DB"})

connection.connect(function(err){
	if(err) throw err;
	console.log("Connected to BAMaZon!");})

//     connection.query('SELECT * FROM Products', function(err, res){
//     if(err) throw err;
//     console.log(res);
// })

    connection.query('SELECT * FROM Products',function(err,res){
         console.log("ID | Item Name | Department | Cost | Amount in Stock")
	for(var i=0;i<res.length;i++){
		console.log(res[i].itemID+" | "+res[i].ProductName+" | "+res[i].DepartmentName+" | "+res[i].Price+" | "+res[i].StockQuantity);}
	console.log("-----------------------------------");})