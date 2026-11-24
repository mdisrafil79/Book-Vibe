
'use cache';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import BookCard from '../shared/BookCard';

interface Book {
  author: string;
  bookId: number;
  bookName: string;
  category: string;
  image: string;
  publisher: string;
  rating: number;
  review: string;
  tags: string[];
  totalPages: number;
  yearOfPublishing: number;
}

const getBooks = async (): Promise<Book[]> => {
  const response = await fetch(
    'http://localhost:3000/booksData.json'
  );

  if (!response.ok) {
    throw new Error('Failed to fetch books');
  }

  return response.json();
};

const Books = async () => {
  const booksData = await getBooks();

  return (
    <section className="container mx-auto px-4 py-12 md:py-16">

      {/* Section Heading */}
      <div className="mb-10 text-center">
        <span className="mb-3 inline-block rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700">
          Our Collection
        </span>

        <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
          Explore Our Books
        </h2>

        <p className="mx-auto mt-3 max-w-xl text-slate-500">
          Discover amazing stories, timeless classics, and
          inspiring books for every reader.
        </p>
      </div>

      {/* Books Grid */}
      <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

        {booksData.map((book, ind) => 
            {
                return <BookCard key={ind} book={book}/>
            }
        )}

      </div>
    </section>
  );
};

export default Books;
