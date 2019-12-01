"use strict";

const express = require('express');
const router = express.Router();
const users = require('./handlers/users');

router.post('/login', users.login);

module.exports = router;