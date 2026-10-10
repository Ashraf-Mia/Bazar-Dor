import { IMarketItem } from "@/app/types/IMarketItem";
import baseUrl from "@/services/baseUrl";
import { notFound } from "next/navigation";
import SortableItems from "./SortableItems";

const getCategoryItem = async (categoryId: string) => {
  const res = await fetch(
    `${baseUrl}/api/bazardor/products?category=${categoryId}`,
    { cache: "force-cache" },
  );
  if (!res.ok) {
    notFound();
  }
  const data = await res.json();
  return data;
};

const CategoryContent = async ({ categoryId }: { categoryId: string }) => {
  const categoryItem: IMarketItem[] = await getCategoryItem(categoryId);
  if (!Array.isArray(categoryItem) || categoryItem.length === 0) {
    notFound();
  }
  const categoryIcon = categoryItem[0]?.categoryIcon;
  const categoryNameBn = categoryItem[0]?.categoryNameBn;

  return (
    <div className="container mx-auto px-4">
      <div className="flex gap-3 items-center p-3 sm:p-4  bg-base-100 border border-base-300 rounded-2xl ">
        <span className="text-3xl">{categoryIcon}</span>

        <div>
          <h2 className="text-xl font-semibold sm:text-2xl ">
            {categoryNameBn}
          </h2>
          <p className=" text-sm text-base-content sm:text-base ">
            {categoryItem.length}টি পণ্যের আজকের দাম ও পরিবর্তন{" "}
          </p>
        </div>
      </div>
      <SortableItems items={categoryItem} />
    </div>
  );
};

export default CategoryContent;
