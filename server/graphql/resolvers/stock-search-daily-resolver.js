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
				obj.TimeSeries = {};
				obj.TimeSeries.Dates = [];
				let keys = Object.keys(obj["Time Series (Daily)"]);
				keys.forEach(
					(item)=>{obj.TimeSeries.Dates.push({DataDate:item, DataValue:obj["Time Series (Daily)"][item]});}
				);
				obj.TimeSeries.Dates.forEach(
					(data)=>{
						data.DataValue.Open = data.DataValue["1. open"];
						data.DataValue.High = data.DataValue["2. high"];
						data.DataValue.Low = data.DataValue["3. low"];
						data.DataValue.Close = data.DataValue["4. close"];
						if(data.DataValue["5. Volume"]){
							data.DataValue.Volume = data.DataValue["5. volume"];
						}else{
							data.DataValue.AdjustedClose = data.DataValue["5. adjusted close"];
							data.DataValue.Volume = data.DataValue["6. volume"];
							data.DataValue.DividendAmount = data.DataValue["7. dividend amount"];
							data.DataValue.SplitCoefficient = data.DataValue["8. split coefficient"];
						}
					}
				);
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
