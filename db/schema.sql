DROP DATABASE IF EXISTS portfolio_db;

CREATE DATABASE portfolio_db;

USE portfolio_db;

CREATE TABLE projects
(
    id INT AUTO_INCREMENT PRIMARY KEY,
    project_name VARCHAR(50) NOT NULL,
    code_link VARCHAR(100) NOT NULL,
    deployed_link VARCHAR(100) NOT NULL,
    description VARCHAR(500) NOT NULL,
    languages VARCHAR(50) NOT NULL,
    button_filter VARCHAR(50) NOT NULL
);

    CREATE TABLE form
    (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL,
    message VARCHAR(150) NOT NULL
);