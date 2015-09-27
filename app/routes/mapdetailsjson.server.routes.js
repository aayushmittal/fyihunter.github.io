module.exports = function(app) {
    var mapdetailsjson = require('../controllers/mapdetailsjson.server.controller');
    app.get('/mapdetailsjsondb', mapdetailsjson.render);
};