"use client";

import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Menu } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export function NavBarPublic() {
  const [open, setOpen] = useState(false);

  const renderButtons = () => {
    return (
      <>
        <Link
          className="whitespace-nowrap text-sm font-medium text-tcotta-700 underline-offset-4 hover:underline"
          href="https://www.scammerblock.com/"
        >
          Home
        </Link>
        <Link
          className="whitespace-nowrap text-sm font-medium text-tcotta-700 underline-offset-4 hover:underline"
          href="https://www.scammerblock.com/about"
        >
          Team
        </Link>
        <Link
          className="whitespace-nowrap text-sm font-medium text-tcotta-700 underline-offset-4 hover:underline"
          href="https://blog.scammerblock.com"
        >
          Blog
        </Link>
        <Link
          className="whitespace-nowrap text-sm font-medium text-tcotta-700 underline-offset-4 hover:underline"
          href="https://www.scammerblock.com/verify-call"
        >
          Verify Call
        </Link>
        <Link
          className="whitespace-nowrap text-sm font-medium text-tcotta-700 underline-offset-4 hover:underline"
          href="https://www.scammerblock.com/login"
        >
          Log In
        </Link>
        <Link href="https://www.scammerblock.com/register">
          <Button>Setup for free</Button>
        </Link>
      </>
    );
  };

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 flex h-[68px] items-center justify-center border-b border-tcotta-200 px-4 bg-white">
      <div className="flex w-full max-w-[1440px] items-center justify-between gap-4 sm:gap-6 lg:px-6">
        <Logo />

        <div className="hidden flex-row items-center gap-6 sm:flex">
          {renderButtons()}
        </div>

        <Menu className="flex sm:hidden" onClick={() => setOpen(true)} />
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="h-screen w-screen">
          <DialogHeader>
            <DialogTitle>Menu</DialogTitle>
            <DialogDescription className="flex h-full flex-col justify-around">
              <div className="flex flex-col items-center gap-8">
                {renderButtons()}
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </nav>
  );
}
