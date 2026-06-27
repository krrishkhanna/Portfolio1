export type NavItem = {
  href: string;
  label: string;
};

export type ModeNavigation = {
  primary: NavItem[];
  secondary: NavItem[];
};

export type SocialLink = {
  label: string;
  href?: string;
  note?: string;
};

export type ImpactStat = {
  label: string;
  value: string;
};

export type Experience = {
  company: string;
  role: string;
  period: string;
  summary: string;
  ambiguity: string;
  structured: string;
  changed: string;
  proved: string;
  highlights: string[];
};

export type LeadershipItem = {
  title: string;
  category: string;
  detail: string;
};

export type Recommendation = {
  person: string;
  context: string;
  status: string;
  note: string;
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
  improveNext: string;
  users?: string[];
  overview?: string;
  productDecisions?: string[];
  systemArchitecture?: string[];
  technicalArchitecture?: {
    frontend: string[];
    backend: string[];
    intelligence: string[];
  };
  intelligenceComponents?: string[];
  metrics?: { label: string; value: string }[];
  engineeringTradeoffs?: string[];
  roadmap?: { phase: string; detail: string }[];
  lessonsLearned?: string[];
  proofItems?: { label: string; href?: string; note?: string }[];
  operatorSummary?: string;
  aiSummary?: string;
  operatorProof?: string;
  aiProof?: string;
  operatorBestFor?: string;
  aiBestFor?: string;
  links: {
    liveDemo?: string;
    github?: string;
    caseStudy: string;
  };
};

export type PerspectiveMode = {
  id: "operator" | "ai";
  label: string;
  title: string;
  summary: string;
  bullets: string[];
};

export type StrategyMemo = {
  company: string;
  product?: string;
  theme: string;
  whatIAnalyzed: string;
  keyQuestion: string;
  operatorLens: string;
  region: string;
  coreConflict: string;
  retentionLoop: string;
  operatorTakeaway: string;
  priorities: string[];
  risks: string[];
  opportunities: string[];
};

export type WritingPiece = {
  slug: string;
  title: string;
  summary: string;
  category: string;
  readTime: string;
  body: string[];
};

export type ResumeVariant = {
  title: string;
  file?: string;
  description: string;
  availabilityLabel?: string;
  track?: "operator" | "ai";
};

export type ProofCard = {
  title: string;
  category:
    | "Research & Technical Work"
    | "Industry Experience"
    | "Shipped Products"
    | "Leadership & Global Programs"
    | "Awards & Recognition"
    | "Selected Credentials";
  explanation: string;
  whyItMatters: string;
  relatedTheme: string;
  href?: string;
  githubHref?: string;
  asset?: string;
  docHref?: string;
  proofStatus?: "available" | "missing";
  missingLabel?: string;
};

export type ResearchCaseStudy = {
  slug: string;
  title: string;
  subtitle: string;
  overview: string;
  originalResearch: string;
  myImplementation: string;
  researchProblem: string[];
  paperSummary: string[];
  implementation: string[];
  architecture: string[];
  engineeringChallenges: string[];
  learnings: string[];
  futureWork: string[];
  tags: string[];
  metrics: { label: string; value: string }[];
  tradeoffs: string[];
  roadmap: { phase: string; detail: string }[];
  lessons: string[];
  proof: {
    github: string;
    liveDemo: string;
    paper: string;
    implementationNotes: string;
    readme: string;
  };
};

export type StartupSection = {
  title: string;
  body: string[];
};

export const site = {
  name: "Krrish Khanna",
  title: "Technical Operator",
  subtitle: "AI × Product × Strategy × Operations",
  statement: "Building Products. Designing Systems. Driving Execution.",
  positioningLine: "Operator for ambiguous, high-ownership environments",
  notionPortfolioUrl:
    "https://app.notion.com/p/Krrish-Khanna-Technical-Operator-Founder-s-Office-Portfolio-1821ca4b3e444150ad496c04d7feb168",
  url: "https://portfolio-website-zeta-ten-69.vercel.app",
  description:
    "Personal portfolio for Krrish Khanna, a Technical Operator working across AI, product, strategy, and operations with a systems-minded, high-ownership approach.",
  email: "krrishkhanna08@gmail.com",
  location: "Chennai, India",
  socials: [
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/krrishkhanna/",
    },
    {
      label: "Instagram",
      href: "https://www.instagram.com/krrishkhanna27?igsh=MXFycWpraXU3Znh6MQ%3D%3D&utm_source=qr",
    },
    {
      label: "Notion Portfolio",
      href: "https://app.notion.com/p/Krrish-Khanna-Technical-Operator-Founder-s-Office-Portfolio-1821ca4b3e444150ad496c04d7feb168",
    },
    {
      label: "GitHub",
      href: "https://github.com/krrishkhanna",
    },
    {
      label: "Email",
      href: "mailto:krrishkhanna08@gmail.com",
    },
  ] satisfies SocialLink[],
};

export const navigation: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
  { href: "/product-strategy", label: "Product Strategy" },
  { href: "/ai-lab", label: "AI Lab" },
  { href: "/research", label: "Research" },
  { href: "/thinking", label: "Thinking" },
  { href: "/proof-of-work", label: "Proof" },
  { href: "/resume", label: "Resume" },
];

export const modeNavigation: Record<"operator" | "ai", ModeNavigation> = {
  operator: {
    primary: [
      { href: "/", label: "Home" },
      { href: "/experience", label: "Experience" },
      { href: "/projects", label: "Products" },
      { href: "/product-strategy", label: "Product Strategy" },
      { href: "/thinking", label: "Thinking" },
      { href: "/proof-of-work", label: "Proof" },
      { href: "/resume", label: "Resume" },
    ],
    secondary: [
      { href: "/ai-lab", label: "AI Lab" },
      { href: "/research", label: "Research" },
    ],
  },
  ai: {
    primary: [
      { href: "/", label: "Home" },
      { href: "/ai-lab", label: "AI Lab" },
      { href: "/projects", label: "Applied AI Systems" },
      { href: "/research", label: "Research" },
      { href: "/experience", label: "Experience" },
      { href: "/proof-of-work", label: "Proof" },
      { href: "/resume", label: "Resume" },
    ],
    secondary: [
      { href: "/product-strategy", label: "Product Strategy" },
      { href: "/thinking", label: "Thinking" },
    ],
  },
};

export const impactStats: ImpactStat[] = [
  { value: "500k+", label: "records processed" },
  { value: "20+", label: "stakeholders enabled" },
  { value: "4+", label: "shipped product projects" },
  { value: "10+", label: "product strategy memos" },
  { value: "1.5-2x", label: "LLM inference speed improvement" },
  { value: "40%", label: "memory reduction" },
  { value: "9.57", label: "CGPA" },
  { value: "India × Japan × UK", label: "exposure" },
];

export const experiences: Experience[] = [
  {
    company: "KPMG India",
    role: "Technical Trainee Intern - Govt. & Public Services",
    period: "Regulatory intelligence workflow",
    summary:
      "Transformed an ambiguous regulatory intelligence workflow into a structured operational system adopted by 20+ stakeholders and supporting ingestion across 500k+ records.",
    ambiguity:
      "The workflow sat inside regulatory ambiguity, with multiple stakeholders, unclear requirements, and no shared definition of success across teams.",
    structured:
      "Scoped requirements across client teams, defined success metrics around latency, accuracy, and adoption, and brought operating structure to a workflow that initially had no clear decision system.",
    changed:
      "The resulting pipeline gained real internal adoption, enabled 20+ stakeholders, and supported ingestion across 500k+ records with clearer operating criteria.",
    proved:
      "It proved that I work well when the brief is incomplete, the stakeholders are varied, and someone needs to turn ambiguity into a usable system.",
    highlights: [
      "Scoped requirements across multiple stakeholder groups.",
      "Defined success metrics instead of waiting for them to be handed down.",
      "Worked through regulatory ambiguity and adoption risk.",
      "Built operational structure around a messy workflow.",
      "Drove toward adoption, not just output.",
    ],
  },
  {
    company: "Samsung Research Institute",
    role: "R&D Operator",
    period: "Compressed LLM inference pipelines",
    summary:
      "Worked on compressed LLM inference pipelines, translating technical experimentation into engineering trade-off decisions.",
    ambiguity:
      "The work involved performance bottlenecks where many possible experiments existed, but only a few would meaningfully improve latency and memory behavior.",
    structured:
      "Focused experimentation around Activation-Aware SVD, NVIDIA A100 testing, and the specific points where compressed LLMs were losing efficiency.",
    changed:
      "The work contributed to 1.5-2x inference speed improvement and 40% memory reduction while making the trade-offs more legible.",
    proved:
      "It proved that I can move between technical experimentation and practical engineering recommendations, not just run experiments in isolation.",
    highlights: [
      "Worked with Activation-Aware SVD for compressed model optimization.",
      "Ran experimentation on NVIDIA A100 infrastructure.",
      "Contributed to 1.5-2x inference speed improvement.",
      "Supported roughly 40% memory reduction.",
      "Turned experimentation into technical recommendations and trade-off thinking.",
    ],
  },
  {
    company: "Git Software Technologies",
    role: "AI Engineering & Operations Intern",
    period: "Enterprise knowledge retrieval",
    summary:
      "Built AI-powered knowledge retrieval workflows that reduced query-to-insight time and helped centralize fragmented enterprise knowledge.",
    ambiguity:
      "The challenge was fragmented internal knowledge, distributed stakeholders, and disconnected data sources with no single clean spec.",
    structured:
      "Built modular connectors and AI retrieval workflows that made scattered information easier to access, benchmark, and use.",
    changed:
      "Query-to-insight time dropped by 65%, and the team gained a more centralized way to move through internal knowledge quickly.",
    proved:
      "It proved that I can translate messy information systems into workflows that make teams faster without overcomplicating the solution.",
    highlights: [
      "Built AI-powered retrieval workflows for fragmented enterprise knowledge.",
      "Reduced query-to-insight time by 65%.",
      "Adapted existing systems without waiting for a complete spec.",
      "Worked across distributed teams and feedback loops.",
      "Balanced technical implementation with operational usability.",
    ],
  },
  {
    company: "Liftoff",
    role: "Growth Lead",
    period: "Student builders and execution cadence",
    summary:
      "Helped drive community growth around student builders and side projects through execution, partnerships, and operating cadence.",
    ambiguity:
      "Community-led initiatives can drift quickly when growth, partnerships, content, and events all compete for attention without a clear rhythm.",
    structured:
      "Framed the role around consistent execution: builder-focused programming, partnerships, content, and the operating cadence needed to keep momentum real.",
    changed:
      "The work strengthened startup exposure and leadership signal while showing that I enjoy building momentum, not just participating in it.",
    proved:
      "It proved that I can contribute in founder-adjacent environments where the work is part operations, part growth, and part execution discipline.",
    highlights: [
      "Worked around community growth for student builders and side projects.",
      "Contributed through execution, partnerships, events, and content.",
      "Helped create operating cadence instead of one-off activity.",
      "Strengthened startup and founder-adjacent exposure.",
      "Added leadership signal without feeling disconnected from execution.",
    ],
  },
];

export const leadership: LeadershipItem[] = [
  {
    title: "McKinsey Forward Program",
    category: "Leadership & Global Programs",
    detail:
      "Leadership, problem-solving, communication, adaptability, and digital skills development through McKinsey.org.",
  },
  {
    title: "Aspire Leaders Program",
    category: "Leadership & Global Programs",
    detail:
      "Global leadership development focused on career readiness, cross-cultural growth, and high-potential student leadership.",
  },
  {
    title: "Waseda University Exchange",
    category: "Leadership & Global Programs",
    detail:
      "Adds real global exposure and a sharper lens on systems, discipline, and cross-cultural working styles through Japan.",
  },
  {
    title: "Growth Lead - Liftoff",
    category: "Leadership & Global Programs",
    detail:
      "Community growth and execution work across outreach, content, engagement, and operating cadence for student builders.",
  },
  {
    title: "Top 1% Scholar",
    category: "Awards",
    detail:
      "Academic consistency that supports the broader pattern of disciplined execution.",
  },
  {
    title: "Best Working Model",
    category: "Awards",
    detail:
      "Recognition for building something tangible, functional, and presentation-ready.",
  },
];

export const selectedCredentials: LeadershipItem[] = [
  {
    title: "AWS Certified Developer - Associate",
    category: "Credential",
    detail: "Strong technical credibility for cloud-native execution.",
  },
  {
    title: "Oracle AI Vector Search Certified Professional",
    category: "Credential",
    detail: "Relevant signal for modern AI retrieval and applied search workflows.",
  },
  {
    title: "CAPM",
    category: "Credential",
    detail: "Adds structured execution and project discipline for TPM-adjacent roles.",
  },
  {
    title: "ISRO Geodata Processing",
    category: "Credential",
    detail: "Signals comfort with structured technical problem-solving.",
  },
];

export const recommendations: Recommendation[] = [
  {
    person: "Professor Tetsuya Sakai",
    context: "Recommendation received for NTCIR work",
    status: "Available",
    note: "Recommendation exists. Exact text intentionally not reproduced here.",
  },
  {
    person: "Professor Vadivu G",
    context: "Recommendation focused on research independence and structured thinking",
    status: "Available",
    note: "Included as a named mentor reference only. Exact recommendation text is intentionally not reproduced here.",
  },
];

export const projects: Project[] = [
  {
    slug: "lucid-ai",
    name: "Lucid AI",
    tagline: "Cognitive analytics platform for attention, focus, recovery, and explainable behavioral insight.",
    overview:
      "Lucid AI is a cognitive analytics platform designed to help users track focus, attention, cognitive load, recovery, and behavioral patterns over time. It uses daily check-ins and structured signals to generate explainable insights, forecasts, and recommendations through a dashboard-first interface.",
    problem:
      "People often know they are distracted, tired, or inconsistent, but they rarely have a structured system to understand why. Lucid AI turns subjective daily signals into measurable cognitive patterns and actionable recommendations.",
    insight:
      "The key insight was that explainable scoring and structured behavioral signals create more trust than a black-box wellness predictor. The useful wedge was not generic AI chat, but a system that makes focus quality, recovery needs, and weekly patterns legible enough to act on.",
    built:
      "Built a full-stack intelligence platform that converts daily check-ins and attention signals into explainable scores, pattern detection, forecasts, recovery recommendations, and weekly reports.",
    role:
      "Owned product framing, cognitive workflow design, dashboard UX, backend intelligence architecture, recommendation logic, and full-stack delivery from concept to working system.",
    techStack: ["Next.js", "TypeScript", "Tailwind", "FastAPI", "PostgreSQL", "SQLAlchemy", "Recharts", "JWT"],
    users: ["Students", "Builders", "Founders", "Operators", "Knowledge workers", "People improving focus and consistency"],
    productDecisions: [
      "Daily check-ins were chosen as the input layer because they create a lightweight but structured source of behavioral signal.",
      "The dashboard became central to the product because raw scores alone are not useful unless users can see trends, context, and recommendations clearly.",
      "Explainable scoring was prioritized over black-box prediction so users can understand why a recommendation or forecast exists.",
      "Weekly reports were included to help users step back from daily noise and reflect on broader performance patterns.",
      "Recommendations are grounded in observed behavior rather than generic productivity advice, which makes the system feel more trustworthy.",
    ],
    systemArchitecture: [
      "Daily Check-ins",
      "Signal Extraction",
      "Cognitive Scoring Engine",
      "Pattern Detection",
      "Prediction Services",
      "Recovery Planning",
      "Weekly Reports",
      "User Dashboard",
    ],
    technicalArchitecture: {
      frontend: ["Next.js", "TypeScript", "Tailwind", "Dashboard UI", "Recharts", "Focus timer", "Check-ins", "Reports"],
      backend: ["FastAPI", "SQLAlchemy", "JWT authentication", "PostgreSQL", "SQLite fallback", "Modular intelligence services", "API-driven architecture"],
      intelligence: ["Cognitive scoring engine", "Pattern detection", "Prediction service", "Recommendation logic", "Weekly reports", "Recovery planning"],
    },
    intelligenceComponents: [
      "Behavioral signal processing",
      "Explainable scoring",
      "Forecasting",
      "Pattern detection",
      "Recommendation engine",
      "Weekly intelligence reports",
      "Recovery planning",
      "Future LLM reflection layer as roadmap",
    ],
    metrics: [
      { label: "Check-ins processed", value: "TODO" },
      { label: "Prediction accuracy", value: "TODO" },
      { label: "Average report generation time", value: "TODO" },
      { label: "Focus score improvement", value: "TODO" },
      { label: "User retention", value: "TODO" },
      { label: "API response latency", value: "TODO" },
    ],
    engineeringTradeoffs: [
      "Deterministic scoring vs black-box ML",
      "Explainability vs model complexity",
      "PostgreSQL vs SQLite fallback",
      "Real-time dashboard vs batch weekly reports",
      "User simplicity vs richer data collection",
      "Fast MVP vs advanced personalization",
    ],
    roadmap: [
      { phase: "Phase 1", detail: "Daily check-ins, scoring, dashboard, and weekly reports." },
      { phase: "Phase 2", detail: "Better forecasting, trend analysis, and recommendation refinement." },
      { phase: "Phase 3", detail: "LLM reflection layer for weekly summaries and personalized action plans." },
      { phase: "Phase 4", detail: "AI coach, integrations, team dashboards, and advanced analytics." },
    ],
    lessonsLearned: [
      "Applied AI does not always mean using the biggest model.",
      "Explainability matters in personal analytics and decision-support systems.",
      "Good dashboards convert raw signals into decisions rather than just displaying charts.",
      "AI products need strong data structure before advanced models become useful.",
      "Recommendations are only helpful when users understand why they are being suggested.",
    ],
    proofItems: [
      { label: "GitHub", href: "https://github.com/krrishkhanna/lucid-ai" },
      { label: "Live demo", note: "TODO" },
      { label: "Screenshots", note: "TODO" },
      { label: "Architecture diagram", note: "TODO" },
      { label: "Walkthrough video", note: "TODO" },
      { label: "README", href: "https://github.com/krrishkhanna/lucid-ai#readme" },
    ],
    outcome: [
      "Added a stronger applied AI product story that combines analytics, backend systems, recommendations, and user-facing dashboards.",
      "Showed how messy self-reported attention and energy signals can be translated into structured insights and decision support.",
      "Created a product that reinforces both operator-side product thinking and AI-lab-side systems reasoning.",
    ],
    improveNext:
      "I would make the forecasting layer more measurable, sharpen recommendation quality through better feedback loops, and expand the system toward a more personalized reflection layer once the data foundation is stronger.",
    operatorSummary:
      "Turns messy self-reported attention and energy signals into structured insights, helping users understand focus quality, recovery needs, and behavioral patterns.",
    aiSummary:
      "Combines behavioral signal processing, explainable scoring, prediction services, and recommendation logic into a dashboard-first applied AI system.",
    operatorProof: "Scoring, recommendations, dashboard UX, and cognitive analytics engine. Metrics: TODO.",
    aiProof: "Signals -> scoring -> pattern detection -> forecasting -> recommendations -> dashboard. Metrics: TODO.",
    operatorBestFor: "Applied AI + Product",
    aiBestFor: "Applied AI + Behavioral Systems",
    links: {
      github: "https://github.com/krrishkhanna/lucid-ai",
      caseStudy: "/projects/lucid-ai",
    },
  },
  {
    slug: "odinsub",
    name: "OdinSub",
    tagline: "Live translation engine designed to make cross-language communication feel ambient instead of clunky.",
    problem:
      "Real-time multilingual communication is still fragmented across meetings, streams, and day-to-day device use, especially when users need subtitles outside a single conferencing app.",
    insight:
      "The strongest wedge was not another meeting tool. It was an always-available overlay experience paired with clearer packaging around who the product is actually for.",
    built:
      "Co-built a live subtitles and translation system spanning Windows and Android with support for 100+ languages, real pricing tiers, and an early go-to-market motion.",
    role:
      "Co-founder and technical operator driving product framing, execution priorities, system shaping, and shipping velocity.",
    techStack: ["Next.js", "TypeScript", "Speech APIs", "Cloud infrastructure", "Product analytics"],
    outcome: [
      "Shipped a live product instead of a static demo.",
      "Structured monetization from day one through Free, Pro, and Enterprise tiers.",
      "Created a stronger proof point for 0-to-1 product thinking plus execution.",
    ],
    improveNext:
      "I would strengthen onboarding, add clearer activation metrics, and test which user segment has the strongest willingness to pay: students, creators, language learners, or enterprise teams.",
    operatorSummary:
      "Live translation product with pricing, onboarding, platform roadmap, GTM packaging, and clear user segmentation.",
    aiSummary:
      "Speech and translation workflow spanning live overlays, platform delivery, and real-time multilingual user experience.",
    operatorProof: "Live product, Free/Pro/Enterprise pricing, onboarding, GTM, and platform roadmap.",
    aiProof: "Real-time translation workflow, voice interface surface, and speech-driven product system.",
    operatorBestFor: "Product + GTM",
    aiBestFor: "Speech AI + Platform Systems",
    links: {
      liveDemo: "https://odinsub.com/",
      caseStudy: "/projects/odinsub",
    },
  },
  {
    slug: "veriload",
    name: "VeriLoad",
    tagline: "Dispatch reconciliation & validation platform built solo under ambiguous operating requirements.",
    problem:
      "Manual dispatch reconciliation is slow, error-prone, and usually held together by ad hoc checks rather than a dependable validation system.",
    insight:
      "The first job was not interface polish. It was making the validation core trustworthy enough to support real operator decisions.",
    built:
      "Scoped the product independently, engineered the validation logic, tested it across 120+ scenarios, and shipped a stakeholder-facing dashboard end to end.",
    role:
      "Solo builder owning problem framing, product definition, validation engine logic, dashboard delivery, and iteration.",
    techStack: ["Next.js", "TypeScript", "Python", "Validation heuristics", "Dashboard UX"],
    outcome: [
      "Reached 91% validation accuracy.",
      "Proved I can move from ambiguous operations pain to a usable product system.",
      "Shipped a real operator-facing workflow without needing a handed-down spec.",
    ],
    improveNext:
      "I would add a clearer exception-management workflow, improve audit trails, and test whether operations teams need a reconciliation dashboard, alerting layer, or API-first workflow most urgently.",
    operatorSummary:
      "Ambiguous enterprise workflow turned into a structured reconciliation product with validation logic, dashboard UX, and stakeholder-facing delivery.",
    aiSummary:
      "Validation and decision-support workflow combining heuristics, structured analytics, and operator-facing system design.",
    operatorProof: "91% reconciliation accuracy across 120+ test scenarios.",
    aiProof: "Validation system, decision support, heuristics, and structured analytics.",
    operatorBestFor: "TPM + Operations",
    aiBestFor: "Decision Systems + Applied AI",
    links: {
      liveDemo: "https://krrishkhanna.github.io/veriload/",
      github: "https://github.com/krrishkhanna/veriload",
      caseStudy: "/projects/veriload",
    },
  },
  {
    slug: "vachan",
    name: "Vachan",
    tagline: "Multilingual fact-checking platform built around high-volume claim analysis and clearer trust signals.",
    problem:
      "Cross-lingual misinformation workflows break down when teams need to process large volumes of claims across multiple sources without losing transparency.",
    insight:
      "Improving the model alone was not enough. The system needed observable quality metrics and a workflow that made the outputs easier to trust.",
    built:
      "Designed a multi-source NLP pipeline for 15,000+ claims, iterated with AI-native workflows to improve precision, and surfaced quality and throughput through a live dashboard.",
    role:
      "Full-stack product engineer translating backend complexity into something usable, measurable, and easier to reason about.",
    techStack: ["NLP pipelines", "LLM-assisted iteration", "Data dashboards", "TypeScript", "Model evaluation"],
    outcome: [
      "Improved precision by 28% over baseline.",
      "Created better visibility into pipeline performance and trust signals.",
      "Showed comfort working where data systems and product execution intersect.",
    ],
    improveNext:
      "I would improve source trust scoring, add human-in-the-loop review for sensitive claims, and focus the product around one high-frequency user segment instead of trying to serve all misinformation use cases at once.",
    operatorSummary:
      "Trust-oriented product built around multilingual claims, quality visibility, and clearer operational insight into misinformation workflows.",
    aiSummary:
      "Multilingual NLP platform processing 15K+ claims with 28% precision improvement and better evaluation visibility.",
    operatorProof: "Product execution across trust workflows, dashboards, and measurable quality improvement.",
    aiProof: "15K+ claims processed and 28% precision improvement over baseline.",
    operatorBestFor: "Product + Trust Systems",
    aiBestFor: "NLP + Trust Systems",
    links: {
      liveDemo: "https://vachan-1.netlify.app/landing",
      github: "https://github.com/krrishkhanna/Vachan-",
      caseStudy: "/projects/vachan",
    },
  },
  {
    slug: "product-strategy-portfolio",
    name: "Product Strategy Portfolio",
    tagline: "A memo library for studying how products grow, retain, monetize, and create operational leverage.",
    problem:
      "Most strategy work sounds intelligent without becoming operationally useful. Strong product thinking should produce clearer priorities, not just cleaner prose.",
    insight:
      "The value of a memo is not the teardown itself. It is whether the analysis becomes a better question, a sharper trade-off, or a clearer decision frame.",
    built:
      "Created a portfolio of strategy memos across India, Australia, and US tech products, focusing on growth loops, monetization, retention, unit economics, and AI-native product behavior.",
    role:
      "Independent product strategy writer using structured analysis to understand how systems create outcomes.",
    techStack: ["Research synthesis", "Product teardown frameworks", "Market analysis", "Structured writing"],
    outcome: [
      "Built visible proof of product and operator thinking beyond shipped engineering work.",
      "Created a stronger bridge between systems thinking and executive communication.",
      "Made the website feel like a body of work rather than a resume surface.",
    ],
    improveNext:
      "I would turn the memos into a searchable library with tags for growth, retention, monetization, marketplace dynamics, and AI-native product strategy.",
    operatorSummary:
      "Portfolio of investment-style product memos showing prioritization, tradeoffs, growth logic, and strategic thinking before building.",
    aiSummary:
      "Product strategy lens for AI-native behavior, monetization, retention, and market tradeoffs.",
    operatorProof: "10+ investment-style product memos across India, Australia, and US products.",
    aiProof: "AI-native product strategy analysis with growth, retention, and workflow reasoning.",
    operatorBestFor: "Founder's Office + Product",
    aiBestFor: "AI Product Strategy",
    links: {
      caseStudy: "/product-strategy",
    },
  },
  {
    slug: "sebscan",
    name: "SebScan",
    tagline: "Health-tech OCR and risk analytics workflow built to make document-heavy review faster and more legible.",
    problem:
      "Health and insurance-style document workflows become slow and error-prone when parsing is manual, fragmented, and difficult to benchmark.",
    insight:
      "The value was not just extracting text. It was structuring the workflow so risky information could surface more clearly and consistently.",
    built:
      "Built a health-tech OCR and risk analytics workflow with a live demo surface, document parsing flow, and clearer downstream review outputs.",
    role:
      "Full-stack developer shaping both the product surface and the underlying workflow logic.",
    techStack: ["Next.js", "TypeScript", "OCR workflows", "Document parsing", "Risk analytics"],
    outcome: [
      "Reached 87% parse accuracy.",
      "Added another proof point for turning messy input data into usable decision support.",
      "Strengthened the portfolio’s operator-through-systems narrative beyond one domain.",
    ],
    improveNext:
      "I would improve exception handling for low-confidence parses, make reviewer feedback loops tighter, and identify which document types create the biggest operational upside first.",
    operatorSummary:
      "Document-heavy health-tech workflow turned into a cleaner review system with OCR, risk analytics, and decision support.",
    aiSummary:
      "OCR and parsing workflow with 87% parse accuracy across document-heavy operational flows.",
    operatorProof: "Structured health-tech review workflow with OCR and downstream risk visibility.",
    aiProof: "87% parse accuracy and document-AI workflow logic.",
    operatorBestFor: "Operations + Health-tech",
    aiBestFor: "Computer Vision + Document AI",
    links: {
      liveDemo: "https://krrishkhanna.github.io/sebscan/",
      github: "https://github.com/krrishkhanna/sebscan",
      caseStudy: "/projects/sebscan",
    },
  },
];

export const perspectives: PerspectiveMode[] = [
  {
    id: "operator",
    label: "Founder / Product / TPM",
    title: "Operator track",
    summary:
      "The side of the profile built for founder’s office, product, strategy, operations, and TPM-style roles where ambiguous execution and decision quality matter most.",
    bullets: [
      "Brings structure to ambiguous, high-ownership work.",
      "Connects product, operations, strategy, and stakeholder alignment.",
      "Translates messy requirements into systems, shipped products, and measurable outcomes.",
    ],
  },
  {
    id: "ai",
    label: "AI Systems",
    title: "AI systems track",
    summary:
      "The side of the profile built for applied AI, AI systems, and infra-adjacent roles where model performance, retrieval systems, automation, and production workflow quality matter.",
    bullets: [
      "LLM inference, compression, and performance trade-offs.",
      "RAG, enterprise retrieval, and AI-powered knowledge workflows.",
      "AI-native product building across translation, OCR, validation, and fact-checking systems.",
    ],
  },
];

export const strategyMemos: StrategyMemo[] = [
  {
    company: "Swiggy Instamart vs. Blinkit",
    theme: "Marketplace dynamics",
    whatIAnalyzed:
      "Dark store economics, AOV expansion, routing speed, and how subscription loops change ordering behavior in quick commerce.",
    keyQuestion:
      "What actually creates a durable edge in a low-margin category where convenience feels commoditized?",
    operatorLens:
      "The winner is not the one with the flashiest product surface. It is the one that turns density, routing, and basket economics into repeatable operating leverage.",
    region: "India",
    coreConflict:
      "Winning quick commerce by balancing dark store density, routing latency, basket size, and contribution margin.",
    retentionLoop:
      "Subscription layers reduce friction and turn discretionary ordering into a more habitual behavior loop.",
    operatorTakeaway:
      "In high-frequency commerce, product strategy and operations strategy are the same conversation.",
    priorities: [
      "Sharpen demand forecasting per dark store.",
      "Increase AOV through smarter checkout expansion.",
      "Protect contribution margin per order.",
    ],
    risks: [
      "Cash burn from over-expansion.",
      "Fulfillment cost inflation.",
      "Subscription fatigue weakening retention.",
    ],
    opportunities: [
      "Private-label margins.",
      "Retail media revenue.",
      "Neighborhood-level personalization.",
    ],
  },
  {
    company: "ixigo",
    theme: "Retention",
    whatIAnalyzed:
      "How a product becomes a daily utility first and a monetization engine second through low-friction behavior loops.",
    keyQuestion:
      "How do you win emerging consumer markets where bandwidth is limited and users are extremely price sensitive?",
    operatorLens:
      "Build the habit before you build the margin. Utility creates the right to monetize later.",
    region: "India",
    coreConflict:
      "Serving price-sensitive and bandwidth-constrained travelers while keeping the product useful enough to stay top of mind.",
    retentionLoop:
      "Free train-status and PNR tools create repeat behavior before monetization happens through embedded ancillaries.",
    operatorTakeaway:
      "Low-friction utility is often the strongest retention engine in constraint-heavy markets.",
    priorities: [
      "Deepen the free-utility habit loop.",
      "Grow ancillary revenue from insurance and cancellation.",
      "Keep the app extremely lightweight.",
    ],
    risks: [
      "Low core margins.",
      "OTA price wars.",
      "Too much dependence on one vertical.",
    ],
    opportunities: [
      "Embedded fintech layers.",
      "Regional-language expansion.",
      "Trust moat in Tier-2 and Tier-3 markets.",
    ],
  },
  {
    company: "Canva",
    theme: "Growth loops",
    whatIAnalyzed:
      "Virality through collaboration, enterprise expansion without complexity bloat, and the role of AI as an interface decision.",
    keyQuestion:
      "How do you keep simplicity while moving into more valuable organizational workflows?",
    operatorLens:
      "The strongest PLG products build expansion into the product loop itself instead of outsourcing it to sales theater.",
    region: "Australia",
    coreConflict:
      "Moving upmarket into enterprise value without breaking the simplicity that made the product spread in the first place.",
    retentionLoop:
      "Collaboration invites and shared brand systems turn the product into a built-in acquisition and lock-in engine.",
    operatorTakeaway:
      "Growth compounds when the product does the distribution work on its own.",
    priorities: [
      "Convert more creators into teams.",
      "Embed AI without UX clutter.",
      "Deepen lock-in through brand systems.",
    ],
    risks: [
      "AI design commoditization.",
      "Enterprise compliance pressure.",
      "Feature sprawl diluting simplicity.",
    ],
    opportunities: [
      "Vertical templates.",
      "Virality into new organizations.",
      "Usage-based enterprise packaging.",
    ],
  },
  {
    company: "Perplexity vs. OpenAI",
    theme: "AI-native workflows",
    whatIAnalyzed:
      "Answer engine behavior, trust surfaces, retrieval quality, and how interface design shapes perceived product intelligence.",
    keyQuestion:
      "In AI-native products, where does the product edge really come from: the model, the wrapper, or the workflow design?",
    operatorLens:
      "Interface clarity and time-to-value can create a stronger user edge than raw model sophistication alone.",
    region: "United States",
    coreConflict:
      "Competing for the future of search and synthesis through a combination of trust, speed, and interface quality.",
    retentionLoop:
      "Collections and spaces turn one-off prompts into reusable knowledge assets that encourage repeat behavior.",
    operatorTakeaway:
      "AI products win when they make trust, workflow, and speed feel native instead of bolted on.",
    priorities: [
      "Maintain low-latency retrieval quality.",
      "Strengthen collaborative research surfaces.",
      "Make trust and sources visible in the interface.",
    ],
    risks: [
      "High infra costs.",
      "Trust erosion from hallucinations.",
      "Rapid model and UX competition.",
    ],
    opportunities: [
      "Vertical answer engines.",
      "Team knowledge workflows.",
      "Deeper integrations into everyday work.",
    ],
  },
];

export const writing: WritingPiece[] = [
  {
    slug: "why-im-drawn-to-messy-problems",
    title: "Why I’m Drawn to Messy Problems",
    summary:
      "A reflection on systems thinking, ambiguity, ownership, and why I’m drawn to work that sits between product, technology, strategy, and operations.",
    category: "Personal Essay",
    readTime: "6 min",
    body: [
      "I have always been drawn to understanding how systems work beneath the surface. That could be a product, a workflow, a business model, a technical architecture, or even a team dynamic. What matters to me is the underlying logic. I want to know why something works the way it does before I try to improve it.",
      "That is probably why I ask why so often. Not to challenge people for the sake of it, and not because I assume the current answer is wrong. I ask because the reasoning behind a decision usually matters more than the visible output. Once I understand that reasoning, I can see what is fragile, what is missing, and what can actually be improved.",
      "For a while, I thought this made me hard to place. I was interested in product, analytics, strategy, operations, and technology at the same time. Eventually I stopped seeing that as confusion and started seeing it as a pattern. I am most useful when a problem sits between functions and someone needs to connect the dots instead of defending a narrow lane.",
      "That is also why messy problems energize me. If the goal is clear but the path is not, there is room to think. There is room to ask better questions, structure the work, define what success should look like, and move a team toward something more coherent than where it started.",
      "I think that is what draws me toward Founder’s Office, Technical Operator, product, and TPM-style roles. They reward ownership more than job-title purity. They require someone to connect execution, communication, trade-offs, and systems thinking in a way that makes progress possible.",
      "What matters most to me is not being inside one fixed function. It is being trusted with something important enough to need judgment. That is the kind of work where I feel most engaged, and usually where I can contribute the most.",
    ],
  },
  {
    slug: "operators-dont-wait-for-perfect-specs",
    title: "Operators Don’t Wait for Perfect Specs",
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
      "AI makes execution cheaper, but it does not make judgment optional. It changes where the bottleneck lives. When more things can be built quickly, deciding what deserves to be built becomes even more important.",
      "That is why I think systems-minded operators become more valuable in AI-native environments. The advantage is not just speed. It is knowing how to sequence, simplify, and move toward something that matters.",
      "The teams that benefit most from AI are the ones that treat it as leverage across research, product, operations, and communication instead of as a novelty inside one isolated function.",
    ],
  },
];

export const proofCards: ProofCard[] = [
  {
    title: "Samsung Research / PRISM",
    category: "Research & Technical Work",
    explanation:
      "Proof for the Samsung research work around compressed LLM inference, optimization, and experimentation on production-minded AI systems.",
    whyItMatters:
      "It supports the applied AI and research layer of the portfolio with a cleaner, updated document instead of the older proof.",
    relatedTheme: "LLM inference, model optimization, experimentation, AI systems research",
    asset: "Samsung PRISM proof PDF",
    docHref: "/proofs/samsung-prism-proof-2026.pdf",
    proofStatus: "available",
  },
  {
    title: "MagicEraser - Research Reproduction",
    category: "Research & Technical Work",
    explanation:
      "Research engineering case study built as an implementation and exploration inspired by the MagicEraser paper on semantics-aware object erasure.",
    whyItMatters:
      "It shows paper-reading, reproduction, implementation honesty, and the ability to translate computer-vision research ideas into an applied workflow.",
    relatedTheme: "Computer vision, image inpainting, diffusion models, research engineering, paper reproduction",
    href: "https://krrishkhanna.github.io/magiceraser/",
    githubHref: "https://github.com/krrishkhanna/magiceraser",
    asset: "Live demo + GitHub implementation + research paper",
    docHref: "https://arxiv.org/abs/2410.10207",
    proofStatus: "available",
  },
  {
    title: "KPMG India",
    category: "Industry Experience",
    explanation:
      "Internship proof supporting work on a regulatory intelligence workflow that served 20+ stakeholders and large-scale record ingestion.",
    whyItMatters:
      "It validates founder-relevant signal around ambiguity handling, stakeholder management, and building operating structure.",
    relatedTheme: "Regulatory systems, operations, stakeholder alignment",
    asset: "KPMG internship proof PDF",
    docHref: "/proofs/Krrish_KPMG.pdf",
    proofStatus: "available",
  },
  {
    title: "University of Tokyo Research Lab Acceptance",
    category: "Research & Technical Work",
    explanation:
      "Acceptance proof for a University of Tokyo research lab opportunity, adding credibility to the research-adjacent AI systems track.",
    whyItMatters:
      "It strengthens the technical and research-facing side of the profile beyond shipped product work alone.",
    relatedTheme: "Research opportunity, academic signal, AI systems trajectory",
    asset: "University of Tokyo acceptance image",
    docHref: "/proofs/University_of_Tokyo_Acceptance_Research_Lab.png",
    proofStatus: "available",
  },
  {
    title: "Git Software Technologies",
    category: "Industry Experience",
    explanation:
      "Experience proof tied to AI-powered knowledge retrieval workflows and faster query-to-insight loops.",
    whyItMatters:
      "It reinforces the ability to turn fragmented internal systems into something more usable for real teams.",
    relatedTheme: "Enterprise knowledge workflows, AI retrieval, operational usability",
    asset: "Imported proof bundle PDF",
    docHref: "/krrish-proof-bundle.pdf",
    proofStatus: "available",
  },
  {
    title: "Lucid AI",
    category: "Shipped Products",
    explanation:
      "Applied AI product case study showing cognitive analytics, explainable scoring, pattern detection, forecasting, and recommendation workflows inside a dashboard-first system.",
    whyItMatters:
      "It demonstrates that the AI layer is structured and explainable rather than decorative, while also showing product thinking, backend systems work, and user-facing execution.",
    relatedTheme: "Applied AI, behavioral analytics, recommendation systems, dashboard UX, full-stack product execution",
    githubHref: "https://github.com/krrishkhanna/lucid-ai",
    asset: "GitHub implementation + case study",
    proofStatus: "available",
  },
  {
    title: "VeriLoad",
    category: "Shipped Products",
    explanation:
      "Live deployment proof for a solo-shipped dispatch reconciliation and validation platform.",
    whyItMatters:
      "It demonstrates end-to-end ownership: problem framing, product definition, logic design, and stakeholder-facing delivery.",
    relatedTheme: "Operations tooling, validation systems, operator dashboards",
    href: "https://krrishkhanna.github.io/veriload/",
    asset: "Deployed app screenshot + live demo",
    docHref: "/proofs/Veriload_Deployed_App_IOS.png",
    proofStatus: "available",
  },
  {
    title: "Vachan",
    category: "Shipped Products",
    explanation:
      "Live product proof for a multilingual fact-checking platform with measurable precision improvement.",
    whyItMatters:
      "It shows product execution around data-heavy workflows where trust, throughput, and observability matter.",
    relatedTheme: "Fact-checking, multilingual NLP, quality systems",
    href: "https://vachan-1.netlify.app/landing",
    asset: "Deployed app screenshot + live demo",
    docHref: "/proofs/Vachan_Deployed_Web_App.png",
    proofStatus: "available",
  },
  {
    title: "Odin / OdinSub",
    category: "Shipped Products",
    explanation:
      "Public live demo for a translation overlay product with 100+ languages and a freemium SaaS positioning.",
    whyItMatters:
      "It shows 0-to-1 product energy, shipping discipline, and a stronger founder-facing proof point than a static concept site.",
    relatedTheme: "Live translation, SaaS packaging, product execution",
    href: "https://odinsub.com/",
    asset: "Shipped products CSV + live demo",
    docHref: "/krrish-proof-bundle.pdf",
    proofStatus: "available",
  },
  {
    title: "SebScan",
    category: "Shipped Products",
    explanation:
      "Live demo proof for a health-tech OCR and risk analytics workflow with 87% parse accuracy.",
    whyItMatters:
      "It extends the body of work into document-heavy operational systems where structure and review quality matter.",
    relatedTheme: "OCR, health-tech workflows, risk analytics",
    href: "https://krrishkhanna.github.io/sebscan/",
    asset: "Deployed app screenshot + live demo",
    docHref: "/proofs/SebScan_Deployed_App.png",
    proofStatus: "available",
  },
  {
    title: "Virile Tasker",
    category: "Shipped Products",
    explanation:
      "Deployment proof for an additional shipped web app, useful as supporting evidence for build velocity and product execution.",
    whyItMatters:
      "It adds breadth to the shipped-products story without needing to over-index on smaller certificates or coursework.",
    relatedTheme: "Product execution, deployment proof, shipped web app",
    href: undefined,
    asset: "Deployed app screenshot",
    docHref: "/proofs/Virile_Tasker_Deployed_Web_App.png",
    proofStatus: "available",
  },
  {
    title: "McKinsey Forward Program",
    category: "Leadership & Global Programs",
    explanation:
      "Professional development proof centered on structured problem-solving, communication, and adaptable execution.",
    whyItMatters:
      "It supports the operator positioning without turning the site into a certificate wall.",
    relatedTheme: "Leadership, strategic communication, structured problem-solving",
    asset: "McKinsey Forward proof image",
    docHref: "/proofs/McKinsey_Forward.png",
    proofStatus: "available",
  },
  {
    title: "Aspire Leaders Program",
    category: "Leadership & Global Programs",
    explanation:
      "Leadership development program with a global, high-potential peer cohort.",
    whyItMatters:
      "It adds signal around ambition, cross-cultural growth, and readiness for high-ownership environments.",
    relatedTheme: "Leadership, global exposure, career readiness",
    asset: "Imported proof bundle PDF",
    docHref: "/krrish-proof-bundle.pdf",
    proofStatus: "available",
  },
  {
    title: "Waseda University Exchange",
    category: "Leadership & Global Programs",
    explanation:
      "Proof of academic and cross-cultural exposure in Japan that shaped how I think about systems, quality, and discipline.",
    whyItMatters:
      "It gives the international exposure claim real grounding rather than leaving it as a vague line item.",
    relatedTheme: "Japan exposure, cross-cultural learning, systems discipline",
    asset: "Imported proof bundle PDF",
    docHref: "/krrish-proof-bundle.pdf",
    proofStatus: "available",
  },
  {
    title: "AWS Certified Developer - Associate",
    category: "Selected Credentials",
    explanation:
      "Curated technical credential included for high-signal cloud-native credibility.",
    whyItMatters:
      "It supports the technical side of the profile without crowding out stronger work proof.",
    relatedTheme: "Cloud execution, developer credibility",
    docHref: "/proofs/aws-certified-developer-associate.pdf",
    proofStatus: "available",
  },
  {
    title: "Oracle AI Vector Search Certified Professional",
    category: "Selected Credentials",
    explanation:
      "Focused AI retrieval credential relevant to modern search and knowledge workflows.",
    whyItMatters:
      "It reinforces the AI-native systems side of the positioning in a more relevant way than generic certificates.",
    relatedTheme: "AI retrieval, search systems, applied AI",
    docHref: "/proofs/Oracle_Global_Certification.png",
    proofStatus: "available",
  },
  {
    title: "CAPM",
    category: "Selected Credentials",
    explanation:
      "Project discipline credential that aligns well with TPM-style execution work.",
    whyItMatters:
      "It supports the coordination and delivery side of the portfolio without overclaiming managerial experience.",
    relatedTheme: "Execution, delivery structure, project discipline",
    asset: "CAPM certificate PDF",
    docHref: "/proofs/capm-proof.pdf",
    proofStatus: "available",
  },
  {
    title: "ISRO Geodata Processing",
    category: "Selected Credentials",
    explanation:
      "Selected technical credential focused on geodata processing using Python and machine learning.",
    whyItMatters:
      "It adds one more focused signal for structured technical problem-solving and applied analysis.",
    relatedTheme: "Python, machine learning, geodata systems",
    docHref: "/proofs/ISRO_Project.png",
    proofStatus: "available",
  },
  {
    title: "Blue Marble Study Tour - Deakin University",
    category: "Leadership & Global Programs",
    explanation:
      "International exposure proof tied to sustainability, innovation workshops, and cross-cultural collaboration.",
    whyItMatters:
      "It makes the global-exposure narrative more credible and shows broader context beyond internships and projects.",
    relatedTheme: "International exposure, collaboration, leadership development",
    docHref: "/proofs/Blue Marble Study Tour.png",
    proofStatus: "available",
  },
  {
    title: "Algoverse Research",
    category: "Awards & Recognition",
    explanation:
      "Research-oriented recognition that adds extra signal on the technical curiosity and experimentation side of the profile.",
    whyItMatters:
      "It supports the research and applied-AI layer without diluting the site with generic course completion badges.",
    relatedTheme: "Research recognition, experimentation, technical signal",
    docHref: "/proofs/Algoverse_Research.png",
    proofStatus: "available",
  },
  {
    title: "TechKnow 1st Prize",
    category: "Awards & Recognition",
    explanation:
      "Award proof for a first-place result, included because it is a cleaner and stronger signal than most generic certificate entries.",
    whyItMatters:
      "It adds one compact credibility marker around building, presenting, and standing out in a competitive environment.",
    relatedTheme: "Award, execution, presentation, technical competition",
    docHref: "/proofs/Techknow_Certificate_1stPrize.pdf",
    proofStatus: "available",
  },
];

export const startupThinkingSections: StartupSection[] = [
  {
    title: "How I Think About Startups",
    body: [
      "Startups are attractive to me because they compress learning, ownership, and execution into the same environment. They force you to care about what matters now, what compounds later, and what is actually creating leverage.",
      "The environments I find most energizing are the ones where the direction is important but the path is still messy. That is usually where judgment matters most.",
    ],
  },
  {
    title: "Balancing School and Building",
    body: [
      "I don’t think about my work as separate buckets of startup, school, and other commitments. I think in terms of priorities and leverage.",
      "School gives me technical depth, structure, and access to environments like Samsung Research and Waseda. But I don’t optimize for grades alone. I optimize for learning that helps me build better products and make better decisions.",
      "The startup is where I apply that learning in real time. Most of my time outside classes goes into talking to users, building, researching, and refining ideas. I’ve become intentional about saying no to things that don’t move me closer to the work I care about.",
      "If something I’m building reaches a point where it clearly requires full-time attention, I’m prepared to make decisions based on what gives it the greatest chance of success. My long-term goal is not simply to collect credentials. It is to build something meaningful.",
    ],
  },
  {
    title: "Problem Selection",
    body: [
      "I am most drawn to problems where the pain is real but the current workflow is still held together by workarounds, tribal knowledge, or repeated manual judgment.",
      "That usually means products and systems sitting between technical depth and operating reality, not just clean consumer interfaces.",
    ],
  },
  {
    title: "User Discovery Notes",
    body: [
      "The useful questions are usually not what features people say they want first. They are where teams lose time, where trust breaks down, and what part of the workflow still feels fragile.",
      "I like user discovery when it helps expose the real bottleneck instead of generating more surface-level opinions.",
    ],
  },
  {
    title: "Product Experiments",
    body: [
      "I think experiments should make a strategic uncertainty smaller. A pricing test, an onboarding change, a workflow redesign, or a positioning shift should help clarify where the real leverage is.",
      "The goal is not to run more experiments. It is to become less confused faster.",
    ],
  },
  {
    title: "Lessons from Building",
    body: [
      "Products get stronger when the operating loop behind them gets clearer. Better metrics, better user understanding, and tighter feedback loops usually matter more than surface polish alone.",
      "The more I build, the more I care about choosing the right problem, sequencing the work well, and making decisions that keep momentum high without sacrificing judgment.",
    ],
  },
];

export const resumeVariants: ResumeVariant[] = [
  {
    title: "Founder’s Office / Technical Operator Resume",
    file: "/resumes/krrish-khanna-founders-office.pdf",
    description:
      "Ownership, ambiguity, stakeholder work, operations, strategy, and execution.",
    track: "operator",
  },
  {
    title: "Product Resume",
    file: "/resumes/krrish-khanna-product.pdf",
    description:
      "Product thinking, metrics, user problems, experiments, and shipped products.",
    track: "operator",
  },
  {
    title: "TPM Resume",
    file: "/resumes/krrish-khanna-tpm.pdf",
    description:
      "Technical execution, systems, tradeoffs, and cross-functional delivery.",
    track: "operator",
  },
  {
    title: "Applied AI Resume",
    file: "/resumes/krrish-khanna-applied-ai.pdf",
    description:
      "Machine learning, deep learning, GenAI systems, RAG, deployment, and applied AI execution.",
    track: "ai",
  },
];

export const aiLabCapabilities = [
  "LLM Systems",
  "RAG",
  "AI Infrastructure",
  "Computer Vision",
  "Voice AI",
  "Enterprise Automation",
  "Vector Search",
  "Model Evaluation",
];

export const aiWorkflow = [
  "Business Requirement",
  "Data Collection",
  "Cleaning",
  "Chunking",
  "Embedding Generation",
  "Vector Database",
  "Retrieval",
  "Prompt Engineering",
  "LLM Inference",
  "Validation",
  "Deployment",
  "Monitoring",
];

export const researchHighlights = [
  {
    title: "Samsung Research",
    detail:
      "Inference optimization, compressed LLMs, NVIDIA A100 benchmarking, and performance trade-off analysis.",
  },
  {
    title: "Waseda / R2C2",
    detail:
      "Research-adjacent experimentation, shared-task participation, and structured technical problem solving in an academic context.",
  },
  {
    title: "AI Systems Notes",
    detail:
      "Work across retrieval workflows, vector search, model behavior, and applied AI execution loops.",
  },
];

export const researchCaseStudies: ResearchCaseStudy[] = [
  {
    slug: "magiceraser",
    title: "MagicEraser - Research Reproduction",
    subtitle:
      "A research engineering case study in semantics-aware object erasure, image inpainting, and implementation tradeoffs.",
    overview:
      "This project is an implementation and applied exploration inspired by the MagicEraser paper, focused on understanding how semantics-aware control can improve object removal and image completion workflows.",
    originalResearch:
      "The original paper, “MagicEraser: Erasing Any Objects via Semantics-Aware Control,” proposes a diffusion-model-based framework for object erasure that aims to preserve semantic consistency during image inpainting.",
    myImplementation:
      "My work was not authorship of the paper. It was a research reproduction and implementation exercise: understanding the problem, recreating a usable pipeline, and exploring the practical engineering constraints around masking, inference, quality, and interaction.",
    researchProblem: [
      "Image object removal sounds simple, but high-quality erasure is difficult because the system has to reconstruct plausible content rather than just delete pixels.",
      "Semantic consistency becomes the hard part: the filled region has to align with surrounding geometry, texture, lighting, and object context or the edit looks obviously synthetic.",
      "That makes object erasure a useful research problem because it sits at the intersection of segmentation, masking, generative inpainting, and human-perceived realism.",
    ],
    paperSummary: [
      "At a high level, the paper explores how semantics-aware control can guide the object-erasure process so the generated fill stays more contextually aligned with the rest of the image.",
      "Rather than treating inpainting as a blind hole-filling task, the framing emphasizes preserving scene meaning and structural coherence during generation.",
      "What stood out most for me was not a single architecture novelty in isolation, but the broader research lesson: better object erasure depends on control quality, not just model power.",
    ],
    implementation: [
      "The workflow starts with image preprocessing and a user-selected target region, followed by mask generation to isolate the object that should be removed.",
      "That mask is passed into an inpainting pipeline where model inference reconstructs the missing region based on surrounding context.",
      "On the frontend, the goal was to keep interaction simple: upload an image, specify the object region, run inference, and compare the edited output.",
      "The implementation was treated as a research engineering exercise rather than a product surface, so the emphasis stayed on pipeline understanding and experimentation instead of packaging polish.",
    ],
    architecture: [
      "Input Image",
      "Object Selection",
      "Mask Generation",
      "Image Inpainting",
      "Output Image",
    ],
    engineeringChallenges: [
      "Latency mattered because even a strong output feels less usable when the feedback loop is too slow for iterative editing.",
      "Mask precision heavily affected quality; loose masks led to ghosting while overly aggressive masks damaged nearby structure.",
      "Edge consistency was a recurring challenge because transition zones reveal artifacts quickly when lighting or texture continuity breaks.",
      "User interaction also mattered more than expected: even good model outputs suffer if selection and correction workflows feel clumsy.",
    ],
    learnings: [
      "Reproducing research forces a more honest understanding of computer vision systems than simply calling an API.",
      "Diffusion-based methods are powerful, but practical output quality still depends on preprocessing, masking discipline, and system design decisions around control.",
      "Research engineering often lives in the gap between a paper’s high-level promise and the messy implementation realities of inference, UI, and evaluation.",
      "This project strengthened my confidence in reading papers, translating them into executable systems, and learning through reproduction rather than overclaiming novelty.",
    ],
    futureWork: [
      "Improve masking with more precise selection tools and stronger edge handling.",
      "Evaluate higher-resolution or better-controlled models for cleaner inpainting output.",
      "Add more interactive editing flows so users can refine masks and compare variants faster.",
      "Define lightweight evaluation benchmarks for artifact rate, structural consistency, and perceived realism.",
      "Optimize deployment and inference pathways so experimentation feels faster and more iteration-friendly.",
    ],
    tags: [
      "Research",
      "Computer Vision",
      "Image Inpainting",
      "Diffusion Models",
      "Applied AI",
      "Research Engineering",
      "Paper Reproduction",
    ],
    metrics: [
      { label: "Images processed", value: "TODO" },
      { label: "Average inference latency", value: "TODO" },
      { label: "Successful erase attempts", value: "TODO" },
      { label: "Mask correction rate", value: "TODO" },
      { label: "Visual evaluation score", value: "TODO" },
      { label: "Deployment uptime", value: "TODO" },
    ],
    tradeoffs: [
      "Mask flexibility vs output precision",
      "Image quality vs inference latency",
      "Simpler interaction vs more precise editing controls",
      "Higher-resolution generation vs deployment cost",
      "Research fidelity vs lightweight demo usability",
    ],
    roadmap: [
      { phase: "Phase 1", detail: "Core preprocessing, masking, inference pipeline, and demo workflow." },
      { phase: "Phase 2", detail: "Better mask refinement, stronger comparison tooling, and cleaner output handling." },
      { phase: "Phase 3", detail: "Higher-resolution models, more rigorous evaluation, and benchmark tracking." },
      { phase: "Phase 4", detail: "Interactive editing enhancements, deployment optimization, and broader reproduction experiments." },
    ],
    lessons: [
      "Research reproduction is one of the best ways to build real technical intuition.",
      "In visual AI systems, interface and control quality shape perceived model quality more than people expect.",
      "Good research engineering means understanding both the paper and the failure modes introduced by implementation details.",
      "It is more credible to explain what was reproduced and learned than to imply novelty that was not actually contributed.",
    ],
    proof: {
      github: "https://github.com/krrishkhanna/magiceraser",
      liveDemo: "https://krrishkhanna.github.io/magiceraser/",
      paper: "https://arxiv.org/abs/2410.10207",
      implementationNotes: "https://github.com/krrishkhanna/magiceraser",
      readme: "https://github.com/krrishkhanna/magiceraser#readme",
    },
  },
];
