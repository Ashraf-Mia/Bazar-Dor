import Banner from "./components/Banner";
import ItemCard from "./components/shared/ItemCard";
import { IMarketItem } from "./types/IAllItem";

export default async function Home() {
  const res = await fetch(
    "https://api.api-store.workers.dev/api/bazardor/products",
  );
  const allItem: IMarketItem[] = await res.json();
  // console.log("data from card", allItem);

  return (
    <div className="container mx-auto">
      <Banner />

      <h2 className=" text-3xl font-bold">সব পণ্য</h2>
      <p className=" text-sm text-gray-700 pb-2">
        মোট <span>{allItem.length}</span> টি পণ্য দেখানো হচ্ছে
      </p>
      <div className=" grid grid-cols-3 gap-5 pb-9 ">
        {allItem.map((item) => (
          <ItemCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
