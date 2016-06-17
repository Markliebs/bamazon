create database bamazon_db;

use bamazon_db;

create table  Products (

id INT NOT NULL AUTO_INCREMENT,
itemID varchar(50) not null,
ProductName varchar(50) not null,
DepartmentName varchar(50) not null,
Price decimal(6) not null,
StockQuantity integer(6) notnull,
PRIMARY KEY (`id`));

);