import Link from "next/link";

const Footer = () => {
  return (
    <footer className="mt-auto bg-slate-950 text-slate-300">
      <div className="container mx-auto grid gap-10 px-4 py-12 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr] lg:py-16">
        <div>
          <Link
            href="/"
            className="inline-flex items-center gap-3 text-xl font-bold text-white"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500 text-slate-950">
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="none"
                className="h-6 w-6"
              >
                <path
                  d="M4.5 5.75c2.8-.9 5.3-.45 7.5 1.15v12c-2.2-1.6-4.7-2.05-7.5-1.15v-12Zm15 0c-2.8-.9-5.3-.45-7.5 1.15v12c2.2-1.6 4.7-2.05 7.5-1.15v-12Z"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            Book Vibe
          </Link>
          <p className="mt-4 max-w-sm leading-7 text-slate-400">
            Find your next favorite read, keep track of the books you love, and
            make every page count.
          </p>
        </div>

        <div>
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-widest text-white">
            Explore
          </h2>
          <ul className="space-y-3">
            <li>
              <Link className="transition-colors hover:text-emerald-400" href="/books">
                Browse books
              </Link>
            </li>
            <li>
              <Link
                className="transition-colors hover:text-emerald-400"
                href="/listed-book"
              >
                Listed books
              </Link>
            </li>
            <li>
              <Link
                className="transition-colors hover:text-emerald-400"
                href="/read-books"
              >
                Read books
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-widest text-white">
            Make time for a story
          </h2>
          <p className="mb-5 leading-7 text-slate-400">
            Your next great read is just around the corner.
          </p>
          <Link
            href="/books"
            className="inline-flex items-center rounded-full bg-emerald-500 px-5 py-2.5 font-semibold text-slate-950 transition-colors hover:bg-emerald-400"
          >
            Discover books
            <span aria-hidden="true" className="ml-2">
              &rarr;
            </span>
          </Link>
        </div>
      </div>

      <div className="border-t border-slate-800">
        <div className="container mx-auto flex flex-col gap-2 px-4 py-5 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} Book Vibe. All rights reserved.</p>
          <p>Made for people who love a good story.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
