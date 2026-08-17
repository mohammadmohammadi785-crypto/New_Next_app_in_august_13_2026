export default function loading() {
  return (
    <div className="flex flex-col absolute top-0 right-0 justify-center w-full h-screen items-center">
      <h1 className="text-xl my-2">loading</h1>
      <div className="animate-spin w-20 h-20 border-dotted border-10 border-white rounded-full"></div>
    </div>
  );
}
