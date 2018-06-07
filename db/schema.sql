CREATE DATABASE bucketlist_db;
USE bucketlist_db

CREATE TABLE buckets
(
	id int NOT NULL AUTO_INCREMENT,
	"" varchar(255) NOT NULL,
	"" BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);