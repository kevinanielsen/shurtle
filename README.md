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
To develop on the project as a whole, make sure to edit the base_url in `frontend/src/actions/shortenUrl.ts` to match your backend url.

### Test
Shurtle uses vitest to do unit-testing. To run the tests use either `bun run test` or `npx vitest`
