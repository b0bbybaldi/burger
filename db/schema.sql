DROP DATABASE bucketlist_db;
CREATE DATABASE bucketlist_db;
USE bucketlist_db;

CREATE TABLE buckets
(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(255) NOT NULL,
	completed BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);