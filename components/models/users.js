"use strict";

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const usersSchema = new Schema({
    local: {
        email: String,
        password: String,
        lastLogin: { type: Date, default: Date.now }
    }
});

usersSchema.methods.generateHash = function(password){
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
}

usersSchema.methods.validPassword = function(password){
    return bcrypt.compareSync(password, this.local.password);
}

const users = mongoose.model('Users', usersSchema);

module.exports = users;