const {GraphQLObjectType, GraphQLString} = require("graphql");

module.exports = new GraphQLObjectType({
	name: "Stock_Meta_Data",
	fields: {
		Information: {type: GraphQLString},
		LastRefreshed: {type: GraphQLString},
		OutputSize: {type: GraphQLString},
		TimeZone: {type: GraphQLString}
	}
});
