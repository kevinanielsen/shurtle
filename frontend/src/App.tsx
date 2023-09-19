import Navbar from "@/components/navbar";
import { useRef } from "react";
import { useState } from "react";
import LoadingModal from "@/components/loading-modal";
import ShortenLink from "@/components/shorten-link";
import Result from "@/components/result";

function App() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [shortenedUrl, setShortenedUrl] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  if (loading) return <LoadingModal />;

  return (
    <div style={{ height: "calc(100vh - 100px)" }}>
      <Navbar />
      <main className="w-screen h-full flex flex-col items-center justify-center">
        <div className="grid w-full max-w-sm items-center gap-1.5">
          {shortenedUrl ? (
            <Result
              setShortenedUrl={setShortenedUrl}
              shortenedUrl={shortenedUrl}
            />
          ) : (
            <ShortenLink
              inputRef={inputRef}
              setLoading={setLoading}
              setShortenedUrl={setShortenedUrl}
            />
          )}
        </div>
      </main>
    </div>
  );
}

export default App;
