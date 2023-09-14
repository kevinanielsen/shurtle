import axios from "axios";
import { IUrl } from "@/types/UrlInterface";

export interface ResponseIUrl extends Response {
  data?: IUrl;
}

const shortenUrl = async (inputLink: string) => {
  const shortenedUrl: ResponseIUrl = await axios.post(
    "https://shurtle.site/urls/shorten",
    {
      url: inputLink,
    },
    {
      headers: {
        "content-type": "application/json",
      },
    }
  );
  return shortenedUrl;
};

export default shortenUrl;
