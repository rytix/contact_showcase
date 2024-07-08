import Card from "@/components/Card";
import Preview from "@/components/Preview";
import Search from "@/components/Search";
import { getUserModel, IUser } from "@/models/User";

export default async function Home() {
  const allUsersRandom = await (async () => {
    try {
      const count = await getUserModel().countDocuments();
      const randomDocuments = await getUserModel().aggregate([
        { $match: { type: "USER" } },
        { $sample: { size: count } },
      ]);
      return randomDocuments as IUser[];
    } catch (error) {
      console.error("Error retrieving random documents:", error);
    }
  })();

  const allUsersRandom6 = await (async () => {
    try {
      let count = await getUserModel().countDocuments();
      count = count > 6 ? 6 : count;
      const randomDocuments = await getUserModel().aggregate([
        { $match: { type: "USER" } },
        { $sample: { size: count } },
      ]);
      return randomDocuments as IUser[];
    } catch (error) {
      console.error("Error retrieving random documents:", error);
    }
  })();

  return (
    <main className="flex justify-center">
      <div className="flex flex-col m-5 max-w-4xl">
        <Search />
        <div className="flex flex-row justify-center mt-5">
          {allUsersRandom6?.map((user, index) => {
            if (user?.images) {
              return index < 4 ? (
                <div key={user.id ?? index}>
                  <Preview imageUrl={user.images[0]} />
                </div>
              ) : (
                <div key={user.id ?? index} className="hidden sm:block">
                  <Preview imageUrl={user.images[0]} />
                </div>
              );
            }
          })}
        </div>
        <h1 className="flex justify-center mt-5 text-sm">
          <b>Com quem você quer conversar hoje?</b>
        </h1>
        <div className="flex flex-row flex-wrap justify-around text-white">
          {allUsersRandom?.map((user, index) => {
            return <Card key={user.id ?? index} imagesUrl={user.images} />;
          })}
        </div>
      </div>
    </main>
  );
}
