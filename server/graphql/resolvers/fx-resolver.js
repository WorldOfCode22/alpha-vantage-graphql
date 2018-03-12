const fetch = require("node-fetch");

module.exports = function(parentVal, args){
	return fetch("https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency="+args.From+"&to_currency="+args.To+"&apikey="+process.env.API_KEY)
		.then(
			(res)=>{return res.json();},
			err=>{throw new Error(err);}
		)
		.then(
			(obj)=>{
				obj.FromCurrencyCode = obj["Realtime Currency Exchange Rate"]["1. From_Currency Code"];
				obj.FromCurrencyName = obj["Realtime Currency Exchange Rate"]["2. From_Currency Name"];
				obj.ToCurrencyCode = obj["Realtime Currency Exchange Rate"]["3. To_Currency Code"];
				obj.ToCurrencyName = obj["Realtime Currency Exchange Rate"]["4. To_Currency Name"];
				obj.ExchangeRate = obj["Realtime Currency Exchange Rate"]["5. Exchange Rate"];
				obj.LastRefreshed = obj["Realtime Currency Exchange Rate"]["6. Last Refreshed"];
				obj.TimeZone = obj["Realtime Currency Exchange Rate"]["7. Time Zone"];
				return obj;
			},
			err=>{throw new Error(err);}
		)
		.catch(
			err=>{throw new Error(err);}
		);
};
