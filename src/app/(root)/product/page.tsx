import React, { useState } from "react";
import { listPriducts } from "@/db/product";
import { singleProduct } from "@/types/product.type";
import ProductCard from "@/components/Product-Card";
import Counter from "@/components/Counter";

export default function page() {
  const [value, setValue] = useState(1);
  return (
    <div className="w-full max-w-6xl mx-auto my-4">
      <Counter setValue={setValue} />
      <div className="grid md:grid-cols-3 gap-3 grid-cols-1">
        {listPriducts.map((pro: singleProduct) => {
          return <ProductCard key={pro.id} product={pro} />;
        })}
      </div>
    </div>
  );
}
