const fetch = require("node-fetch");

module.exports = function(parentVal, args){
	return fetch("https://www.alphavantage.co/query?function="+ args.Type+ "&symbol="+args.StockSymbol+"&interval=1min&apikey=" + process.env.API_KEY)
		.then(
			(res)=>{return res.json();},
			/* eslint-disable-next-line semi */
			err=>{throw new Error(err)}
		)
		.then(
			(obj)=>{
				obj.MetaData = {};
				obj.MetaData.Information = obj["Meta Data"]["1. Information"];
				obj.MetaData.LastRefreshed = obj["Meta Data"]["3. Last Refreshed"];
				obj.MetaData.OutputSize = obj["Meta Data"]["4. Output Size"];
				obj.MetaData.TimeZone = obj["Meta Data"]["5. Time Zone"];
				/* eslint-disable-next-line no-console */
				console.log(obj.MetaData);
				return obj;
			},
			/* eslint-disable-next-line semi */
			err=>{throw new Error(err)}
		)
		.catch(
			/* eslint-disable-next-line semi */
			err=>{throw new Error(err)}
		);
};
