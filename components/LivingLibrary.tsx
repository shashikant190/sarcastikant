"use client";

import { aboutSarcastikant, libraryBooks, type LibraryBook } from "@/data/libraryBooks";
import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LivingLibrary() {
  const router = useRouter();
  const [missingCovers, setMissingCovers] = useState<Record<string, boolean>>({});
  const [opening, setOpening] = useState(false);
  const [openingSlug, setOpeningSlug] = useState<string | null>(null);
  const [parallax, setParallax] = useState({ x: 0, y: 0 });

  const openBook = (book: LibraryBook) => {
    const href = book.href;

    if (!href || book.status !== "available") {
      return;
    }

    setOpening(true);
    setOpeningSlug(book.slug);
    window.setTimeout(() => router.push(href), 420);
  };

  return (
    <main
      className="library-home min-h-screen bg-[#11100d] text-[#efe8d5]"
      onMouseMove={(event) => {
        const x = (event.clientX / window.innerWidth - 0.5) * 10;
        const y = (event.clientY / window.innerHeight - 0.5) * 8;
        setParallax({ x, y });
      }}
    >
      <div className="paper-grain" />
      <div className="cinematic-vignette" />
      <div className="dust-field" aria-hidden="true">
        {Array.from({ length: 26 }).map((_, index) => (
          <span
            key={index}
            style={{
              "--delay": `${index * 0.7}s`,
              "--left": `${(index * 37) % 100}%`,
              "--top": `${(index * 19) % 100}%`
            } as React.CSSProperties}
          />
        ))}
      </div>

      <section className="relative mx-auto flex min-h-screen w-full max-w-6xl flex-col justify-center px-5 py-12">
        <div className="mb-10">
          <p className="text-xs uppercase tracking-[0.32em] text-[#b99b62]">The Living Library</p>
          <h1 className="mt-4 font-display text-4xl leading-tight md:text-6xl">A quiet place for books, questions, and wandering minds.</h1>
        </div>

        <motion.div
          className={`bookshelf ${opening ? "shelf-opening" : ""}`}
          animate={{ x: parallax.x * -0.35, y: parallax.y * -0.22 }}
          transition={{ type: "spring", stiffness: 70, damping: 24 }}
        >
          <div className="shelf-back" />

          {libraryBooks.map((book) => {
            const isAvailable = book.status === "available" && Boolean(book.href);
            const isOpening = openingSlug === book.slug;

            return (
              <div className="library-book-slot" key={book.slug}>
                <button
                  aria-label={isAvailable ? `Open ${book.title}` : `${book.subtitle} is ${book.year.toLowerCase()}`}
                  className={`book-link group ${isAvailable ? "" : "book-link-disabled"}`}
                  disabled={!isAvailable}
                  onClick={() => openBook(book)}
                  type="button"
                >
                  <motion.div
                    className={`book-object ${isOpening ? "book-opening" : ""} ${isAvailable ? "" : "book-object-muted"}`}
                    animate={isOpening ? { x: 38, y: -18, rotate: -3, scale: 1.055 } : undefined}
                    whileHover={isAvailable ? { y: -12, rotate: -1.8, scale: 1.03 } : { y: -5, rotate: -0.6 }}
                    transition={{ type: "spring", stiffness: 180, damping: 20 }}
                  >
                    {book.cover && !missingCovers[book.slug] ? (
                      <img
                        alt={`${book.title} cover`}
                        className="book-cover-image"
                        onError={() => setMissingCovers((current) => ({ ...current, [book.slug]: true }))}
                        src={book.cover}
                      />
                    ) : (
                      <div className="book-cover-fallback">
                        <span>{book.title}</span>
                        <small>{book.subtitle}</small>
                      </div>
                    )}
                  </motion.div>

                  <div className="book-hover-card">
                    <p className="text-xs uppercase tracking-[0.24em] text-[#b99b62]">{book.year}</p>
                    <h2 className="mt-2 font-display text-3xl leading-none">{book.title}</h2>
                    <p className="mt-2 text-sm text-[#d9caa8]">{book.subtitle}</p>
                    <p className="mt-4 text-sm leading-6 text-[#b9ad95]">{book.description}</p>
                    <span className="mt-5 inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-[#e6c27a]">
                      <BookOpen size={15} />
                      {isAvailable ? "Open reader" : "Coming to the shelf"}
                    </span>
                  </div>
                </button>
              </div>
            );
          })}
        </motion.div>

        <section className="about-author" id="about-sarcastikant">
          <div className="about-author-heading">
            <p className="text-xs uppercase tracking-[0.32em] text-[#b99b62]">Author Archive</p>
            <h2 className="mt-3 font-display text-3xl md:text-5xl">About Sarcastikant</h2>
          </div>
          <div className="about-author-copy">
            {aboutSarcastikant.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <blockquote>
              “The Living Library” —
              <span>a digital archive of thoughts, observations, and philosophical wandering.</span>
            </blockquote>
          </div>
        </section>
      </section>
    </main>
  );
}
