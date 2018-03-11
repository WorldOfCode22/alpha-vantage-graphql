const root = require("./root");
const {GraphQLSchema} = require("graphql");
module.exports = new GraphQLSchema({
	query: root
});
