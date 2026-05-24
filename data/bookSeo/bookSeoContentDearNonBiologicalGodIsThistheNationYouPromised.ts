export type BookSeoChapter = {
  number: number;
  title: string;
  summary: string;
  themes: string[];
  excerpts: string[];
  accessibleDescription: string;
};

export type BookSeoContent = {
  slug: string;
  title: string;
  subtitle: string;
  fullTitle: string;
  author: string;
  publicationYear: string;
  publisher: string;
  copyright: string;
  canonicalPath: string;
  coverImage: string;
  visualFormat: string;
  description: string;
  accessibilitySummary: string;
  themes: string[];
  philosophicalKeywords: string[];
  authorIdentityReferences: string[];
  meaningfulExcerpts: string[];
  chapters: BookSeoChapter[];
};

export const bookSeoContentDearNonBiologicalGodIsThistheNationYouPromised: BookSeoContent = {
  slug: "dear-non-biological-god",
  title: "Dear Non-Biological God",
  subtitle: "Is This the Nation You Promised?",
  fullTitle: "Dear Non-Biological God, Is This the Nation You Promised?",
  author: "Sarcastikant",
  publicationYear: "2026",
  publisher: "Independent Publication",
  copyright: "Copyright (c) 2026 by Sarcastikant",
  canonicalPath: "/books/dear-non-biological-god",
  coverImage: "/booksCoverPages/DearNonBiologicalGodIsThistheNationYouPromised.png",
  visualFormat: "Immersive image-based WEBP page reader",
  description:
    "A philosophical and social reflection written as a letter from an ordinary Indian, exploring exhaustion, silence, corruption, wounded patriotism, ecological loss, broken systems, and the emotional pressure of modern society.",
  accessibilitySummary:
    "The visual reader presents the book as cinematic WEBP page images. This semantic layer describes the literary work, its chapter structure, themes, and selected excerpts for search engines, assistive technologies, and discoverability without replacing the visual book experience.",
  themes: [
    "social exhaustion",
    "ordinary citizens and broken systems",
    "patriotism and criticism",
    "corruption and helplessness",
    "development without ecological wisdom",
    "institutional fear",
    "youth anxiety and economic survival",
    "belonging, escape, and wounded love for home",
    "civilizational silence",
    "Neti Neti and reflective questioning"
  ],
  philosophicalKeywords: [
    "Sarcastikant",
    "Dear Non-Biological God",
    "Is This the Nation You Promised",
    "ordinary Indian",
    "philosophical book",
    "social reflection",
    "Vedic book writer",
    "Neti Neti",
    "The Living Library",
    "modern India",
    "citizenship",
    "emotional exhaustion",
    "civilizational decline",
    "questions to God",
    "wounded home"
  ],
  authorIdentityReferences: [
    "Sarcastikant",
    "writer of The Living Library",
    "author of Dear Non-Biological God, Is This the Nation You Promised?",
    "observer of systems, society, Vedic symbolism, and ordinary life"
  ],
  meaningfulExcerpts: [
    "This book is not written from ideology. It is written from exhaustion.",
    "Maybe civilizations do not collapse when buildings fall. Maybe they collapse when human beings stop reacting to suffering.",
    "Real patriotism should mean improving a nation. Protecting it. Strengthening it. Questioning the things slowly damaging it.",
    "Justice delayed does not only delay verdicts. It delays life itself.",
    "The most dangerous form of slavery is the one people stop recognizing.",
    "Human beings became professionally connected to the world while becoming internally disconnected from themselves.",
    "A wounded home is still home.",
    "This book was never meant to spread hatred. It was meant to disturb emotional numbness."
  ],
  chapters: [
    {
      number: 0,
      title: "Preface",
      summary:
        "The preface frames the book as a work of exhaustion rather than ideology, naming the emotional pressure, helplessness, aggression, fear, loneliness, and silence that many ordinary citizens experience but rarely articulate.",
      themes: ["exhaustion", "observation", "ordinary citizens", "social silence"],
      excerpts: [
        "These pages are not political analysis. They are observations. Questions. Contradictions.",
        "Pretending everything is fine would have been a far greater lie."
      ],
      accessibleDescription:
        "Opening reflection explaining that the book is a social and philosophical letter born from observation, heartbreak, and concern for society."
    },
    {
      number: 1,
      title: "Dear God",
      summary:
        "The first chapter addresses God directly and asks whether the promised nation of courage, justice, wisdom, dignity, and public service has been replaced by corruption, numbness, and emotional exhaustion.",
      themes: ["God", "dignity", "corruption", "public systems", "peaceful life"],
      excerpts: [
        "There has been some misunderstanding. Because this cannot be the country generations were promised.",
        "Many systems no longer serve people. They manage helplessness."
      ],
      accessibleDescription:
        "A direct philosophical address questioning the distance between inherited national ideals and the daily experience of ordinary citizens."
    },
    {
      number: 2,
      title: "Development Without a Soul",
      summary:
        "This chapter criticizes development that destroys rivers, trees, hills, public spaces, and ecological memory while calling destruction modernization. It asks whether progress has meaning if it damages the conditions for peaceful human life.",
      themes: ["development", "nature", "ecology", "modernization", "greed"],
      excerpts: [
        "Today development no longer feels like cooperation with nature. It feels like war against it.",
        "Civilization is not measured by how much concrete a nation pours."
      ],
      accessibleDescription:
        "A reflection on ecological destruction, careless planning, selective development, and the loss of emotional reaction to damage."
    },
    {
      number: 3,
      title: "Anti-National",
      summary:
        "The third chapter examines how asking questions became socially dangerous and how criticism is often mislabeled as betrayal. It argues that real patriotism requires accountability, civic discipline, and the courage to question decay.",
      themes: ["patriotism", "criticism", "civic sense", "social media", "democracy"],
      excerpts: [
        "Since when did demanding dignity become betrayal?",
        "Questions do not destroy civilizations. Silence does."
      ],
      accessibleDescription:
        "A chapter about the psychological and civic difference between love for a country and blind emotional loyalty."
    },
    {
      number: 4,
      title: "A Society Afraid of Its Own Systems",
      summary:
        "This chapter explores fear inside legal, police, institutional, and bureaucratic systems. It reflects on delayed justice, influence, false accusations, procedural exhaustion, and the collapse of trust.",
      themes: ["justice", "institutional fear", "trust", "procedural delay", "helplessness"],
      excerpts: [
        "Justice delayed does not only delay verdicts. It delays life itself.",
        "Healthy societies are built when citizens trust process more than personal networks."
      ],
      accessibleDescription:
        "A semantic summary of the book's concern with institutions that emotionally exhaust ordinary people instead of protecting them."
    },
    {
      number: 5,
      title: "A Society Trained to Submit",
      summary:
        "The fifth chapter describes obedience, dependency, silence, survival pressure, and normalized humiliation as forms of modern psychological slavery that no longer need visible chains.",
      themes: ["obedience", "conditioning", "modern slavery", "dependency", "silence"],
      excerpts: [
        "Fear begins wearing the clothes of wisdom.",
        "Modern slavery no longer looks like chains. It looks like permanent exhaustion."
      ],
      accessibleDescription:
        "A reflection on how cultures teach citizens to tolerate broken systems rather than transform them."
    },
    {
      number: 6,
      title: "The Generation That Forgot How to Live",
      summary:
        "This chapter examines education, employment, social comparison, corporate pressure, anxiety, and existential emptiness among young people who become professionally connected but internally disconnected.",
      themes: ["youth", "education", "employment", "anxiety", "meaning"],
      excerpts: [
        "Students stopped becoming human beings and slowly became products prepared for economic survival.",
        "What exactly are we living for?"
      ],
      accessibleDescription:
        "A chapter summary focused on modern youth, employability, emotional exhaustion, and the search for meaningful life."
    },
    {
      number: 7,
      title: "Between Belonging and Escape",
      summary:
        "The seventh chapter explores the emotional conflict of wanting to leave a country not from hatred, but from exhaustion. It connects brain drain to hope drain and asks whether societies still allow people to live peacefully.",
      themes: ["belonging", "migration", "escape", "hope drain", "peace"],
      excerpts: [
        "There are days when leaving this country feels less like ambition and more like survival.",
        "Maybe the deepest tragedy is not brain drain. Maybe it is hope drain."
      ],
      accessibleDescription:
        "A chapter about the psychological tension between homeland, memory, family, language, and the desire for peace."
    },
    {
      number: 8,
      title: "A Wounded Home Is Still Home",
      summary:
        "The final chapter clarifies that the book is not hatred, but heartbreak. It calls for conscience, honesty, civic responsibility, and future generations who inherit more than survival disguised as life.",
      themes: ["home", "patriotism", "humanity", "conscience", "future generations"],
      excerpts: [
        "A nation is not made only of politicians, bureaucracy, speeches, or failed systems.",
        "Civilizations do not survive through slogans alone."
      ],
      accessibleDescription:
        "Closing reflection on love, exhaustion, conscience, and the need to remain human inside difficult systems."
    }
  ]
};
