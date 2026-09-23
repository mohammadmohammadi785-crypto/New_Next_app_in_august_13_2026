import { comments } from "./comments";

type Comment = {
  id: number;
  title: string;
  body: string;
};

export function GET() {
  return Response.json(comments);
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
