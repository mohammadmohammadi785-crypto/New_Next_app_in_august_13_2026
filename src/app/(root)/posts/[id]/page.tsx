import { Posts } from "@/db/posts";
import { Post } from "@/types/posts.type";
import React from "react";

export default async function page({
  params,
}: {
  params: Promise<{ id: number }>;
}) {
  const { id } = await params;
  const foundPost = Posts.find((p: Post) => {
    return p.id == id;
  });
  if (!foundPost) return;
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="w-9/12 p-4 border rounded-md">
        <h1 className="text-2xl py-1 font-bold">{foundPost.title}</h1>
        <p className="py-1">{foundPost.body}</p>
      </div>
    </div>
  );
}
