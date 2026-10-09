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
    <div className="container mx-auto">
      <Banner />

      {upItems.length > 0 && (
        <section className=" pb-9">
          <h2 className=" pb-3 text-3xl font-bold">
            <span className=" mr-3 text-red-600">▲</span>
            আজ দাম বেড়েছে
          </h2>
          <div className=" grid grid-cols-3 gap-5">
            {upItems.map((item) => (
              <ItemCard key={item.id} item={item} />
            ))}
          </div>
        </section>
      )}

      {downItems.length > 0 && (
        <section className=" pb-9">
          <h2 className=" pb-3 text-3xl font-bold">
            <span className=" mr-3 text-green-600">▼</span>
            আজ দাম কমেছে
          </h2>
          <div className=" grid grid-cols-3 gap-5">
            {downItems.map((item) => (
              <ItemCard key={item.id} item={item} />
            ))}
          </div>
        </section>
      )}

      <section>
        <h2 className=" text-3xl font-bold">সব পণ্য</h2>
        <p className=" text-sm text-gray-700 pb-2">
          মোট <span>{toBn(allItem.length)}</span> টি পণ্য দেখানো হচ্ছে
        </p>
        <div className=" grid grid-cols-3 gap-5 pb-9 ">
          {allItem.map((item) => (
            <ItemCard key={item.id} item={item} />
          ))}
        </div>
      </section>
    </div>
  );
}
