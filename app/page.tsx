import Card from "@/components/Card";
import Preview from "@/components/Preview";
import Search from "@/components/Search";

export default function Home() {
  return (
    <main className="flex justify-center">
      <div className="flex flex-col m-5 max-w-4xl">
        <Search />
        <div className="flex flex-row justify-center mt-5">
          <Preview />
          <Preview />
          <Preview />
          <Preview />
          <div className="hidden sm:block">
            <Preview />
          </div>
          <div className="hidden sm:block">
            <Preview />
          </div>
        </div>
        <h1 className="flex justify-center mt-5 text-sm">
          <b>Com quem você quer conversar hoje?</b>
        </h1>
        <div className="flex flex-row flex-wrap justify-around text-white">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </main>
  );
}
