import Link from "next/link";
import React from "react";

const notFound = () => {
  return (
    <div className=" flex flex-col justify-center items-center min-h-screen">
      <span className="text-[8rem] font-bold leading-none text-green-600 sm:text-[11rem]">
        404
      </span>
      <h2 className="mt-4 text-2xl font-bold leading-snug text-slate-900 sm:text-3xl">
        কাঙ্খিত প্রোডাক্ট খুজে পাওয়া যায় নি
      </h2>
      <p className="mx-auto mt-4 mb-6  text-lg  text-slate-600">
        আপনি যে পোডাক্ট খুজছেন সেটি মুছে ফেলা হয়েছে, অথবা লিংকটি ভুল।
      </p>
      <Link
        href="/"
        className="w-full sm:w-auto rounded-md border border-slate-300 px-6 py-3 text-[20px] font-medium text-slate-700 hover:bg-slate-50"
      >
        হোম পেজে ফিরে যান
      </Link>
    </div>
  );
};

export default notFound;
