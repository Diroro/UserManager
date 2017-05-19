'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    id: {
        type: Number
    },
    first_name: {
        type: String
    },
    last_name:{
        type: String
    },
    birthday:{
        type: String
    },
    position: {
        type: String,
        enum: ['Developer','QA Engineer', 'Manager', 'CEO', 'Admin']
    },
    team: {
        type: String}, // ID or Name?
    project: {
        type: String},  // ProjectID or Name?
    teamlead: {
        type: String}, //later - user;  getNameBy ? on CLient or Server Side?
    role: {
        type: String}, 
    notes:{
        type: String}, 
    photo: {}
});

module.exports = mongoose.model('Users', UserSchema);

//todo Start date