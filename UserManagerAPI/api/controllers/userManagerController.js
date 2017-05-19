'use strict';

var mongoose = require('mongoose'),
    User = mongoose.model('Users');



exports.getAllUsers = function (req, res) {
    User.find({}, function (err, user) {
        if (err)
            res.send(err);
        res.json(user);
    });
    console.log('Got GET requess on /users')

}

exports.addUser = function (req, res) {
    var newUser = new User(req.body);
    newUser.save(function (err, user) {
        if (err)
            res.send(err);
        res.json(user);
    });
}

exports.getUserById = function (req, res) {
    User.findById(req.params.userId, function (err, user) {
        if (err)
            res.send(err);
        res.json(user);
    });
};

exports.editUser = function (req, res) {
    User.findOneAndUpdate({_id: req.params.userId}, req.body, { new: true }, function (err, user) {
        if (err)
            res.send(err);
        res.json(user);
    });
};



exports.deleteUser = function (req, res) {
    User.remove({
        _id: req.params.userId
    }, function (err, user) {
        if (err)
            res.send(err);
        res.json({ message: 'User successuflly deleted' });

    });
};