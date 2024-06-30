"use client";

import { CiSearch } from "react-icons/ci";

export default function SearchBtn() {
  const handleClick = () => {
    const searchElement = document.getElementById("searchInput");
    if (searchElement) {
      searchElement.focus();
    }
  };

  return (
    <button
      className="flex justify-center w-20 mr-auto mt-6 md:mt-0 md:mr-0 md:mb-6"
      onClick={handleClick}
    >
      <CiSearch className="h-8 w-8" />
    </button>
  );
}
