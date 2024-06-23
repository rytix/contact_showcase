import { CiSearch } from "react-icons/ci";

export default function Search() {
  return (
    <>
      <div className="flex flex-row-reverse h-10">
        <CiSearch className="pt-1 size-8" />
        <input
          type="search"
          name=""
          id=""
          className="flex-grow focus:outline-none pl-2"
        />
      </div>
    </>
  );
}
