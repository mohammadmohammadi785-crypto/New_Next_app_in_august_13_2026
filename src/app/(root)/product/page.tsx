import React from "react";
import { listPriducts } from "@/db/product";
import { singleProduct } from "@/types/product.type";
import ProductCard from "@/components/product-card";
export default function page() {
  return (
    <div className="w-full max-w-6xl mx-auto my-4">
      {listPriducts.map((pro: singleProduct) => {
        return <ProductCard key={pro.id} product={pro} />;
      })}
    </div>
  );
}
