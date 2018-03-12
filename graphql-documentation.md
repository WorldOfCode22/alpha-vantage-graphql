# Graphql Query Layout

## Graphql Objects

## Query.StockSearch
This is the query command that is used to query all of the Time Series endpoints of the Alpha Vantage API.
### Args
1. Type (NonNull GraphQLString)  
This is used as a selector to indicate the Alpha Vantage API endpoint that you wish to query. Supported Types are:
* TIME_SERIES_INTRADAY
* TIME_SERIES_DAILY
* TIME_SERIES_DAILY_ADJUSTED
* TIME_SERIES_WEEKLY
* TIME_SERIES_WEEKLY_ADJUSTED
* TIME_SERIES_MONTHLY
* TIME_SERIES_MONTHLY_ADJUSTED
* "" (Blank used when querying Batch Quotes endpoint)
2. StockSymbol (GraphQLString)  
This is the stock that you are wishing to query. Use this in all cases of Query.StockSearch except Batch Quotes
3. Stocks (GraphQLList)  
This is the list of stocks you wish to query in a Batch query.
4. Interval (GraphQLString)  
This is a string that is used when querying the "TIME_SERIES_INTRADAY" Type. It is used to select the interval that you wish for data points to be spread out. Supported options are:  

## Query.StockSearch Objects
### Query.StockSearch.MetaData
This is a object that is devoted to providing metadata to the person querying. Metadata queryable fields are listed below:
* Information: Provides basic information about what the Alpha Vantage API is returning.
* LastRefreshed: Provides the date/time that Alpha Vantage last refreshed that data being returned.
* OutputSize: Provides the option that was selected for the Size of the API output.
* TimeZone: Provides the time zone that time data is being provided.
* Notes: Provides information such as the origin of the realtime quote data.
### Query.StockSearch.TimeSeries  
Data container object for Alpha Vantage Time Series API returns.
### Query.TimeSeries.Dates (GraphQLList)  
This is an array that provides a list of data objects. They contain a Date key and a Value Key
### Query.TimeSeries.Dates[{Date}] (GraohQLString)
Provides the Date that the given data point is from.
### Query.TimerSeries.Dates[{Value}] (GraohQLObject)
Provides stock data. Fields that are supported include:  
* Open: Provides the stocks open price.
* Close: Provides the stocks closing price.
* High: Provides the stocks daily high price.
* Low: Provides the stocks daily low price.
* AdjustedClose: The stocks adjusted close price.
* DividendAmount: The amount of dividend paid on given date.
* SplitCoefficient: The Split Coefficient of the stock.
* Volume: Number of stocks traded on given day.
* Price: The current price of the selected stock.
* Symbol: The symbol of the given stock.
* TimeStamp: The time that this data point was recorded.

## Query.ForeignExchange
This is the query to gather foreign exchange data 
### args
(Use 3 letter codes United States Dollar = USD)
To: The currency that currency is being converted to.
From: The country that currency is being converted from.
### fields 
FromCurrencyCode: The 3 letter code that the currency is being converted from.
FromCurrencyName: The name of the currency being converted from.
ToCurrencyCode:   The 3 letter code that the currency is being converted to.
ToCurrencyName:   The name of the currency being converted to.
ExchangeRate: The rate of exchange between the two currencies.
LastRefreshed: The last time this data was refreshed by Alpha Vantage.
TimeZone: The time zone that time data is based on.

# Query Examples Coming Soon
