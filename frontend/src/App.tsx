import Navbar from "@/components/navbar";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRef } from "react";
import { IUrl } from "./types/UrlInterface";
import axios from "axios";

interface ResponseIUrl extends Response {
  data?: IUrl;
}

const shortenUrl = async (inputLink: string) => {
  const shortenedUrl: ResponseIUrl = await axios.post(
    "https://backend-zglbcovu3q-ew.a.run.app/urls/shorten",
    {
      url: inputLink,
    },
    {
      headers: {
        "content-type": "application/json",
      },
    }
  );
  console.log(shortenedUrl);
};

function App() {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <>
      <Navbar />
      <main className="w-screen h-screen flex flex-col items-center justify-center">
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="inputLink">Link to shorten</Label>
          <Input id="inputLink" type="text" ref={inputRef} />
          <Button
            onClick={() => {
              if (inputRef.current?.value) shortenUrl(inputRef.current?.value);
            }}
            type="submit"
          >
            Shorten
          </Button>
        </div>
      </main>
      ;
    </>
  );
}

export default App;
