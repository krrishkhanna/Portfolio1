export type NavItem = {
  href: string;
  label: string;
};

export type Project = {
  slug: string;
  name: string;
  tagline: string;
  problem: string;
  insight: string;
  built: string;
  role: string;
  techStack: string[];
  outcome: string[];
  links: {
    liveDemo?: string;
    github?: string;
    caseStudy: string;
  };
};

export type WritingPiece = {
  slug: string;
  title: string;
  summary: string;
  category: string;
  readTime: string;
  body: string[];
};

export type LeadershipItem = {
  title: string;
  category: string;
  detail: string;
};

export type PerspectiveMode = {
  id: "founder" | "operator" | "engineer";
  label: string;
  title: string;
  summary: string;
  bullets: string[];
};

export type StrategyMemo = {
  company: string;
  region: string;
  coreConflict: string;
  retentionLoop: string;
  operatorTakeaway: string;
  priorities: string[];
  risks: string[];
  opportunities: string[];
};

export const site = {
  name: "Krrish Khanna",
  title: "Technical Operator",
  subtitle: "AI x Product x Strategy x Operations",
  statement: "Building Products. Designing Systems. Driving Execution.",
  url: "https://krrish-portfolio.vercel.app",
  description:
    "Personal portfolio for Krrish Khanna, a Technical Operator working across AI, product, strategy, and operations.",
  email: "krrishkhanna08@gmail.com",
  location: "Chennai, India",
  socials: [
    { label: "GitHub", href: "https://github.com/krrishkhanna" },
    { label: "Email", href: "mailto:krrishkhanna08@gmail.com" },
  ],
};

export const navigation: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
  { href: "/product-strategy", label: "Product Strategy" },
  { href: "/writing", label: "Writing" },
  { href: "/resume", label: "Resume" },
  { href: "/contact", label: "Contact" },
];

export const impactStats = [
  "500k+ records processed",
  "20+ stakeholders enabled",
  "5+ shipped product projects",
  "10+ product strategy memos",
  "1.5-2x LLM inference speed improvement",
  "40% memory reduction",
  "9.57 CGPA",
  "India x Japan x UK exposure",
];

export const projects: Project[] = [
  {
    slug: "odinsub",
    name: "OdinSub",
    tagline: "Live translation engine for system-wide subtitles and real-time speech access.",
    problem:
      "Real-time multilingual communication is still fragmented across meetings, streams, and everyday device use, especially when users need subtitles outside a single app ecosystem.",
    insight:
      "The product had to feel ambient, not like another conferencing tool. The winning wedge was a lightweight overlay paired with clear Free, Pro, and Enterprise packaging.",
    built:
      "Co-built a live subtitles and translation layer spanning Windows and Android, with support for 100+ languages, usage-tiered plans, and a real go-to-market motion through community channels.",
    role: "Co-Founder and technical operator driving product framing, shipping, and execution systems.",
    techStack: ["Next.js", "TypeScript", "Speech APIs", "Cloud infrastructure", "Product analytics"],
    outcome: [
      "Shipped a live product instead of a demo.",
      "Structured monetization from day one with Free, Pro, and Enterprise tiers.",
      "Proved ability to move from idea to product system with a real audience motion.",
    ],
    links: {
      liveDemo: "https://odinsub.com/",
      caseStudy: "/projects/odinsub",
    },
  },
  {
    slug: "veriload",
    name: "VeriLoad",
    tagline: "Dispatch reconciliation platform built solo under ambiguous operating requirements.",
    problem:
      "Manual dispatch reconciliation is error-prone, slow, and often lacks any dependable real-time validation layer for operators.",
    insight:
      "The right first milestone was not UI polish but a trustworthy core scoring engine. Accuracy had to lead design decisions, not the other way around.",
    built:
      "Defined the product scope independently, engineered the validation engine, tested against 120+ scenarios, and shipped a stakeholder-facing dashboard end-to-end.",
    role: "Solo builder owning discovery, product definition, model logic, dashboard delivery, and iteration.",
    techStack: ["Next.js", "TypeScript", "Python", "Validation heuristics", "Dashboard UX"],
    outcome: [
      "Reached 91% validation accuracy.",
      "Shipped without a predefined spec or external engineering support.",
      "Demonstrated high-agency 0-to-1 execution on an operations-heavy product problem.",
    ],
    links: {
      liveDemo: "https://krrishkhanna.github.io/veriload/",
      caseStudy: "/projects/veriload",
    },
  },
  {
    slug: "vachan",
    name: "Vachan",
    tagline: "Multilingual fact-checking platform designed around high-volume claim analysis.",
    problem:
      "Cross-lingual misinformation analysis breaks down when teams need to process large volumes of claims across multiple sources while preserving transparency.",
    insight:
      "It was not enough to improve the model in isolation. Stakeholders needed an observable pipeline with business-readable quality metrics.",
    built:
      "Designed a multi-source NLP pipeline for 15,000+ claims, iterated with AI-native workflows to improve precision, and surfaced the results in a live reporting dashboard.",
    role: "Full-stack product engineer translating backend complexity into an operator-friendly system.",
    techStack: ["NLP pipelines", "LLM-assisted iteration", "Data dashboards", "TypeScript", "Model evaluation"],
    outcome: [
      "Improved precision by 28% over baseline.",
      "Created transparent reporting around throughput and accuracy.",
      "Showed comfort at the intersection of data systems and product execution.",
    ],
    links: {
      liveDemo: "https://vachan-1.netlify.app/landing",
      caseStudy: "/projects/vachan",
    },
  },
  {
    slug: "sebscan",
    name: "SebScan",
    tagline: "Health-tech OCR and risk analytics system for document parsing and structured insights.",
    problem:
      "Healthcare and insurance-related document workflows often fail on messy scans, fragmented extraction logic, and the lack of a reliable risk-reporting layer.",
    insight:
      "The product had to do more than parse text. The useful wedge was combining extraction quality with operator-friendly risk outputs so the system could support downstream decisions.",
    built:
      "Built a health-tech OCR and analytics flow that parsed uploaded documents, structured the extracted information, and exposed risk-oriented outputs in a clean full-stack product surface.",
    role: "Full-stack developer shaping the product flow, extraction pipeline, and reporting layer.",
    techStack: ["OCR pipelines", "Next.js", "TypeScript", "Analytics dashboards", "Risk scoring"],
    outcome: [
      "Reached 87% parse accuracy.",
      "Showed ability to turn document-heavy workflows into structured product systems.",
      "Added another proof point across applied AI and execution-heavy product building.",
    ],
    links: {
      liveDemo: "https://krrishkhanna.github.io/sebscan/",
      caseStudy: "/projects/sebscan",
    },
  },
  {
    slug: "product-strategy-portfolio",
    name: "Product Strategy Portfolio",
    tagline: "Operator-style product teardowns spanning India, Australia, and US AI products.",
    problem:
      "Most strategy writing stays abstract. Strong operators need to convert market analysis into actions, risks, and sequencing decisions.",
    insight:
      "A useful memo should make tradeoffs legible. Each teardown was structured around retention loops, growth levers, unit economics, and operator priorities.",
    built:
      "Created a portfolio of product strategy memos on companies like Blinkit, ixigo, Canva, Linktree, and Perplexity, with specific execution recommendations.",
    role: "Independent analyst connecting product insight to operational decision-making.",
    techStack: ["Research synthesis", "Product teardown frameworks", "Market analysis", "Structured writing"],
    outcome: [
      "Built a visible body of strategic thinking, not just shipped product work.",
      "Shows readiness for Founder's Office, product, and strategy roles.",
      "Creates a bridge between systems thinking and executive communication.",
    ],
    links: {
      caseStudy: "/product-strategy",
    },
  },
];

export const experiences = [
  {
    company: "KPMG India",
    role: "Technical Trainee Intern",
    period: "Enterprise data systems",
    summary:
      "Operated across three client teams, defined latency, accuracy, and adoption metrics under regulatory ambiguity, and drove go/no-go decisions toward enterprise rollout.",
    highlights: [
      "Enabled adoption across 10-20 stakeholders.",
      "Supported ingestion across 400k-500k records.",
      "Learned how to turn ambiguity into operating criteria.",
    ],
  },
  {
    company: "Samsung Research Institute",
    role: "R&D Operator",
    period: "LLM infrastructure optimization",
    summary:
      "Worked on compressed LLM performance bottlenecks using tensorized model environments and calibration workflows on high-performance GPU systems.",
    highlights: [
      "Contributed to 1.5x-2x inference speed improvements.",
      "Reduced memory demand by roughly 40%.",
      "Built intuition for AI unit economics and performance tradeoffs.",
    ],
  },
  {
    company: "Git Software Technologies",
    role: "AI Engineering & Operations Intern",
    period: "Global workflow systems",
    summary:
      "Built AI-powered retrieval workflows and modular enterprise connectors to reduce operational drag across distributed teams.",
    highlights: [
      "Cut query-to-insight time by 65%.",
      "Adapted existing codebases without waiting for a formal spec.",
      "Presented business impact directly to international stakeholders.",
    ],
  },
  {
    company: "Liftoff",
    role: "Growth Lead",
    period: "Leadership and community building",
    summary:
      "Led growth-facing work in a startup environment, contributing to community building, execution momentum, and exposure to operator-style startup motion.",
    highlights: [
      "Built leadership and ownership signal beyond internships alone.",
      "Strengthened startup exposure and execution credibility.",
      "Fits naturally with Founder’s Office and product-adjacent positioning.",
    ],
  },
];

export const leadership: LeadershipItem[] = [
  {
    title: "Growth Lead - Liftoff",
    category: "Leadership",
    detail: "Community building, startup exposure, and execution ownership in a growth-facing role.",
  },
  {
    title: "McKinsey Forward",
    category: "Leadership",
    detail: "Structured business problem-solving and strategic thinking development.",
  },
  {
    title: "Aspire Leaders Program",
    category: "Leadership",
    detail: "Leadership development with a strong emphasis on agency, communication, and impact.",
  },
  {
    title: "Top 1% Scholar",
    category: "Awards",
    detail: "Academic distinction reinforcing consistency and high performance.",
  },
  {
    title: "Best Working Model",
    category: "Awards",
    detail: "Recognition for building and presenting tangible working systems.",
  },
];

export const selectedCertifications: LeadershipItem[] = [
  {
    title: "AWS Certified Developer - Associate",
    category: "Certification",
    detail: "High-signal credibility for technical execution and cloud-native product work.",
  },
  {
    title: "Oracle AI Vector Search Certified Professional",
    category: "Certification",
    detail: "Reinforces applied AI positioning with modern retrieval and search relevance.",
  },
  {
    title: "CAPM (PMI)",
    category: "Certification",
    detail: "Adds project and execution discipline aligned with TPM and operator roles.",
  },
  {
    title: "Deloitte Data Analytics (Forage)",
    category: "Certification",
    detail: "Supports the analytics and structured decision-making side of the narrative.",
  },
  {
    title: "ISRO Geodata Processing",
    category: "Certification",
    detail: "Signals technical depth and comfort with structured problem domains.",
  },
];

export const perspectives: PerspectiveMode[] = [
  {
    id: "founder",
    label: "Founder Side",
    title: "What a founder gets",
    summary:
      "A high-agency operator who can move between ambiguity, systems design, product judgment, and execution speed without waiting for a perfect brief.",
    bullets: [
      "Frames messy problems into priorities and decisions.",
      "Connects product, operations, and stakeholder alignment.",
      "Optimizes for leverage, momentum, and ownership.",
    ],
  },
  {
    id: "operator",
    label: "Operator Side",
    title: "What an operator lens shows",
    summary:
      "A systems-first builder who cares about bottlenecks, measurable workflows, and turning chaos into something a team can actually run.",
    bullets: [
      "Defines metrics when they do not exist yet.",
      "Builds execution loops, not just output.",
      "Comfortable across business and technical layers.",
    ],
  },
  {
    id: "engineer",
    label: "Engineer Side",
    title: "What the engineering side shows",
    summary:
      "A product-minded engineer with enough technical depth to build, debug, iterate quickly, and reason about performance, infrastructure, and applied AI systems.",
    bullets: [
      "Shipped OCR, multilingual NLP, dashboards, and live translation flows.",
      "Worked on LLM latency and memory bottlenecks.",
      "Uses AI-native tooling to prototype and iterate fast.",
    ],
  },
];

export const strategyMemos: StrategyMemo[] = [
  {
    company: "Swiggy Instamart vs. Blinkit",
    region: "India",
    coreConflict:
      "Winning quick-commerce by balancing dark store density, routing latency, basket size, and contribution margin.",
    retentionLoop:
      "Subscriptions like Swiggy One and Gold reduce ordering friction and raise purchase frequency by making convenience feel free.",
    operatorTakeaway:
      "In high-frequency commerce, product strategy is inseparable from operations strategy: routing speed and basket economics decide the category.",
    priorities: [
      "Sharpen demand forecasting per dark store.",
      "Increase AOV through checkout upsells.",
      "Protect contribution margin per order.",
    ],
    risks: [
      "Cash burn from over-expansion.",
      "Rider and fulfillment cost inflation.",
      "Subscription fatigue reducing loyalty.",
    ],
    opportunities: [
      "Private-label SKUs with better margins.",
      "Retail-media monetization.",
      "Neighborhood-level personalization.",
    ],
  },
  {
    company: "ixigo",
    region: "India",
    coreConflict:
      "Serving price-sensitive and bandwidth-constrained travelers while monetizing a product that must first behave like a daily utility.",
    retentionLoop:
      "Free train-status and PNR tools create habitual utility, keeping monthly activity high before monetization happens through ancillary products.",
    operatorTakeaway:
      "Build the free habit loop first, then monetize with tightly embedded financial add-ons that feel native to the workflow.",
    priorities: [
      "Deepen the free-utility habit loop.",
      "Grow ancillary revenue from insurance and cancellation.",
      "Keep the app extremely lightweight.",
    ],
    risks: [
      "Low margins in core booking categories.",
      "Price wars across OTAs.",
      "Overdependence on one travel vertical.",
    ],
    opportunities: [
      "Embedded fintech layers.",
      "Regional-language expansion.",
      "Trust moat in Tier-2 and Tier-3 markets.",
    ],
  },
  {
    company: "Canva",
    region: "Australia",
    coreConflict:
      "Moving upmarket into enterprise value without breaking the product simplicity that made the product spread in the first place.",
    retentionLoop:
      "Collaboration invites and shared brand systems turn the product itself into a viral acquisition engine.",
    operatorTakeaway:
      "The best PLG systems hide complexity behind obvious workflows and make expansion feel like a natural consequence of usage.",
    priorities: [
      "Convert free creators into Teams.",
      "Embed AI features without UX bloat.",
      "Deepen lock-in with brand systems.",
    ],
    risks: [
      "AI design commoditization.",
      "Enterprise security expectations.",
      "Feature sprawl diluting simplicity.",
    ],
    opportunities: [
      "Vertical template packs.",
      "Virality into new organizations.",
      "Usage-based enterprise plans.",
    ],
  },
  {
    company: "Perplexity vs. OpenAI",
    region: "United States",
    coreConflict:
      "Competing for the future of search and synthesis by balancing fast retrieval, trustworthy answers, and interface clarity.",
    retentionLoop:
      "Collections and research spaces turn one-off questions into persistent knowledge assets, which increases repeat behavior from power users.",
    operatorTakeaway:
      "User-facing product wrapping can outperform raw model depth when the interface lowers time-to-value and keeps trust visible.",
    priorities: [
      "Maintain low-latency retrieval quality.",
      "Strengthen collaborative research surfaces.",
      "Make trust and sources legible in the interface.",
    ],
    risks: [
      "High model and infra costs.",
      "User trust erosion from hallucinations.",
      "Fast-moving competition on both models and UX.",
    ],
    opportunities: [
      "Vertical answer engines.",
      "Team knowledge workspaces.",
      "Workflow integrations beyond chat.",
    ],
  },
];

export const writing: WritingPiece[] = [
  {
    slug: "operators-dont-wait-for-perfect-specs",
    title: "Operators Don't Wait for Perfect Specs",
    summary:
      "A short reflection on why leverage often comes from defining the decision surface, not just executing the task.",
    category: "Execution",
    readTime: "4 min",
    body: [
      "The highest-leverage people I have seen are rarely waiting for a fully clarified brief. They define what success should look like, reduce ambiguity into decision criteria, and start moving.",
      "In practice that usually means figuring out which metric actually matters, which bottleneck is causing the slowdown, and what information is sufficient to make the next call. Not all ambiguity should be explored. Most of it should be compressed.",
      "That mindset is why I gravitate toward operator work. The value is not just in shipping the thing. It is in creating the system that makes shipping possible in the first place.",
    ],
  },
  {
    slug: "ai-changes-the-shape-of-good-judgment",
    title: "AI Changes the Shape of Good Judgment",
    summary:
      "Why faster tools increase the premium on sequencing, prioritization, and taste instead of removing the need for them.",
    category: "AI",
    readTime: "5 min",
    body: [
      "AI makes execution cheaper, but that does not make judgment optional. It just moves the bottleneck. When more things can be built quickly, choosing the right thing to build becomes even more important.",
      "I think that is why operators who understand both systems and users will become more valuable. They can compress the path from idea to reality without mistaking activity for progress.",
      "The teams that benefit most from AI will be the ones that treat it as a leverage layer across research, product, operations, and communication rather than a novelty inside one function.",
    ],
  },
  {
    slug: "building-for-india-means-designing-for-constraints",
    title: "Building for India Means Designing for Constraints",
    summary:
      "A note on how scale, price sensitivity, and reliability constraints should shape product decisions from day one.",
    category: "Product Strategy",
    readTime: "4 min",
    body: [
      "One reason India is such a strong product school is that weak assumptions get exposed quickly. If onboarding takes too long, if an app is too heavy, if pricing is too optimistic, users feel it immediately.",
      "Constraint-heavy markets make you design for actual value rather than aesthetic convenience. That pressure teaches you to think about trust, latency, affordability, and habit loops together.",
      "That lens has influenced how I think about products more broadly. Good strategy is usually an answer to a real constraint, not just an abstract market opportunity.",
    ],
  },
];

export const resumeVariants = [
  {
    title: "Founder's Office / Technical Operator Resume",
    file: "/resumes/krrish-khanna-founders-office.txt",
    description:
      "Emphasizes leverage, ambiguity handling, cross-functional ownership, and execution systems.",
  },
  {
    title: "Product Resume",
    file: "/resumes/krrish-khanna-product.txt",
    description:
      "Frames shipped work through product discovery, user value, metrics, and prioritization.",
  },
  {
    title: "TPM Resume",
    file: "/resumes/krrish-khanna-tpm.pdf",
    description:
      "Highlights systems thinking, coordination, process design, delivery clarity, and reliability.",
  },
];
