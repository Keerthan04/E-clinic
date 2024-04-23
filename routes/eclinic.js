const express = require('express');
const db = require('../db/db');

const eclinicRouter = express.Router();

eclinicRouter.route('/')
.get(db.showDiseases);
eclinicRouter.route('/survey/:disease_id')
.get(db.getquestions);

eclinicRouter.route('/recommend')
.post(db.recommend);

module.exports = eclinicRouter;