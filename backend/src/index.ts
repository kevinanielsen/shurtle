import { Request, Response } from "express";
const express = require("express");
const mongoose = require("mongoose");

import UrlRouter = require("./urls/shorten");

require("dotenv").config();

const app = express();
const PORT = (process.env.PORT as string) || 4000;

async function main() {
  mongoose.connect(
    "mongodb+srv://keveran:keveran@cluster0.pqfevld.mongodb.net/",
    {
      dbName: "test",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
  ).then(() => {
    console.log("Connected to database!");
  }).catch((err: any) => {
    console.log(err);
  })
}
main();

app.use(express.static("public"));
app.use(express.json()); // for parsing application/json
app.use("/urls", UrlRouter);

app.get("/", (req: Request, res: Response) => {
  const ipAdress = req.socket.remoteAddress;
  res.send(`Your IP is: ${ipAdress}`).status(200);
});

app.listen(PORT, () => {
  console.log(`App is listening at port ${PORT}`);
});
