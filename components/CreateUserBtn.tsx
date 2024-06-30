interface PropsCreateUserBtn {
  className?: string;
}

export default function CreateUserBtn({
  className = "h-8 w-full",
}: PropsCreateUserBtn) {
  return (
    <>
      <button
        className={`${className} bg-light-green text-center text-white font-bold max-w-3xl shadow-xl rounded-2xl`}
      >
        Criar novo usuário
      </button>
    </>
  );
}
