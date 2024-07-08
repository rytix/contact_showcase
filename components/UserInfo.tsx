import EditProfileBtn from "./EditProfileBtn";
import PeriodBtn from "./PeriodBtn";
import Image from "next/image";

interface PropsUserInfo {
  status: boolean;
  dataCadastro: string;
}
export default function UserInfo({ status, dataCadastro }: PropsUserInfo) {
  return (
    <>
      <div className="shadow-xl rounded-3xl border-2 border-solid border-gray-300 sm:h-80 h-82 w-full">
        <div className="flex flex-col sm:flex-row sm:h-40 h-full w-full mt-5 p-2 md:p-0">
          <div className="order-1 flex flex-col justify-center items-center h-1/3 w-full sm:h-full sm:w-1/3 sm:mt-5">
            <Image
              src="https://picsum.photos/200/200"
              alt="avatar photo"
              className="size-36 rounded-full shadow-xl"
            />
          </div>
          <div className="order-2 h-2/3 w-full sm:h-full sm:w-82 sm:justify-normal flex flex-col justify-">
            <h1 className="text-3xl font-bold font-montserrat">Nome User</h1>
            <h2 className="font-thin text-lg">São Paulo</h2>
            <h3 className="font-thin text-sm">
              Status: {status ? `Ativa desde ${dataCadastro}` : "Desativado"}
            </h3>
            <div className="mt-5 mb-5">
              <EditProfileBtn />
            </div>
            <p className="text-center text-md font-thin mb-3">
              Pesquisar período:
            </p>
            <div className="flex flex-row justify-around">
              <PeriodBtn />
              <PeriodBtn />
            </div>
            <p className="text-center text-md font-thin mt-2">172 Mensagens</p>
            <p className="text-center text-md font-thin mt-2">
              R$Preço * No de msg
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
