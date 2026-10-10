import { IMarketItem } from "@/app/types/IMarketItem";
import baseUrl from "@/services/baseUrl";
import { notFound } from "next/navigation";
import SortableItems from "./SortableItems";
import { toBn } from "@/app/utils/bangla";
import Link from "next/link";

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
  if (!Array.isArray(categoryItem)) {
    notFound();
  }

  if (categoryItem.length === 0) {
    return (
      <div className=" container mx-auto px-4">
        <div className=" flex flex-col items-center gap-3 rounded-2xl border border-base-300 bg-base-100 px-4 py-12 text-center sm:py-16 ">
          <h2 className=" text-xl font-semibold sm:text-2xl">
            কোন পণ্য পাওয়া যায়নি
          </h2>
          <p className=" text-sm text-base-content/70 sm:text-base">
            {" "}
            এই ক্যটাগরিতে এখন কোন পন্য নেই। অন্য ক্যটাগরি দেখুন বা হোম পেজে ফিরে
            যান।
          </p>
          <Link href="/" className=" btn btn-success mt-2">
            ← হোম পেজে ফিরে যান
          </Link>
        </div>
      </div>
    );
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
            {toBn(categoryItem.length)}টি পণ্যের আজকের দাম ও পরিবর্তন{" "}
          </p>
        </div>
      </div>
      <SortableItems items={categoryItem} />
    </div>
  );
};

export default CategoryContent;
