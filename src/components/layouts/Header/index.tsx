import Logo from "@/components/common/Logo";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Header = () => {
  return (
    <header className="shadow-sm">
      <div className="container h-16 flex items-center justify-between">
        <div>
          <Logo />
        </div>

        <div className="flex items-center gap-4">
          <Button variant={"outline"} asChild>
            <Link href={"/login"}>Login</Link>
          </Button>

          <Button className="hidden sm:inline-flex" asChild>
            <Link href={"/register"}>Buat Akun</Link>
          </Button>
        </div>
      </div>
    </header>
  );
};
export default Header;
