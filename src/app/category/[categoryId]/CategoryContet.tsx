import ItemCard from "@/app/components/shared/ItemCard";
import { IMarketItem } from "@/app/types/IMarketItem";

const getCategoryItem = async (categoryId: string) => {
  const res = await fetch(
    `https://api.abcz.workers.dev/api/bazardor/products?category=${categoryId}`,
    { cache: "force-cache" },
  );

  const data = await res.json();
  return data;
};

const CategoryContent = async ({ categoryId }: { categoryId: string }) => {
  const categoryItem: IMarketItem[] = await getCategoryItem(categoryId);

  const categoryIcon = categoryItem[0]?.categoryIcon;
  const categoryNameBn = categoryItem[0]?.categoryNameBn;

  return (
    <div className="container mx-auto">
      <div className="flex gap-3 items-center  bg-base-100 border border-base-300 rounded-2xl ">
        <span className="text-3xl">{categoryIcon}</span>

        <div>
          <h2 className="text-2xl font-semibold">{categoryNameBn}</h2>
          <p className=" text-[16px] text-base-content ">
            {categoryItem.length}টি পণ্যের আজকের দাম ও পরিবর্তন{" "}
          </p>
        </div>
      </div>
      <div className="bg-base-100 border border-base-300 rounded-2xl flex justify-end items-center gap-3 py-4 px-10 my-6">
        <h1 className=" whitespace-nowrap text-sm text-[#8A92A0]">সাজান</h1>
        <select
          // value={sortBy}
          // onChange={(e) =>
          //   setSortBy(e.target.value as "Duration" | "Calories" | "Rating")
          // }
          className="select"
        >
          <option value={"default"}>ডিফল্ট</option>
          <option value={"Duration"}>দাম: কম থেকে বেশি</option>
          <option value={"Calories"}>দাশ: বেশি থেকে কম</option>
        </select>
      </div>
      <p className="pb-3">মোট {categoryItem.length}টি পণ্য দেখানো হচ্ছে</p>
      <div className=" grid grid-cols-3 gap-4 pb-29">
        {categoryItem.map((item) => (
          <ItemCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default CategoryContent;
