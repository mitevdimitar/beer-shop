"use client";

import Button from "@/components/button";
import useFetchData from "../services/firebase";
import { useEffect, useState } from "react";

export default function Home() {
  const [products, setProducts] = useState([]);
  const { data, loading } = useFetchData();

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Button type={"primary"} link="/" />
    </main>
  );
}
