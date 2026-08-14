// ─────────────────────────────────────────────────────────────────────────────
// SALON CONFIG — this is the ONLY file you need to edit to rebrand this website
// for a different salon. Swap names, numbers, prices, images and colors here.
// ─────────────────────────────────────────────────────────────────────────────

const img = (id, w = 1200, h = null) =>
  `https://images.unsplash.com/${id}?q=80&w=${w}${h ? `&h=${h}` : ""}&auto=format&fit=crop`;

export const salon = {
  brand: {
    name: "Aurelle",
    suffix: "Salon & Studio",
    tagline: "Hair · Beauty · Grooming",
    description:
      "A premium unisex salon offering professional hair, beauty and grooming services in a calm, modern space.",
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
    phoneDisplay: "+91 98765 43210",
    phoneLink: "+919876543210",
    whatsapp: "919876543210",
    whatsappMessage:
      "Hi, I would like to book an appointment. Please share the available slots.",
    email: "hello@aurellesalon.com",
    address: "24 Rosewood Lane, Indiranagar, Bengaluru 560038",
    mapsUrl: "https://maps.google.com/?q=Indiranagar,Bengaluru",
    mapsEmbed:
      "https://www.google.com/maps?q=Indiranagar,Bengaluru&output=embed",
    instagram: "https://instagram.com/aurelle.salon",
    facebook: "https://facebook.com/aurellesalon",
    reviewsUrl: "https://maps.google.com/?q=Indiranagar,Bengaluru",
  },

  hours: [
    { days: "Monday – Saturday", time: "10:00 AM – 8:00 PM" },
    { days: "Sunday", time: "10:00 AM – 6:00 PM" },
  ],

  rating: { value: 4.8, count: 320, label: "Loved by our clients" },

  hero: {
    image: img("photo-1560066984-138dadb4c035", 2000),
    imageAlt: "Stylist working on a client's hair inside a premium salon",
    overline: "Premium Unisex Salon · Bengaluru",
    lines: [
      { text: "Your Look." },
      { text: "Your Style." },
      { text: "Your Confidence.", accent: true },
    ],
    subheading:
      "Professional hair, beauty and grooming services designed around you.",
  },

  marquee: [
    "MORE THAN JUST A SALON",
    "ELEVATE YOUR STYLE",
    "REVEAL YOUR CONFIDENCE",
    "CRAFTED WITH CARE",
  ],

  about: {
    image: img("photo-1635273051937-a0ddef9573b6", 1200, 1500),
    imageAlt: "Senior stylist precision-cutting a client's hair",
    title: ["More Than Just", "a Salon."],
    paragraphs: [
      "Aurelle is a studio built around one belief — that great hair and great care belong together. Our stylists, colourists and therapists bring years of craft to every chair, in a space designed to slow you down.",
      "From everyday grooming to once-in-a-lifetime bridal looks, every service is personal, unhurried and finished with obsessive attention to detail.",
    ],
    chapters: [
      { title: "The Craft", text: "Master stylists and colourists, trained on global techniques." },
      { title: "The Care", text: "Professional-grade products, chosen for your hair and skin." },
      { title: "The Comfort", text: "A calm, considered space that feels like an exhale." },
    ],
    badge: { value: "10+", label: "Years of craft" },
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
    {
      id: "hair",
      name: "Hair",
      services: [
        { name: "Haircut", description: "Precision cut tailored to your face shape and lifestyle.", duration: "45 min", price: "₹499" },
        { name: "Hair Styling", description: "Occasion-ready styling, from sleek to textured.", duration: "30 min", price: "₹399" },
        { name: "Hair Wash", description: "Cleansing ritual with a relaxing scalp massage.", duration: "20 min", price: "₹199" },
        { name: "Blow Dry", description: "Smooth, voluminous blowout that lasts for days.", duration: "30 min", price: "₹349" },
        { name: "Hair Spa", description: "Deep nourishment and relaxation treatment.", duration: "60 min", price: "₹999" },
        { name: "Hair Treatment", description: "Keratin and repair therapies for damaged hair.", duration: "90 min", price: "₹2,499" },
      ],
    },
    {
      id: "hair-colour",
      name: "Hair Colour",
      services: [
        { name: "Global Colour", description: "Full-head colour in rich, dimensional shades.", duration: "120 min", price: "₹2,999" },
        { name: "Highlights", description: "Face-framing dimension with foiled highlights.", duration: "150 min", price: "₹3,499" },
        { name: "Balayage", description: "Hand-painted, sun-kissed colour with soft regrowth.", duration: "180 min", price: "₹4,999" },
        { name: "Root Touch-up", description: "Seamless grey coverage and regrowth refresh.", duration: "60 min", price: "₹1,299" },
        { name: "Creative Colour", description: "Bold fashion shades and statement transformations.", duration: "150 min", price: "₹3,999" },
      ],
    },
    {
      id: "skin-facials",
      name: "Skin & Facials",
      services: [
        { name: "Cleanup", description: "Express deep-cleanse for an instant refresh.", duration: "30 min", price: "₹599" },
        { name: "Basic Facial", description: "Classic glow facial for everyday radiance.", duration: "45 min", price: "₹999" },
        { name: "Premium Facial", description: "Luxury ritual with advanced actives and massage.", duration: "75 min", price: "₹1,999" },
        { name: "De-Tan", description: "Targeted tan removal for an even, bright tone.", duration: "40 min", price: "₹799" },
        { name: "Skin Treatment", description: "Customised care for specific skin concerns.", duration: "60 min", price: "₹2,499" },
      ],
    },
    {
      id: "nails",
      name: "Nails",
      services: [
        { name: "Manicure", description: "Shape, cuticle care and polish for immaculate hands.", duration: "45 min", price: "₹699" },
        { name: "Pedicure", description: "Soothing soak, exfoliation and perfect polish.", duration: "60 min", price: "₹899" },
        { name: "Nail Art", description: "Hand-painted designs, from minimal to maximal.", duration: "40 min", price: "₹999" },
        { name: "Gel Nails", description: "Long-wear gel finish with a glass-like shine.", duration: "75 min", price: "₹1,499" },
      ],
    },
    {
      id: "makeup",
      name: "Makeup",
      services: [
        { name: "Party Makeup", description: "Camera-ready glam for evenings out.", duration: "60 min", price: "₹2,499" },
        { name: "Bridal Makeup", description: "Heirloom bridal artistry with trial included.", duration: "180 min", price: "₹14,999" },
        { name: "Engagement Makeup", description: "Soft, radiant looks for your ring ceremony.", duration: "120 min", price: "₹7,999" },
        { name: "Event Makeup", description: "Polished looks for shoots, sangeets and more.", duration: "90 min", price: "₹3,999" },
      ],
    },
    {
      id: "grooming",
      name: "Grooming",
      services: [
        { name: "Waxing", description: "Gentle, effective full-body waxing.", duration: "45 min", price: "₹599" },
        { name: "Threading", description: "Precise brow shaping and facial threading.", duration: "15 min", price: "₹99" },
        { name: "Beard Styling", description: "Sculpted beards with crisp detailing.", duration: "30 min", price: "₹349" },
        { name: "Shaving", description: "Classic hot-towel shave, done properly.", duration: "20 min", price: "₹249" },
        { name: "Men's Grooming", description: "The complete ritual — cut, beard and cleanup.", duration: "60 min", price: "₹999" },
      ],
    },
  ],

  whyUs: [
    { icon: "Scissors", title: "Experienced Professionals", text: "Skilled professionals focused on quality and detail." },
    { icon: "Sparkles", title: "Premium Products", text: "Professional-grade products selected for your beauty needs." },
    { icon: "HeartHandshake", title: "Personalized Experience", text: "Services tailored to your preferences and style." },
    { icon: "Flower2", title: "Clean & Comfortable", text: "A welcoming environment designed for your comfort." },
  ],

  gallery: [
    { url: img("photo-1560066984-138dadb4c035", 900, 1150), alt: "Client relaxing in the salon chair mid-styling" },
    { url: img("photo-1601288496920-b6154fe3626a", 900, 750), alt: "Glossy finished hairstyle in natural light" },
    { url: img("photo-1581841064838-a470c740e8ee", 900, 1150), alt: "Editorial beauty portrait of a salon client" },
    { url: img("photo-1595476108010-b4d1f102b1b1", 900, 750), alt: "Warm, modern salon interior" },
    { url: img("photo-1636153279424-cb5d1e00f5a2", 900, 1150), alt: "Long dark hair after a smoothing treatment" },
    { url: img("photo-1487412947147-5cebf100ffc2", 900, 750), alt: "Professional makeup application close-up" },
    { url: img("photo-1522337660859-02fbefca4702", 900, 1050), alt: "Professional brushes and beauty tools" },
    { url: img("photo-1540555700478-4be289fbecef", 900, 750), alt: "Spa ritual setting with towels and stones" },
    { url: img("photo-1562322140-8baeececf3df", 900, 1150), alt: "Colourist painting highlights in foil" },
    { url: img("photo-1596462502278-27bfdc403348", 900, 750), alt: "Curated professional beauty products" },
  ],

  testimonials: [
    { name: "Ananya Sharma", rating: 5, text: "The balayage turned out exactly like the reference photo I carried in. The team took time to explain aftercare and never rushed a single step.", date: "2 weeks ago", service: "Balayage" },
    { name: "Rohan Mehta", rating: 5, text: "Best haircut I've had in years. They actually listened before picking up the scissors — rare, and it shows in the result.", date: "1 month ago", service: "Haircut" },
    { name: "Priya Nair", rating: 5, text: "My bridal makeup lasted twelve hours, through tears and dancing. Calm, professional, and the trial session made all the difference.", date: "3 weeks ago", service: "Bridal Makeup" },
    { name: "Kavya Reddy", rating: 4, text: "The hair spa is pure therapy — I nearly fell asleep. Hair felt like silk for weeks afterwards. Booking again.", date: "1 month ago", service: "Hair Spa" },
    { name: "Arjun Kapoor", rating: 5, text: "Sharp beard work and a proper hot-towel finish. This is the only chair I trust now. Worth every rupee.", date: "2 months ago", service: "Beard Styling" },
    { name: "Meera Iyer", rating: 5, text: "Gel nails that survived three weeks of typing, travel and life. Beautiful studio, lovely people, zero waiting around.", date: "3 months ago", service: "Gel Nails" },
  ],
  // Demo note: these are placeholder reviews for preview purposes only.

  instagramGrid: [
    { url: img("photo-1519699047748-de8e457a634e", 700, 700), alt: "Client portrait after a styling session" },
    { url: img("photo-1559599101-f09722fb4948", 700, 700), alt: "Fresh blowout with soft waves" },
    { url: img("photo-1605497788044-5a32c7078486", 700, 700), alt: "Makeup artist at work on a client" },
    { url: img("photo-1610992015732-2449b76344bc", 700, 700), alt: "Freshly finished manicure" },
    { url: img("photo-1522338140262-f46f5913618a", 700, 700), alt: "Hair spa ritual at the basin" },
    { url: img("photo-1516975080664-ed2fc6a32937", 700, 700), alt: "Men's grooming transformation" },
  ],

  booking: {
    timeSlots: ["10:00 AM", "11:00 AM", "12:00 PM", "01:00 PM", "02:00 PM", "03:00 PM", "04:00 PM", "05:00 PM", "06:00 PM", "07:00 PM"],
    successMessage:
      "Thank you! Your appointment request has been received. We'll contact you shortly.",
  },
};

export const whatsappLink = (message = salon.contact.whatsappMessage) =>
  `https://wa.me/${salon.contact.whatsapp}?text=${encodeURIComponent(message)}`;

export const allServices = () =>
  salon.categories.flatMap((c) =>
    c.services.map((s) => ({ ...s, category: c.name }))
  );

export const slugify = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-");
