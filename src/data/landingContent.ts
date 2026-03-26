/** Images from Stitch design reference (Google-hosted assets). */
export const stitchImages = {
  heroCar:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCtYsAwgyenmyGx1KGU8ineuo7DuFo3Lno0M_EDNTr41bc6wQYFbV3y-uW-kfoH6i0w8N7pLbOGwnu2PskU_l2kBNOcpOguDRsPEeGK9cfh4aWSqRgiu3vy6P9pOANO4I371qVmbgh8pE--BxCkTwAZEKGd5w4j-IO1ukzb-1pYiJAwuJALj68oAmB0kQygch_9y0LEMhyRAc-HWuwwoljEtveMEQ7Tf69emSvlMyhnKv9duoUc8hNa12xsdsIrh9RnZO-jXEkvD6Tw",
  addOnInterior:
    "/excited_indian_man_singing_enjoying_while_driving_car_695242_16304.avif",
} as const;

export const navLinks = [
  { label: "Cars", href: "#cars" },
  { label: "How it Works", href: "#how-it-works" },
  { label: "Support", href: "#support" },
] as const;

export const hero = {
  headlineBefore: "Get a car for a ",
  headlineHighlight: "fixed",
  headlineAfter: " monthly price.",
  subheadline:
    "Maintenance, inspections, and repairs always included. Flexibility with short contracts starting from 6 months.",
  primaryCta: "Browse Cars",
  secondaryCta: "How it works",
};

export const featuredCars = {
  title: "Featured Cars",
  subtitle: "Fresh arrivals you can subscribe to right now.",
  items: [
    {
      name: "BMW 3 Series",
      priceLabel: "From 529 €/month",
      image:
        "https://placehold.co/960x560/e9e9e9/1c1b1b?text=BMW+3+Series",
      specialOffer: true,
    },
    {
      name: "Mercedes C-Class",
      priceLabel: "From 579 €/month",
      image:
        "https://placehold.co/960x560/efefef/1c1b1b?text=Mercedes+C-Class",
      specialOffer: true,
    },
    {
      name: "Audi A4",
      priceLabel: "From 549 €/month",
      image: "https://placehold.co/960x560/f3f3f3/1c1b1b?text=Audi+A4",
      specialOffer: false,
    },
    {
      name: "Skoda Kodiaq",
      priceLabel: "From 499 €/month",
      image:
        "https://placehold.co/960x560/ededed/1c1b1b?text=Skoda+Kodiaq",
      specialOffer: false,
    },
    {
      name: "Volkswagen Tiguan",
      priceLabel: "From 519 €/month",
      image:
        "https://placehold.co/960x560/e7e7e7/1c1b1b?text=Volkswagen+Tiguan",
      specialOffer: false,
    },
  ],
} as const;

export const brands = {
  title: "Our Fleet Brands",
  browseLink: "Browse 30+ Brands",
  /** Nine logos in `public/logos/` for the 3×3 fleet grid. */
  items: [
    { name: "Volkswagen", logo: "/logos/vw.png" },
    { name: "Toyota", logo: "/logos/toyota.png" },
    { name: "BMW", logo: "/logos/bmw.png" },
    { name: "Mercedes-Benz", logo: "/logos/mercedes.png" },
    { name: "Ford", logo: "/logos/ford.png" },
    { name: "Kia", logo: "/logos/kia.png" },
    { name: "Opel", logo: "/logos/opel.png" },
    { name: "Peugeot", logo: "/logos/peugeot.png" },
    { name: "Škoda", logo: "/logos/skoda.png" },
  ],
} as const;

export const stitchBenefits = {
  cards: [
    {
      icon: "payments" as const,
      title: "Fixed Monthly Payment",
      body: "No surprises, everything included. One single invoice for everything related to your mobility.",
    },
    {
      icon: "build" as const,
      title: "Maintenance Included",
      body: "Full service and repair coverage. From oil changes to brake pads, we take care of it all.",
    },
    {
      icon: "calendar_today" as const,
      title: "Short Contracts",
      body: "Flexible terms from 6 months. Ideal for modern lifestyles and changing business needs.",
    },
  ],
};

export const comparison = {
  title: "Why Wheely?",
  subtitle: "The best of both worlds: easy like leasing, flexible like ownership.",
  rows: [
    {
      feature: "Min. Duration",
      wheely: "6 Months",
      leasing: "24 - 48 Months",
      ownership: "Long-term commitment",
    },
    {
      feature: "Included Maintenance",
      wheelyKind: "check" as const,
      leasing: "Extra Cost",
      ownership: "Extra Cost",
    },
    {
      feature: "Down Payment",
      wheely: "$0 / No hidden fees",
      leasing: "High upfront cost",
      ownership: "Full payment or high DP",
    },
    {
      feature: "Paperwork",
      wheely: "100% Online / Instant",
      leasing: "Complex / Bank visits",
      ownership: "Manual Registration",
    },
  ],
};

export const includedServices = {
  title: "No hidden costs. Ever.",
  items: [
    { icon: "precision_manufacturing" as const, label: "Servicing" },
    { icon: "home_repair_service" as const, label: "Repairs" },
    { icon: "verified" as const, label: "Inspections" },
    { icon: "ac_unit" as const, label: "Seasonal Tires" },
    { icon: "support_agent" as const, label: "24/7 Support" },
  ],
};

export const howItWorks = {
  title: "From online to driveway in days",
  steps: [
    {
      step: "01",
      title: "Order a car online",
      body: "Choose your model and complete the order fully online in minutes.",
    },
    {
      step: "02",
      title: "Delivery even tomorrow",
      body: "Fast home delivery with next-day options where available.",
    },
    {
      step: "03",
      title: "Activate the mobile app and enjoy your Wheely",
      body: "Unlock all subscription details and manage your car from your phone.",
    },
    {
      step: "04",
      title: "Service and inspection at partner stores",
      body: "Maintenance and required inspections are handled at trusted partner locations.",
    },
    {
      step: "05",
      title: "Return, exchange, or redeem",
      body: "At the end of your term, return it, switch to another car, or redeem it.",
    },
  ],
};

export const addOns = {
  title: "Customize Your Ride",
  intro: "Complete your order with additional services",
  items: [
    {
      icon: "local_shipping" as const,
      title: "Home Delivery",
      body: "Delivered to your door, even tomorrow where available.",
      priceLabel: "0 € anytime",
      accent: true,
    },
    {
      icon: "health_and_safety" as const,
      title: "Mobility Safety",
      body: "Extra protection for safer day-to-day driving.",
      priceLabel: "10 €/month",
      accent: false,
    },
    {
      icon: "tire_repair" as const,
      title: "Tire Storage, Replacement and Security",
      body: "Seasonal tire storage, replacement support, and added security.",
      priceLabel: "26 €/month",
      accent: false,
    },
    {
      icon: "verified_user" as const,
      title: "Insurance",
      body: "Insurance options tailored to your selected vehicle.",
      priceLabel: "Price per car",
      accent: false,
    },
  ],
  availabilityBadge: "Pick only what you need",
};

export const ctaBanner = {
  title: "Ready to find your car?",
  body: "Join the 10,000+ drivers who switched to the new way of having a car. No paperwork, no stress.",
  primaryCta: "See All Cars",
};

export const footer = {
  blurb:
    "The next generation of car ownership. Transparent, flexible, and completely digital.",
  legal: "© 2026 Wheely Automotive Subscription. All rights reserved.",
  columns: [
    {
      title: "Company",
      links: [
        { label: "Privacy Policy", href: "#" },
        { label: "Terms of Service", href: "#" },
        { label: "Cookies", href: "#" },
        { label: "Imprint", href: "#" },
      ],
    },
    {
      title: "Support",
      id: "support" as const,
      links: [
        { label: "Contact Support", href: "#" },
        { label: "Help Center", href: "#" },
        { label: "Safety", href: "#" },
        { label: "Fleet Partnership", href: "#" },
      ],
    },
    {
      title: "Newsletter",
      newsletter: true as const,
      body: "Get the best offers before they vanish.",
    },
  ],
};
