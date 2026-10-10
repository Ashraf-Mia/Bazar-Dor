import Link from "next/link";
import CurrentDate from "./CurrentDate";
import Image from "next/image";

const Banner = () => {
  return (
    <div className=" flex flex-col items-center justify-between container mx-auto bg-base-100 border rounded-2xl border-base-300 py-1 my-5 md:flex-row ">
      <div className=" p-4">
        <span className=" text-[#05893e] bg-[#e1f5eb] p-1.5 rounded-2xl ">
          <CurrentDate />
        </span>
        <h2 className=" text-2xl font-bold pt-3 sm:text-3xl md:text-4xl">
          আজকের বাজারের দাম এক নজরে
        </h2>
        <p className="py-4 text-[#1D271F] text-[16px] sm:py-6">
          চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক
          বিস্তারিত, গড়, সর্বনিম্ন-সর্বাধিক <br className=" hidden md:block" />{" "}
          এবং দামের পরিবর্তন এক জায়গায়।
        </p>

        <a href="#all-items" className="btn">
          সব পণ্য দেখুন
        </a>
      </div>
      <Image
        src={"/bazar-hero.png"}
        height={263}
        width={315}
        alt="hero-image"
        loading="eager"
        className=" h-auto w-56 pb-4 sm:w-64 md:w-78.75 md:pb-0"
      ></Image>
    </div>
  );
};

export default Banner;
