import { findUserById, getCurrentUser, hasAccess } from "@/libs/UserService";
import UserSearch from "./UserSearch";
import { redirect } from "next/navigation";

export default async function Home({ params }: { params: { id: string } }) {
  const currentUser = await getCurrentUser();
  const idUser = await findUserById(params.id);
  if (!hasAccess(currentUser, idUser, "ADMIN")) {
    redirect("/");
  }

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
