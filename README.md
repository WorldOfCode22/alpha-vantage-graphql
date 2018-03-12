# Alpha Vantage GrpahQL API
This is a project that provides a GraphQL schema from the Alpha Vantage stock API. At this time Alpha Vantage only has a rest API. The main purpose of this project is to create a GraphQL schema that mimics the syntax and results of the Alpha Vantage API. All calls to this API do call the Alpha Vantage API. This project is not affiliated with Alpha Vantage Inc nor is it's author.
## Getting Started
### Prerequisites
1. [Node.js/NPM](https://nodejs.org/en/)
2. [Alpha Vantage API Key](https://www.alphavantage.co/support/#api-key)
3. [git](https://git-scm.com/)
### Installing
Clone this repository from the git command line:
```
git clone https://github.com/WorldOfCode22/alpha-vantage-graphql.git
```
Open project file and navigate to the server folder:
```
cd server
```
Then install npm packages:
```
npm install
```
Then create a .env file inside the server folder and add API_KEY and PORT to it:
```
PORT=your_port
API_KEY=your_api_key
```
Then run server:
```
npm run server
```
Lastly navigate to localhost:yourPORT and the graphiql interface should display
# Contributing
Please read [CONTRIBUTING.md](https://github.com/WorldOfCode22/alpha-vantage-graphql/blob/master/CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.
# Verisioning
We use SemVer for versioning.
# Authors
Sloan Gwaltney (worldofcode22@gmail.com)
# License
This project is licensed under the MIT License - see the LICENSE.md file for details
