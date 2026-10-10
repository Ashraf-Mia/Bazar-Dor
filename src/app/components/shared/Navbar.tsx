import Image from "next/image";
import Link from "next/link";
import NavLinks from "../NavLinks";
import CurrentDate from "../CurrentDate";
import { Suspense } from "react";
import UserInfo from "../UserInfo";

const Navbar = () => {
  return (
    <div className=" container mx-auto px-4">
      <div className="  flex items-center justify-between gap-2 py-3 sm:py-4 ">
        <div className=" flex min-w-0 items-center gap-2 sm:gap-3">
          <Link className=" shrink-0 bg-[#05893e] p-1 rounded-2xl" href="/">
            {" "}
            <Image
              src="/logo-icon.png"
              alt="logo-icon"
              width={40}
              height={40}
              className="h-9 w-9 sm:h-10 sm:w-10"
            />
          </Link>
          <div>
            <h2 className=" text-lg sm:text-2xl font-bold">বাজার দর</h2>

            <CurrentDate />
          </div>
        </div>

        <UserInfo />
      </div>
      <div className=" overflow-x-auto border-y border-base-300 bg-base-100 py-2">
        <Suspense fallback={<div>Loading...</div>}>
          <NavLinks />
        </Suspense>
      </div>
    </div>
  );
};

export default Navbar;
