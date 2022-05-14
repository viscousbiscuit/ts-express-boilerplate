# This is a boilerplate for a Node.js app using Typescript.

## Running this project
First install the dependencies using `npm install` and then `npm run-script build:watch` for changes to be output into the build\src directory. Then run the app using `node main.js`. 

## Tests

By default `npm test` will run `jest --coverage`.


# Working locally with Docker

`npm start' or `npm run-script dev` will use node-ts using the `--experimental-specifier-resolution` flag which enables the use of es modules. It will also enable the use of a debugger on port `9229` using the following switch `--inspect=0.0.0.0:9229`. Port `9229` is also enabled within the docker compose file.

Configure the .env file to specific which port should be used, port 4000 is set by default.