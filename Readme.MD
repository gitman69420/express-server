# Express Typescript REST API
### Steps for running locally:
1. After cloning the repo, run `npm i` to install the dependancies.
1. Use `npm run dev` for development.
1. Run `npm start` to run the server locally.

### env config
- Create a `.env` in the project's root directory and add `PORT=<your port>` (if you skip this step, the default port will be 8888) 

### Deployment
- `npm i` will be sufficient for setting up the environment (`prepare` script has already been configured)
- `npm start` will start the server.

### Usage
- To test it, start the server and make a GET request to `/about`.