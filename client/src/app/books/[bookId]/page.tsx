import { Book } from "@/interface";
import Image from "next/image";
import React from "react";
import { bookList } from "@/data";
import { Button } from "@/components/ui/button";

const Page = ({ params }: { params: { bookId: string } }) => {
  const bookId = params.bookId;
  const book: Book | undefined = bookList.find((book) => book.id === bookId);

  if (!book) {
    return <div>Book not found</div>;
  }

  return (
    <div className="mx-auto max-w-[900px]">
      <div>
        <h2>Book Overview</h2>
      </div>
      <div className="flex flex-col md:flex-row gap-4">
        <div className="w-full md:w-2/3 space-y-4">
          <figure>
            <Image
              src={book.image}
              alt={book.name}
              width={400}
              height={250}
              className="w-full md:h-[550px] fill-none mx-auto"
            />
          </figure>
          <div>
            <p className="text-justify">{book.description}</p>
          </div>
        </div>
        <div className="w-full md:w-1/3 space-y-4">
          <div className="border-2 p-2 rounded-md">
            <Button>Download Pdf</Button>
          </div>
          <div className="border-2 p-2 rounded-md">
            <h3>
              <span>Title: </span>
              {book.name}
            </h3>
            <h3>
              <span>Author: </span>
              {book.author}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
