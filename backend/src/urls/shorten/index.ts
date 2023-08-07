import { Request, Response } from "express";
const express = require("express");
const router = express.Router();
const Url = require( "../../models/url").Url;

router.post("/shorten", async (req: Request, res: Response) => {
  try {
    const body = req.body;
    const ip = req.ip;
    if (!body.url) res.status(404).json({ error: "Missing url in body"});
    const urlToShorten = body.url;

    const url = {
      originalUrl: urlToShorten,
      newUrl: `${urlToShorten}.shortened`,
      creatorIP: ip,
    }

    const dbResponse = await Url.create(url);

    res.status(200).json({ dbResponse });
  } catch (error: any) {
    res.status(400)
  }
});

module.exports = router;
