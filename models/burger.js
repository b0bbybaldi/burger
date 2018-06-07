var orm = require("../config/orm.js");

var bucket = {
	all: function(cb){
		orm.all("buckets", function(res){
			cb(res);
		});
	},
	create: function(cols, vals, cb){
		orm.create("buckets", cols, vals, function(res){
			cb(res);
		});
	},
	update: function(objColVals, condition, cb){
		orm.update("buckets", objColVals, condition, function(res){
			cb(res);
		});
	},
	delete: function(condition, cb){
		orm.delete("buckets", condition, function(res){
			cb(res);
		});
	}
};

module.exports = bucket;