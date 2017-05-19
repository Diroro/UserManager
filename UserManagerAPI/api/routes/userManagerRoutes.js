'use strict';
var cors = require('cors');
var corsOptions = { origin: '*' }


module.exports = function (app) {
    var userManager = require('../controllers/userManagerController');
    app.use(cors(corsOptions));

    app.route('/users')
        .get(userManager.getAllUsers)
        .post(userManager.addUser);

    app.route('/users/:userId')
        .get(userManager.getUserById)
        .put(userManager.editUser)
        .delete(userManager.deleteUser);
    

};