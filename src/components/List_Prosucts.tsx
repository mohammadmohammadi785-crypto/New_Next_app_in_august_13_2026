import React, { useState } from "react";
import { listProducts } from "@/db/product";
import { singleProduct } from "@/types/product.type";
import ProductCard from "./Product-Card";
import Counter from "./Counter";
function List_Prosucts() {
  const [value, setValue] = useState(1);
  return (
    <div>
      <Counter setValue={setValue} />
      <div className="grid md:grid-cols-3 gap-3 grid-cols-1">
        {listProducts.slice(0, value).map((pro: singleProduct) => {
          return <ProductCard key={pro.id} product={pro} />;
        })}
      </div>
    </div>
  );
}

export default List_Prosucts;
