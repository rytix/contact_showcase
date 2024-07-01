"use client";

import { Dialog, DialogBody } from "@material-tailwind/react";
import { useState } from "react";
import PaymentModal from "./PaymentModal";

interface PropsMessageBtn {
  className?: string;
  nome: string;
}
export default function MessageBtn({ className, nome }: PropsMessageBtn) {
  const [abrirModal, setAbrirModal] = useState(false);
  return (
    <>
      <div className={className}>
        <div className="bg-primary flex justify-center rounded-lg text-xs h-5">
          <button onClick={() => setAbrirModal(!abrirModal)}>
            <b>Enviar Mensagem</b>
          </button>
          <Dialog
            open={abrirModal}
            handler={() => setAbrirModal(!abrirModal)}
            size="lg"
            placeholder={undefined}
            onPointerEnterCapture={() => {}}
            onPointerLeaveCapture={() => {}}
          >
            <DialogBody
              className="h-[40rem] sm:h-[44rem] md:h-[48rem] xl:h-[52rem]"
              placeholder={undefined}
              onPointerEnterCapture={() => {}}
              onPointerLeaveCapture={() => {}}
            >
              <PaymentModal nome="teste" />
            </DialogBody>
          </Dialog>
        </div>
      </div>
    </>
  );
}
