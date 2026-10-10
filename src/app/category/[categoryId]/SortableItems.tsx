"use client";
import ItemCard from "@/app/components/shared/ItemCard";
import { IMarketItem } from "@/app/types/IMarketItem";
import { toBn } from "@/app/utils/bangla";
import React, { useState } from "react";

const SortableItems = ({ items }: { items: IMarketItem[] }) => {
  const [sort, setSort] = useState("default");

  const sortedItems = [...items];

  if (sort === "low") {
    sortedItems.sort((a, b) => a.today - b.today);
  } else if (sort === "high") {
    sortedItems.sort((a, b) => b.today - a.today);
  }

  return (
    <div>
      <div className="my-4 flex items-center justify-end gap-3 rounded-2xl border border-base-300 bg-base-100 px-4 py-3 sm:my-6 sm:px-10 sm:py-4">
        <span className=" whitespace-nowrap text-sm text-[#8A92A0]">সাজান</span>
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="select select-sm sm:select-md w-auto "
        >
          <option value={"default"}>ডিফল্ট</option>
          <option value={"low"}>দাম: কম থেকে বেশি</option>
          <option value={"high"}>দাম: বেশি থেকে কম</option>
        </select>
      </div>
      <p className="pb-3">মোট {toBn(sortedItems.length)}টি পণ্য দেখানো হচ্ছে</p>
      <div className=" grid grid-cols-1 gap-4 pb-29 sm:grid-cols-2 lg:grid-cols-3">
        {sortedItems.map((item) => (
          <ItemCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default SortableItems;
