//jshint esversion: 6
const express     = require('express');
const app         = express();
const route       = express.Router();
const users       = require('./users.js');
const auth        = require('./auth.js');
const shifts      = require('./calendar.js');
const chat        = require('./twilioChat.js');
const sms         = require('./sms.js');

route.use('/shifts', shifts);
route.use('/auth', auth);
route.use('/users', users);
route.use('/chat', chat);
route.use('/sms', sms);

module.exports = route;