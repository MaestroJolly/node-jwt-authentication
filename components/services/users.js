"use strict";

const usersModel = require('../models/users');
const localStrategy = require('passport-local').Strategy;
const users = {};

users.login = function (params) {
    return new Promise((resolve, reject) =>{
        usersModel.find({'local.email': params.email, password: params.password})
        .then((response) => {
            resolve(response);
        }).catch((error) =>{
            reject(error);
        });
    });
}

module.exports = users;