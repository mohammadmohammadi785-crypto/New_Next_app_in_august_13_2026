import { Post } from "@/types/posts.type";
import React from "react";

export default function PostCard({ post }: { post: Post }) {
  return (
    <div className="w-full border rounded-md p-4 shadow-2xs">
      <h1 className="text-2xl font-bold">{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
}
