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
					(item,i)=>{obj.TimeSeries.Dates.push({DataDate:null, DataValue:obj["Stock Quotes"][i]});}
				);
				obj.TimeSeries.Dates.forEach(
					(data)=>{
						data.DataValue.Symbol = data.DataValue["1. symbol"];
						data.DataValue.Price = data.DataValue["2. price"];
						data.DataValue.Volume = data.DataValue["3. volume"];
						data.DataValue.TimeStamp = data.DataValue["4. timestamp"];
					}
				);
				return obj;
			}
		)
		.catch(
			(err)=>{throw new Error(err);}
		);
};
