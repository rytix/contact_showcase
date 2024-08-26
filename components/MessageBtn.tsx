"use client";

import { Dialog, DialogBody } from "@material-tailwind/react";
import { useState } from "react";
import PaymentModal from "./PaymentModal";

type UserData = {
  id: string;
  images: string[];
  video?: string;
  name: string;
};

interface PropsMessageBtn {
  className?: string;
  cardUser: UserData;
  setUserData: (userData: UserData) => void;
}
export default function MessageBtn({
  className,
  cardUser,
  setUserData,
}: PropsMessageBtn) {
  return (
    <>
      <div className={className}>
        <div className="bg-primary flex justify-center rounded-lg text-xs h-5">
          <button onClick={() => setUserData(cardUser)}>
            <b>Enviar Mensagem</b>
          </button>
        </div>
      </div>
    </>
  );
}
