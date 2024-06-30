interface PropsPeriodBtn {
  className?: string;
}
export default function PeriodBtn({ className = "w-44" }: PropsPeriodBtn) {
  return (
    <>
      <button
        className={`bg-primary text-white text-sm font-semibold shadow-xl rounded-xl h-7 ${className}`}
      >
        12/06/2024
      </button>
    </>
  );
}
