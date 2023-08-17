import mongoose, { Schema, Document, Model } from "mongoose";

export interface IUrl extends Document {
  created: Date;
  originalUrl: string;
  newUrl: string;
  creatorIP: string;
}

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