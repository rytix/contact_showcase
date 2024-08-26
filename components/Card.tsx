"use client";

import MessageBtn from "./MessageBtn";
import Heart from "./HeartBtn";
import PlayBtn from "./PlayBtn";
import { Carousel } from "@material-tailwind/react";
import Image from "next/image";

type UserData = {
  id: string;
  images: string[];
  video?: string;
  name: string;
};

export default function Card({
  cardUser,
  setUserData,
}: {
  cardUser: UserData;
  setUserData: (userData: UserData) => void;
}) {
  return (
    <>
      <div className="shadow-xl ml-2 mr-2">
        <div className="flex flex-col h-72 w-48 sm:w-64 mt-5 rounded-t-md rounded-b-md overflow-hidden">
          <div className="order-1 h-60">
            <Carousel
              placeholder={undefined}
              onPointerEnterCapture={() => {}}
              onPointerLeaveCapture={() => {}}
            >
              {cardUser.images &&
                cardUser.images.map((image, index) => {
                  if (image) {
                    return index < 3 ? (
                      <Image
                        className="h-full w-full object-cover"
                        key={index}
                        src={image}
                        alt=""
                        width={400}
                        height={200}
                      />
                    ) : (
                      <video
                        src={image}
                        className="h-full w-full object-cover"
                        autoPlay
                        loop
                        muted
                        playsInline
                      />
                    );
                  }
                })}
            </Carousel>
          </div>
          <div className="flex flex-row order-2 h-12 items-center">
            <Heart className="ml-2 flex" />
            <PlayBtn className="ml-2 mr-2 flex" />
            <MessageBtn
              className="flex-grow mr-2"
              cardUser={cardUser}
              setUserData={setUserData}
            />
          </div>
        </div>
      </div>
    </>
  );
}
