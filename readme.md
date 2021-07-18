### Hello World, and welcome to my Email Guesser application.

There is two parts to this app, the frontend and the backend, reflected in two main project files - client and server.

### Frontend

To start frontend service, `cd` into `client` folder and add `.env` file. You can see a `env.example` file with the required variable. In this case, it's no secret, if you check where backend server is running, that `API_URL=http://localhost:8080` in our `.env` file

Install dependencies using:
`yarn install`

Start frontend using:
`yarn start`

Test frontend using:
`yarn test`

### Backend

For our backend, `cd` into `server` folder. We're using Express with a PostgreSQL database, therefore one is required to have PostgreSQL installed. See here for further instructions: https://www.postgresql.org/download/

Once PostgreSQL is installed, create a local database and add database url to `.env` file.

To install dependencies, run:
`yarn install`

To create relavant DB table, run:
`yarn db:migrate:up`

To see the database with test data, run the below command. Note that this seeds the database with the domains of three companies which can be used as provided in the task instructions: google.com, babbel.com and linkedin.com:
`yarn db:seed`

To run tests, use:
`yarn test`

To start server, run:
`yarn start`

### Now for the fun part

With both frontend and backend started, we can now test our the application. From our frontend, we can try input a full name like "John Smith" and a company that exists in our DB such as "google.com" to see the email for this contact at this company.

There is strict validation on the input fields so please ensure you input a full name separated by a space, not just a first name or last name. 

We can also try see what happens when we enter malformed or partially filled data. 