import List_Prosucts from "@/components/List_Prosucts";

export default async function page({
  searchParams,
}: {
  searchParams: Promise<{ search?: string }>;
}) {
  const search = (await searchParams).search || "";
  return (
    <div className="w-full h-120 max-w-6xl mx-auto mt-18 my-4">
      <List_Prosucts search={search} />
    </div>
  );
}
