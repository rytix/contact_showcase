"use client";

import { signIn } from "next-auth/react";
import { CiLogin } from "react-icons/ci";

export default function SignInBtn() {
  return (
    <button
      className="flex justify-center w-20 mr-auto mt-6 md:mt-0 md:mr-0 md:mb-6"
      onClick={() => signIn()}
    >
      <CiLogin className="h-8 w-8" />
    </button>
  );
}
