import Navbar from "@/components/navbar";
import { useRef } from "react";
import { useState } from "react";
import LoadingModal from "@/components/LoadingModal";
import ShortenLink from "@/components/shorten-link";
import { Button } from "@/components/ui/button";

function App() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [shortenedUrl, setShortenedUrl] = useState<string | null>();
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
              <a href={shortenedUrl} className="text-blue-400 w-full underline" target="_blank">{shortenedUrl}</a>
              <Button
                onClick={() => {
                  setShortenedUrl(null)
                }}
              >New Link</Button>
            </>
          ) : (
            <ShortenLink inputRef={inputRef} setLoading={setLoading} setShortenedUrl={setShortenedUrl} />
          )}
        </div>
      </main>
      ;
    </div>
  );
}

export default App;
