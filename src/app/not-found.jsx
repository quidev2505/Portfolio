import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <div className="w-full min-h-screen flex items-center justify-center text-white flex-col space-y-8">
        <h2 className="text-white text-3xl">404 - Page Not Found</h2>
        <Link
          href="/"
          className="text-4xl bg-gray-400 rounded-xl p-4 hover:bg-gray-600"
        >
          Go to HomePage
        </Link>
      </div>
    </>
  );
}
