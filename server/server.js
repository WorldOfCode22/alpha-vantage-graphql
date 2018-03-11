require("dotenv").config();
const express = require("express");
const app = express();

app.listen(process.env.PORT, ()=>{
	/* eslint-disable-next-line no-console */
	console.log("App waiting for request on port: " + process.env.PORT);
});
