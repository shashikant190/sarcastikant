import type { Metadata } from "next";
import PdfReader from "@/components/PdfReader";
import { bookSeoContentDearNonBiologicalGodIsThistheNationYouPromised as bookSeo } from "@/data/bookSeo/bookSeoContentDearNonBiologicalGodIsThistheNationYouPromised";
import { brand } from "../../siteMetadata";
import { createPageMetadata } from "../../siteMetadata";

export const metadata: Metadata = createPageMetadata({
  title: bookSeo.fullTitle,
  description: bookSeo.description,
  canonical: bookSeo.canonicalPath
});

export default function BookReaderPage() {
  const canonicalUrl = new URL(bookSeo.canonicalPath, brand.url).toString();
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Book",
    name: bookSeo.fullTitle,
    alternateName: [bookSeo.title, bookSeo.subtitle],
    author: {
      "@type": "Person",
      name: bookSeo.author
    },
    publisher: {
      "@type": "Organization",
      name: bookSeo.publisher
    },
    copyrightYear: bookSeo.publicationYear,
    datePublished: bookSeo.publicationYear,
    description: bookSeo.description,
    genre: ["Philosophy", "Social reflection", "Literary nonfiction"],
    inLanguage: "en",
    image: new URL(bookSeo.coverImage, brand.url).toString(),
    keywords: bookSeo.philosophicalKeywords,
    url: canonicalUrl,
    about: bookSeo.themes.map((theme) => ({
      "@type": "Thing",
      name: theme
    })),
    hasPart: bookSeo.chapters.map((chapter) => ({
      "@type": "CreativeWork",
      position: chapter.number,
      name: chapter.title,
      description: chapter.summary
    }))
  };

  return (
    <>
      <script
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        type="application/ld+json"
      />
      <article aria-labelledby="book-seo-title" className="book-seo-layer">
        <header>
          <p>{bookSeo.author}</p>
          <h1 id="book-seo-title">{bookSeo.fullTitle}</h1>
          <p>{bookSeo.description}</p>
          <p>{bookSeo.accessibilitySummary}</p>
          <p>
            {bookSeo.publisher}, {bookSeo.publicationYear}. {bookSeo.copyright}.
          </p>
        </header>

        <section aria-labelledby="book-seo-themes">
          <h2 id="book-seo-themes">Philosophical Themes</h2>
          <ul>
            {bookSeo.themes.map((theme) => (
              <li key={theme}>{theme}</li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="book-seo-chapters">
          <h2 id="book-seo-chapters">Chapter Structure</h2>
          {bookSeo.chapters.map((chapter) => (
            <section aria-label={`Chapter ${chapter.number}: ${chapter.title}`} key={chapter.title}>
              <h3>
                {chapter.number === 0 ? "Preface" : `Chapter ${chapter.number}`}: {chapter.title}
              </h3>
              <p>{chapter.summary}</p>
              <p>{chapter.accessibleDescription}</p>
              <ul>
                {chapter.themes.map((theme) => (
                  <li key={theme}>{theme}</li>
                ))}
              </ul>
              {chapter.excerpts.map((excerpt) => (
                <blockquote key={excerpt}>{excerpt}</blockquote>
              ))}
            </section>
          ))}
        </section>

        <section aria-labelledby="book-seo-excerpts">
          <h2 id="book-seo-excerpts">Meaningful Excerpts</h2>
          {bookSeo.meaningfulExcerpts.map((excerpt) => (
            <blockquote key={excerpt}>{excerpt}</blockquote>
          ))}
        </section>

        <section aria-labelledby="book-seo-identity">
          <h2 id="book-seo-identity">Author and Discovery References</h2>
          <ul>
            {bookSeo.authorIdentityReferences.map((reference) => (
              <li key={reference}>{reference}</li>
            ))}
          </ul>
        </section>
      </article>
      <PdfReader />
    </>
  );
}
