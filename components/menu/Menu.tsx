import Link from "next/link";
import { IoHome } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { CiShuffle } from "react-icons/ci";
import { BsGraphUp } from "react-icons/bs";
import { CiLogout } from "react-icons/ci";
import { getCurrentUser } from "@/libs/UserService";
import SignInBtn from "./SignInBtn";
import SignOutBtn from "./SignOutBtn";
import SearchBtn from "./SearchBtn";

export default async function Menu() {
  const currentUser = await getCurrentUser();
  const getPanelLink = () => {
    switch (currentUser?.type) {
      case "ADMIN":
        return `/admin/${currentUser.id}`;
      case "MANAGER":
        return `/manager/${currentUser.id}`;
      case "USER":
        return `/user/${currentUser.id}`;
      default:
        return `/`;
    }
  };
  return (
    <div className="bg-primary text-white flex flex-row h-20 w-screen md:h-screen md:w-20 md:flex-col">
      <h1 className="ml-auto mt-8 mb-8 justify-center text-center md:ml-0">
        LOGO
      </h1>
      <Link href="/" className="flex justify-center w-20 mt-6 md:mt-0 md:mb-6">
        <IoHome className="h-8 w-8" />
      </Link>
      <SearchBtn />
      <Link
        href="/"
        className="flex justify-center w-20 mt-6 md:mt-0 md:mb-6 md:flex-grow"
      >
        <CiShuffle className="h-8 w-8" />
      </Link>
      {currentUser ? (
        <>
          <Link
            href={getPanelLink()}
            className="flex justify-center w-20 mt-6 md:mt-0 md:mb-6"
          >
            <BsGraphUp className="h-8 w-8" />
          </Link>
          <SignOutBtn />
        </>
      ) : (
        <>
          <SignInBtn />
        </>
      )}
    </div>
  );
}
