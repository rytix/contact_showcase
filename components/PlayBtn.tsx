import { FaPlayCircle } from "react-icons/fa";

interface PropsPlayBtn {
  className?: string;
}

export default function PlayBtn({ className }: PropsPlayBtn) {
  return (
    <>
      <div className={className}>
        <button className="text-primary size-4">
          <FaPlayCircle />
        </button>
      </div>
    </>
  );
}
