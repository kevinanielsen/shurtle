import { Request, Response } from "express";
const express = require("express");
const mongoose = require("mongoose");
const ShortenRouter = require("./urls/shorten");
const UrlRouter = require("./urls/url");
const RedirectRouter = require("./redirect");
import cors from "cors";
const requestIp = require("request-ip");

require("dotenv").config();

const app = express();
const PORT = (process.env.PORT as string) || 4000;

async function main() {
  mongoose
    .connect(process.env.MONGO_STRING, {
      dbName: "test",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Connected to database!");
    })
    .catch((err: any) => {
      console.log(err);
    });
}
main();
app.use(
  cors({
    origin: true,
  })
);
app.use(express.static("public"));
app.use(express.json()); // for parsing application/json
app.use("/urls/shorten", ShortenRouter);
app.use("/urls/url", UrlRouter);
app.use("/", RedirectRouter);

app.get("/", (req: Request, res: Response) => {
  const clientIp = requestIp.getClientIp(req);
  console.log(clientIp);
  res.json(`Your IP is: ${clientIp}`).status(200);
});

app.listen(PORT, () => {

    console.log(
      `App is listening at port ${PORT} \n${
        process.env.BACKEND_URL || "http://shurtle.site"
      }`
    );
});
