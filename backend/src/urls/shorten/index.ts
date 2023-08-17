import { Request, Response } from "express";
import express from "express";
const nanoid = require("nanoid");
const router = express.Router();
import Url from "../../models/url";

router.post("/", async (req: Request, res: Response) => {
  try {
    const body = req.body;
    const ip = req.ip;

    if (!body.url) res.status(404).json({ error: "Missing url in body" });
    const urlToShorten = body.url;

    // Query DB to check if url already has been shortened
    const entry = await Url.find({ originalUrl: body.url });

    // If url already exists in db, return existing record
    if (entry.length === 0) {
      const url = {
        originalUrl: urlToShorten,
        newUrl: nanoid.nanoid(8),
        creatorIP: ip,
      };

      const dbResponse = await Url.create(url);

      return res.status(200).json({ dbResponse });
    }

    return res.status(200).json(entry[0]);
  } catch (error: any) {
    res.status(400);
  }
});

module.exports = router;
