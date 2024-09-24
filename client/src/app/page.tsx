import BookContainer from "@/components/BookContainer";
import SideBar from "@/components/SideBar";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex justify-center items-center w-full h-[calc(100vh-5rem)] font-bold ">
      <div className="-translate-y-16">
        <h1>Welcome to the Soft Book Share</h1>
        <p>An Open sources for free pdf Books</p>
        <Link href={"/books"} className="underline font-semibold text-blue-800">
          Books
        </Link>
      </div>
    </main>
  );
}
