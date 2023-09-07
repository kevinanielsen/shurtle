import { ModeToggle } from "@/components/mode-toggle";
import { Separator } from "@/components/ui/separator";

const Navbar = () => {
  return (
    <>
      <nav className="w-full flex items-center justify-between p-4">
        <a href="/">
          <img src="shurtle-icon.svg" width="40" className="rounded" />
        </a>
        <ModeToggle />
      </nav>
      <Separator />
    </>
  );
};

export default Navbar;
