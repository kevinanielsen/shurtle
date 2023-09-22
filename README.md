# Shurtle - Simple URL-Shortener

## Development
### Install and run
```
git clone https://github.com/kevinanielsen/shurtle
cd shurtle
```
#### Frontend
```
cd frontend
bun install
bun run dev
```

#### Backend
```
cd backend
bun install
bun run dev
```
Configure a `.env` file with a MONGO_STRING and optionally a PORT if needed.

#### Both
To develop on the project as a whole, make sure to set up a `.env` file in the frontend folder with a BACKEND_URL pointing to your `http://localhost:PORT`
