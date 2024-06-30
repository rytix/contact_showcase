import { CiSearch } from "react-icons/ci";

interface PropsSearch {
  className?: string;
}

export default function Search({ className = "h-10" }: PropsSearch) {
  return (
    <>
      <div className={`flex flex-row-reverse ${className}`}>
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
