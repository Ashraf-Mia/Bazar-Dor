"use client";
import { useEffect, useState } from "react";

export default function CurrentDate() {
  const [date, setDate] = useState("");

  useEffect(() => {
    const date = new Date().toLocaleString("bn-BD", { dateStyle: "full" });
    setDate(date);
  }, []);

  return <span>{date}</span>;
}
