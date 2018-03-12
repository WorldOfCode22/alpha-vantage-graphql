const {GraphQLObjectType, GraphQLString} = require("graphql");
const DataType = require("./stock-time-series-data-type");
module.exports = new GraphQLObjectType({
	name: "Time_Series_Data",
	fields: {
		Date: {type: GraphQLString},
		Value: {type: DataType},
	}
});
