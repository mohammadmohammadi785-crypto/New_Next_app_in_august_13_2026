import { comments } from "../comments";

export async function GET({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const commentId = Number(id);
  const foundComments = comments.find((x) => x.id === commentId);
  if (!foundComments) {
    return Response.json({
      status: false,
      message: "the comments was not found",
    });
  }
  return Response.json(foundComments);
}

export async function PUT({
  request,
  params,
}: {
  request: Request;
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const commentId = Number(id);
  const newRequest = await request.json();
  const commentIndex = comments.findIndex((y) => y.id === commentId);

  if (commentIndex === -1) {
    return Response.json(
      {
        state: false,
        message: "no comments found",
      },
      { status: 404 },
    );
  }
  comments[commentIndex] = {
    ...comments[commentIndex],
    title: newRequest.title,
  };
  return Response.json(comments[commentIndex]);
}
