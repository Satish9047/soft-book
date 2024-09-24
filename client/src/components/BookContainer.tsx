import React from "react";
import Card from "./Card";
import { bookList } from "@/data";

const BookContainer = () => {
  return (
    <div className="flex flex-wrap gap-4 p-4 w-9/12 justify-center">
      {bookList.map((book) => (
        <Card key={book.id} book={book} />
      ))}
    </div>
  );
};

export default BookContainer;
