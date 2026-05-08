import himalayas from "@/assets/avifs/dest-himalayas_converted.avif";
import spiritual from "@/assets/avifs/dest-spiritual_converted.avif";
import heritage from "@/assets/avifs/dest-heritage_converted.avif";
import honeymoon from "@/assets/avifs/dest-honeymoon_converted.avif";
import shimla from "@/assets/avifs/shimla_converted.avif"
import manali from "@/assets/avifs/manali_converted.avif"
import leh_ladakh from "@/assets/avifs/leh-ladakh_converted.avif"
import kashmir from "@/assets/avifs/kashmir_converted.avif"
import spiti_valley from "@/assets/avifs/spiti_valley_converted.avif"
import haridwar from "@/assets/avifs/haridwar_converted.avif"
import rishikesh from "@/assets/avifs/rishikesh_converted.avif"
import vaishno_devi from "@/assets/avifs/vaishno_devi_converted.avif"
import char_dham from "@/assets/avifs/char-dham_converted.avif"
import amritsar from "@/assets/avifs/amritsar_converted.avif"
import delhi from "@/assets/avifs/delhi_converted.avif"
import agra from "@/assets/avifs/agra_converted.avif"
import jaipur from "@/assets/avifs/jaipur_converted.avif"
import udaipur from "@/assets/avifs/udaipur_converted.avif"
import jodhpur from "@/assets/avifs/jodhpur_converted.avif"
import manali_honeymoon from "@/assets/avifs/manali-romance_converted.avif"
import manali_shimla_combo from "@/assets/avifs/manali_shimla_combo_converted.avif"
import nainital from "@/assets/avifs/nainital_converted.avif"
import kashmir_honeymoon from "@/assets/avifs/kashmir_romance_converted.avif"

export type Category = "himalayas" | "spiritual" | "heritage" | "honeymoon";

export interface Destination {
  slug: string;
  name: string;
  category: Category;
  state: string;
  tagline: string;
  description: string;
  highlights: string[];
  bestTime: string;
  duration: string;
  image: string;
}

export const categoryMeta: Record<Category, { label: string; image: string; blurb: string }> = {
  himalayas: { label: "Himalayan Escapes", image: himalayas, blurb: "Snow-capped peaks, alpine lakes & mountain drives." },
  spiritual: { label: "Spiritual Circuits", image: spiritual, blurb: "Temples, ghats and sacred journeys of the north." },
  heritage:  { label: "Heritage & Golden Triangle", image: heritage, blurb: "Forts, palaces and timeless Mughal grandeur." },
  honeymoon: { label: "Honeymoon Specials", image: honeymoon, blurb: "Romantic getaways crafted just for two." },
};

export const destinations: Destination[] = [
  { slug: "manali", name: "Manali", category: "himalayas", state: "Himachal Pradesh",
    tagline: "Snow, pine & adventure",
    description: "Wake up to deodar forests, drift down the Beas and chase snow at Solang & Rohtang.",
    highlights: ["Solang Valley snow sports", "Old Manali cafés", "Hadimba Temple", "Rohtang Pass excursion"],
    bestTime: "Oct – Mar (snow), Apr – Jun (pleasant)", duration: "5N / 6D", image: manali },
  { slug: "shimla", name: "Shimla", category: "himalayas", state: "Himachal Pradesh",
    tagline: "Queen of the hills",
    description: "Colonial charm meets Himalayan vistas on the historic Mall Road.",
    highlights: ["Mall Road & Ridge", "Toy train ride", "Kufri day trip", "Jakhu Temple"],
    bestTime: "Mar – Jun, Dec – Feb", duration: "4N / 5D", image: shimla },
  { slug: "leh-ladakh", name: "Leh-Ladakh", category: "himalayas", state: "Ladakh",
    tagline: "Land of high passes",
    description: "Moonlit monasteries, turquoise Pangong and the world's highest motorable roads.",
    highlights: ["Pangong Tso", "Nubra Valley & Hunder dunes", "Khardung La pass", "Thiksey Monastery"],
    bestTime: "May – September", duration: "7N / 8D", image: leh_ladakh },
  { slug: "spiti", name: "Spiti Valley", category: "himalayas", state: "Himachal Pradesh",
    tagline: "Middle land of monks",
    description: "Stark, surreal Himalayan desert dotted with thousand-year-old gompas.",
    highlights: ["Key Monastery", "Chandratal lake", "Langza fossils", "Chicham bridge"],
    bestTime: "Jun – October", duration: "7N / 8D", image: spiti_valley },
  { slug: "kashmir", name: "Kashmir", category: "himalayas", state: "Jammu & Kashmir",
    tagline: "Paradise on earth",
    description: "Shikara rides on Dal, tulip gardens and the silver slopes of Gulmarg.",
    highlights: ["Dal Lake houseboat", "Gulmarg Gondola", "Pahalgam meadows", "Sonmarg glaciers"],
    bestTime: "Mar – Oct (snow Dec – Feb)", duration: "6N / 7D", image: kashmir },

  { slug: "haridwar", name: "Haridwar", category: "spiritual", state: "Uttarakhand",
    tagline: "Gateway to the gods",
    description: "Witness the timeless Ganga aarti at Har Ki Pauri.",
    highlights: ["Har Ki Pauri aarti", "Mansa Devi temple", "Chandi Devi ropeway"],
    bestTime: "Year round", duration: "2N / 3D", image: haridwar },
  { slug: "rishikesh", name: "Rishikesh", category: "spiritual", state: "Uttarakhand",
    tagline: "Yoga capital of the world",
    description: "The holy Ganges, suspension bridges and soulful river-side ashrams.",
    highlights: ["Triveni Ghat aarti", "Lakshman Jhula", "Beatles Ashram", "River rafting"],
    bestTime: "Sep – May", duration: "3N / 4D", image: rishikesh },
  { slug: "vaishno-devi", name: "Vaishno Devi", category: "spiritual", state: "Jammu & Kashmir",
    tagline: "Climb to Mata's darshan",
    description: "A sacred trek through the Trikuta hills to the holy cave shrine.",
    highlights: ["Bhawan darshan", "Bhairon Temple", "Helicopter option"],
    bestTime: "Mar – Oct", duration: "2N / 3D", image: vaishno_devi },
  { slug: "amritsar", name: "Amritsar", category: "spiritual", state: "Punjab",
    tagline: "City of the Golden Temple",
    description: "The Harmandir Sahib, langar seva and the stirring Wagah border ceremony.",
    highlights: ["Golden Temple", "Jallianwala Bagh", "Wagah border parade", "Punjabi food trail"],
    bestTime: "Oct – Mar", duration: "2N / 3D", image: amritsar },
  { slug: "char-dham", name: "Char Dham Yatra", category: "spiritual", state: "Uttarakhand",
    tagline: "The four sacred abodes",
    description: "Yamunotri, Gangotri, Kedarnath and Badrinath — a once-in-a-lifetime pilgrimage.",
    highlights: ["Kedarnath darshan", "Badrinath temple", "Gangotri glacier route", "Helicopter packages"],
    bestTime: "May – June, Sep – Oct", duration: "10N / 11D", image: char_dham },

  { slug: "delhi", name: "Delhi", category: "heritage", state: "Delhi",
    tagline: "Where centuries collide",
    description: "Mughal monuments, colonial avenues and bustling bazaars.",
    highlights: ["Red Fort & Jama Masjid", "Qutub Minar", "India Gate", "Chandni Chowk food walk"],
    bestTime: "Oct – Mar", duration: "3N / 4D", image: delhi },
  { slug: "agra", name: "Agra", category: "heritage", state: "Uttar Pradesh",
    tagline: "Home of eternal love",
    description: "The Taj Mahal at sunrise — a sight that lives up to every legend.",
    highlights: ["Taj Mahal sunrise", "Agra Fort", "Mehtab Bagh", "Fatehpur Sikri"],
    bestTime: "Oct – Mar", duration: "1N / 2D", image: agra },
  { slug: "jaipur", name: "Jaipur", category: "heritage", state: "Rajasthan",
    tagline: "The pink city",
    description: "Palaces, observatories and the regal Amer Fort in royal Rajasthan.",
    highlights: ["Amer Fort", "Hawa Mahal", "City Palace", "Jantar Mantar"],
    bestTime: "Oct – Mar", duration: "3N / 4D", image: jaipur },
  { slug: "udaipur", name: "Udaipur", category: "heritage", state: "Rajasthan",
    tagline: "Venice of the east",
    description: "Lake palaces, marble courtyards and golden-hour boat rides on Pichola.",
    highlights: ["Lake Pichola boat", "City Palace", "Jagdish Temple", "Sajjangarh sunset"],
    bestTime: "Sep – Mar", duration: "3N / 4D", image: udaipur },
  { slug: "jodhpur", name: "Jodhpur", category: "heritage", state: "Rajasthan",
    tagline: "The blue city",
    description: "Mehrangarh towers above a sea of indigo houses and timeless havelis.",
    highlights: ["Mehrangarh Fort", "Jaswant Thada", "Clock Tower bazaar", "Desert excursions"],
    bestTime: "Oct – Mar", duration: "2N / 3D", image: jodhpur },

  { slug: "manali-honeymoon", name: "Manali Honeymoon", category: "honeymoon", state: "Himachal Pradesh",
    tagline: "Snow-kissed romance",
    description: "Cozy cottages, candle-lit dinners and snow walks for two.",
    highlights: ["Private cab", "Candle-lit dinner", "Snow point excursion", "Couple spa"],
    bestTime: "Year round", duration: "5N / 6D", image: manali_honeymoon },
  { slug: "shimla-honeymoon", name: "Shimla & Manali Combo", category: "honeymoon", state: "Himachal Pradesh",
    tagline: "Two hill towns, one love story",
    description: "Colonial Shimla and dreamy Manali combined into one unforgettable escape.",
    highlights: ["Mall Road strolls", "Kufri day", "Solang adventure", "Hot-cocoa nights"],
    bestTime: "Year round", duration: "6N / 7D", image: manali_shimla_combo },
  { slug: "nainital-honeymoon", name: "Nainital", category: "honeymoon", state: "Uttarakhand",
    tagline: "By the emerald lake",
    description: "Boat rides, ropeways and soft mountain mornings in the Kumaon hills.",
    highlights: ["Naini Lake boating", "Snow View ropeway", "Tiffin Top trek", "Mall Road"],
    bestTime: "Mar – Jun, Sep – Nov", duration: "4N / 5D", image: nainital },
  { slug: "kashmir-honeymoon", name: "Kashmir Honeymoon", category: "honeymoon", state: "Jammu & Kashmir",
    tagline: "Houseboats & shikaras",
    description: "Float on Dal Lake, glide up Gulmarg and lose yourselves in the valley.",
    highlights: ["Deluxe houseboat", "Shikara ride", "Gulmarg gondola", "Pahalgam day"],
    bestTime: "Mar – Oct", duration: "6N / 7D", image: kashmir_honeymoon },
];

export const getDestination = (slug: string) => destinations.find(d => d.slug === slug);
