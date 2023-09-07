import { Document } from "mongoose"

export interface IUrl extends Document {
  created: Date;
  originalUrl: string;
  newUrl: string;
  creatorIP: string;
}