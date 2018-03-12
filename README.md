# Aplpha Vantage GrpahQL API
This is a project that provides a GraphQL schema from the Alpha Vantage stock API. At this time Alpha Vantage only has a rest API. The main purpose of this project is to create a GraphQL schema that mimics the syntax and results of the Alpha Vantage API. All calls to this API do call the Alpha Vantage API. This project is not affiliated with Alpha Vantage Inc nor is it's author.
## Getting Started
### Prerequisites
Node/NPM
Alpha Vantage API Key
### Installing
Clone this repository from the git command line:
```
git clone [repo here]
```
Open project file and navigate to the server folder:
```
cd server
```
Then install npm packages:
```
npm install
```
Then create env file inside the server folder and add API_KEY and PORT to it:
```
PORT=your_port
API_KEY=your_api_key
```
Then run server:
```
npm run server
```
Lastly navigate to localhost:yourPORT and the graphiql interface should display
# Authors
Sloan Gwaltney (worldofcode22@gmail.com)
# License
This project is licensed under the MIT License - see the LICENSE.md file for details 
