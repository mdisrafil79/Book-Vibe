import { IBook } from '@/types/books.type';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface IBookCardProps {
book: IBook;
} 

const BookCard = ({book}: IBookCardProps) => {
    return (
         <div
            className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
          >

            {/* Book Image */}
            <div className="relative flex h-64 items-center justify-center overflow-hidden bg-slate-50 p-5">

              {/* Category Badge */}
              <span className="absolute left-4 top-4 z-10 rounded-full bg-emerald-100 px-3 py-1.5 text-xs font-semibold text-emerald-700">
                {book.category}
              </span>

              {/* Rating Badge */}
              <span className="absolute right-4 top-4 z-10 flex items-center gap-1 rounded-full bg-white px-3 py-1.5 text-xs font-bold text-amber-600 shadow-sm">
                ★ {book.rating}
              </span>

              <Image
                src={book.image}
                alt={book.bookName}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-contain p-5 transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Book Information */}
            <div className="space-y-4 p-5">

              {/* Title & Author */}
              <div>
                <h3 className="line-clamp-1 text-lg font-bold text-slate-800 transition-colors group-hover:text-emerald-600">
                  {book.bookName}
                </h3>

                <p className="mt-1 text-sm text-slate-500">
                  By {book.author}
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {book.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Book Details */}
              <div className="grid grid-cols-2 gap-3 border-y border-slate-100 py-3">

                <div>
                  <p className="text-xs text-slate-400">
                    Publisher
                  </p>
                  <p className="mt-1 text-sm font-semibold text-slate-700">
                    {book.publisher}
                  </p>
                </div>

                <div>
                  <p className="text-xs text-slate-400">
                    Published
                  </p>
                  <p className="mt-1 text-sm font-semibold text-slate-700">
                    {book.yearOfPublishing}
                  </p>
                </div>

                <div>
                  <p className="text-xs text-slate-400">
                    Total Pages
                  </p>
                  <p className="mt-1 text-sm font-semibold text-slate-700">
                    {book.totalPages} Pages
                  </p>
                </div>

                <div>
                  <p className="text-xs text-slate-400">
                    Book ID
                  </p>
                  <p className="mt-1 text-sm font-semibold text-slate-700">
                    #{book.bookId}
                  </p>
                </div>

              </div>

              {/* Details Button */}
              <Link
                href={`/books/${book.bookId}`}
                className="flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-4 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-emerald-700"
              >
                View Details
                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </Link>

            </div>
          </div>
    );
};

export default BookCard;