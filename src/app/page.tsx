import baseUrl from "@/services/baseUrl";
import Banner from "./components/Banner";

import ItemCard from "./components/shared/ItemCard";
import { IMarketItem } from "./types/IMarketItem";
import { toBn } from "./utils/bangla";

export default async function Home() {
  const res = await fetch(
    `${baseUrl}/api/bazardor/products`,

    { cache: "force-cache" },
  );
  const allItem: IMarketItem[] = await res.json();
  // console.log("data from card", allItem);

  const upItems = allItem
    .filter((item) => item.change.dir === "up")
    .sort((a, b) => b.change.pct - a.change.pct)
    .slice(0, 6);

  const downItems = allItem
    .filter((item) => item.change.dir === "down")
    .sort((a, b) => b.change.pct - a.change.pct)
    .slice(0, 6);

  return (
    <div className="container mx-auto px-4">
      <Banner />

      {upItems.length > 0 && (
        <section className=" pb-6 sm:pb-9">
          <h2 className=" pb-3 text-2xl font-bold sm:text-3xl">
            <span className=" mr-2 text-red-600 sm:mr-3">▲</span>
            আজ দাম বেড়েছে
          </h2>
          <div className=" grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
            {upItems.map((item) => (
              <ItemCard key={item.id} item={item} />
            ))}
          </div>
        </section>
      )}

      {downItems.length > 0 && (
        <section className=" pb-6 sm:pb-9">
          <h2 className=" pb-3 text-2xl font-bold sm:text-3xl">
            <span className=" mr-2 text-green-600 sm:mr-3">▼</span>
            আজ দাম কমেছে
          </h2>
          <div className=" grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
            {downItems.map((item) => (
              <ItemCard key={item.id} item={item} />
            ))}
          </div>
        </section>
      )}

      <section id="all-items" className=" scroll-mt-4">
        <h2 className=" text-2xl font-bold sm:text-3xl">সব পণ্য</h2>
        <p className=" text-sm text-gray-700 pb-2">
          মোট <span>{toBn(allItem.length)}</span> টি পণ্য দেখানো হচ্ছে
        </p>
        <div className=" grid grid-cols-1 gap-4 pb-9 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 ">
          {allItem.map((item) => (
            <ItemCard key={item.id} item={item} />
          ))}
        </div>
      </section>
    </div>
  );
}
