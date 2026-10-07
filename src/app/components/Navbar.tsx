"use client";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const date = new Date().toLocaleDateString("bn-BD", {
    dateStyle: "full",
  });

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
            <span className="">{date}</span>
          </div>
        </div>

        <div className=" flex gap-2">
          <button className="btn btn-success">সাইন ইন</button>
          <button className="btn btn-outline">সাইন আপ</button>
        </div>
      </div>
      <h2 className="bg-base-100 border-y border-base-300 py-2">
        ক্যাটাগরি মেনু
      </h2>
    </div>
  );
};

export default Navbar;
