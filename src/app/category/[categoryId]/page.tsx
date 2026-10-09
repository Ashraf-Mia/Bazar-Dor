import { Suspense } from "react";
import CategoryContent from "./CategoryContet";

interface PageProps {
  params: Promise<{
    categoryId: string;
  }>;
}

const CategoryItem = async ({ params }: PageProps) => {
  const { categoryId } = await params;

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CategoryContent categoryId={categoryId} />
    </Suspense>
  );
};

export default CategoryItem;
