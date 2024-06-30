import EditProfileBtn from "./EditProfileBtn";
import PixBtn from "./PixBtn";

interface PropsManagerInfo {
  status: boolean;
  dataCadastro?: string;
  quantidadeUsuarios: number;
}

export default function ManagerInfo({
  status,
  dataCadastro,
  quantidadeUsuarios,
}: PropsManagerInfo) {
  return (
    <>
      <div className="shadow-xl rounded-3xl border-2 border-solid border-gray-300 sm:h-80 h-82 w-full">
        <div className="flex flex-col sm:flex-row sm:h-40 h-full w-full mt-5 p-2 md:p-0">
          <div className="order-1 flex flex-col justify-center items-center h-1/3 w-full mb-2 sm:h-full sm:w-1/3 sm:mt-5">
            <img
              src="https://picsum.photos/200/200"
              alt="avatar photo"
              className="size-36 rounded-full shadow-xl"
            />
          </div>
          <div className="order-2 h-2/3 w-full sm:h-full sm:w-82 sm:justify-normal flex flex-col justify-">
            <h1 className="text-3xl font-bold font-montserrat">Nome Manager</h1>
            <h2 className="font-thin text-lg">São Paulo, SP</h2>
            <h3 className="font-thin text-sm mt-1">
              Status: {status ? `Ativa desde ${dataCadastro}` : "Desativado"}
            </h3>
            <h3 className="font-thin text-sm mt-3">
              Responsável por {quantidadeUsuarios} vitrines.
            </h3>
            <div className="mt-5">
              <PixBtn />
            </div>
            <div className="mt-2">
              <EditProfileBtn />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
