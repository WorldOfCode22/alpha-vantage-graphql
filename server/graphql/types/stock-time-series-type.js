const {GraphQLObjectType, GraphQLList} = require("graphql");
const date = require("./stock-time-series-point-type");
module.exports = new GraphQLObjectType({
	name: "Time_Series",
	fields: {
		Dates: {type: GraphQLList(date)}
	}
});
