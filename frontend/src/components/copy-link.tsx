import { Copy } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

interface CopyLinkProps {
  url: string;
}

const CopyLink: React.FC<CopyLinkProps> = ({ url }) => {
  const { toast } = useToast();

  return (
    <button
      className="m-2 bg-slate-950 text-slate-50 p-1.5 rounded-lg dark:bg-slate-50 dark:text-slate-950 focus:ring-2 focus:ring-offset-slate-50 dark:focus:ring-offset-slate-950 ring-offset-2 focus:ring-slate-950 dark:focus-ring-slate-50"
      aria-label="Copy link"
      role="button"
      onClick={() => {
        navigator.clipboard.writeText(url);
        toast({
          title: "Succesfully copied link!",
        });
      }}
    >
      <span hidden>Copy link</span>
      <Copy size={20} aria-hidden />
    </button>
  );
};

export default CopyLink;
