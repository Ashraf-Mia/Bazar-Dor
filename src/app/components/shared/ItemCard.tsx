import { IMarketItem } from "@/app/types/IAllItem";
import React from "react";
interface IAllItem {
  item: IMarketItem;
}
const ItemCard = async ({ item }: IAllItem) => {
  console.log("item", item);
  const isUp = item.change.dir === "up";
  const isZero = item.change.pct === 0 || item.change.dir === "flat";
  return (
    <div className="bg-base-100 border border-base-300  rounded-2xl flex flex-col justify-between p-5">
      <div className="flex gap-4 ">
        <span className="w-12 h-12 shrink-0 bg-base-200 rounded-2xl text-3xl flex items-center justify-center">
          {item.image}
        </span>

        <div>
          <h2 className="text-2xl font-semibold">{item.nameBn}</h2>
          <p className=" text-[16px] text-base-content ">প্রতি {item.unit} </p>
        </div>
      </div>

      <div className="flex items-end justify-between">
        <div>
          <p className=" text-[16px]">আজকের দাম</p>

          <h2 className=" text-3xl font-bold flex items-baseline gap-1">
            {item.today}
            <span className=" text-[16px] font-normal">টাকা</span>
          </h2>
        </div>
        <div
          className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full font-semibold ${isZero ? "bg-gray-100 text-gray-700" : isUp ? "bg-red-50 text-red-600" : "bg-green-50 text-green-600"}`}
        >
          <span>{isZero ? "-" : isUp ? "▲" : "▼"}</span>
          <span>{item.change.pct}%</span>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
