import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { SignedOut, SignOutButton } from "@clerk/nextjs";
import { LogOut, User as Profile, LayoutDashboard } from "lucide-react";
import Link from "next/link";

type DropdownProfileProps = {
  firstName: string;
  lastname: string;
  imageUrl: string;
};

const DropdownProfile = ({
  firstName,
  lastname,
  imageUrl,
}: DropdownProfileProps) => {
  const avatarFallback = `${firstName[0]}${lastname[0]}`;
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="focus:outline-none focus:ring-[2px] focus:ring-offset-2 focus:ring-primary rounded-full flex items-center gap-2">
        <Avatar>
          <AvatarImage
            src={imageUrl || "images/coursefallback.jpg"}
            alt="profile"
          />
          <AvatarFallback>{avatarFallback}</AvatarFallback>
        </Avatar>

        <p className="select-none text-sm font-semibold">
          {firstName} {lastname}
        </p>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Link href={"/profile"}>
            <Profile className="h-4 w-4" /> Profile
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href={"/dashboard"}>
            <LayoutDashboard className="h-4 w-4" /> Dashboard
          </Link>
        </DropdownMenuItem>
        <SignedOut>
          <p>You are signed out.</p>
        </SignedOut>
        <DropdownMenuItem className="text-destructive" asChild>
          {/* <LogOut className="h-4 w-4" /> */}
          <SignOutButton redirectUrl="/sign-in">
            <p>
              <LogOut className="h-4 w-4" /> Sign Out
            </p>
          </SignOutButton>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
export default DropdownProfile;
