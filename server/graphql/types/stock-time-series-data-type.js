const {GraphQLObjectType, GraphQLString} = require("graphql");

module.exports = new GraphQLObjectType({
	name: "Time_Series_Data_Point",
	fields:{
		Open: {type: GraphQLString},
		High: {type: GraphQLString},
		Low: {type: GraphQLString},
		Close: {type: GraphQLString},
		AdjustedClose: {type: GraphQLString},
		DividendAmount: {type: GraphQLString},
		SplitCoefficient: {type: GraphQLString},
		Volume: {type: GraphQLString}
	}
});
