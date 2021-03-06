const {GraphQLObjectType, GraphQLString, GraphQLNonNull, GraphQLList} = require("graphql");
const StockSearchType = require("./types/stock-search-type");
const ExchangeType = require("./types/fx-type");
const StockSearchResolve = require("./resolvers/stock-search-daily-resolver");
const BatchResolver = require("./resolvers/stock-search-batch-resolver");
const ExchangeResolver = require("./resolvers/fx-resolver");

module.exports = new GraphQLObjectType({
	name: "RootQuery",
	fields: {
		StockSearch: {
			type: StockSearchType,
			args: {
				Type: {type: new GraphQLNonNull(GraphQLString)},
				StockSymbol: {type: GraphQLString},
				Interval: {type: GraphQLString},
				Stocks: {type: GraphQLList(GraphQLString)}
			},
			resolve(parentVal, args){
				if(args.Stocks === undefined){
					return StockSearchResolve(parentVal, args);
				}else{
					return BatchResolver(parentVal, args);
				}
			}
		},
		ExchangeRates: {
			type: ExchangeType,
			args: {
				From: {type: GraphQLString},
				To: {type: GraphQLString}
			},
			resolve(parentVal, args){
				return ExchangeResolver(parentVal, args);
			}
		}
	}
});
