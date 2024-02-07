
import React from "react";
import Book from "../ui/Book";

const BestBooks = ({ id, books }) => {
  return (
    <div className="books">
        {books
        .filter((book) => book.rating === 5 && +book.id !== +id)
        .slice(0,4)
        .map((book)=> (
            <Book book={book} key={book.id}/>
        ))
        }
    </div>
  );
};

export default BestBooks;
