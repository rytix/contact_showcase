"use client";

import { signOut } from "next-auth/react";
import { CiLogout } from "react-icons/ci";

export default function SignOutBtn() {
  return (
    <button
      className="flex justify-center w-20 mr-auto mt-6 md:mt-0 md:mr-0 md:mb-6"
      onClick={() => signOut()}
    >
      <CiLogout className="h-8 w-8" />
    </button>
  );
}
