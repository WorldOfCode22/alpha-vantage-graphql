const {GraphQLObjectType, GraphQLString} = require("graphql");

module.exports = new GraphQLObjectType({
	name: "Foreign_Exchange",
	fields: {
		FromCurrencyCode: {type: GraphQLString},
		FromCurrencyName: {type: GraphQLString},
		ToCurrencyCode: {type: GraphQLString},
		ToCurrencyName: {type: GraphQLString},
		ExchangeRate: {type: GraphQLString},
		LastRefreshed: {type: GraphQLString},
		TimeZone: {type: GraphQLString}
	}
});
