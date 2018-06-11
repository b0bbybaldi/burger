var mysql = require("mysql");
var connection;

var JAWSDB_URL = "mysql://k2gcxf4sm31p782k:jez50gqrlui93t49@qzkp8ry756433yd4.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/rwoteihwqefbndn8";
if(process.env.JAWSDB_URL){
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
connection = mysql.createConnection({
	port: 3000,
	host: "localhost",
	user: "root",
	password: "password",
	database: "bucketlist_db"
});
}

connection.connect(function(err){
	if(err){
		console.error("error connecting: " + err.stack);
		return;
	}
	console.log("connected as id " + connection.threadId);
});

module.exports = connection;
