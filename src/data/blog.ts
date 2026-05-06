import leh_ladakh from "@/assets/leh-ladakh.jpg";
import rishikesh from "@/assets/rishikesh.jpg"
import haridwar from "@/assets/haridwar.jpg"
import manalroma from "@/assets/manali-romance.jpg"
import golden from "@/assets/amritsar.jpg"

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  readMin: number;
  category: string;
  body: string[];
}

export const posts: BlogPost[] = [
  {
    slug: "best-time-leh-ladakh",
    title: "Best Time to Visit Leh-Ladakh: A Month-by-Month Guide",
    excerpt: "From the moonlight monasteries of June to the frozen Chadar trek of January — when should you go?",
    image: leh_ladakh, date: "2026-03-12", readMin: 6, category: "Himalayas",
    body: [
      "Ladakh is a region of dramatic seasons. Most travellers visit between May and September, when the Manali-Leh and Srinagar-Leh highways are open and Pangong Tso glistens in full turquoise.",
      "If you crave solitude and frozen rivers, January's Chadar trek is for you — but acclimatisation is non-negotiable.",
      "Our recommendation: late June to early September for first-time travellers. We arrange oxygen-equipped vehicles and altitude-friendly itineraries.",
    ],
  },
  {
    slug: "char-dham-checklist",
    title: "Char Dham Yatra: The Complete Pre-Departure Checklist",
    excerpt: "Permits, fitness, packing and helicopter bookings — your no-stress guide to the four sacred abodes.",
    image: rishikesh, date: "2026-02-22", readMin: 8, category: "Spiritual",
    body: [
      "The Char Dham — Yamunotri, Gangotri, Kedarnath and Badrinath — is one of Hinduism's holiest pilgrimages. It is also a serious mountain journey.",
      "Register on the official portal, complete a basic medical fitness check, pack layers, and book helicopter slots well in advance for Kedarnath.",
      "We handle every permit, hotel and chopper booking so you focus on the darshan, not the paperwork.",
    ],
  },
  {
    slug: "golden-triangle-7-days",
    title: "Golden Triangle in 7 Days: The Perfect First India Trip",
    excerpt: "Delhi, Agra, Jaipur — the iconic loop that captures India's grandest history in one unforgettable week.",
    image: haridwar, date: "2026-02-04", readMin: 7, category: "Heritage",
    body: [
      "Start with two days of Delhi's Mughal monuments and street food, then sunrise at the Taj Mahal in Agra, before three days exploring Jaipur's forts and bazaars.",
      "Travel by private chauffeured sedan or SUV — far more relaxed than trains, with hand-picked heritage hotels at every stop.",
    ],
  },
  {
    slug: "honeymoon-kashmir-vs-manali",
    title: "Kashmir vs Manali: Which Honeymoon is Right for You?",
    excerpt: "Houseboats and shikaras, or pine forests and snow walks? Here's how to choose.",
    image: manalroma, date: "2026-01-18", readMin: 5, category: "Honeymoon",
    body: [
      "Kashmir offers serene, slow days on Dal Lake and the cinematic Gulmarg gondola — ideal if you love elegance and gentle pacing.",
      "Manali leans adventurous: snow sports at Solang, drives to Rohtang and lively Old Manali cafés.",
      "Whichever you choose, we craft private, candle-lit experiences for two.",
    ],
  },
  {
    slug: "delhi-airport-to-shimla",
    title: "Delhi Airport to Shimla: The Smoothest Way to Get There",
    excerpt: "Cab, train or chopper? A practical comparison with timings and prices.",
    image: golden, date: "2025-12-30", readMin: 4, category: "Travel Tips",
    body: [
      "A direct private cab takes 7–8 hours and is the most comfortable for families. The Kalka Shatabdi + heritage Toy Train combo is romantic but slower.",
      "We offer all three options and combine them based on your dates.",
    ],
  },
];

export const getPost = (slug: string) => posts.find(p => p.slug === slug);
