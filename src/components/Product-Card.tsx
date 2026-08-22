import { singleProduct } from "@/types/product.type";
export default function ProductCard({ product }: { product: singleProduct }) {
  return (
    <div className="w-full p-4 border rounded-md shadow-2xs">
      <h1 className="text-3xl font-bold">{product.name}</h1>
    </div>
  );
}
