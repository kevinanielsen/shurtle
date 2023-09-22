import { Button } from "@/components/ui/button";
import CopyLink from "@/components/copy-link";
import { useTranslation } from "react-i18next";

interface ResultProps {
  shortenedUrl: string;
  setShortenedUrl: React.Dispatch<string>;
}

const Result: React.FC<ResultProps> = ({ shortenedUrl, setShortenedUrl }) => {
  const { t } = useTranslation();

  return (
    <>
      <p className="text-xl font-bold">{t("result.result-label")}:</p>
      <div className="w-full flex px-2 py-1 rounded-lg bg-slate-100 border-slate-950 dark:bg-slate-900 dark:border-slate-100 border-2 items-center justify-between">
        <a
          href={`https://www.${shortenedUrl}`}
          className="text-blue-400 underline text-lg"
          target="_blank"
          aria-label="Shortened link"
        >
          {shortenedUrl}
        </a>
        <CopyLink url={shortenedUrl} />
      </div>
      <Button
        onClick={() => {
          setShortenedUrl("");
        }}
      >
        {t("result.new-link-button")}
      </Button>
    </>
  );
};

export default Result;
