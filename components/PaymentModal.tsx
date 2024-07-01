import { FaCircleCheck } from "react-icons/fa6";
import LargePreview from "./LargePreview";
import PaymentBtn from "./PaymentBtn";
import { useState } from "react";

interface PropsPaymentModal {
  nome: string;
}
export default function PaymentModal({ nome }: PropsPaymentModal) {
  const [abrirPagamento, setAbrirPagamento] = useState(false);
  const [abrirSucesso, setAbrirSucesso] = useState(false);
  return (
    <div className="flex flex-row h-full w-full">
      <div className="order-1 flex flex-row flex-wrap justify-center 3xl:justify-between h-full w-1/2 md:w-2/3 overflow-scroll">
        <LargePreview className="h-64 w-full md:h-[22rem] md:w-80 lg:w-72" />
        <LargePreview className="h-64 w-full md:h-[22rem] md:w-80 lg:w-72" />
        <LargePreview className="h-64 w-full md:h-[22rem] md:w-80 lg:w-72" />
        <LargePreview className="h-64 w-full md:h-[22rem] md:w-80 lg:w-72" />
      </div>
      <div className="order-2 flex flex-col h-full w-1/2 md:w-1/3 p-5 sm:p-10 overflow-scroll">
        <div className="w-full flex flex-col justify-center items-center">
          <img
            src="https://picsum.photos/200/300"
            alt="img 1"
            className="size-24 sm:size-40 md:size-32 lg:size-40 object-cover rounded-full shadow-xl"
          />
          <h1 className="font-bold text-lg sm:text-xl md:text-3xl xl:text-4xl text-black mt-5">
            Claudia
          </h1>
          <h2 className="font-thin text-xs sm:text-sm md:text-md text-black">
            Sao Paulo, SP
          </h2>
        </div>
        {abrirPagamento ? (
          <>
            {abrirSucesso ? (
              <>
                <div className="flex flex-col justify-center items-center">
                  <h1 className="flex justify-center items-center h-8 w-full mb-10 bg-middle-green text-success font-bold text-xs md:text-md text-center rounded-xl shadow-xl mt-5">
                    Mensagem Enviada!
                  </h1>
                  <FaCircleCheck className="text-success size-20 lg:size-28" />
                </div>
              </>
            ) : (
              <>
                <div className="flex flex-col h-full w-full justify-center items-center">
                  <div className="flex flex-col h-full md:h-1/3 w-full justify-center items-center text-justify">
                    <h1 className="font-bold text-xl md:text-4xl text-black mb-2">
                      R$9,99
                    </h1>
                    <p className="font-thin text-xs text-gray-500">
                      Após o pagamento você poderá mandar sua mensagem
                      personalizada para {nome}
                    </p>
                  </div>
                  <div className="flex flex-col h-2/3 w-full">
                    <div className="flex flex-col h-72 w-full justify-center items-center lg:pb-5">
                      <h1 className="font-bold text-sm text-success mb-4">
                        Pagar com PIX
                      </h1>
                      <img
                        src="https://picsum.photos/200/200"
                        alt="img 1"
                        className="size-40 object-cover shadow-xl"
                      />
                    </div>
                    <div className="flex flex-col w-full">
                      <p className="text-gray-500 text-xs font-thin min-h-10 text-justify">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Nemo nobis facere minus voluptatibus aperiam, vero
                        eius quos culpa? Quas explicabo est deleniti quia amet
                        quod nisi veritatis incidunt libero laboriosam.
                      </p>
                      <button
                        className="text-black border-none font-bold text-md"
                        onClick={() => setAbrirSucesso(!abrirSucesso)}
                      >
                        Copiar Código
                      </button>
                    </div>
                  </div>
                </div>
              </>
            )}
          </>
        ) : (
          <>
            <div className="flex flex-grow w-full mt-5 mb-5">
              <textarea
                className="max-h-full w-full text-start resize-none text-sm sm:text-base text-white"
                placeholder={`Escrever para ${nome}`}
              />
            </div>
            <PaymentBtn setAbrirPagamento={setAbrirPagamento} />
          </>
        )}
      </div>
    </div>
  );
}
