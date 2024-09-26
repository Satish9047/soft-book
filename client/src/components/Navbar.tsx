"use client";
import React, { useState } from "react";
import Link from "next/link";
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

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <>
      <div className="flex justify-between items-center p-4 ">
        <h2 className="font-bold cursor-pointer">
          <Link href={"/"}>Soft Book Share</Link>
        </h2>
        <div className="flex gap-4">
          <Input
            type="text"
            placeholder="Search..."
            className="hidden md:flex"
          />
          <div>
            <ThemeBtn />
          </div>
          <>
            {isLoggedIn ? (
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
                  <DropdownMenuItem>
                    <Link href="/profile">Profile</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href="/setting">Setting</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href="/logout">Logout</Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <div className=" hidden md:flex">
                <Link href="auth">
                  <Button>Login/Register</Button>
                </Link>
              </div>
            )}
          </>
        </div>
      </div>
    </>
  );
};

export default Navbar;
