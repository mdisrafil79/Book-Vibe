'use cache';
import BookCard from '@/components/shared/BookCard';
import { IBook } from '@/types/books.type';
import { readFile } from 'node:fs/promises';
import path from 'node:path';

const getBooks = async (): Promise<IBook[]> => {
  const filePath = path.join(process.cwd(), 'public', 'booksData.json');
  const fileContents = await readFile(filePath, 'utf8');
  return JSON.parse(fileContents) as IBook[];
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
      <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
        {booksData.map((book) => (
          <BookCard key={book.bookId} book={book} />
        ))}
      </div>
    </section>
  );
};

export default Books;
