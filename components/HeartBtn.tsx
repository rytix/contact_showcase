"use client";

import { AnimatePresence, motion } from "framer-motion";
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
          className="text-primary size-4 relative"
          onClick={() => setHeart(!heart)}
        >
          <AnimatePresence>
            {heart && (
              <motion.div
                key={"FullHeart"}
                initial={{ opacity: 1 }}
                animate={{ opacity: 1, scale: [0, 1.5, 1] }}
                transition={{
                  duration: 0.6,
                  ease: [0, 0.71, 0.2, 1.01],
                }}
              >
                <FaHeart />
              </motion.div>
            )}
            <div className="absolute top-0">
              <FaRegHeart />
            </div>
          </AnimatePresence>
        </button>
      </div>
    </>
  );
}
