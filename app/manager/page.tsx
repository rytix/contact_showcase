import PeriodBtn from "@/components/PeriodBtn";
import ManagerInfo from "@/components/ManagerInfo";
import CreateUserBtn from "@/components/CreateUserBtn";
import Search from "@/components/Search";
import MessageCard from "@/components/MessageCard";
import UserCard from "@/components/UserCard";

export default function Home() {
  return (
    <main className="flex justify-center font-montserrat">
      <div className="flex flex-col m-5 w-full max-w-3xl">
        <div className="flex justify-center">
          <ManagerInfo
            status={true}
            dataCadastro="10/10/2024"
            quantidadeUsuarios={10}
          />
        </div>
        <div className="flex justify-center mt-10 mb-4 w-full border-2 border-solid border-gray-300 rounded-3xl shadow-xl">
          <div className="flex flex-col w-82 m-3">
            <p className="text-center text-md font-thin mb-3">
              Pesquisar período:
            </p>
            <div className="flex flex-row justify-between">
              <PeriodBtn />
              <PeriodBtn />
            </div>
            <h1 className="text-center font-thin mt-3">182 Mensagens</h1>
            <h1 className="text-center font-thin mt-3">
              R$Preço * No Mensagens
            </h1>
          </div>
        </div>
        <div className="w-full mb-4">
          <CreateUserBtn />
        </div>
        <Search />
        <div className="flex flex-row flex-wrap justify-evenly">
          <UserCard status={true} dataCadastro="29/10/2988" />
          <UserCard status={true} dataCadastro="29/10/2988" />
          <UserCard status={false} dataCadastro="29/10/2988" />
          <UserCard status={true} dataCadastro="29/10/2988" />
          <UserCard status={true} dataCadastro="29/10/2988" />
          <UserCard status={false} dataCadastro="29/10/2988" />
        </div>
      </div>
    </main>
  );
}
