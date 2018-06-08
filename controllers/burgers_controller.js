var express = require("express");

var router = express.Router();

var bucket = require("../models/burger.js");

router.get("/", function(req, res){
	bucket.all(function(data){
		var hbsObject = {
			buckets: data
		};
		console.log(hbsObject);
		res.render("index", hbsObject);
	});
});

router.post("api/buckets", function(req, res){
	bucket.create([
		"name", "done"	
		], [
			req.body.name, req.body.done
		], function(result){
			res.json({id: result.insertId});
		});
});

router.put("api/buckets/id:", function(req, res){
	var condition = "id = " + req.params.id;

	console.log("condition", condition);

	bucket.update({
		done: req.body.done
	}, condition, function(result){
		if(result.changedRows == 0){
			return res.status(404).end();
		}else{
			res.status(200).end();
		}
	});
});

router.delete("/api/buckets/:id", function(req, res){
	var condition = "id = " + req.params.id;

	bucket.delete(condition, function(result){
		if(result.affectedRows == 0){
			return res.status(404).end();
		}else{
			res.status(200).end();
		}
	});
});

module.exports = router;