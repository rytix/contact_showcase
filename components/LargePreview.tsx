"use client";

import Image from "next/image";
import { useRef } from "react";
import PlusBtn from "./PlusBtn";

export default function LargePreview({
  className = "h-100 w-82 md:w-70 lg:w-82",
  previewMedia,
  uploadedMedia,
  handleFileChange,
  sendVideo,
}: {
  className?: string;
  previewMedia: string | null;
  uploadedMedia: string | null;
  handleFileChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  sendVideo: boolean;
}) {
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  return (
    <>
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        className="hidden"
        accept={sendVideo ? "video/mp4" : "image/png, image/jpeg"}
      />
      {previewMedia || uploadedMedia ? (
        <div
          className={`${className} shadow-xl rounded-md overflow-hidden mt-5 mr-2 ml-2`}
          onClick={() => {
            fileInputRef.current?.click();
          }}
        >
          {sendVideo ? (
            <video
              src={previewMedia ?? uploadedMedia ?? ""}
              className="h-full w-full object-cover"
              autoPlay
              loop
              muted
              playsInline
            />
          ) : (
            <Image
              src={previewMedia ?? uploadedMedia ?? ""}
              alt={"img 1"}
              className="h-full w-full object-cover"
              width={400}
              height={600}
            />
          )}
        </div>
      ) : (
        <PlusBtn fileInputRef={fileInputRef} sendVideo={sendVideo} />
      )}
    </>
  );
}
