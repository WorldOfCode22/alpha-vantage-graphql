const fetch = require("node-fetch");
module.exports = function(parentVal, args){
	let commaSep = "";
	args.Stocks.forEach(
		(item)=>{commaSep += item + ",";}
	);
	return fetch("https://www.alphavantage.co/query?function=BATCH_STOCK_QUOTES&symbols="+ commaSep +"&apikey="+process.env.API_KEY)
		.then(
			(res)=>{return res.json();},
			err=>{throw new Error(err);}
		)
		.then(
			(obj)=>{
				obj.MetaData = {};
				obj.MetaData.Information = obj["Meta Data"]["1. Information"];
				obj.MetaData.Notes = obj["Meta Data"]["2. Notes"];
				obj.MetaData.TimeZone = obj["Meta Data"]["3. Time Zone"];
				obj.TimeSeries = {};
				obj.TimeSeries.Dates = [];
				obj["Stock Quotes"].forEach(
					(item,i)=>{obj.TimeSeries.Dates.push({Date:null, Value:obj["Stock Quotes"][i]});}
				);
				obj.TimeSeries.Dates.forEach(
					(data)=>{
						data.Value.Symbol = data.Value["1. symbol"];
						data.Value.Price = data.Value["2. price"];
						data.Value.Volume = data.Value["3. volume"];
						data.Value.TimeStamp = data.Value["4. timestamp"];
					}
				);
				return obj;
			}
		)
		.catch(
			(err)=>{throw new Error(err);}
		);
};
