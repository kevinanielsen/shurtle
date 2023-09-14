import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import shortenUrl from "@/actions/shortenUrl";
import { useToast } from "@/components/ui/use-toast";

interface ShortenLinkProps {
  setLoading: React.Dispatch<boolean>;
  setShortenedUrl: React.Dispatch<string>;
  inputRef: React.RefObject<HTMLInputElement>;
}

const ShortenLink: React.FC<ShortenLinkProps> = ({
  setLoading,
  setShortenedUrl,
  inputRef,
}) => {
  const { toast } = useToast();

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
                if (res.data && res.data.newUrl !== undefined) {
                  setShortenedUrl(`shurtle.site/${res.data.newUrl}/`);
                } else {
                  toast({
                    title: "Error!",
                    description:
                      "An error occurred during url-shortening! Reload the page and try again.",
                  });
                }
              })
              .catch(() => {
                toast({
                  title: "Error!",
                  description:
                    "An error occurred during url-shortening! Reload the page and try again.",
                });
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
