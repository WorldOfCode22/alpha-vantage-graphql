const fetch = require("node-fetch");

module.exports = function(parentVal, args){
	return fetch("https://www.alphavantage.co/query?function="+ args.Type+ "&symbol="+args.StockSymbol+"&interval="+args.Interval+"&apikey=" + process.env.API_KEY)
		.then(
			(res)=>{return res.json();},
			/* eslint-disable-next-line semi */
			err=>{throw new Error(err)}
		)
		.then(
			(obj)=>{
				let dataStr = "";
				if((args.Type === "TIME_SERIES_DAILY")||(args.Type === "TIME_SERIES_DAILY_ADJUSTED")){
					dataStr = "Time Series (Daily)";
				}else if(args.Type === "TIME_SERIES_WEEKLY"){
					dataStr = "Weekly Time Series";
				}else if(args.Type === "TIME_SERIES_WEEKLY_ADJUSTED"){
					dataStr = "Weekly Adjusted Time Series";
				}else if(args.Type === "TIME_SERIES_MONTHLY"){
					dataStr = "Monthly Time Series";
				}else if(args.Type === "TIME_SERIES_MONTHLY_ADJUSTED"){
					dataStr = "Monthly Adjusted Time Series";
				}else if(args.Type === "TIME_SERIES_INTRADAY"){
					dataStr = "Time Series (" +args.Interval+ ")";
				}
				else{
					throw new Error("Non vaild search type");
				}
				obj.MetaData = {};
				obj.MetaData.Information = obj["Meta Data"]["1. Information"];
				obj.MetaData.LastRefreshed = obj["Meta Data"]["3. Last Refreshed"];
				if(obj["Meta Data"]["4. Output Size"]){
					obj.MetaData.OutputSize = obj["Meta Data"]["4. Output Size"];
					obj.MetaData.TimeZone = obj["Meta Data"]["5. Time Zone"];
				}else if(obj["Meta Data"]["4. Interval"]){
					obj.MetaData.Interval = obj["Meta Data"]["4. Interval"];
					obj.MetaData.OutputSize = obj["Meta Data"]["5. Output Size"];
					obj.MetaData.TimeZone = obj["Meta Data"]["6. Time Zone"];
				}else{
					obj.MetaData.TimeZone = obj["Meta Data"]["4. Time Zone"];
				}
				obj.TimeSeries = {};
				obj.TimeSeries.Dates = [];
				let keys = Object.keys(obj[dataStr]);
				keys.forEach(
					(item)=>{obj.TimeSeries.Dates.push({Date:item, Value:obj[dataStr][item]});}
				);
				obj.TimeSeries.Dates.forEach(
					(data)=>{
						data.Value.Open = data.Value["1. open"];
						data.Value.High = data.Value["2. high"];
						data.Value.Low = data.Value["3. low"];
						data.Value.Close = data.Value["4. close"];
						if(data.Value["5. Volume"]){
							data.Value.Volume = data.Value["5. volume"];
						}else{
							data.Value.AdjustedClose = data.Value["5. adjusted close"];
							data.Value.Volume = data.Value["6. volume"];
							data.Value.DividendAmount = data.Value["7. dividend amount"];
							data.Value.SplitCoefficient = data.Value["8. split coefficient"];
						}
					});
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
