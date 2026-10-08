import Image from "next/image";
import Link from "next/link";
import NavLinks from "./NavLinks";
import CurrentDate from "./CurrentDate";
import { Suspense } from "react";

const Navbar = () => {
  return (
    <div className=" container mx-auto">
      <div className="  justify-between py-4 flex ">
        <div className=" flex gap-3">
          <Link className=" bg-[#05893e] p-1 rounded-2xl" href="/">
            {" "}
            <Image
              src="/logo-icon.png"
              alt="logo-icon"
              width={40}
              height={40}
            />
          </Link>
          <div>
            <h2 className=" text-2xl font-bold">বাজার দর</h2>

            <CurrentDate />
          </div>
        </div>

        <div className=" flex gap-2">
          <button className="btn btn-success">সাইন ইন</button>
          <button className="btn btn-outline">সাইন আপ</button>
        </div>
      </div>
      <h2 className="bg-base-100 border-y border-base-300 py-2">
        <Suspense fallback={<div>Loading...</div>}>
          <NavLinks />
        </Suspense>
      </h2>
    </div>
  );
};

export default Navbar;
