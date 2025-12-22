// src/data/tools.ts

export type ToolStatus = "live" | "coming-soon";

export type ToolCategory =
  | "FlowForm Tools"
  | "FlowForm Suites"
  | "FlowForm Subscriptions"
  | "Other";

export type Tool = {
  id: string;
  slug: string;
  title: string;
  summary: string;
  category: ToolCategory;
  status: ToolStatus;
  stripeUrl?: string;
  price?: string;
  bullets?: string[];
};

export const tools: Tool[] = [
  // =========================
  // FLOWFORM — TOOLS
  // =========================
  {
    id: "ff-tool-001",
    slug: "flowform-single",
    title: "FLOWFORM SINGLE",
    summary: "Single app access — pick one track and build consistency with guided sessions.",
    category: "FlowForm Tools",
    status: "live",
    stripeUrl: "https://buy.stripe.com/5kQ8wP2iLafk10VfsGaMU07",
    price: "£14.99 / month",
    bullets: [
      "Single-track access (one tool)",
      "Guided sessions and progression",
      "Great low-cost starting point",
      "Upgrade anytime to a full suite",
    ],
  },

  // =========================
  // FLOWFORM — SUITES
  // =========================
  {
    id: "ff-suite-001",
    slug: "flowform-vitality",
    title: "FLOWFORM VITALITY",
    summary: "Mind–body–breath system that adapts over time as you improve.",
    category: "FlowForm Suites",
    status: "live",
    stripeUrl: "https://buy.stripe.com/bJeeVd6z1evAbFzgwKaMU0b",
    price: "7-day trial (then £39.99 / month)",
    bullets: [
      "Progressive weekly programmes",
      "Recovery + breath + control built in",
      "Multi-discipline approach without gym kit",
      "Designed to evolve with your consistency",
    ],
  },
  {
    id: "ff-suite-002",
    slug: "flowform-martial",
    title: "FLOWFORM MARTIAL",
    summary: "Martial foundations + conditioning with structured progressions.",
    category: "FlowForm Suites",
    status: "live",
    stripeUrl: "https://buy.stripe.com/14A8wP3mPcnsaBvgwKaMU0a",
    price: "7-day trial (then £24.99 / month)",
    bullets: [
      "Foundations, drills, and progression",
      "Breath + control + conditioning",
      "Train anywhere (no equipment needed)",
      "Build discipline and confidence",
    ],
  },
  {
    id: "ff-suite-003",
    slug: "flowform-fitness",
    title: "FLOWFORM FITNESS",
    summary: "Full-body fitness programmes focused on mobility, stability, and strength.",
    category: "FlowForm Suites",
    status: "live",
    stripeUrl: "https://buy.stripe.com/bJeaEXe1tevA10VcguaMU09",
    price: "7-day trial (then £24.99 / month)",
    bullets: [
      "Weekly programmes and daily sessions",
      "Mobility + flexibility emphasis",
      "Core stability and full-body routines",
      "Beginner to advanced pathways",
    ],
  },
  {
    id: "ff-suite-004",
    slug: "flowform-recovery",
    title: "FLOWFORM RECOVERY",
    summary: "Recovery-first routines: wind-down, mobility, flexibility, and breathwork.",
    category: "FlowForm Suites",
    status: "live",
    stripeUrl: "https://buy.stripe.com/14A00j4qT738cJDgwKaMU08",
    price: "7-day trial (then £24.99 / month)",
    bullets: [
      "Recovery routines and mobility work",
      "Breath + relaxation sessions",
      "Perfect alongside fitness/martial plans",
      "Reduce stiffness, improve consistency",
    ],
  },

  // =========================
  // FLOWFORM — SUBSCRIPTIONS
  // =========================
  {
    id: "ff-sub-001",
    slug: "vitality-subscription-1999",
    title: "FlowForm Vitality Subscription",
    summary: "Mid-tier subscription — strong value before upgrading to full suites.",
    category: "FlowForm Subscriptions",
    status: "live",
    stripeUrl: "https://buy.stripe.com/7sY9ATf5xfzEfVP5S6aMU05",
    price: "£19.99 / month",
    bullets: [
      "Solid feature set for consistent progress",
      "Ideal stepping stone to Vitality Suite",
      "Upgrade paths available anytime",
    ],
  },
  {
    id: "ff-sub-002",
    slug: "vitality-subscription-1299",
    title: "FlowForm Vitality Subscription",
    summary: "Entry subscription — access core routines and build the habit first.",
    category: "FlowForm Subscriptions",
    status: "live",
    stripeUrl: "https://buy.stripe.com/14A00j7D59bg8tn6WaaMU04",
    price: "£12.99 / month",
    bullets: [
      "Affordable entry tier",
      "Core routines + basic progression",
      "Upgrade to £19.99 or full suite later",
    ],
  },
  {
    id: "ff-sub-003",
    slug: "vitality-subscription-999",
    title: "FlowForm Vitality Subscription",
    summary: "Budget starter — try the system and prove consistency, then upgrade.",
    category: "FlowForm Subscriptions",
    status: "live",
    stripeUrl: "https://buy.stripe.com/7sY9AT9Ld0EKfVP3JYaMU03",
    price: "£9.99 / month",
    bullets: [
      "Lowest-cost entry tier",
      "Start building the habit immediately",
      "Upgrade anytime to higher tiers/suites",
    ],
  },
];
