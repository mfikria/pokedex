# [Pokedex](https://pokedex-portal.herokuapp.com)

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
yarn
npm start
```
You can access by default http://localhost:8080 for hot reloading and http://localhost:8081 for static server rendering. For windows user perhaps you should use https://github.com/felixrieseberg/windows-build-tools andusing Powershell as administrator to execute the script.

In production, you can build static production server by the given command:
```{engine='sh'}
npm run build // Build static server and assets
npm server // run static server
```

### Routes
##### Homepage (/)
This page show all pokemon's name in infinite list. This list updated as user scroll with help from react semantic-ui component and Apollo Client.
##### Single Pokemon's Profile (/pokemon/:id)
This page show pokemon's profile. User can see image and all pokemon information there.

### Screenshot
![N|Solid](https://github.com/mfikria/pokedex/raw/master/static/home.png)

![N|Solid](https://github.com/mfikria/pokedex/raw/master/static/detail.png)
