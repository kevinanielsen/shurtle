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
          if (!inputRef.current?.value) {
            toast({
              title: "Input is empty. Please insert a link to shorten.",
            });
            return;
          }

          setLoading(true);
          shortenUrl(inputRef.current?.value)
            .catch((error: string) => {
              toast({
                title: "Error!",
                description: error,
                variant: "destructive",
              });
            })
            .then((res) => {
              if (res instanceof Error) {
                toast({
                  title: "Error!",
                  description: res.message,
                  variant: "destructive",
                });
              } else if (res?.data) {
                setShortenedUrl(`shurtle.site/${res.data.newUrl}/`);
              } else {
                toast({
                  title: "Error!",
                  description:
                    "Something went wrong! Reload the page and try again.",
                  variant: "destructive",
                });
              }
            })
            .finally(() => setLoading(false));
        }}
        type="submit"
      >
        Shorten
      </Button>
    </>
  );
};

export default ShortenLink;
