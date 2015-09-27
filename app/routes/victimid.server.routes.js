var victimid = require('../../app/controllers/victimid.server.controller');

module.exports = function(app) {

    app.get('/victimid', victimid.render);
   
};

