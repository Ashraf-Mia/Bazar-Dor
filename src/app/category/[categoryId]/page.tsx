const getCategoryItem = async (categoryId) => {
  const res = await fetch(
    `https://api.abcz.workers.dev/api/bazardor/products?category=${categoryId}`,
  );
  const data = await res.json();
  return data;
};

const CategoryItem = async ({ params }) => {
  const { categoryId } = await params;
  console.log(categoryId);

  const categoryItem = await getCategoryItem(categoryId);
  console.log(categoryItem);

  return <div>product of a category..</div>;
};

export default CategoryItem;
