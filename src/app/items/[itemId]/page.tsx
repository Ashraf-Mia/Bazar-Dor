import { IMarketItem } from "@/app/types/IMarketItem";
import { toBn, unitBn } from "@/app/utils/bangla";
import baseUrl from "@/services/baseUrl";
import Link from "next/link";
import { notFound } from "next/navigation";

import React from "react";

const ItemDetails = async ({ params }: { params: { itemId: string } }) => {
  const { itemId } = await params;

  const res = await fetch(`${baseUrl}/api/bazardor/products/${itemId}`);

  if (!res.ok) {
    notFound();
  }

  const data: IMarketItem = await res.json();
  // console.log("data by id", data);

  if (!data || !data.nameBn) {
    notFound();
  }
  const diff = data.today - data.yesterday;
  const treand = diff > 0 ? "বেড়েছে" : diff < 0 ? "কমেছে" : "অপরিবর্তিত";

  const markets = data.markets ?? [];
  const low = markets.length
    ? Math.min(...markets.map((m) => m.min))
    : data.today;
  const highst = markets.length
    ? Math.max(...markets.map((m) => m.max))
    : data.today;

  const rows = markets
    .map((m) => ({ ...m, avg: (m.min + m.max) / 2 }))
    .sort((a, b) => a.avg - b.avg);

  return (
    <div>
      <main className=" min-h-screen  bg-base-200 p-3 sm:p-6">
        <div className=" mx-auto max-w-5xl space-y-4">
          <nav className=" flex items-center gap-2 px-1 text-sm">
            <Link className=" text-blue-400" href="/">
              হোম
            </Link>
            <span>›</span>
            <span>{data.categoryNameBn}</span>
            <span>›</span>
            <span>{data.nameBn}</span>
          </nav>

          <section className=" flex flex-col gap-4 rounded-3xl border border-base-300 bg-base-100 p-5 sm:flex-row sm:items-center sm:justify-between">
            <div className=" flex items-center gap-4">
              <span className=" flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-base-200 text-3xl">
                {data.image}
              </span>
              <div>
                <h1 className=" text-2xl font-bold sm:text-3xl">
                  {data.nameBn}
                </h1>
                <p className=" mt-1 text-sm text-base-content/60">
                  প্রতি {unitBn(data.unit)} . {data.categoryNameBn}
                </p>
                <p>
                  গতকালের তুলনায় আজ {treand}{" "}
                  {diff !== 0 && <> . {toBn(Math.abs(diff))} টাকা</>}{" "}
                </p>
              </div>
            </div>
            <div className=" rounded-2xl bg-base-200 px-6 py-3 text-center sm:min-w-40">
              <p className=" text-xs text-base-content/60 ">আজকের দাম</p>
              <p className=" text-4xl font-bold">{toBn(data.today)}</p>
              <p className=" text-sm text-base-content/70">
                টাকা / {unitBn(data.unit)}
              </p>
              <div
                className={`mt-1 text-xs font-bold  ${data.change.pct === 0 || data.change.dir === "flat" ? " text-gray-700" : data.change.dir === "up" ? " text-red-600" : " text-green-600"}`}
              >
                <span>
                  {data.change.pct === 0 || data.change.dir === "flat"
                    ? "-"
                    : data.change.dir === "up"
                      ? "▲"
                      : "▼"}
                </span>
                <span>{toBn(data.change.pct)}%</span>
              </div>
            </div>
          </section>

          <section className=" rounded-3xl border border-base-300 bg-base-100 p-5">
            <h2 className=" text-[18px] font-bold">দামের সারসংক্ষেপ</h2>

            <div className=" mt-3 grid gap-3 sm:grid-cols-3">
              <div className=" rounded-2xl border border-base-300 px-4 py-3">
                <p className=" text-xs">সর্বনিম্ন দাম</p>
                <p className=" mt-1 text-xl font-bold text-green-600">
                  {toBn(low)} <span className=" text-sm">টাকা</span>
                </p>
                <p className=" mt-1 text-xs text-base-content/60 ">
                  সবচেয়ে কম দামের বাজার
                </p>
              </div>

              <div className=" rounded-2xl border border-base-300 px-4 py-3">
                <p className=" text-xs">সর্বাধিক দাম</p>
                <p className=" mt-1 text-xl font-bold text-green-600">
                  {toBn(highst)} <span className=" text-sm">টাকা</span>
                </p>
                <p className=" mt-1 text-xs text-base-content/60 ">
                  সবচেয়ে বেশি দামের বাজার
                </p>
              </div>

              <div className=" rounded-2xl border border-base-300 px-4 py-3">
                <p className=" text-xs">গড় দাম</p>
                <p className=" mt-1 text-xl font-bold text-green-600">
                  {toBn((highst + low) / 2)}{" "}
                  <span className=" text-sm">টাকা</span>
                </p>
                <p className=" mt-1 text-xs text-base-content/60 ">
                  প্রতি {unitBn(data.unit)} এর হিসেবে
                </p>
              </div>
            </div>

            <h2 className=" mt-6 text-[18px] font-bold">
              বাজার ভিত্তিক আজকের দাম
            </h2>
            {rows.length === 0 ? (
              <p>এই পণ্যের বাজার ভিত্তিক কোন তথ্য পাওয়া যায়নি।</p>
            ) : (
              <div className=" mt-3 overflow-x-auto rounded-2xl border border-base-300">
                <table className=" w-full min-w-160 text-sm">
                  <thead>
                    <tr className=" text-base-content/60">
                      <th className=" px-3 py-3 text-left font-medium">
                        বাজার
                      </th>
                      <th className=" px-3 py-3 text-left font-medium">
                        বিভাগ
                      </th>
                      <th className=" px-3 py-3 text-right font-medium">
                        সর্বনিম্ন
                      </th>
                      <th className=" px-3 py-3 text-right font-medium">
                        সর্বাধিক
                      </th>
                      <th className=" px-3 py-3 text-right font-medium">গড়</th>
                    </tr>
                  </thead>
                  <tbody>
                    {rows.map((row, i) => (
                      <tr
                        key={i}
                        className={` border-t border-base-300 ${i / 2 === 1 ? "bg-base-200/60" : ""}`}
                      >
                        <td className=" px-3 py-3">{row.market}</td>
                        <td className=" px-3 py-3">{row.division}</td>
                        <td className=" px-3 py-3 text-right">
                          {toBn(row.min)} টাকা
                        </td>
                        <td className=" px-3 py-3 text-right">
                          {toBn(row.max)} টাকা
                        </td>
                        <td className=" px-3 py-3 text-right font-bold">
                          {toBn(row.avg)} টাকা
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </section>
        </div>
      </main>
    </div>
  );
};

export default ItemDetails;
