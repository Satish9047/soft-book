"use client";
import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import { Book } from "@/interface";
import { useRouter } from "next/navigation";

const Card = ({ book }: { book: Book }) => {
  const router = useRouter();
  const handleDetailClick = () => {
    router.push(`/books/${book.id}`); // Navigate to the book detail page
  };
  return (
    <div className="bg-slate-100 w-[280px] dark:bg-slate-800 rounded-lg p-4 shadow-xl cursor-pointer">
      <figure>
        <Image
          src={book.image}
          alt={book.name}
          width={200}
          height={200}
          className="w-[250px] rounded-lg"
        />
      </figure>
      <div>
        <h3>{book.name}</h3>
        <p>{book.author}</p>
        <div className="text-right">
          <Button className="" onClick={handleDetailClick}>
            Detail
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Card;
