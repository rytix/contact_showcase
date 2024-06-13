import Link from "next/link";
import { IoHome } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { CiShuffle } from "react-icons/ci";

export default function Menu() {
  return (
    <div className="bg-primary w-20 justify-center text-center">
      <h1>LOGO</h1>
      <Link href="/" className="w-20">
        <IoHome className="h-8 w-8" />
      </Link>
      <Link href="/">
        <CiSearch className="h-8 w-8" />
      </Link>
      <Link href="/">
        <CiShuffle className="h-8 w-8" />
      </Link>
    </div>
  );
}
