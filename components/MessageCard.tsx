export default function MessageCard() {
  return (
    <>
      <div className="flex flex-col sm:flex-row shadow-xl rounded-3xl border-2 border-solid border-gray-300 h-48 w-full mb-5">
        <div className="flex flex-col justify-center items-center h-full w-full sm:items-baseline sm:w-2/5 md:1/5 ml-2">
          <h1 className="font-bold text-xl">Nome da Pessoa</h1>
          <h2 className="font-medium text-lg">São Paulo, SP</h2>
        </div>
        <div className="h-full w-full sm:w-3/5 md:w-4/5 text-xs md:text-sm p-2 text-justify">
          <p className="mb-2">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            eum odit, consequatur recusandae tenetur rem culpa aliquid quae,
            perspiciatis dolore nostrum dolorum, maxime impedit. Dolores ab
            dolore laboriosam labore ipsum!
          </p>
          <p>Informações de Contato:</p>
          <p>Email:</p>
          <p>Celular:</p>
        </div>
      </div>
    </>
  );
}
