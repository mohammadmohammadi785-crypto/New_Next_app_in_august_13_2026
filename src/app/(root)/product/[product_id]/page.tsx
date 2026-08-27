import { listProducts } from "@/db/product";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import React from "react";
import NotFoundforProductDeatils from "./not-found";

export const metadata: Metadata = {
  title: "Product Deatils",
  description: "Product Page",
};
export default async function page({
  params,
}: {
  params: Promise<{ product_id: number }>;
}) {
  const productId = (await params).product_id;
  const foundProduct = listProducts.find((p) => p.id == productId);
  if (!foundProduct) return NotFoundforProductDeatils();
  return (
    <div className="w-full h-svh max-w-6xl mx-auto">
      <div className="gap-2 p-3 grid grid-cols-3 my-60 rounded-md border">
        <div className="justify-center flex">
          <h1 className="text-3xl font-bold">{foundProduct.name}</h1>
        </div>
        <div className="flex flex-col gap-3 text-center">
          <p>{foundProduct.desc}</p>
          <span className="px-4  py-3 rounded-md bg-blue-400 text-white">
            {foundProduct.price}
          </span>
        </div>
        <div className="flex justify-center items-start">
          <button className="py-2 rounded-md px-4 bg-blue-400 text-white">
            Add to card
          </button>
        </div>
      </div>
    </div>
  );
}
