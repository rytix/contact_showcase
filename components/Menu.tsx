import Link from "next/link";
import { IoHome } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { CiShuffle } from "react-icons/ci";
import { BsGraphUp } from "react-icons/bs";
import { CiLogout } from "react-icons/ci";

export default function Menu() {
  return (
    <div className="bg-primary text-white flex flex-row h-20 w-screen md:h-screen md:w-20 md:flex-col">
      <h1 className="ml-auto mt-8 mb-8 justify-center text-center md:ml-0">
        LOGO
      </h1>
      <Link href="/" className="flex justify-center w-20 mt-6 md:mt-0 md:mb-6">
        <IoHome className="h-8 w-8" />
      </Link>
      <Link href="/" className="flex justify-center w-20 mt-6 md:mt-0 md:mb-6">
        <CiSearch className="h-8 w-8" />
      </Link>
      {true ? (
        <>
          <Link
            href="/"
            className="flex justify-center w-20 mt-6 md:mt-0 md:mb-6 md:flex-grow"
          >
            <CiShuffle className="h-8 w-8" />
          </Link>
          <Link
            href="/"
            className="flex justify-center w-20 mt-6 md:mt-0 md:mb-6"
          >
            <BsGraphUp className="h-8 w-8" />
          </Link>
          <Link
            href="/"
            className="flex justify-center w-20 mr-auto mt-6 md:mt-0 md:mr-0 md:mb-6"
          >
            <CiLogout className="h-8 w-8" />
          </Link>
        </>
      ) : (
        <>
          <Link
            href="/"
            className="flex justify-center w-20 mt-6 mr-auto md:mr-0 md:mt-0 md:mb-6 md:flex-grow"
          >
            <CiShuffle className="h-8 w-8" />
          </Link>
        </>
      )}
    </div>
  );
}
