import DisableUserBtn from "./DisableUserBtn";
import PeriodBtn from "./PeriodBtn";
import SeeProfileBtn from "./SeeProfileBtn";

interface PropsUserCard {
  status: boolean;
  dataCadastro?: string;
}

export default function UserCard({ status, dataCadastro }: PropsUserCard) {
  return (
    <>
      <div className="shadow-xl rounded-md">
        <div className="flex flex-col h-96 w-72 sm:w-64 mt-5">
          <div className="order-1 h-2/5 flex justify-center">
            <img
              src="https://picsum.photos/200/200"
              alt="avatar photo"
              className="size-36 rounded-full shadow-xl"
            />
          </div>
          <div className="flex flex-col order-2 h-3/5 pl-5 pr-5">
            <div className="flex flex-col h-1/3 w-full">
              <h1 className="font-bold text-lg">Nome User</h1>
              <h2 className="font-thin text-sm">Agente Responsavel</h2>
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
              <h1 className="font-thin text-sm mt-2">182 Mensagens</h1>
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
