import Link from "next/link";
import React from "react";

const notFound = () => {
  return (
    <div className=" flex flex-col justify-center items-center min-h-screen">
      <span className="text-[4rem] font-bold leading-none text-green-600 sm:text-[7rem]">
        🧺
      </span>
      <h2 className="mt-4 text-2xl font-bold leading-snug text-slate-900 sm:text-3xl">
        পাতাটি খুঁজে পাওয়া যায়নি
      </h2>
      <p className="mx-auto mt-4 mb-6  text-lg  text-slate-600">
        আপনি যে পণ্য বা পাতাটি খুঁজছেন সেটি সরানো হয়েছে বা কখনো ছিল না।
      </p>
      <Link
        href="/"
        className="w-full sm:w-auto rounded-md border border-slate-300 px-6 py-3 text-[20px] font-medium text-slate-700 hover:bg-slate-50"
      >
        হোম পেজে যান
      </Link>
    </div>
  );
};

export default notFound;
