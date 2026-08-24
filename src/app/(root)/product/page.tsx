import List_Prosucts from "@/components/List_Prosucts";

export default async function page({
  searchParams,
}: {
  searchParams: Promise<{ search?: string }>;
}) {
  const search = (await searchParams) || "";
  return (
    <div className="w-full max-w-6xl mx-auto my-4">
      <List_Prosucts search={search} />
    </div>
  );
}
