"use client";

import { signOut, updateUser, useSession } from "@/lib/auth-client";
// import { updateUser } from "better-auth/api";

import Image from "next/image";
// import Link from "next/link";
import { useState } from "react";
import { toast } from "react-toastify";

const ProfilePage = () => {
  const { data: session } = useSession();
  const user = session?.user;

  const [name, setName] = useState("");

  const handleUpdate = async () => {
    if (name.trim() === "") {
      alert("আগে নাম লিখুন");
      return;
    }

    const { error } = await updateUser({ name: name });

    if (error) {
      alert("নাম আপডেট করা যায়নি");
    } else {
      toast.success("সফলভাবে নাম আপডেট হয়েছে");
      setName("");
    }
  };

  if (!user) {
    return null;
  }
  return (
    <div className=" mx-auto max-w-xl space-y-4 p-4">
      <div>
        <h1>আমার প্রোফাইল</h1>
        <p className=" text-sm">আপনার প্রোফাইলের তথ্য এখানে দেখুন।</p>
      </div>

      <div className=" flex items-center justify-between rounded-3xl border border-base-300 bg-base-100 p-4">
        <div className="flex items-center gap-4">
          {user.image ? (
            <Image
              alt={user.name}
              src={user.image}
              width={56}
              height={56}
              className="h-14 w-14 rounded-2xl object-cover"
            />
          ) : (
            <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-base-300 text-xl font-bold">
              {user.name.charAt(0).toUpperCase()}
            </span>
          )}

          <div>
            <p className="text-lg font-semibold">{user.name}</p>
            <p className="text-sm text-gray-600">{user.email}</p>
          </div>
        </div>
        <button
          onClick={() => signOut()}
          className=" btn btn-outline btn-error btn-sm"
        >
          ↩ সাইন আউট
        </button>
      </div>

      <div className=" rounded-3xl border border-base-300 bg-base-100 p-5">
        <h2 className=" text-lg font-semibold">তথ্য</h2>
        <p className=" mt-4 text-sm">নাম</p>
        <input
          type="text"
          value={name}
          placeholder={user.name}
          onChange={(e) => setName(e.target.value)}
          className="input input-bordered mt-1 w-full"
        />
        <button onClick={handleUpdate} className=" btn btn-success mt-3 w-full">
          আপডেট
        </button>
      </div>
    </div>
  );
};

export default ProfilePage;
