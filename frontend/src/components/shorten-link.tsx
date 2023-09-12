import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import shortenUrl from "@/actions/shortenUrl";

interface ShortenLinkProps {
  setLoading: React.Dispatch<boolean>;
  setShortenedUrl: React.Dispatch<string>;
  inputRef: React.RefObject<HTMLInputElement>;
}

const ShortenLink: React.FC<ShortenLinkProps> = ({
  setLoading,
  setShortenedUrl,
  inputRef
}) => {
  return (
    <>
      <Label htmlFor="inputLink">Link to shorten</Label>
      <Input id="inputLink" type="text" ref={inputRef} />
      <Button
        onClick={() => {
          if (inputRef.current?.value) {
            setLoading(true);
            shortenUrl(inputRef.current?.value)
              .then((res) => {
                setShortenedUrl(
                  `https://backend-zglbcovu3q-ew.a.run.app/${res.data?.newUrl}/`
                );
              })
              .finally(() => setLoading(false));
          }
        }}
        type="submit"
      >
        Shorten
      </Button>
    </>
  );
};

export default ShortenLink;
