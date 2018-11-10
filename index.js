const Promise = require('bluebird');
const express = require('express');
const bodyParser = require('body-parser');
const Sequelize = require('sequelize');
const config = require('./db/config.json');

const db = require('./db/db')(Sequelize, config);

const app = express();

app.set('view engine', 'html');

app.get('/', (req, res) => {
	res.locals = {
		title: 'Title',
	};
	res.render('index', { partials: { 	part: 'part' }	});
});

app.listen(3000, () => console.log('Example app listening on port 3000!'));