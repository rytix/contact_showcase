import { getUserModel, IUser } from "@/models/User";
import Content from "./Content";

type UserData = {
  id: string;
  images: string[];
  video?: string;
  name: string;
} | null;

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
      <Content
        allUsersRandom={allUsersRandom?.map((user) => ({
          id: user.id,
          images: user.images || [],
          name: user.name,
          video: user.video,
        }))}
        allUsersRandom6={allUsersRandom6?.map((user) => ({
          id: user.id,
          images: user.images || [],
          name: user.name,
          video: user.video,
        }))}
      />
    </main>
  );
}
