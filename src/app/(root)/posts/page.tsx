import PostCard from "@/components/post-card";
import { Posts } from "@/db/posts";
import React from "react";

export default function page() {
  return (
    <div className="w-full max-w-5xl mx-auto grid gap-2s">
      {Posts.map((x) => (
        <PostCard key={x.id} post={x} />
      ))}
    </div>
  );
}
