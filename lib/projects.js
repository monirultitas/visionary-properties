// Data-driven project portfolio.
// Add a new project by appending an object here — the site renders it automatically.

export const projects = [
  {
    slug: "alamnagar-housing",
    status: "flagship", // flagship | ongoing | upcoming
    name: { en: "Alamnagar Housing", bn: "আলমনগর হাউজিং" },
    type: { en: "Proposed Residential Project", bn: "প্রস্তাবিত আবাসিক প্রকল্প" },
    location: { en: "Mouza Baunia · Near Sagufta & DOHS", bn: "মৌজা বাউনিয়া · সাগুফতা ও ডিওএইচএস সংলগ্ন" },
    image:
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1600&q=80",
    tagline: {
      en: "Two B+G+12 towers at the crossroads of Uttara and Mirpur.",
      bn: "উত্তরা ও মিরপুরের সংযোগস্থলে দুটি বি+জি+১২ টাওয়ার।",
    },
    facts: [
      { value: "2", label: { en: "Towers", bn: "টাওয়ার" } },
      { value: "B+G+12", label: { en: "Floors", bn: "তলা" } },
      { value: "1500", label: { en: "Sq.ft / Share", bn: "স্কয়ার ফিট / শেয়ার" } },
    ],
  },
  {
    slug: "riverside-residency",
    status: "upcoming",
    name: { en: "Riverside Residency", bn: "রিভারসাইড রেসিডেন্সি" },
    type: { en: "Upcoming Premium Apartments", bn: "আসন্ন প্রিমিয়াম অ্যাপার্টমেন্ট" },
    location: { en: "Turag Riverfront, Dhaka", bn: "তুরাগ নদীতীর, ঢাকা" },
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=80",
    tagline: {
      en: "Waterfront living with panoramic skyline views.",
      bn: "মনোরম স্কাইলাইন ভিউসহ নদীতীরবর্তী জীবনযাপন।",
    },
    facts: [{ value: "Coming Soon", label: { en: "2026", bn: "২০২৬" } }],
  },
  {
    slug: "green-vista",
    status: "upcoming",
    name: { en: "Green Vista", bn: "গ্রীন ভিস্তা" },
    type: { en: "Upcoming Eco Residences", bn: "আসন্ন ইকো রেসিডেন্স" },
    location: { en: "Purbachal Link Road, Dhaka", bn: "পূর্বাচল লিংক রোড, ঢাকা" },
    image:
      "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1600&q=80",
    tagline: {
      en: "Sustainable homes wrapped in vertical gardens.",
      bn: "ভার্টিক্যাল গার্ডেনে ঘেরা টেকসই আবাসন।",
    },
    facts: [{ value: "Coming Soon", label: { en: "2027", bn: "২০২৭" } }],
  },
];

export const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    alt: { en: "Modern apartment living room", bn: "আধুনিক অ্যাপার্টমেন্ট লিভিং রুম" },
  },
  {
    src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
    alt: { en: "Contemporary interior", bn: "সমকালীন ইন্টেরিয়র" },
  },
  {
    src: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=1200&q=80",
    alt: { en: "Rooftop garden lounge", bn: "রুফটপ গার্ডেন লাউঞ্জ" },
  },
  {
    src: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=80",
    alt: { en: "Master bedroom", bn: "মাস্টার বেডরুম" },
  },
  {
    src: "https://images.unsplash.com/photo-1556912173-3bb406ef7e77?auto=format&fit=crop&w=1200&q=80",
    alt: { en: "Designer kitchen", bn: "ডিজাইনার কিচেন" },
  },
  {
    src: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80",
    alt: { en: "Bright living space", bn: "উজ্জ্বল লিভিং স্পেস" },
  },
  {
    src: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=1200&q=80",
    alt: { en: "City skyline connectivity", bn: "শহরের স্কাইলাইন কানেক্টিভিটি" },
  },
  {
    src: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80",
    alt: { en: "Premium facade", bn: "প্রিমিয়াম ফ্যাসাড" },
  },
];
