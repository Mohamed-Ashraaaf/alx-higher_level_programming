-- This script creates the database hbtn_0d_usa and the table

CREATE DATABASE IF NOT EXISTS hbtn_0d_usa;

USE hbtn_0d_usa;

CREATE TABLE IF NOT EXISTS states (
    id INT AUTO_INCREMENT,
    name VARCHAR(256),
    PRIMARY KEY (id)
);
