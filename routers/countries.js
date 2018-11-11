const express = require('express');
const Sequelize = require('sequelize');
const db = require('../db/db')(Sequelize);

const Handlebars = require('handlebars');

Handlebars.registerHelper('listLinks', function(itemsCount, page) {
	let out = '';
	for(var i = 1; i <= itemsCount; i++) {
		let current = page == i ? 'style=color:red' : '';
		out = out + "<a href='countries?page=" + i + "' " + current + ">" + i + "</a> ";
	}
	return new Handlebars.SafeString(
		out
	);
});
const app = express.Router();


app.get('/', (req, res) =>
{
	console.log(req.url);
	let page = req.query.page ? req.query.page: 1;
	(db.country.findAll())
		.then((countries) =>
		{
			res.locals = {
				layout: 'countries',
				pageNumber: page,
				pageCounter1: 25 * (page - 1) + 1,
				pageCounter2: 25 * page,
				countries: countries.slice(25 * (page - 1), 25 * page),
				countPages: Math.ceil(countries.length / 25)
			};
			res.render('index');
		});
});

module.exports = app;