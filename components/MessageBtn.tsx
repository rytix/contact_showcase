interface PropsMessageBtn {
  className?: string;
}
export default function MessageBtn({ className }: PropsMessageBtn) {
  return (
    <>
      <div className={className}>
        <div className="bg-primary flex justify-center rounded-lg text-xs h-5">
          <button>
            <b>Enviar Mensagem</b>
          </button>
        </div>
      </div>
    </>
  );
}
