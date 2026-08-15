// ─────────────────────────────────────────────────────────────────────────────
// SALON CONFIG — this is the ONLY file you need to edit to rebrand this website
// for a different salon. Swap names, numbers, prices, images and colors here.
// ─────────────────────────────────────────────────────────────────────────────

const img = (id, w = 1200, h = null) =>
  `https://images.unsplash.com/${id}?q=80&w=${w}${h ? `&h=${h}` : ""}&auto=format&fit=crop`;

export const salon = {
  brand: {
    name: "It's Canary",
    suffix: "Beauty Studio",
    tagline: "Hair · Skin · Nails · Makeup",
    description:
      "Hair, facial, nail and makeup services in Sector 31, Gurugram.",
    // Rebrand in one place — these are injected as CSS variables at runtime.
    colors: {
      accent: "#A65C47",
      "accent-hover": "#8C4A32",
      ink: "#1C1917",
      cream: "#FAF8F5",
      warm: "#F3EFEA",
    },
  },

  contact: {
    phoneDisplay: "+91 79821 55015",
    phoneLink: "+917982155015",
    whatsapp: "917982155015",
    whatsappMessage:
      "Hi, I would like to book an appointment at It's Canary Beauty Studio",
    address: "House Number 896, Basement, Near HUDA Market, Near Om Sweets, Sector 31, Gurugram, Haryana 122001",
    mapsUrl: "https://maps.app.goo.gl/FVrHa5mkwaNxLnE49",
    mapsEmbed:
      "https://www.google.com/maps?q=28.4522696,77.0507079&z=16&output=embed",
    reviewsUrl: "https://maps.app.goo.gl/FVrHa5mkwaNxLnE49",
  },

  hero: {
    image: img("photo-1560066984-138dadb4c035", 2000),
    imageAlt: "Hair styling in a beauty studio",
    overline: "Beauty Studio · Sector 31, Gurugram",
    lines: [
      { text: "Hair. Skin. Nails." },
      { text: "Makeup for" },
      { text: "Every Occasion.", accent: true },
    ],
    subheading:
      "Explore hair styling and colour, facials, nail care, makeup, and bridal or occasion beauty services in Sector 31.",
  },

  marquee: [
    "HAIR & STYLING",
    "FACIALS & SKIN CARE",
    "NAILS",
    "MAKEUP & BRIDAL",
  ],

  about: {
    image: img("photo-1635273051937-a0ddef9573b6", 1200, 1500),
    imageAlt: "Senior stylist precision-cutting a client's hair",
    title: ["Beauty Services in", "Sector 31."],
    paragraphs: [
      "It's Canary Beauty Studio is a beauty salon in Sector 31, Gurugram, offering hair, skin, nail and makeup services.",
      "Whether you are planning an everyday refresh or getting ready for an occasion, explore the service menu and contact the studio directly to discuss your appointment.",
    ],
    chapters: [
      { title: "Hair", text: "Haircuts, styling, colour, highlights, smoothening and treatments." },
      { title: "Skin & Nails", text: "Facials, cleanups, manicure, pedicure, nail art and extensions." },
      { title: "Makeup", text: "Basic, party, bridal, engagement and occasion makeup." },
    ],
    badge: { value: "31", label: "Sector, Gurugram" },
  },

  featured: [
    { title: "Haircut & Styling", tag: "Signature cuts, finished to perfection", service: "Haircut", image: img("photo-1580618672591-eb180b1a973f", 1000, 1250), alt: "Stylist shaping a client's hair" },
    { title: "Hair Colour", tag: "Global, balayage & creative colour", service: "Global Colour", image: img("photo-1562322140-8baeececf3df", 1000, 1250), alt: "Colourist applying hair colour" },
    { title: "Hair Spa", tag: "Deep nourishment & relaxation", service: "Hair Spa", image: img("photo-1522338140262-f46f5913618a", 1000, 1250), alt: "Relaxing hair wash ritual" },
    { title: "Facials", tag: "Glow-first skincare rituals", service: "Premium Facial", image: img("photo-1570172619644-dfd03ed5d881", 1000, 1250), alt: "Client enjoying a facial treatment" },
    { title: "Manicure & Pedicure", tag: "Hands and feet, perfected", service: "Manicure", image: img("photo-1604654894610-df63bc536371", 1000, 1250), alt: "Manicure in progress" },
    { title: "Men's Grooming", tag: "Sharp cuts, beards & clean shaves", service: "Men's Grooming", image: img("photo-1503951914875-452162b0f3f1", 1000, 1250), alt: "Barber grooming a client's beard" },
  ],

  categories: [
    { id: "hair", name: "Hair", services: [
      { name: "Haircuts", description: "Haircut services for a fresh, considered look.", price: "Men's haircut from ₹300" },
      { name: "Hair Styling", description: "Styling for everyday looks and special occasions." }
    ] },
    { id: "hair-colour", name: "Hair Colour", services: [
      { name: "Hair Colouring", description: "Hair colouring options discussed for your preferred look." },
      { name: "Hair Highlights", description: "Highlights, including full-head options.", price: "Men's full head from ₹3,999" }
    ] },
    { id: "hair-treatments", name: "Hair Treatments", services: [
      { name: "Hair Smoothening / Relaxing", description: "Smoothening and relaxing treatment options.", price: "Men's services ₹2,499–₹3,999" },
      { name: "Hair Rebonding", description: "Hair rebonding services.", price: "Men's services from ₹2,499" }
    ] },
    { id: "facials-skin", name: "Facials & Skin Care", services: [
      { name: "Classic Facial", description: "Classic facial service.", price: "Men's services from ₹900" },
      { name: "Premium Facial", description: "Premium facial service.", price: "Men's services from ₹1,600" },
      { name: "Face & Neck Cleanup", description: "Face and neck cleanup options.", price: "Men's services from ₹499" }
    ] },
    { id: "manicure-pedicure", name: "Manicure & Pedicure", services: [
      { name: "Manicure & Pedicure", description: "Hand and foot care services.", price: "Men's services from ₹600" },
      { name: "French Pedicure", description: "French pedicure service.", price: "Men's services from ₹1,400" },
      { name: "Specialised Manicure & Pedicure", description: "O3+, Lotus and Raaga options may be available; contact the studio to confirm." }
    ] },
    { id: "nail-art", name: "Nail Art & Extensions", services: [
      { name: "Nail Art", description: "Decorative nail art options." },
      { name: "Nail Extensions", description: "Nail extension services." }
    ] },
    { id: "makeup", name: "Makeup", services: [
      { name: "Basic Makeup", description: "Makeup for a polished everyday or event-ready look." },
      { name: "Party Makeup", description: "Makeup for parties and celebrations." }
    ] },
    { id: "bridal-makeup", name: "Bridal / Occasion Makeup", services: [
      { name: "Bridal Makeup", description: "Makeup services for wedding celebrations." },
      { name: "Engagement Makeup", description: "Makeup for engagements and other occasions." }
    ] },
    { id: "grooming", name: "Grooming", services: [
      { name: "Grooming Services", description: "Contact the studio to discuss available grooming services." }
    ] }
  ],
  whyUs: [
    { icon: "Scissors", title: "Wide Service Menu", text: "Hair, skin, nail, makeup and grooming categories in one studio." },
    { icon: "Sparkles", title: "Occasion Ready", text: "Makeup options for parties, engagements, bridal events and other occasions." },
    { icon: "HeartHandshake", title: "Direct Booking", text: "Discuss the service you need directly by WhatsApp or phone." },
    { icon: "Flower2", title: "Sector 31 Location", text: "Located near HUDA Market and Om Sweets in Sector 31, Gurugram." }
  ],
  gallery: [
    { url: img("photo-1560066984-138dadb4c035", 900, 1150), alt: "Salon hair styling" },
    { url: img("photo-1601288496920-b6154fe3626a", 900, 750), alt: "Finished hairstyle" },
    { url: img("photo-1595476108010-b4d1f102b1b1", 900, 750), alt: "Beauty studio interior" },
    { url: img("photo-1636153279424-cb5d1e00f5a2", 900, 1150), alt: "Finished smooth hairstyle" },
    { url: img("photo-1487412947147-5cebf100ffc2", 900, 750), alt: "Makeup application" },
    { url: img("photo-1562322140-8baeececf3df", 900, 1150), alt: "Hair highlights application" }
  ]
};

export const whatsappLink = (message = salon.contact.whatsappMessage) =>
  `https://wa.me/${salon.contact.whatsapp}?text=${encodeURIComponent(message)}`;

export const allServices = () =>
  salon.categories.flatMap((c) =>
    c.services.map((s) => ({ ...s, category: c.name }))
  );

export const slugify = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-");
