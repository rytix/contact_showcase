import { Dispatch, SetStateAction } from "react";

interface PropsPaymentBtn {
  setAbrirPagamento: Dispatch<SetStateAction<boolean>>;
}
export default function PaymentBtn({ setAbrirPagamento }: PropsPaymentBtn) {
  return (
    <>
      <div className="bg-primary flex justify-center rounded-lg text-white text-xs sm:text-sm font-bold h-8 sm:h-7 w-full">
        <button onClick={() => setAbrirPagamento(true)}>Enviar Mensagem</button>
      </div>
    </>
  );
}
