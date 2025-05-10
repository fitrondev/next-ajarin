import Logo from "@/components/common/Logo";
import { Button } from "@/components/ui/button";
// import { UserButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
import Link from "next/link";
import DropdownProfile from "./DropdownProfile";

const Header = async () => {
  const user = await currentUser();

  console.log("user", user);

  return (
    <header className="shadow-sm">
      <div className="container h-16 flex items-center justify-between">
        <div>
          <Logo />
        </div>

        {user ? (
          <DropdownProfile
            firstName={user.firstName ?? ""}
            lastname={user.lastName ?? ""}
            imageUrl={user.imageUrl ?? ""}
          />
        ) : (
          <div className="flex items-center gap-4">
            <Button variant={"outline"} asChild>
              <Link href={"/sign-in"}>Login</Link>
            </Button>

            <Button className="hidden sm:inline-flex" asChild>
              <Link href={"/sign-up"}>Buat Akun</Link>
            </Button>
          </div>
        )}
      </div>
    </header>
  );
};
export default Header;
