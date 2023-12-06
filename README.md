# Flexpa Demo Application

A quick demo by Sadequs Haque for the Flexpa Link and FHIR APIs

## Running the Application

This application has multiple parts and requires a few steps to run.

### 1. Copy web + api .env-example to .env

```bash
cd api
mv .env-example .env
cd ../web
mv .env-example .env
```

### 2. Add the Flexpa keys, JWT private key to .env

In `./api/.env` fill in

```
FLEXPA_SECRET_KEY =
JWT_SECRET =
```

`JWT_SECRET` can be any value you want - it is being used to sign the jwt token for the login functionality.

In `./web/.env` fill in

```
REACT_APP_FLEXPA_PUBLISHABLE_KEY =
```

### 3. Start the database

I use docker-compose to run an instance of a database for local development. To start that,

```bash
cd flexpa-demo
sudo docker-compose up -d
```

### 4. Migrate and seed the database, and start the api-server.

```bash
cd api
npx prisma generate
npx prisma db push
npx prisma db seed
npm install
npm start
```

### 5. Start the web-ui

```bash
cd web
npm install
npm start
```

To login to the application, use the following credential:

```
username - admin
password - password
```
