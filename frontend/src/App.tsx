import Navbar from "@/components/navbar";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRef } from "react";
import shortenUrl from "@/actions/shortenUrl";
import { useState } from "react";
import LoadingModal from "@/components/LoadingModal";

function App() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [shortenedUrl, setShortenedUrl] = useState<string>();
  const [loading, setLoading] = useState<boolean>(false);

  if (loading) return <LoadingModal />

  return (
    <div style={{ height: "calc(100vh - 100px)" }}>
      <Navbar />
      <main className="w-screen h-full flex flex-col items-center justify-center">
        <div className="grid w-full max-w-sm items-center gap-1.5">
          {shortenedUrl ? (
            <>
              <p className="text-xl font-bold">
                Your Result:
              </p>
              <a href={shortenedUrl} className="text-blue-400 w-fit underline" target="_blank">{shortenedUrl}</a>
            </>
          ) : (
            <>
              <Label htmlFor="inputLink">Link to shorten</Label>
              <Input id="inputLink" type="text" ref={inputRef} />
              <Button
                onClick={() => {
                  if (inputRef.current?.value) {
                    setLoading(true);
                    shortenUrl(inputRef.current?.value).then((res) => {
                      setShortenedUrl(`https://backend-zglbcovu3q-ew.a.run.app/${res.data?.newUrl}/`);
                    }).finally(() => setLoading(false));
                  }
                }}
                type="submit"
              >
                Shorten
              </Button>
            </>
          )}
        </div>
      </main>
      ;
    </div>
  );
}

export default App;
