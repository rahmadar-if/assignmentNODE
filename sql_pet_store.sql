create database `node_express`;
use `node_express`;

CREATE TABLE members(
        id INTEGER PRIMARY KEY,
        name TEXT NOT NULL
);

CREATE TABLE `pet` (
  `id` INT NOT NULL,
  `name` VARCHAR(45) NOT NULL,
  `category` VARCHAR(45) NULL,
  `status` VARCHAR(45) NULL,
  PRIMARY KEY (`id`)
);

SELECT * FROM node_express.pet;