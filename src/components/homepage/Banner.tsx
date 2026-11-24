
import Image from "next/image";
import React from "react";
import BannerImg from "@/assets/hero_img.jpg";

const Banner = () => {
  return (
    <section className="px-4 py-10 md:py-16">
      <div className="container mx-auto">
        <div className="relative overflow-hidden grid grid-cols-1 md:grid-cols-2 items-center gap-10 rounded-3xl bg-gradient-to-br from-emerald-50 via-slate-50 to-green-100 px-6 py-10 sm:px-10 md:px-14 lg:px-16">

          {/* Decorative background */}
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-emerald-200/30 blur-3xl" />

          {/* Left Content */}
          <div className="relative z-10 order-2 space-y-6 text-center md:order-1 md:text-left">

            <span className="inline-block rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold tracking-wide text-emerald-700">
              ✦ Discover Your Next Favorite
            </span>

            <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Books That
              <span className="block text-emerald-600">
                Inspire You.
              </span>
            </h1>

            <p className="mx-auto max-w-md text-base leading-7 text-slate-600 sm:text-lg md:mx-0">
              Discover new reads, explore timeless stories, and keep your
              bookshelf full of books worth revisiting.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 md:justify-start">
              <button className="rounded-xl bg-emerald-600 px-7 py-3.5 font-semibold text-white shadow-lg shadow-emerald-600/20 transition duration-300 hover:-translate-y-1 hover:bg-emerald-700">
                Explore Books →
              </button>

              <button className="rounded-xl border border-slate-300 bg-white px-7 py-3.5 font-semibold text-slate-700 transition duration-300 hover:border-emerald-600 hover:text-emerald-700">
                Learn More
              </button>
            </div>

            <div className="flex items-center justify-center gap-8 pt-3 md:justify-start">
              <div>
                <h3 className="text-2xl font-bold text-slate-900">1K+</h3>
                <p className="text-sm text-slate-500">Books</p>
              </div>

              <div className="h-10 w-px bg-slate-300" />

              <div>
                <h3 className="text-2xl font-bold text-slate-900">500+</h3>
                <p className="text-sm text-slate-500">Readers</p>
              </div>

              <div className="h-10 w-px bg-slate-300" />

              <div>
                <h3 className="text-2xl font-bold text-slate-900">100%</h3>
                <p className="text-sm text-slate-500">Passion</p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative z-10 order-1 flex justify-center md:order-2 md:justify-end">
            <div className="relative w-full max-w-md">
              <div className="absolute -inset-3 rotate-3 rounded-3xl bg-emerald-200/60" />

              <Image
                src={BannerImg}
                alt="Discover your next favorite book"
                priority
                className="relative h-[280px] w-full rounded-2xl object-cover shadow-2xl sm:h-[360px] md:h-[420px]"
              />

              {/* Floating label */}
              <div className="absolute -bottom-5 -left-5 rounded-2xl bg-white px-5 py-4 shadow-xl">
                <p className="text-sm font-bold text-slate-800">
                  Your next chapter
                </p>
                <p className="text-xs text-emerald-600">
                  Starts here ✨
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Banner;
