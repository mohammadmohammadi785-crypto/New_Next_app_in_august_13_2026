import { singleProduct } from "@/types/product.type";
import Link from "next/link";
export default function ProductCard({ product }: { product: singleProduct }) {
  return (
    <Link
      href={`/product/${product.id}`}
      className="w-full p-4 border rounded-md shadow-2xs"
    >
      <h1 className="text-3xl font-bold">{product.name}</h1>
      <p className="text-xl">{product.desc}</p>
    </Link>
  );
}
