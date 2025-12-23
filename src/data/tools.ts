// ===============================
// FlowForm – Tools & Subscriptions
// ===============================

export type Tool = {
  id: string;
  slug: string;
  title: string;
  summary: string;
  category: string;
  status: "live" | "coming-soon";
  stripeUrl?: string;
  price: string;
  bullets: string[];
};

// ===============================
// FLOWFORM – MICRO TOOLS (£14.99)
// ===============================

export const tools: Tool[] = [
  {
    id: "ff-tool-tai-chi",
    slug: "tai-chi",
    title: "Tai Chi",
    summary: "Flow, balance, breath, and slow progressive control.",
    category: "FlowForm Tools",
    status: "live",
    stripeUrl: "https://buy.stripe.com/14A28r5uX1IO8tn94iaMU0H",
    price: "£14.99 / month",
    bullets: [
      "Guided Tai Chi routines",
      "Balance & flow training",
      "Beginner to advanced sessions",
      "Breath-led movement",
    ],
  },

  {
    id: "ff-tool-kung-fu",
    slug: "kung-fu",
    title: "Kung Fu Foundations",
    summary: "Build strength, coordination, and disciplined movement.",
    category: "FlowForm Tools",
    status: "live",
    stripeUrl: "https://buy.stripe.com/fZudR99LdgDI9xrcguaMU0D",
    price: "£14.99 / month",
    bullets: [
      "Fundamental Kung Fu drills",
      "Strength & stance training",
      "Progressive skill building",
      "Discipline & control focus",
    ],
  },

  {
    id: "ff-tool-boxing",
    slug: "boxing",
    title: "Boxing Fundamentals",
    summary: "Footwork, conditioning, and boxing basics.",
    category: "FlowForm Tools",
    status: "live",
    stripeUrl: "https://buy.stripe.com/aFa5kD5uX4V0cJD94iaMU0G",
    price: "£14.99 / month",
    bullets: [
      "Footwork & combinations",
      "Conditioning routines",
      "Beginner friendly",
      "Fitness-focused boxing",
    ],
  },

  {
    id: "ff-tool-breath",
    slug: "breath-control",
    title: "Breath & Control",
    summary: "Breathing techniques for recovery, calm, and focus.",
    category: "FlowForm Tools",
    status: "live",
    stripeUrl: "https://buy.stripe.com/6oU9AT7D57385hbdkyaMU0F",
    price: "£14.99 / month",
    bullets: [
      "Breath regulation techniques",
      "Stress & recovery support",
      "Daily short routines",
      "Mind-body balance",
    ],
  },

  {
    id: "ff-tool-mobility",
    slug: "mobility",
    title: "Mobility & Flexibility",
    summary: "Improve range of motion and movement quality.",
    category: "FlowForm Tools",
    status: "live",
    stripeUrl: "https://buy.stripe.com/dRm4gz6z11IO4d7fsGaMU0E",
    price: "£14.99 / month",
    bullets: [
      "Joint mobility routines",
      "Flexibility improvement",
      "Injury prevention focus",
      "All-levels suitable",
    ],
  },

  {
    id: "ff-tool-core",
    slug: "core-stability",
    title: "Core Stability",
    summary: "Strengthen your core for posture and performance.",
    category: "FlowForm Tools",
    status: "live",
    stripeUrl: "https://buy.stripe.com/6oU6oH5uXafk9xra8maMU0C",
    price: "£14.99 / month",
    bullets: [
      "Core engagement routines",
      "Posture & balance",
      "Functional strength",
      "Beginner to advanced tracks",
    ],
  },

  {
    id: "ff-tool-recovery",
    slug: "recovery",
    title: "Recovery Sessions",
    summary: "Guided recovery and regeneration routines.",
    category: "FlowForm Tools",
    status: "live",
    stripeUrl: "https://buy.stripe.com/4gM14n9Ld3QW4d71BQaMU0B",
    price: "£14.99 / month",
    bullets: [
      "Recovery-focused sessions",
      "Nervous system reset",
      "Low-intensity routines",
      "Ideal alongside other tools",
    ],
  },

  // ===============================
  // FLOWFORM – SUITES (7-DAY TRIAL)
  // ===============================

  {
    id: "ff-suite-vitality",
    slug: "flowform-vitality",
    title: "FlowForm Vitality",
    summary: "Mind-body-breath system that adapts as you improve.",
    category: "FlowForm Suites",
    status: "live",
    stripeUrl: "https://buy.stripe.com/bJeeVd6z1evAbFzgwKaMU0b",
    price: "7-day trial → £39.99 / month",
    bullets: [
      "All FlowForm tools included",
      "Daily & weekly programs",
      "Beginner to advanced tracks",
      "Best overall value",
    ],
  },

  {
    id: "ff-suite-martial",
    slug: "flowform-martial",
    title: "FlowForm Martial Arts",
    summary: "Martial-arts-based training & recovery system.",
    category: "FlowForm Suites",
    status: "live",
    stripeUrl: "https://buy.stripe.com/14A8wP3mPcnsaBvgwKaMU0a",
    price: "7-day trial → £24.99 / month",
    bullets: [
      "Tai Chi, Kung Fu, Boxing",
      "Breath & recovery included",
      "Skill-based progression",
      "Martial focus",
    ],
  },

  {
    id: "ff-suite-fitness",
    slug: "flowform-fitness",
    title: "FlowForm Fitness",
    summary: "Strength, mobility, and conditioning programs.",
    category: "FlowForm Suites",
    status: "live",
    stripeUrl: "https://buy.stripe.com/bJeaEXe1tevA10VcguaMU09",
    price: "7-day trial → £24.99 / month",
    bullets: [
      "Fitness-focused tools",
      "Mobility & conditioning",
      "Daily routines",
      "Accessible for all levels",
    ],
  },

  {
    id: "ff-suite-recovery",
    slug: "flowform-recovery-suite",
    title: "FlowForm Recovery",
    summary: "Recovery-first routines for balance and longevity.",
    category: "FlowForm Suites",
    status: "live",
    stripeUrl: "https://buy.stripe.com/14A00j4qT738cJDgwKaMU08",
    price: "7-day trial → £24.99 / month",
    bullets: [
      "Recovery sessions",
      "Breath control",
      "Mobility & reset routines",
      "Low-impact focus",
    ],
  },

  // ===============================
  // FLOWFORM – VITALITY SUBSCRIPTIONS
  // ===============================

  {
    id: "ff-sub-1999",
    slug: "vitality-1999",
    title: "FlowForm Vitality – Standard",
    summary: "Full vitality access at a reduced rate.",
    category: "FlowForm Subscriptions",
    status: "live",
    stripeUrl: "https://buy.stripe.com/7sY9ATf5xfzEfVP5S6aMU05",
    price: "£19.99 / month",
    bullets: [
      "Core vitality routines",
      "Progressive programs",
      "Upgrade anytime",
    ],
  },

  {
    id: "ff-sub-1299",
    slug: "vitality-1299",
    title: "FlowForm Vitality – Starter",
    summary: "Entry-level vitality subscription.",
    category: "FlowForm Subscriptions",
    status: "live",
    stripeUrl: "https://buy.stripe.com/14A00j7D59bg8tn6WaaMU04",
    price: "£12.99 / month",
    bullets: [
      "Starter routines",
      "Consistency-first approach",
      "Upgrade anytime",
    ],
  },

  {
    id: "ff-sub-999",
    slug: "vitality-999",
    title: "FlowForm Vitality – Budget",
    summary: "Lowest-cost entry into FlowForm.",
    category: "FlowForm Subscriptions",
    status: "live",
    stripeUrl: "https://buy.stripe.com/7sY9AT9Ld0EKfVP3JYaMU03",
    price: "£9.99 / month",
    bullets: [
      "Basic routines",
      "Habit-building focus",
      "Upgrade anytime",
    ],
  },
];
