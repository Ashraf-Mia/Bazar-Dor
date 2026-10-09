import MarqueeText from "react-marquee-text";
import { IMarketItem } from "../types/IMarketItem";
import Link from "next/link";
import { toBn, unitBn } from "../utils/bangla";

const Marquee = async () => {
  const res = await fetch(
    // "https://api.api-store.workers.dev/api/bazardor/products",
    "https://api.abcz.workers.dev/api/bazardor/products",
    { cache: "force-cache" },
  );
  const allItem: IMarketItem[] = await res.json();
  //   console.log("allitem form marquee", allItem);

  const fiterdItem = allItem.filter(
    (f) => f.change.pct !== 0 || f.change.dir !== "flat",
  );
  //   console.log("filtared item", fiterdItem);

  return (
    <div className="bg-base-100 border border-base-300 py-2 mb-4">
      <MarqueeText duration={15} direction="right">
        {fiterdItem.map((item) => (
          <Link
            href={`items/${item.id}`}
            key={item.id}
            className=" hover:underline"
          >
            <div className="flex " key={item.id}>
              <span>{item.categoryIcon}</span>
              <h2 className="pr-2">{item.nameBn}</h2>
              <p>
                {toBn(item.today)}টাকা/{unitBn(item.unit)}
              </p>
              <div
                className={`flex items-center gap-1.5  ${item.change.pct === 0 || item.change.dir === "flat" ? " text-gray-700" : item.change.dir === "up" ? " text-red-600" : " text-green-600"}`}
              >
                <span>
                  {item.change.pct === 0 || item.change.dir === "flat"
                    ? "-"
                    : item.change.dir === "up"
                      ? "▲"
                      : "▼"}
                </span>
                <span>{toBn(item.change.pct)}%</span>
              </div>
              <span className="pr-5"></span>
            </div>
          </Link>
        ))}
      </MarqueeText>
    </div>
  );
};

export default Marquee;
