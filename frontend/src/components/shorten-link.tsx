import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import shortenUrl from "@/actions/shortenUrl";
import { useToast } from "@/components/ui/use-toast";
import { useTranslation } from "react-i18next";

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

  const { t } = useTranslation();

  return (
    <>
      <Label htmlFor="inputLink">{t("shorten-link.input-label")}</Label>
      <Input id="inputLink" type="text" ref={inputRef} />
      <Button
        onClick={() => {
          if (!inputRef.current?.value) {
            toast({
              title: t("toasts.empty-input"),
            });
            return;
          }

          setLoading(true);
          shortenUrl(inputRef.current?.value)
            .catch((error: Error) => {
              console.log(error);
              toast({
                title: t("toasts.error"),
                description: t("toasts.standard-error"),
                variant: "destructive",
              });
            })
            .then((res) => {
              if (res instanceof Error) {
                toast({
                  title: t("toasts.error"),
                  description: t(res.message),
                  variant: "destructive",
                });
              } else if (res?.data) {
                setShortenedUrl(`shurtle.site/${res.data.newUrl}/`);
              } else {
                toast({
                  title: t("toasts.error"),
                  description: t("toasts.standard-error"),
                  variant: "destructive",
                });
              }
            })
            .finally(() => setLoading(false));
        }}
        type="submit"
      >
        {t("shorten-link.button-label")}
      </Button>
    </>
  );
};

export default ShortenLink;
