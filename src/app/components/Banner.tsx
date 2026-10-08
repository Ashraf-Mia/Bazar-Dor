import React from "react";
import CurrentDate from "./CurrentDate";
import Image from "next/image";

const Banner = () => {
  return (
    <div className="flex justify-between container mx-auto bg-base-100 border rounded-2xl border-base-300 py-1 my-5">
      <div className=" p-4">
        <span className=" text-[#05893e] bg-[#e1f5eb] p-1.5 rounded-2xl ">
          <CurrentDate />
        </span>
        <h2 className=" text-4xl font-bold pt-3">আজকের বাজারের দাম এক নজরে</h2>
        <p className="py-6 text-[#1D271F] text-[16px]">
          চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক
          বিস্তারিত, গড়, সর্বনিম্ন-সর্বাধিক <br /> এবং দামের পরিবর্তন এক
          জায়গায়।
        </p>
        <button className="btn">সব পণ্য দেখুন</button>
      </div>
      <Image src={"/bazar-hero.png"} height={263} width={315} alt=""></Image>
    </div>
  );
};

export default Banner;
