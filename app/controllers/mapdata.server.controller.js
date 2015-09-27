var Map = require('mongoose').model('Map');

exports.create = function(req, res, next) {
	var data = new Map(req.body);
	data.save(function(err) {
		if(err) {
			return next(err);
		} else {
			res.json(data);
		}
	});
};

exports.list =function(req,res,next) {
	Map.find({}, function(err, mapData) {
		if(err) {
			return next(err);
		} else {
			res.json(mapData);
		}
	});
};


exports.read = function(req, res) {
	res.json(req.data);
};

exports.update = function(req, res, next) {
	Map.findByIdAndUpdate(req.data.id, req.body, function(err, data) {
		if (err) {
			return next(err);
		}
		else {
			res.json(data);
		}
	});
};


exports.mapdataByID = function(req, res, next, id) {
	Map.findOne({
			_id: id
		}, 
		function(err, data) {
			if (err) {
				return next(err);
			}
			else {
				req.data = data;
				next();
			}
		}
	);
};

exports.delete = function(req, res, next) {
	req.data.remove(function(err) {
		if (err) {
			return next(err);
		}
		else {
			res.json(req.data);
		}
	})
};