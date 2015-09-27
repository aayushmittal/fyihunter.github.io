var map = require('../../app/controllers/map.server.controller');
 
module.exports = function(app) {
	app.get('/map',map.render);
};