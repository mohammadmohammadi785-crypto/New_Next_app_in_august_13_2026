import { comments } from "../comments";

export async function GET({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const foundComments = comments.find((x) => x.id == Number(id));
  if (!foundComments) {
    return Response.json({
      status: false,
      message: "the comments was not found",
    });
  }
  return Response.json(foundComments);
}
