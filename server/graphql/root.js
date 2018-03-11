const {GraphQLObjectType, GraphQLString, GraphQLNonNull} = require("graphql");
const StockSearchType = require("./types/stock-search-type");
const StockSearchResolve = require("./resolvers/stock-search-daily-resolver");

module.exports = new GraphQLObjectType({
	name: "RootQuery",
	fields: {
		StockSearch: {
			type: StockSearchType,
			args: {
				Type: {type: new GraphQLNonNull(GraphQLString)},
				StockSymbol: {type: GraphQLString}
			},
			resolve(parentVal, args){
				if((args.Type === "TIME_SERIES_DAILY") || (args.Type === "TIME_SERIES_DAILY_ADJUSTED")){
					return StockSearchResolve(parentVal, args);
				}
			}
		}
	}
});
