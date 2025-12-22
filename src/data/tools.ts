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
  appUrl: string;
  price?: string;
  bullets?: string[];
};

export const tools: Tool[] = [
  // =========================
  // FLOWFORM – TOOLS
  // =========================
  {
    id: "ff-tool-001",
    slug: "flowform-single",
    title: "FLOWFORM SINGLE",
    summary: "Single-user access subscription to FlowForm core features.",
    category: "FlowForm Tools",
    status: "live",
    stripeUrl: "https://buy.stripe.com/5kQ8wP2iLafk10VfsGaMU07",
    appUrl: "/tools/flowform-single",
    price: "£14.99 / month",
    bullets: [
      "Instant access",
      "Monthly subscription",
      "Cancel anytime",
    ],
  },

  // =========================
  // FLOWFORM – SUITES (7-day trial)
  // =========================
  {
    id: "ff-suite-001",
    slug: "flowform-vitality",
    title: "FLOWFORM VITALITY",
    summary: "Wellbeing + vitality suite with structured progression pathways.",
    category: "FlowForm Suites",
    status: "live",
    stripeUrl: "https://buy.stripe.com/bJeeVd6z1evAbFzgwKaMU0b",
    appUrl: "/tools/flowform-vitality",
    price: "7-day trial (then £39.99 / month)",
    bullets: [
      "7-day free trial",
      "Full vitality programme access",
      "Ongoing monthly subscription",
    ],
  },
  {
    id: "ff-suite-002",
    slug: "flowform-martial",
    title: "FLOWFORM MARTIAL",
    summary: "Martial discipline suite: technique, rhythm, and progression structure.",
    category: "FlowForm Suites",
    status: "live",
    stripeUrl: "https://buy.stripe.com/14A8wP3mPcnsaBvgwKaMU0a",
    appUrl: "/tools/flowform-martial",
    price: "7-day trial (then £24.99 / month)",
    bullets: [
      "7-day free trial",
      "Training structure + progression",
      "Ongoing monthly subscription",
    ],
  },
  {
    id: "ff-suite-003",
    slug: "flowform-fitness",
    title: "FLOWFORM FITNESS",
    summary: "Fitness suite focused on performance, consistency, and routines.",
    category: "FlowForm Suites",
    status: "live",
    stripeUrl: "https://buy.stripe.com/bJeaEXe1tevA10VcguaMU09",
    appUrl: "/tools/flowform-fitness",
    price: "7-day trial (then £24.99 / month)",
    bullets: [
      "7-day free trial",
      "Fitness programmes + routines",
      "Ongoing monthly subscription",
    ],
  },
  {
    id: "ff-suite-004",
    slug: "flowform-recovery",
    title: "FLOWFORM RECOVERY",
    summary: "Recovery suite for mobility, restoration, and sustainable training.",
    category: "FlowForm Suites",
    status: "live",
    stripeUrl: "https://buy.stripe.com/14A00j4qT738cJDgwKaMU08",
    appUrl: "/tools/flowform-recovery",
    price: "7-day trial (then £24.99 / month)",
    bullets: [
      "7-day free trial",
      "Recovery + mobility structure",
      "Ongoing monthly subscription",
    ],
  },

  // =========================
  // FLOWFORM – VITALITY SUBSCRIPTIONS (tiered)
  // =========================
  {
    id: "ff-sub-001",
    slug: "flowform-vitality-subscription-1999",
    title: "FlowForm Vitality Subscription",
    summary: "Vitality subscription tier – monthly access (mid tier).",
    category: "FlowForm Subscriptions",
    status: "live",
    stripeUrl: "https://buy.stripe.com/7sY9ATf5xfzEfVP5S6aMU05",
    appUrl: "/tools/flowform-vitality-subscription-1999",
    price: "£19.99 / month",
    bullets: [
      "Monthly subscription",
      "Tiered access option",
      "Cancel anytime",
    ],
  },
  {
    id: "ff-sub-002",
    slug: "flowform-vitality-subscription-1299",
    title: "FlowForm Vitality Subscription",
    summary: "Vitality subscription tier – monthly access (entry+ tier).",
    category: "FlowForm Subscriptions",
    status: "live",
    stripeUrl: "https://buy.stripe.com/14A00j7D59bg8tn6WaaMU04",
    appUrl: "/tools/flowform-vitality-subscription-1299",
    price: "£12.99 / month",
    bullets: [
      "Monthly subscription",
      "Tiered access option",
      "Cancel anytime",
    ],
  },
  {
    id: "ff-sub-003",
    slug: "flowform-vitality-subscription-999",
    title: "FlowForm Vitality Subscription",
    summary: "Vitality subscription tier – monthly access (starter tier).",
    category: "FlowForm Subscriptions",
    status: "live",
    stripeUrl: "https://buy.stripe.com/7sY9AT9Ld0EKfVP3JYaMU03",
    appUrl: "/tools/flowform-vitality-subscription-999",
    price: "£9.99 / month",
    bullets: [
      "Monthly subscription",
      "Tiered access option",
      "Cancel anytime",
    ],
  },
];
