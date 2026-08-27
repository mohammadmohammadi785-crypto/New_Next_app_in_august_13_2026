import Link from "next/link";

function NotFound() {
  return (
    <div className="flex absolute flex-col w-full h-screen top-0 right-0 justify-center items-center">
      <h1 className="text-3xl">
        <span className="">404|</span> page Not Found
      </h1>
      <button>
        <Link href="/">Go Home</Link>
      </button>
    </div>
  );
}

export default NotFound;
