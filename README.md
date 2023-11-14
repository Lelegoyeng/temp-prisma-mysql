![Prisma](https://i.imgur.com/h6UIYTu.png)

<div align="center">
  <h1>Prisma</h1>
</div>

## :computer: Getting Started

```bash
## Install
npm install
npx prisma generate
npx prisma migrate dev

npm start
```
```bash
## Buat New Database
testprisma
```

```bash
## Api
http://localhost:5000/
```

```bash
## Routes
POST    |  http://localhost:5000/
GET     |  http://localhost:5000/
DELETE  |  http://localhost:5000/:id
UPDATE  |  http://localhost:5000/:id
```

```bash
## Response
success          |  200
serverError      |  500
notFound         |  404
invalidInput     |  400
unauthorized     |  401
forbidden        |  403
conflict         |  409
```
