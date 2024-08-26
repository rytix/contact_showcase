"use client";

import Card from "@/components/Card";
import PaymentModal from "@/components/PaymentModal";
import Preview from "@/components/Preview";
import Search from "@/components/Search";
import { Dialog, DialogBody } from "@material-tailwind/react";
import { useState } from "react";

type UserData = {
  id: string;
  images: string[];
  video?: string;
  name: string;
} | null;

export default function Content({
  allUsersRandom6,
  allUsersRandom,
}: {
  allUsersRandom6: UserData[] | undefined;
  allUsersRandom: UserData[] | undefined;
}) {
  const [selectedUser, setSelectedUser] = useState<UserData>(null);
  return (
    <>
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
            if (!user) {
              return null;
            }
            return (
              <Card
                key={user.id ?? index}
                cardUser={{
                  id: user.id,
                  images: user?.images || [],
                  name: user.name,
                  video: user.video,
                }}
                setUserData={setSelectedUser}
              />
            );
          })}
        </div>
      </div>
      <Dialog
        open={selectedUser ? true : false}
        handler={() => setSelectedUser(null)}
        size="lg"
        placeholder={undefined}
        onPointerEnterCapture={() => {}}
        onPointerLeaveCapture={() => {}}
      >
        <DialogBody
          className="h-[40rem] sm:h-[44rem] md:h-[48rem] xl:h-[52rem]"
          placeholder={undefined}
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
        >
          {selectedUser && <PaymentModal userData={selectedUser} />}
        </DialogBody>
      </Dialog>
    </>
  );
}
