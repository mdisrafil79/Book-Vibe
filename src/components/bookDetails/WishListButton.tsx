"use client";
import { BooksContext } from "@/context/BooksContext";
import { IBook } from "@/types/books.type";
import React, { useContext } from "react";
import { toast } from "react-toastify";

const WishListButton = ({ book }: { book: IBook }) => {
  const { wishlist, setWishlist } = useContext(BooksContext);

  const handleAddToWishlist = () => {
    if (wishlist.some((item) => item.bookId === book.bookId)) {
      toast.info(`"${book.bookName}" is already in your wishlist`);
      return;
    }

    setWishlist((previous) => [...previous, book]);
    toast.success(`You have added "${book.bookName}" to your wishlist`);
  };
  return (
    <button
      className="btn btn-primary flex-1"
      onClick={() => handleAddToWishlist()}
    >
      Add to Wishlist
    </button>
  );
};

export default WishListButton;