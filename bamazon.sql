create database bamazon_db;

use bamazon_db;

create table  Products (

itemID INT NOT NULL AUTO_INCREMENT,
ProductName varchar(50) not null,
DepartmentName varchar(50) not null,
Price decimal(6) not null,
StockQuantity integer(6) not null,
PRIMARY KEY (`itemID`)

);

INSERT INTO Products (itemID,ProductName,DepartmentName,Price,StockQuantity)
VALUES (100,"BluRay Player","Audio/Visual",100.00,25);

INSERT INTO Products (ProductName,DepartmentName,Price,StockQuantity)
VALUES ("Star Wars Trilogy BR","Movies",89.00,25);

INSERT INTO Products (ProductName,DepartmentName,Price,StockQuantity)
VALUES ("Jar-Jar Binks Action Figure","Trash",1.00,1);

INSERT INTO Products (ProductName,DepartmentName,Price,StockQuantity)
VALUES ("Joke Bantha Poo-Doo","Novelty Items",5.00,42);

INSERT INTO Products (ProductName,DepartmentName,Price,StockQuantity)
VALUES ("George Lucas Wig","Bamazon Essentials",10.00,17);

INSERT INTO Products (ProductName,DepartmentName,Price,StockQuantity)
VALUES ("Home Midichlorian Test Kit","Total BS",0.00,1);

INSERT INTO Products (ProductName,DepartmentName,Price,StockQuantity)
VALUES ("Jabba the Hutt Bust","Things that cannot be unseen",99.00,100);

INSERT INTO Products (ProductName,DepartmentName,Price,StockQuantity)
VALUES ("Jawa Phrase Book","Travel",4.20,42);

INSERT INTO Products (ProductName,DepartmentName,Price,StockQuantity)
VALUES ("Gungan Hunting License","Bamazon Essentials",3.50,27);

INSERT INTO Products (ProductName,DepartmentName,Price,StockQuantity)
VALUES ("Darth Vader Breathalyzer","Asthma Care",200.00,2);