import { IUser } from "@/models/User";
import Image from "next/image";

export default function Preview({ imageUrl }: { imageUrl: string | null }) {
  return (
    <>
      {imageUrl && (
        <div className="h-32 w-20 mr-2 ml-2 rounded-md flex overflow-hidden">
          <Image
            className="object-cover"
            src={imageUrl}
            alt={""}
            width={300}
            height={360}
          />
        </div>
      )}
    </>
  );
}
