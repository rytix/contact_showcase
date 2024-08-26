"use client";

import LargePreview from "@/components/LargePreview";
import PlusBtn from "@/components/PlusBtn";
import { useState } from "react";

export default function UserMedias({
  userId,
  serverUploadedImagesUrls,
  serverUploadedVideoUrl,
}: {
  userId: string;
  serverUploadedImagesUrls: string[];
  serverUploadedVideoUrl: string | undefined;
}) {
  const [files, setFiles] = useState<(File | null)[]>([]);
  const [previewMedias, setPreviewMedias] = useState<(string | null)[]>([]);
  const [uploadedMedias, setUploadedMedias] = useState<(string | null)[]>([
    serverUploadedImagesUrls[0],
    serverUploadedImagesUrls[1],
    serverUploadedImagesUrls[2],
    serverUploadedVideoUrl ?? null,
  ]);
  const getFileChangeHandler = (pos: number) => {
    return (event: React.ChangeEvent<HTMLInputElement>) => {
      const selectedFile = event.target.files?.[0];
      const newPreviewUrls = [...previewMedias];
      newPreviewUrls[pos] = selectedFile
        ? URL.createObjectURL(selectedFile)
        : null;
      const newFiles = [...files];
      newFiles[pos] = selectedFile ? selectedFile : null;

      setFiles(newFiles);
      setPreviewMedias(newPreviewUrls);
    };
  };

  const handleSubmit = async () => {
    const newUploadedUrls = [];

    for (let index = 0; index < 4; index++) {
      const file = files[index];
      if (file) {
        const formData = new FormData();
        formData.append("file", file);
        formData.append("pos", index.toString());
        formData.append("userId", userId);

        const response = await fetch("/api/files", {
          method: "POST",
          body: formData,
        });

        const result = await response.json();
        newUploadedUrls.push(result.url);
      } else {
        newUploadedUrls.push(uploadedMedias[index]);
      }
    }
    setFiles([]);
    setPreviewMedias([]);
    setUploadedMedias(newUploadedUrls);
  };

  return (
    <>
      <div className="flex flex-row flex-wrap justify-center md:justify-between">
        {Array.from({ length: 4 }).map((_, index) => (
          <LargePreview
            key={index}
            previewMedia={previewMedias[index]}
            uploadedMedia={uploadedMedias[index]}
            handleFileChange={getFileChangeHandler(index)}
            sendVideo={index == 3}
          />
        ))}
      </div>
      <button onClick={handleSubmit}>Upload</button>
    </>
  );
}
