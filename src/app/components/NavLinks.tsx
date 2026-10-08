import Link from "next/link";
import React from "react";

interface ICategories {
  id: string;
  slug: string;
  nameBn: string;
  icon: string;
}

const NavLinks = async () => {
  const res = await fetch(
    // "https://api.api-store.workers.dev/api/bazardor/categories",
    "https://api.abcz.workers.dev/api/bazardor/categories",
  );
  const data: ICategories[] = await res.json();
  //   console.log("data form", data);

  return (
    <div className="flex gap-8 ">
      {data.map((d, i) => (
        <Link href={`/category/${d.slug}`} className="flex" key={i}>
          <span>{d.icon}</span>
          <p>{d.nameBn}</p>
        </Link>
      ))}
    </div>
  );
};

export default NavLinks;
