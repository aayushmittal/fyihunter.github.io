var mapData = require('../../app/controllers/mapdata.server.controller');

module.exports = function (app) {
	app.route('/mapdata').post(mapData.create).get(mapData.list);
	
	app.route('/mapData/:mapdataId').get(mapData.read).put(mapData.update).delete(mapData.delete);

	app.param('mapdataId', mapData.mapdataByID);
};