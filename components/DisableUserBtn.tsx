interface PropsDisableUserBtn {
  className: string;
}
export default function DisableUserBtn({
  className = "w-full",
}: PropsDisableUserBtn) {
  return (
    <>
      <button
        className={`h-5 ${className} bg-primary text-center text-white text-xs font-bold shadow-xl rounded-2xl`}
      >
        Desativar
      </button>
    </>
  );
}
