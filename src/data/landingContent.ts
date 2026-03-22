export const headerCta = "Get started";

export const navLinks = [
  { label: "Cars", href: "#cars" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Services", href: "#services" },
  { label: "FAQ", href: "#faq" },
] as const;

export const hero = {
  headline: "A car for one fixed monthly price",
  subheadline:
    "Maintenance, repairs, and inspections are included. You drive — we handle the everyday car admin.",
  primaryCta: "Browse cars",
  secondaryCta: "Estimate monthly cost",
  trustBadges: [
    "Fixed monthly payment",
    "No surprise costs",
    "Delivery to your door",
  ],
};

export const brands = {
  title: "Popular brands",
  subtitle: "Choose from a wide range — all under one simple agreement.",
  items: [
    { id: "volkswagen", name: "Volkswagen" },
    { id: "toyota", name: "Toyota" },
    { id: "bmw", name: "BMW" },
    { id: "mercedes", name: "Mercedes-Benz" },
    { id: "volvo", name: "Volvo" },
    { id: "audi", name: "Audi" },
    { id: "skoda", name: "Škoda" },
    { id: "ford", name: "Ford" },
  ],
} as const;

export type BrandId = (typeof brands.items)[number]["id"];

export const benefits = {
  title: "Why choose a monthly subscription?",
  subtitle:
    "One clear price covers using the car without the risks and hassle of ownership.",
  cards: [
    {
      title: "Fixed monthly payment",
      body: "Budget with confidence — you know exactly what the car costs every month.",
    },
    {
      title: "Maintenance included",
      body: "Scheduled maintenance and repairs within your plan, without separate invoices.",
    },
    {
      title: "Flexibility",
      body: "Choose contract length and mileage to match how you actually drive.",
    },
    {
      title: "Delivery",
      body: "The car is delivered to you — less time spent on logistics.",
    },
    {
      title: "Simple process",
      body: "Pick a car online, complete the details, and get on the road.",
    },
  ],
};

export const comparison = {
  title: "Between leasing and installment purchase",
  intro:
    "You are not buying the car outright or locking into leasing in the same way. You pay for use and the services bundled into one monthly price.",
  columns: [
    {
      label: "Installment purchase",
      points: [
        "You own the asset",
        "You arrange and pay for servicing",
        "Depreciation is yours to manage",
      ],
    },
    {
      label: "Monthly subscription",
      highlight: true,
      points: [
        "Fixed monthly price",
        "Maintenance and repairs included",
        "Less admin for you",
      ],
    },
    {
      label: "Leasing",
      points: [
        "Longer lock-in",
        "Mileage caps",
        "Servicing often extra",
      ],
    },
  ],
};

export const includedServices = {
  title: "What's included in the price?",
  subtitle: "Core services in one package — clearly explained.",
  items: [
    {
      title: "Servicing",
      body: "Manufacturer-scheduled services and service book updates.",
    },
    {
      title: "Repairs",
      body: "Normal wear and faults covered according to your agreement.",
    },
    {
      title: "Inspections",
      body: "Inspection scheduling and preparation where applicable.",
    },
    {
      title: "Tyres & seasons",
      body: "Tyre changes and storage when you add the relevant options.",
    },
    {
      title: "App & support",
      body: "Customer support and digital tools to manage your subscription.",
    },
  ],
};

export const addOns = {
  title: "Optional extras",
  subtitle: "Tailor your package with add-ons that fit your needs.",
  items: [
    {
      title: "Insurance",
      body: "A comprehensive motor policy rolled into one monthly bill.",
    },
    {
      title: "Mobility & protection",
      body: "Roadside assist, replacement car, and similar covers in selected bundles.",
    },
    {
      title: "Other options",
      body: "Accessories, winter wheels, or premium support — ask for a quote.",
    },
  ],
};

export const howItWorks = {
  title: "How it works",
  steps: [
    {
      step: "1",
      title: "Choose a car",
      body: "Browse the range and compare models with a fixed monthly price.",
    },
    {
      step: "2",
      title: "Contract & extras",
      body: "Pick term, mileage, and any add-ons you want.",
    },
    {
      step: "3",
      title: "Delivery",
      body: "We arrange handover — your car is ready to drive.",
    },
  ],
};

export const ctaBanner = {
  title: "Start by choosing a car",
  body: "Thousands of kilometres ahead. Explore the range and estimate your monthly payment.",
  primaryCta: "Browse cars",
};

export const footer = {
  columns: [
    {
      title: "Service",
      links: [
        { label: "Cars", href: "#cars" },
        { label: "How it works", href: "#how-it-works" },
        { label: "Optional extras", href: "#addons" },
      ],
    },
    {
      title: "Support",
      links: [
        { label: "FAQ", href: "#faq" },
        { label: "Customer service", href: "#" },
        { label: "Contact", href: "#" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About us", href: "#" },
        { label: "Careers", href: "#" },
        { label: "Press", href: "#" },
      ],
    },
    {
      title: "Legal",
      links: [
        { label: "Privacy", href: "#" },
        { label: "Terms", href: "#" },
        { label: "Cookies", href: "#" },
      ],
    },
  ],
  legal: "© 2026 Beely (demo). All rights reserved.",
};

export const faqTeaser = {
  id: "faq",
  title: "Frequently asked questions",
  items: [
    {
      q: "Can I change cars during the contract?",
      a: "Options depend on your agreement. Customer service can walk you through what's possible.",
    },
    {
      q: "What happens if I exceed the mileage?",
      a: "Excess mileage is charged at the rate shown before you sign — no hidden rules.",
    },
    {
      q: "Are winter tyres included?",
      a: "Tyres and seasonal swaps can be included when you add the relevant service package.",
    },
  ],
};
