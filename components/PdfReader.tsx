"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Home, Maximize2, Minimize2 } from "lucide-react";
import Link from "next/link";
import { type CSSProperties, useEffect, useMemo, useRef, useState } from "react";

const BOOK = {
  title: "Dear Non-Biological God, Is This the Nation You Promised?",
  cover: "/books/dear-non-biological-god/pages/dear-non-biological-god-is-this-the-nation-you-promised-STANDARD_page-0001-elementor-io-optimized.webp",
  pageCount: 36,
  pagePath: (page: number) =>
    `/books/dear-non-biological-god/pages/dear-non-biological-god-is-this-the-nation-you-promised-STANDARD_page-${String(page).padStart(4, "0")}-elementor-io-optimized.webp`
};

type BookPage = {
  kind: "blank" | "image";
  pageNumber: number | null;
  src?: string;
};

const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max);

const createPage = (pageNumber: number | null): BookPage =>
  pageNumber ? { kind: "image", pageNumber, src: BOOK.pagePath(pageNumber) } : { kind: "blank", pageNumber: null };

export default function PdfReader() {
  const [singlePageMode, setSinglePageMode] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const spreads = useMemo(() => {
    const result: Array<{ left: BookPage; right: BookPage; label: string }> = [];

    if (singlePageMode) {
      for (let page = 1; page <= BOOK.pageCount; page += 1) {
        result.push({ left: createPage(null), right: createPage(page), label: `Page ${page}` });
      }
      return result;
    }

    result.push({ left: createPage(null), right: createPage(1), label: "Page 1" });
    for (let page = 2; page <= BOOK.pageCount; page += 2) {
      const rightPage = page + 1 <= BOOK.pageCount ? page + 1 : null;
      result.push({
        left: createPage(page),
        right: createPage(rightPage),
        label: rightPage ? `Pages ${page}-${rightPage}` : `Page ${page}`
      });
    }
    return result;
  }, [singlePageMode]);

  const [spread, setSpread] = useState(0);
  const [direction, setDirection] = useState(1);
  const [opened, setOpened] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [dragProgress, setDragProgress] = useState(0);
  const dragStart = useRef<number | null>(null);
  const currentSpread = spreads[spread];
  const progress = ((spread + 1) / spreads.length) * 100;
  const curlAmount = Math.min(Math.abs(dragProgress), 1);
  const curlDirection = dragProgress >= 0 ? 1 : -1;

  useEffect(() => {
    const timer = window.setTimeout(() => setOpened(true), 260);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    const query = window.matchMedia("(max-width: 760px)");
    const updateMode = () => setSinglePageMode(query.matches);
    updateMode();
    query.addEventListener("change", updateMode);
    return () => query.removeEventListener("change", updateMode);
  }, []);

  useEffect(() => {
    setSpread((value) => clamp(value, 0, spreads.length - 1));
  }, [spreads.length]);

  useEffect(() => {
    const updateFullscreen = () => setIsFullscreen(Boolean(document.fullscreenElement));
    updateFullscreen();
    document.addEventListener("fullscreenchange", updateFullscreen);
    return () => document.removeEventListener("fullscreenchange", updateFullscreen);
  }, []);

  useEffect(() => {
    const nearbyPages = new Set<number>();

    for (let index = spread - 1; index <= spread + 1; index += 1) {
      const nearbySpread = spreads[index];
      if (!nearbySpread) {
        continue;
      }

      [nearbySpread.left, nearbySpread.right].forEach((page) => {
        if (page.pageNumber) {
          nearbyPages.add(page.pageNumber);
        }
      });
    }

    nearbyPages.forEach((pageNumber) => {
      const image = new Image();
      image.src = BOOK.pagePath(pageNumber);
    });
  }, [spread, spreads]);

  const goToSpread = (nextSpread: number) => {
    const safeSpread = clamp(nextSpread, 0, spreads.length - 1);
    setDirection(safeSpread >= spread ? 1 : -1);
    setDragProgress(0);
    setIsDragging(false);
    setSpread(safeSpread);
  };

  const beginDrag = (x: number) => {
    dragStart.current = x;
    setIsDragging(true);
  };

  const updateDrag = (x: number) => {
    if (dragStart.current === null) {
      return;
    }

    const delta = dragStart.current - x;
    setDragProgress(clamp(delta / 320, -1, 1));
  };

  const finishDrag = (x: number) => {
    if (dragStart.current === null) {
      return;
    }

    const delta = dragStart.current - x;
    const finalProgress = clamp(delta / 320, -1, 1);

    if (Math.abs(finalProgress) > 0.22) {
      goToSpread(spread + (finalProgress > 0 ? 1 : -1));
    } else {
      setDragProgress(0);
    }

    setIsDragging(false);
    dragStart.current = null;
  };

  const toggleFullscreen = async () => {
    if (document.fullscreenElement) {
      await document.exitFullscreen?.();
      return;
    }

    await document.documentElement.requestFullscreen?.();
  };

  return (
    <main className="reader-shell">
      <div className="reader-atmosphere" aria-hidden="true">
        {Array.from({ length: 14 }, (_, index) => (
          <span
            key={index}
            style={
              {
                "--delay": `${index * -1.7}s`,
                "--left": `${8 + ((index * 29) % 86)}%`,
                "--top": `${10 + ((index * 17) % 74)}%`
              } as CSSProperties
            }
          />
        ))}
      </div>

      <header className="reader-topbar">
        <Link className="reader-round-button" href="/" aria-label="Back to shelf">
          <Home size={18} />
        </Link>
        <div className="min-w-0 text-center">
          <h1 className="truncate font-display text-xl">{BOOK.title}</h1>
          <p className="text-xs uppercase tracking-[0.22em] text-[#8b806f]">
            {currentSpread.label} / {BOOK.pageCount}
          </p>
        </div>
        <button
          aria-label={isFullscreen ? "Exit fullscreen" : "Fullscreen"}
          className="reader-round-button"
          onClick={toggleFullscreen}
          type="button"
        >
          {isFullscreen ? <Minimize2 size={18} /> : <Maximize2 size={18} />}
        </button>
      </header>

      <section
        className="book-reader-stage"
        onMouseDown={(event) => {
          beginDrag(event.clientX);
        }}
        onMouseMove={(event) => {
          updateDrag(event.clientX);
        }}
        onMouseUp={(event) => finishDrag(event.clientX)}
        onMouseLeave={(event) => {
          if (isDragging) {
            finishDrag(event.clientX);
          }
        }}
        onTouchStart={(event) => {
          beginDrag(event.touches[0]?.clientX ?? 0);
        }}
        onTouchMove={(event) => {
          updateDrag(event.touches[0]?.clientX ?? 0);
        }}
        onTouchEnd={(event) => finishDrag(event.changedTouches[0]?.clientX ?? 0)}
      >
        <button className="reader-arrow left-4" onClick={() => goToSpread(spread - 1)} type="button" aria-label="Previous page">
          <ChevronLeft size={24} />
        </button>

        <div className={`digital-book ${opened ? "digital-book-open" : ""} ${currentSpread.left.kind === "blank" ? "first-spread" : ""}`}>
          <motion.div
            animate={opened ? { rotateY: -156, x: -18, opacity: 0 } : { rotateY: 0, x: 0, opacity: 1 }}
            className="opening-cover"
            transition={{ duration: 0.9, ease: [0.645, 0.045, 0.355, 1] }}
          >
            <img alt={`${BOOK.title} cover`} src={BOOK.cover} />
          </motion.div>

          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              animate={{ opacity: 1, rotateY: 0 }}
              className="book-spread"
              custom={direction}
              exit={{ opacity: 0.55, rotateY: direction > 0 ? -8 : 8 }}
              initial={{ opacity: 0.55, rotateY: direction > 0 ? 8 : -8 }}
              key={spread}
              transition={{ duration: 0.52, ease: [0.645, 0.045, 0.355, 1] }}
            >
              <div className="book-page-stack book-page-stack-left" />
              <div className="book-page-stack book-page-stack-right" />
              <BookPageView className="reader-book-page-left" page={currentSpread.left} priority={spread <= 1} />
              <BookPageView className="reader-book-page-right" page={currentSpread.right} priority={spread <= 1} />

              <div className="book-spine-shadow" />

              <motion.div
                aria-hidden="true"
                className={`drag-page-curl ${curlDirection > 0 ? "drag-page-curl-next" : "drag-page-curl-prev"}`}
                style={{
                  opacity: isDragging ? curlAmount : 0,
                  rotateY: curlDirection > 0 ? -curlAmount * 152 : curlAmount * 152,
                  x: curlDirection > 0 ? -curlAmount * 12 : curlAmount * 12
                }}
              />

              <motion.div
                className="turning-page-shadow"
                initial={{ opacity: 0.28, scaleX: direction > 0 ? 0.78 : 1.15 }}
                animate={{ opacity: 0, scaleX: 1 }}
                transition={{ duration: 0.52 }}
              />

              <motion.div
                className={`page-turn-leaf ${direction > 0 ? "page-turn-leaf-next" : "page-turn-leaf-prev"}`}
                initial={{ rotateY: 0, opacity: 0.8 }}
                animate={{ rotateY: direction > 0 ? -178 : 178, opacity: 0 }}
                transition={{ duration: 0.72, ease: [0.645, 0.045, 0.355, 1] }}
              />

              <button className="page-corner-hit page-corner-hit-prev page-corner-hit-top" onClick={() => goToSpread(spread - 1)} type="button" aria-label="Previous page" />
              <button className="page-corner-hit page-corner-hit-prev page-corner-hit-bottom" onClick={() => goToSpread(spread - 1)} type="button" aria-label="Previous page" />
              <button className="page-corner-hit page-corner-hit-next page-corner-hit-top" onClick={() => goToSpread(spread + 1)} type="button" aria-label="Next page" />
              <button className="page-corner-hit page-corner-hit-next page-corner-hit-bottom" onClick={() => goToSpread(spread + 1)} type="button" aria-label="Next page" />
            </motion.div>
          </AnimatePresence>
        </div>

        <button className="reader-arrow right-4" onClick={() => goToSpread(spread + 1)} type="button" aria-label="Next page">
          <ChevronRight size={24} />
        </button>
      </section>

      <footer className="reader-bottombar">
        <button onClick={() => goToSpread(spread - 1)} type="button">
          Previous
        </button>
        <div className="reader-progress">
          <motion.div animate={{ width: `${progress}%` }} />
        </div>
        <button onClick={() => goToSpread(spread + 1)} type="button">
          Next
        </button>
      </footer>
    </main>
  );
}

function BookPageView({ className, page, priority }: { className: string; page: BookPage; priority?: boolean }) {
  return (
    <article className={`reader-book-page ${className} ${page.kind === "blank" ? "reader-book-page-blank" : ""}`}>
      {page.kind === "image" && page.src ? (
        <img
          alt={`Book page ${page.pageNumber}`}
          className="reader-page-image"
          decoding="async"
          draggable={false}
          fetchPriority={priority ? "high" : "auto"}
          loading={priority ? "eager" : "lazy"}
          src={page.src}
        />
      ) : null}
    </article>
  );
}
