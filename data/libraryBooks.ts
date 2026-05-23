export type LibraryBookStatus = "available" | "in-progress" | "idea";

export type LibraryBook = {
  slug: string;
  title: string;
  subtitle: string;
  year: string;
  description: string;
  cover: string;
  href?: string;
  status: LibraryBookStatus;
};

export const libraryBooks: LibraryBook[] = [
  {
    slug: "dear-non-biological-god",
    title: "Dear Non-Biological God",
    subtitle: "Is This the Nation You Promised?",
    year: "2026",
    description:
      "A reflective social-philosophical book about exhaustion, silence, broken systems, ordinary citizens, and a generation trying to breathe.",
    cover: "/booksCoverPages/DearNonBiologicalGodIsThistheNationYouPromised.png",
    href: "/books/dear-non-biological-god",
    status: "available"
  },

  {
    slug: "indra-study",
    title: "Research Manuscript",
    subtitle: "Exploring Indra beyond mythology",
    year: "In progress",
    description:
      "Notes, interpretations, and symbolic studies surrounding Indra, consciousness, storms, sovereignty, and Vedic imagination.",
    cover: "",
    status: "in-progress"
  },

  {
    slug: "vishwadeva-archive",
    title: "Ongoing Interpretation",
    subtitle: "Studies on the Vishwadevas",
    year: "In progress",
    description:
      "An evolving archive studying the Vishwadevas, collective divinity, cosmic order, and forgotten symbolic structures.",
    cover: "",
    status: "in-progress"
  },

  {
    slug: "vanaspati-notes",
    title: "Field Notes",
    subtitle: "On Vanaspati and sacred vegetation",
    year: "Research",
    description:
      "Fragments exploring Vanaspati, sacred plant consciousness, ritual symbolism, and the ecological imagination of the Vedas.",
    cover: "",
    status: "idea"
  },

  {
    slug: "rishi-voices",
    title: "Archive in Progress",
    subtitle: "Popular ṛṣis of the Rigveda",
    year: "Research",
    description:
      "Studies and reflections on Vedic ṛṣis, poetic vision, mantra consciousness, and the human minds behind the hymns.",
    cover: "",
    status: "idea"
  },

  {
    slug: "storytellers-of-antiquity",
    title: "Unfinished Commentary",
    subtitle: "Ancient storytellers and memory traditions",
    year: "Idea",
    description:
      "A future exploration of early storytellers, oral traditions, symbolic memory, and how civilizations preserved meaning.",
    cover: "",
    status: "idea"
  }
];

export const aboutSarcastikant = [
  "Sarcastikant is a writer exploring philosophy, human observation, symbolic traditions, and civilizational questions.",

  "Having studied computer applications and spent years observing modern systems, institutions, digital culture, and ordinary urban life, his work moves between technology, mythology, psychology, and lived reality.",

  "His writing often exists somewhere between observation, philosophy, memory, and interpretation.",

  "Rather than offering ideological certainty, his books and notes explore the contradictions people quietly experience but rarely articulate openly.",

  "Much of his work began during a deeply transitional period of life in 2026, a phase marked by uncertainty, introspection, professional instability, and an increasing desire to understand both modern existence and older frameworks of meaning.",

  "Alongside reflective social philosophy, his current studies increasingly explore Vedic literature, ancient symbolism, ṛṣis, deities, oral traditions, and the philosophical imagination surrounding figures such as Indra, the Vishwadevas, Vanaspati, and other forgotten dimensions of early thought.",

  "Through books, fragments, unfinished manuscripts, and ongoing interpretations, Sarcastikant is building what he calls:",

  "“The Living Library” — a digital archive of books, systems, observations, symbolic studies, and philosophical wandering."
];
