"use strict";

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const usersSchema = new Schema({
    local: {
        email: String,
        password: String,
        lastLogin: { type: Date, default: Date.now }
    }
});

const users = mongoose.model('Users', usersSchema);

module.exports = users;