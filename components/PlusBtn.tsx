import { MutableRefObject } from "react";
import { FaPlus } from "react-icons/fa";

interface PropsPlusBtn {
  sendVideo: boolean;
  fileInputRef: MutableRefObject<HTMLInputElement | null>;
}

export default function PlusBtn({ sendVideo, fileInputRef }: PropsPlusBtn) {
  return (
    <>
      <div className="h-100 w-82 md:w-70 lg:w-82 shadow-xl rounded-md mt-5 mr-2 ml-2 border-2 border-solid border-gray-300">
        <button
          className="h-full w-full flex flex-col justify-center items-center"
          onClick={() => {
            fileInputRef.current?.click();
          }}
        >
          <FaPlus className="size-24" />
          <p className="mt-5 font-semibold">
            {sendVideo ? "Adicionar Vídeo" : "Adicionar Foto"}
          </p>
        </button>
      </div>
    </>
  );
}
