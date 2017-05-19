'use strict';
var express = require('express'),
    app = express(),
    port = process.env.PORT || 4044,
    mongoose = require('mongoose'),
    User = require('./api/models/userManagerModel'),
    bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://127.0.0.1:27017');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./api/routes/userManagerRoutes');
routes(app);
app.use(function (req, res) {
    res.status(404).send({ url: req.originalUrl + ' not found' })
});

app.listen(port);

console.log('UserManagementAPi service started on http://localhost:' + port);