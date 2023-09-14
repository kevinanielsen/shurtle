import { Button } from "@/components/ui/button";

interface ResultProps {
  shortenedUrl: string;
  setShortenedUrl: React.Dispatch<string | null>;
}

const Result: React.FC<ResultProps> = ({ shortenedUrl, setShortenedUrl }) => {
  return (
    <>
      <p className="text-xl font-bold">Your Result:</p>
      <a
        href={shortenedUrl}
        className="text-blue-400 w-full underline"
        target="_blank"
      >
        {shortenedUrl}
      </a>
      <Button
        onClick={() => {
          setShortenedUrl(null);
        }}
      >
        New Link
      </Button>
    </>
  );
};

export default Result;
