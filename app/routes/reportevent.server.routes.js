module.exports = function(app) {
    var reportevent = require('../controllers/reportevent.server.controller');
    app.get('/reportevent', reportevent.render);
};