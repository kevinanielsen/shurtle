import express, { Request, Response } from "express";
import Url from "../../models/url";
const router = express.Router();

router.get("/:url", async (req: Request, res: Response) => {
  try {
    const params = req.params;
    if (!params.url) {
      return res.status(404).json({ message: "MISSING_URL" });
    }

    const dbResponse = await Url.findOne({ newUrl: params.url });

    if (!dbResponse) return res.status(404).json({ message: "INVALID_URL" });

    return res.status(200).send(dbResponse)
  } catch (error: any) {
    console.log(error);
    return res.status(500);
  }
});

module.exports = router;
