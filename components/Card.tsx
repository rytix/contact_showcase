"use client";

import MessageBtn from "./MessageBtn";
import Heart from "./HeartBtn";
import PlayBtn from "./PlayBtn";
import { Carousel } from "@material-tailwind/react";

export default function Card() {
  return (
    <>
      <div className="shadow-xl">
        <div className="flex flex-col h-72 w-48 sm:w-64 mt-5 rounded-t-md rounded-b-md overflow-hidden">
          <div className="order-1 h-60">
            <Carousel
              placeholder={undefined}
              onPointerEnterCapture={() => {}}
              onPointerLeaveCapture={() => {}}
            >
              <img
                src="https://picsum.photos/200/300"
                alt="img 1"
                className="h-full w-full object-cover"
              />
              <img
                src="https://picsum.photos/200/300"
                alt="img 2"
                className="h-full w-full object-cover"
              />
              <img
                src="https://picsum.photos/200/300"
                alt="img 3"
                className="h-full w-full object-cover"
              />
            </Carousel>
          </div>
          <div className="flex flex-row order-2 h-12 items-center">
            <Heart className="ml-2 flex" />
            <PlayBtn className="ml-2 mr-2 flex" />
            <MessageBtn className="flex-grow mr-2" />
          </div>
        </div>
      </div>
    </>
  );
}
