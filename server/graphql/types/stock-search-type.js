const {GraphQLObjectType} = require("graphql");
const StockMetaData = require("./stock-meta-data-type");
const StockTimeSeris = require("./stock-time-series-type");
module.exports = new GraphQLObjectType({
	name: "Stock_Search",
	fields: {
		MetaData: {type: StockMetaData},
		TimeSeries: {type: StockTimeSeris}
	}
});
