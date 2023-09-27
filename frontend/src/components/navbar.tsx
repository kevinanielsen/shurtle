import { ModeToggle } from "@/components/mode-toggle";
import { Separator } from "@/components/ui/separator";
import LanguageToggle from "@/components/language-toggle";

const Navbar = () => {
  return (
    <>
      <nav className="w-full flex items-center justify-between p-4">
        <a href="/" aria-label="Homepage">
          <img
            src="shurtle-icon.svg"
            width="40"
            height="40"
            className="rounded"
            alt="shurtle icon"
          />
        </a>
        <div className="flex gap-4">
          <LanguageToggle />
          <ModeToggle />
        </div>
      </nav>
      <Separator />
    </>
  );
};

export default Navbar;
