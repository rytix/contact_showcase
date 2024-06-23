"use client";

import { useState } from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa";

interface PropsHeart {
  className?: string;
}

export default function Heart({ className }: PropsHeart) {
  const [heart, setHeart] = useState(false);
  return (
    <>
      <div className={className}>
        <button
          className="text-primary size-4"
          onClick={() => setHeart(!heart)}
        >
          {heart ? <FaHeart /> : <FaRegHeart />}
        </button>
      </div>
    </>
  );
}
