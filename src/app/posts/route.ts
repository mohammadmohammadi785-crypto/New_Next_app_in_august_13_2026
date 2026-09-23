import { NextRequest } from "next/server";
import { comments } from "./comments";

type Comment = {
  id: number;
  title: string;
  body: string;
};

export function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const text = searchParams.get("title") || "";
  const filteredComments = comments.filter((x) => x.title.includes(text));
  return Response.json(filteredComments);
}

export async function POST(request: Request) {
  const newrequest = await request.json();
  const newComment = {
    id: comments.length + 1,
    title: newrequest.title,
    body: newrequest.body,
  };
  comments.push(newComment);
  return Response.json(newComment);
}
