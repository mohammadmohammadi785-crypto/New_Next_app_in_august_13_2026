import { Post } from "@/types/posts.type";
import Link from "next/link";
import React from "react";

export default function PostCard({ post }: { post: Post }) {
  return (
    <Link
      href={`/posts/${post.id}`}
      className="w-full border my-3 rounded-md p-4 shadow-2xs"
    >
      <h1 className="text-2xl font-bold">{post.title}</h1>
      <p>{post.body}</p>
    </Link>
  );
}
