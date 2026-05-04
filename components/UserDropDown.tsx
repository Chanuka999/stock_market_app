"use client";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useRouter } from "next/navigation";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { LogOut } from "lucide-react";
import NavItems from "./NavItems";

const user = { name: "john", email: "contact@jsmastery.com" };

const userDropDown = () => {
  const router = useRouter();
  const handleSignOut = async () => {
    // TODO: Clear user session/auth token here
    router.push("/sign-in");
  };
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            className="flex items-center gap-2 px-2 py-1 rounded-lg bg-white/10 hover:bg-yellow-100/20 transition-colors"
          >
            <Avatar className="h-9 w-9">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback className="bg-yellow-500 text-yellow-900 text-base font-bold">
                {user.name[0]}
              </AvatarFallback>
            </Avatar>
            <span className="hidden md:inline text-base font-semibold text-gray-700">
              {user.name}
            </span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="text-gray-700 min-w-[220px] p-2 rounded-xl shadow-lg bg-white">
          <DropdownMenuLabel>
            <div className="flex items-center gap-3 py-2">
              <Avatar className="h-11 w-11">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback className="bg-yellow-500 text-yellow-900 text-lg font-bold">
                  {user.name[0]}
                </AvatarFallback>
              </Avatar>
              <div className="flex flex-col">
                <span className="text-base font-semibold text-gray-800">
                  {user.name}
                </span>
                <span className="text-sm text-gray-500">{user.email}</span>
              </div>
            </div>
          </DropdownMenuLabel>

          <DropdownMenuSeparator className="bg-gray-200 my-2" />
          <DropdownMenuItem
            onClick={handleSignOut}
            className="text-red-600 text-md font-semibold hover:bg-red-50 focus:bg-red-100 rounded-lg flex items-center gap-2 px-3 py-2 transition-colors cursor-pointer"
          >
            <LogOut className="h-5 w-5 mr-2" />
            Logout
          </DropdownMenuItem>
          <DropdownMenuSeparator className="hidden sm:block bg-gray-200 my-2" />
          <nav className="sm:hidden">
            <NavItems />
          </nav>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default userDropDown;
