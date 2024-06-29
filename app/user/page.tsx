import LargePreview from "@/components/LargePreview";
import MessageCard from "@/components/MessageCard";
import PeriodBtn from "@/components/PeriodBtn";
import PlusBtn from "@/components/PlusBtn";
import UserInfo from "@/components/UserInfo";

export default function Home() {
  return (
    <main className="flex justify-center font-montserrat">
      <div className="flex flex-col m-5 max-w-3xl">
        <div className="flex justify-center">
          <UserInfo status={true} dataCadastro="10/10/2024" />
        </div>
        <div className="flex flex-row flex-wrap justify-center md:justify-between">
          <LargePreview />
          <LargePreview />
          <PlusBtn canSendVideo={true} />
        </div>
        <div className="flex justify-center mt-10 mb-10">
          <div className="flex flex-col w-82">
            <p className="text-center text-md font-thin mb-3">
              Pesquisar período:
            </p>
            <div className="flex flex-row justify-between">
              <PeriodBtn />
              <PeriodBtn />
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <MessageCard />
        </div>
      </div>
    </main>
  );
}
