import { Button } from "@/components/ui/button";
import { EllipsisVertical, ShoppingCartIcon, UserIcon } from "lucide-react";
import ModeToggle from "./mode-toggle";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const MenuContent = () => {
  return (
    <>
      <ModeToggle />
      <Button asChild variant="ghost">
        <Link href="/cart">
          <ShoppingCartIcon /> Cart
        </Link>
      </Button>
      <Button asChild variant="pink">
        <Link href="/sign-in">
          <UserIcon /> Sign In
        </Link>
      </Button>
    </>
  );
};

const Menu = () => {
  return (
    <div className="flex justify-end gap-3">
      <nav className="hidden md:flex w-full max-w-xs gap-1">
        <MenuContent />
      </nav>
      <nav className="md:hidden">
        <Sheet>
          <SheetTrigger className="align-middle">
            <EllipsisVertical color="#df2e0a" />
          </SheetTrigger>
          <SheetContent className="flex flex-col items-start">
            <SheetTitle className="border-b border-orange-200">Menu</SheetTitle>
            <MenuContent />
            <SheetDescription></SheetDescription>
          </SheetContent>
        </Sheet>
      </nav>
    </div>
  );
};

export default Menu;
