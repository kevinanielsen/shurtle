import mongoose, { Schema, Model } from "mongoose";
import { IUrl } from "../types/UrlInterface";

const UrlSchema: Schema = new Schema({
  created: {
    type: Date,
    required: true,
    default: Date.now,
  },
  originalUrl: { type: String, required: true, unique: true },
  newUrl: { type: String, required: true, unique: true },
  creatorIP: { type: String, required: true },
});

const Url: Model<IUrl> = mongoose.model<IUrl>("Url", UrlSchema);

export default Url;