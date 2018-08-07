DROP DATABASE IF EXISTS burger_db;
CREATE DATABASE burger_db;
USE burger_db;

CREATE TABLE burger
(
	id int NOT NULL AUTO_INCREMENT,
	burgername varchar(30) NOT NULL,
	devoured BOOLEAN DEFAULT false,
	date TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
	PRIMARY KEY (id)
);

INSERT INTO burger (burgername) VALUES ('Cowboy Burger');
INSERT INTO burger (burgername) VALUES ('Double Double');
INSERT INTO burger (burgername) VALUES ('Cheese Burger');
INSERT INTO burger (burgername) VALUES ('Bacon Garden Burger');
INSERT INTO burger (burgername) VALUES ('Tofu Burger');
INSERT INTO burger (burgername) VALUES ('Big Boy Burger'); 

SELECT * FROM burger