import { IMarketItem } from "@/app/types/IMarketItem";
import { toBn } from "@/app/utils/bangla";

import React from "react";

const ItemDetails = async ({ params }: { params: { itemId: string } }) => {
  const { itemId } = await params;

  const res = await fetch(
    `https://api.abcz.workers.dev/api/bazardor/products/${itemId}`,
  );
  const data: IMarketItem = await res.json();
  console.log("data by id", data);

  return (
    <div>
      <h2>{data.nameBn}</h2>
      <p>{toBn(data.today)}</p>
    </div>
  );
};

export default ItemDetails;
