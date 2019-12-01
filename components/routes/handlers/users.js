"use strict";

const usersService = require('../../services/users');
const users = {};


users.login = function (req, res) {
    usersService.login(req.body)
    .then((response) =>{
        res.status(200).send(response);
    }).catch((error) =>{
        res.status(400).send(error);
    });
}

module.exports = users;