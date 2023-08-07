import { Schema, model } from "mongoose";

export interface IUrl {
  created: Date;
  originalUrl: string;
  newUrl: string;
  creatorIP: string;
}

const UrlSchema = new Schema<IUrl>({
  created: {
    type: Date,
    default: Date.now,
  },
  originalUrl: String,
  newUrl: String,
  creatorIP: String,
});

const Url = model<IUrl>("Url", UrlSchema);

module.exports = {
  Url: Url,
};
