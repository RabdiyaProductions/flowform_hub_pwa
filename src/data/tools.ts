export type Tool = {
  id: string;
  slug: string;
  title: string;
  summary: string;
  category: string;
  status: "live" | "coming_soon";
  stripeUrl?: string;
  price: string;
  bullets: string[];
};

export const tools: Tool[] = [
  // =========================
  // FLOWFORM — TOOLS
  // =========================
  {
    id: "ff-tool-001",
    slug: "tai-chi",
    title: "Tai Chi",
    summary: "Flow & balance training — calm nervous system, better posture, smoother movement.",
    category: "FlowForm Tools",
    status: "live",
    stripeUrl: "https://buy.stripe.com/14A28r5uX1IO8tn94iaMU0H",
    price: "£14.99 / month",
    bullets: [
      "Guided sessions (beginner → advanced)",
      "Balance + coordination routines",
      "Daily flow practice prompts",
      "Upgrade anytime to a suite",
    ],
  },
  {
    id: "ff-tool-002",
    slug: "kung-fu-foundations",
    title: "Kung Fu Foundations",
    summary: "Technique + conditioning fundamentals — build base strength, stability, and form.",
    category: "FlowForm Tools",
    status: "live",
    stripeUrl: "https://buy.stripe.com/fZudR99LdgDI9xrcguaMU0D",
    price: "£14.99 / month",
    bullets: [
      "Foundations: stance, structure, rhythm",
      "Progressive drills & routines",
      "Mobility + strength support",
      "Upgrade anytime to a suite",
    ],
  },
  {
    id: "ff-tool-003",
    slug: "boxing-fundamentals",
    title: "Boxing Fundamentals",
    summary: "Footwork, combinations, and conditioning — sharp basics without the fluff.",
    category: "FlowForm Tools",
    status: "live",
    stripeUrl: "https://buy.stripe.com/aFa5kD5uX4V0cJD94iaMU0G",
    price: "£14.99 / month",
    bullets: [
      "Footwork & guard fundamentals",
      "Combinations + bag/shadow routines",
      "Conditioning blocks",
      "Upgrade anytime to a suite",
    ],
  },
  {
    id: "ff-tool-004",
    slug: "breath-and-control",
    title: "Breath & Control",
    summary: "Breathwork for calm, energy, and control — simple sessions you’ll actually do.",
    category: "FlowForm Tools",
    status: "live",
    stripeUrl: "https://buy.stripe.com/6oU9AT7D57385hbdkyaMU0F",
    price: "£14.99 / month",
    bullets: [
      "Short daily sessions",
      "Calm / focus / recovery modes",
      "Breathing fundamentals explained",
      "Upgrade anytime to a suite",
    ],
  },
  {
    id: "ff-tool-005",
    slug: "mobility-and-flexibility",
    title: "Mobility & Flexibility",
    summary: "Joint mobility and flexibility routines — move better, feel better.",
    category: "FlowForm Tools",
    status: "live",
    stripeUrl: "https://buy.stripe.com/dRm4gz6z11IO4d7fsGaMU0E",
    price: "£14.99 / month",
    bullets: [
      "Mobility flows (hips, shoulders, spine)",
      "Flexibility progressions",
      "Warm-up & cool-down tracks",
      "Upgrade anytime to a suite",
    ],
  },
  {
    id: "ff-tool-006",
    slug: "core-stability",
    title: "Core Stability",
    summary: "Core training that supports posture and performance — stability first.",
    category: "FlowForm Tools",
    status: "live",
    stripeUrl: "https://buy.stripe.com/6oU6oH5uXafk9xra8maMU0C",
    price: "£14.99 / month",
    bullets: [
      "Stability + control routines",
      "Beginner to advanced progressions",
      "Posture support blocks",
      "Upgrade anytime to a suite",
    ],
  },
  {
    id: "ff-tool-007",
    slug: "recovery-sessions",
    title: "Recovery Sessions",
    summary: "Recovery routines for stiffness, stress, and fatigue — reset and rebuild.",
    category: "FlowForm Tools",
    status: "live",
    stripeUrl: "https://buy.stripe.com/4gM14n9Ld3QW4d71BQaMU0B",
    price: "£14.99 / month",
    bullets: [
      "Short recovery protocols",
      "Light movement + breath",
      "Better sleep routines",
      "Upgrade anytime to a suite",
    ],
  },

  // =========================
  // FLOWFORM — SUITES
  // =========================
  {
    id: "ff-suite-001",
    slug: "flowform-vitality-suite",
    title: "FLOWFORM VITALITY — 7-day trial",
    summary: "All-in-one vitality system — mind + body + breath, designed to adapt over time.",
    category: "FlowForm Suites",
    status: "live",
    stripeUrl: "https://buy.stripe.com/bJeeVd6z1evAbFzgwKaMU0b",
    price: "7-day trial (then £39.99 / month)",
    bullets: [
      "All tools included",
      "Best value for consistent progress",
      "Weekly plans + progressive routines",
      "Cancel anytime",
    ],
  },
  {
    id: "ff-suite-002",
    slug: "flowform-martial-suite",
    title: "FLOWFORM MARTIAL — 7-day trial",
    summary: "Martial arts foundations + breath + recovery — train smart, not wrecked.",
    category: "FlowForm Suites",
    status: "live",
    stripeUrl: "https://buy.stripe.com/14A8wP3mPcnsaBvgwKaMU0a",
    price: "7-day trial (then £24.99 / month)",
    bullets: [
      "Tai Chi + Kung Fu + Boxing included",
      "Breath & recovery support",
      "Beginner → advanced tracks",
      "Cancel anytime",
    ],
  },
  {
    id: "ff-suite-003",
    slug: "flowform-fitness-suite",
    title: "FLOWFORM FITNESS — 7-day trial",
    summary: "Fitness-focused toolkit — mobility, core, and routines to keep you consistent.",
    category: "FlowForm Suites",
    status: "live",
    stripeUrl: "https://buy.stripe.com/bJeaEXe1tevA10VcguaMU09",
    price: "7-day trial (then £24.99 / month)",
    bullets: [
      "Mobility + Core + conditioning focus",
      "Breath support included",
      "Progressive plans",
      "Cancel anytime",
    ],
  },
  {
    id: "ff-suite-004",
    slug: "flowform-recovery-suite",
    title: "FLOWFORM RECOVERY — 7-day trial",
    summary: "Recovery-first suite — breath, mobility, and recovery sessions for reset & repair.",
    category: "FlowForm Suites",
    status: "live",
    stripeUrl: "https://buy.stripe.com/14A00j4qT738cJDgwKaMU08",
    price: "7-day trial (then £24.99 / month)",
    bullets: [
      "Recovery sessions included",
      "Breath + mobility support",
      "Stress + stiffness reduction",
      "Cancel anytime",
    ],
  },

  // =========================
  // FLOWFORM — VITALITY SUBSCRIPTIONS
  // =========================
  {
    id: "ff-sub-001",
    slug: "vitality-subscription-1999",
    title: "FlowForm Vitality Subscription",
    summary: "Balanced plan — build consistency with guided routines and progression.",
    category: "FlowForm Subscriptions",
    status: "live",
    stripeUrl: "https://buy.stripe.com/7sY9ATf5xfzEfVP5S6aMU05",
    price: "£19.99 / month",
    bullets: [
      "Great mid-tier value",
      "Structured routines + progression",
      "Upgrade to suite anytime",
      "Cancel anytime",
    ],
  },
  {
    id: "ff-sub-002",
    slug: "vitality-subscription-1299",
    title: "FlowForm Vitality Subscription",
    summary: "Entry subscription — core routines and basic progression.",
    category: "FlowForm Subscriptions",
    status: "live",
    stripeUrl: "https://buy.stripe.com/14A00j7D59bg8tn6WaaMU04",
    price: "£12.99 / month",
    bullets: [
      "Affordable entry tier",
      "Core routines + basic progression",
      "Upgrade anytime",
      "Cancel anytime",
    ],
  },
  {
    id: "ff-sub-003",
    slug: "vitality-subscription-999",
    title: "FlowForm Vitality Subscription",
    summary: "Budget starter — test the system, prove consistency, then upgrade.",
    category: "FlowForm Subscriptions",
    status: "live",
    stripeUrl: "https://buy.stripe.com/7sY9AT9Ld0EKfVP3JYaMU03",
    price: "£9.99 / month",
    bullets: [
      "Lowest cost starter tier",
      "Build the habit first",
      "Upgrade anytime",
      "Cancel anytime",
    ],
  },
];
