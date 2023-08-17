import express, { Request, Response } from "express";
import Url from "../models/url";
const router = express.Router();

router.get("/:url", async (req: Request, res: Response) => {
  try {
    const url = req.params.url;
    if (!url) return res.status(404).json({ message: "MISSING_URL" });
    
    const dbResponse = await Url.findOne({ newUrl: url });
    if (!dbResponse) return res.status(404).json({ message: "INVALID_URL" });

    return res.redirect(dbResponse.originalUrl)

  } catch (error: any) {
    return res.status(500);
  }
});

module.exports = router;