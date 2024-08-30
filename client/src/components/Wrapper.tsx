"use client";
import Link from "next/link";
import React, { useState } from "react";
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
  const [isLoggedIn, setIsLoggedIn] = useState(false);
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
                <div>
                  <Link href="auth">
                    <Button>Login/Register</Button>
                  </Link>
                </div>
              )}
            </>
          </div>
        </div>
      </header>
      <div className="px-4">{children}</div>
    </>
  );
};

export default Wrapper;
