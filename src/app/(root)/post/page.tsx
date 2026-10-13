import PostCard from "@/components/post-card";
import { Posts } from "@/db/posts";
import React from "react";

export default async function page() {
  await new Promise((res) => setTimeout(res, 1000));
  return (
    <div className="w-full max-w-5xl mx-auto mt-18 grid gap-2s">
      {Posts.map((x) => (
        <PostCard key={x.id} post={x} />
      ))}
    </div>
  );
}
