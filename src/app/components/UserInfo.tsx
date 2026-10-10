"use client";
import { signOut, useSession } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const UserInfo = () => {
  const { data: session } = useSession();
  const user = session?.user;

  const [open, setOpen] = useState(false);
  return (
    <div>
      {user ? (
        <div className=" relative">
          <button
            className=" flex items-center gap-2"
            onClick={() => setOpen(!open)}
          >
            {user.image ? (
              <Image
                alt={user.name}
                src={user.image}
                width={40}
                height={40}
                className="h-10 w-10 rounded-xl object-cover"
              ></Image>
            ) : (
              <span className=" flex h-10 w-10 items-center justify-center rounded-xl bg-base-300 font-bold">
                {user.name.charAt(0).toUpperCase()}
              </span>
            )}
            <span className=" font-medium">{user.name}</span>
            <span className=" text-2xl">▾</span>
          </button>
          {open && (
            <>
              <div
                className=" fixed inset-0 z-40"
                onClick={() => setOpen(false)}
              ></div>
              <div className=" absolute right-0 top-full z-50 mt-3 w-64 rounded-2xl border border-base-300 bg-base-100 p-4 shadow-xl">
                <p className=" font-bold">{user.name}</p>
                <p className=" text-sm text-base-content/60">{user.email}</p>
                <div className=" mt-4 flex flex-col gap-3 text-sm">
                  <Link href="/profile" onClick={() => setOpen(false)}>
                    👤 আমার প্রোফাইল
                  </Link>
                  <button
                    className=" text-left text-red-600 cursor-pointer"
                    onClick={() => {
                      setOpen(false);
                      signOut();
                    }}
                  >
                    ↩ সাইন আউট
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      ) : (
        <div className=" flex gap-2">
          <Link href="/sign-in">
            <button className="btn btn-outline">সাইন ইন</button>
          </Link>
          <Link href="/sign-up">
            <button className="btn btn-success">সাইন আপ</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default UserInfo;
