import Link from "next/link";
import React from "react";
import { ThemeBtn } from "./ThemeBtn";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "./ui/button";

const Wrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <header className="">
        <div className="flex justify-between items-center p-4">
          <h2>Soft Book Share</h2>
          <div className="flex gap-4">
            <Input type="text" placeholder="Search..." />
            <div>
              <ThemeBtn />
            </div>
            <>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="icon">
                    <Avatar>
                      <AvatarImage
                        src="https://github.com/shadcn.png"
                        alt="profile"
                      />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>Profile</DropdownMenuItem>
                  <DropdownMenuItem>Setting</DropdownMenuItem>
                  <DropdownMenuItem>Logout</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </>
          </div>
        </div>
      </header>
      <div>{children}</div>
    </>
  );
};

export default Wrapper;
