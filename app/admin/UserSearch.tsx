"use client";

import CreateUserBtn from "@/components/CreateUserBtn";
import Search from "@/components/Search";
import UserCard from "@/components/UserCard";
import { useState } from "react";

export default function UserSearch() {
  const [showManager, setShowManager] = useState(false);
  return (
    <>
      <div className="flex flex-row h-8 w-full mb-4">
        <button
          className="w-36 text-left font-bold"
          onClick={() => {
            setShowManager(!showManager);
          }}
        >
          {showManager ? "Managers" : "Users"}
        </button>
        <Search className="w-full h-full" />
        {showManager && <CreateUserBtn className="h-8 w-72 hidden sm:block" />}
      </div>
      {showManager && <CreateUserBtn className="h-8 w-full block sm:hidden" />}
      <div className="w-full flex flex-row flex-wrap justify-around">
        {showManager ? (
          <>
            <UserCard
              status={true}
              dataCadastro="29/10/2988"
              temGerente={false}
              nome="Nome Manager"
              quantidadeMensagens={0}
            />
            <UserCard
              status={true}
              dataCadastro="29/10/2988"
              temGerente={false}
              nome="Nome Manager"
              quantidadeMensagens={10}
            />
            <UserCard
              status={true}
              dataCadastro="29/10/2988"
              temGerente={false}
              nome="Nome Manager"
              quantidadeMensagens={0}
            />
            <UserCard
              status={true}
              dataCadastro="29/10/2988"
              temGerente={false}
              nome="Nome Manager"
              quantidadeMensagens={10}
            />
            <UserCard
              status={true}
              dataCadastro="29/10/2988"
              temGerente={false}
              nome="Nome Manager"
              quantidadeMensagens={0}
            />
            <UserCard
              status={true}
              dataCadastro="29/10/2988"
              temGerente={false}
              nome="Nome Manager"
              quantidadeMensagens={10}
            />
          </>
        ) : (
          <>
            <UserCard
              status={true}
              dataCadastro="29/10/2988"
              temGerente={true}
              agenteResponsavel="Cleiton"
              nome="Nome User"
              quantidadeMensagens={0}
            />
            <UserCard
              status={true}
              dataCadastro="29/10/2988"
              temGerente={true}
              agenteResponsavel="Cleiton"
              nome="Nome User"
              quantidadeMensagens={10}
            />
            <UserCard
              status={true}
              dataCadastro="29/10/2988"
              temGerente={true}
              agenteResponsavel="Cleiton"
              nome="Nome User"
              quantidadeMensagens={0}
            />
            <UserCard
              status={true}
              dataCadastro="29/10/2988"
              temGerente={true}
              agenteResponsavel="Cleiton"
              nome="Nome User"
              quantidadeMensagens={10}
            />
            <UserCard
              status={true}
              dataCadastro="29/10/2988"
              temGerente={true}
              agenteResponsavel="Cleiton"
              nome="Nome User"
              quantidadeMensagens={0}
            />
            <UserCard
              status={true}
              dataCadastro="29/10/2988"
              temGerente={true}
              agenteResponsavel="Cleiton"
              nome="Nome User"
              quantidadeMensagens={10}
            />
          </>
        )}
      </div>
    </>
  );
}
