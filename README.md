# [Pokedex](https://pokedex-portal.herokuapp.com)

The web could be accessed on [https://pokedex-portal.herokuapp.com/](https://pokedex-portal.herokuapp.com/).
Note: sometimes the graphql server on [https://pokeapi-graphiql.herokuapp.com](https://pokeapi-graphiql.herokuapp.com) is not available. So, please check the availability of server first.

Single Page Application using javascript, the application consumes Poke-API.
- User can browse pokemon in infinite list
- User can view detailed information of each pokemon
- User can view the image of each pokemon
- User can filter list of pokemon based on an attribute of pokemon.

### Third-Party
There  are some library this project used to complete bulding this application as follows.

- [KoaJS](koajs.com) as base web server
- [Apollo](dev.apollodata.com/react/) as client and server for consume GraphQL Endpoint
- [redux](https://www.npmjs.com/package/redux) and [react-redux](https://www.npmjs.com/package/react-redux): used to store application state such as pokemon url.
- [semantic-ui](https://react.semantic-ui.com): used for standard style implementation.
- [react-router-dom](https://www.npmjs.com/package/react-router-dom): used for control routing on web application.
etc.

### Build & Run
To build the application you need to use npm and use command as follows. Use yarn for better dependencies solver.
```{engine='sh'}
yarn  // install dependencies
npm start  // run for development
```
You can access by default http://localhost:8080 for hot reloading and http://localhost:8081 for static server rendering. For windows user perhaps you should use https://github.com/felixrieseberg/windows-build-tools andusing Powershell as administrator to execute the script.

In production, you can build static production server by the given command:
```{engine='sh'}
npm run build // Build static server and assets
npm run server // run static server for production
```

### Deploy
You can deploy the project to heroku. The are something to be considered:
1. Set Config variables of NPM_CONFIG_PRODUCTION=false and PORT=$port
2. Set Procfile to web: npm run build-run


### Routes
##### Homepage (/)
This page show all pokemon's name in infinite list. This list updated as user scroll with help from react semantic-ui component and Apollo Client.
The infinite list schema could be achieved by sending a callback when the user see the bottom of the list container then use fetchMore method provided by Apollo client to fetch more data to the server.
Filtering scheme is used state as a filter option then if the data is not enough call the fetchMore to retrieve more decent data.

##### Single Pokemon's Profile (/pokemon/:id)
This page show pokemon's profile. User can see image and all pokemon information there.
The data divided in several section in each tab pane for making easier to debugging.

### Folder Structures
The endpoint index is in /src/components/main/index.js

- kit: server and webpack definition
- config: configuration fol the project
- static: static file used in the project
- src/cert: for certification dummy
- src/components: components definition used in application
- src/graphql: query definition for query or mutation on graphql server
- src/helpers: helper functions
- src/routes: define router and controller of each page
- src/styles: style definitions

### Screenshot
![N|Solid](https://github.com/mfikria/pokedex/raw/master/static/home.png)

![N|Solid](https://github.com/mfikria/pokedex/raw/master/static/detail.png)
