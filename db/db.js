const City = require('./models/city');
const Country = require('./models/country');
const CountryLanguage = require('./models/countryLanguage');

module.exports = (Sequelize, config)=>
{
	const sequelize = new Sequelize(config.db, config.login, config.password, {
		host: config.host,
		dialect: config.dialect,
		logging: false,
		define: {
			timestamps: false,
			paranoid: false,
			freezeTableName: true
		}
	});

	const city = City(Sequelize, sequelize);
	const country = Country(Sequelize, sequelize);
	const countryLanguage = CountryLanguage(Sequelize, sequelize);

	country.hasMany(city, {foreignKey: 'CountryCode', primaryKey: 'Code'});
	country.hasMany(countryLanguage, {foreignKey: 'CountryCode', primaryKey: 'Code'});


	return {
		city,
		country,
		countryLanguage,
		sequelize: sequelize,
		Sequelize: Sequelize
	};
};