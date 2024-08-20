import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import React from "react";

function Header() {
  return (
    <div>
      <h3>Clerk Auth</h3>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </nav>
    </div>
  );
}

export default Header;
