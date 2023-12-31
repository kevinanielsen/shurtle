import axios from "axios";
import { IUrl } from "@/types/UrlInterface";
import checkUrl from "@/actions/checkUrl";
export interface ResponseIUrl extends Response {
  data?: IUrl;
}

const shortenUrl = async (inputLink: string) => {
  const validUrl = await checkUrl(inputLink);

  if (!validUrl) {
    return Error("toasts.invalid-link");
  }

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
