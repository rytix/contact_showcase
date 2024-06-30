import UserSearch from "./UserSearch";

export default function Home() {
  return (
    <main className="flex justify-center font-montserrat">
      <div className="flex flex-col m-5 w-full max-w-3xl">
        <div className="mt-10 mb-4 w-full">
          <h1 className="font-bold mb-5">Olá, [Usuario Admin]</h1>
          <UserSearch />
        </div>
      </div>
    </main>
  );
}
