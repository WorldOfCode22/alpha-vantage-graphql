require("dotenv").config();
const express = require("express");
const app = express();
const expressGraphQL = require("express-graphql");
const GQLSchema = require("./graphql/schema.js");

app.use("/graphql", expressGraphQL({
	graphiql: true,
	schema: GQLSchema
}));
app.listen(process.env.PORT, ()=>{
	/* eslint-disable-next-line no-console */
	console.log("App waiting for request on port: " + process.env.PORT);
});
