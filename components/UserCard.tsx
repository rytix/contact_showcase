import DisableUserBtn from "./DisableUserBtn";
import PeriodBtn from "./PeriodBtn";
import SeeProfileBtn from "./SeeProfileBtn";
import Image from "next/image";

interface PropsUserCard {
  status: boolean;
  dataCadastro?: string;
  temGerente: boolean;
  agenteResponsavel?: string;
  nome: string;
  quantidadeMensagens: number;
}

export default function UserCard({
  status,
  dataCadastro,
  temGerente,
  agenteResponsavel,
  nome,
  quantidadeMensagens,
}: PropsUserCard) {
  return (
    <>
      <div className="shadow-xl rounded-md">
        <div className="flex flex-col h-96 w-72 sm:w-64 mt-5">
          <div className="order-1 h-2/5 flex justify-center">
            <Image
              src="https://picsum.photos/200/200"
              alt="avatar photo"
              className="size-36 rounded-full shadow-xl"
            />
          </div>
          <div className="flex flex-col order-2 h-3/5 pl-5 pr-5">
            <div className="flex flex-col h-1/3 w-full">
              <h1 className="font-bold text-lg">{nome}</h1>
              {temGerente && (
                <>
                  <h2 className="font-thin text-sm">
                    Agente: {agenteResponsavel}
                  </h2>
                </>
              )}
              <h3 className="font-thin text-sm">
                Status: {status ? `Ativa desde ${dataCadastro}` : "Desativado"}
              </h3>
            </div>
            <div className="flex flex-col h-28 w-full">
              <h1 className="font-thin text-sm mb-2">Pesquisar período:</h1>
              <div className="flex flex-row justify-around">
                <PeriodBtn className="w-24" />
                <PeriodBtn className="w-24" />
              </div>
              <h1 className="font-thin text-sm mt-2">
                {quantidadeMensagens} Mensagens
              </h1>
              <h2 className="font-thin text-sm mt-2">
                R$Preço * No de Mensagens
              </h2>
            </div>
            <div className="flex flex-row h-10 items-center justify-around">
              <SeeProfileBtn />
              <DisableUserBtn className="w-24" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
