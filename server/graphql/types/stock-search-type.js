const {GraphQLObjectType} = require("graphql");
const StockMetaData = require("./stock-meta-data-type");
module.exports = new GraphQLObjectType({
	name: "Stock_Search",
	fields: {
		MetaData: {type: StockMetaData}
	}
});
