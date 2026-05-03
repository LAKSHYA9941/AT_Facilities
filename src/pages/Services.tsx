import { Link } from "react-router-dom";
import { BedDouble, Heart, Users, Car, Plane, MapPin, Check, ArrowRight } from "lucide-react";
import Seo from "@/components/Seo";
import { Button } from "@/components/ui/button";

const services = [
  { icon: BedDouble, title: "Hotel Reservation", color: "bg-gradient-warm",
    desc: "From boutique stays in Old Manali to luxury resorts in Udaipur and international properties — we book what we'd stay in ourselves.",
    bullets: ["National & international", "Hand-inspected properties", "Best-rate guarantees", "Flexible cancellations"] },
  { icon: Heart, title: "Honeymoon Packages", color: "bg-gradient-spice",
    desc: "Curated for two, paced for slow mornings. Candle-lit dinners, private cabs, and quietly thoughtful surprises.",
    bullets: ["Manali, Kashmir, Nainital, Shimla", "Private chauffeured cabs", "Couple spa add-ons", "Photographer add-ons"] },
  { icon: Users, title: "Groups, Conferences & MICE", color: "bg-gradient-cool",
    desc: "From a 20-pax college trip to a 200-pax corporate offsite — venues, transport, AV and team activities, fully managed.",
    bullets: ["Large-group hotel blocks", "AV & banquet planning", "Adventure & team activities", "Single point of contact"] },
  { icon: Car, title: "Taxi & Cab Booking", color: "bg-gradient-warm",
    desc: "Sedans, SUVs and tempo travellers across every North Indian state with verified, courteous local drivers.",
    bullets: ["Outstation & local", "All North India coverage", "GPS-tracked vehicles", "Flat, transparent fares"] },
  { icon: Plane, title: "Airport Transfers", color: "bg-gradient-cool",
    desc: "Reliable, on-time pickups and drops at IGI Delhi, Jaipur, Amritsar, Srinagar, Leh and beyond.",
    bullets: ["Flight tracking", "Meet & greet", "Child seats on request", "24×7 dispatch"] },
  { icon: MapPin, title: "Custom Itineraries", color: "bg-gradient-spice",
    desc: "Tell us the story you want to live. We'll script the route, the stays, the food stops and the small moments in between.",
    bullets: ["Built around your dates", "Family- & senior-friendly", "Transparent pricing", "Itinerary in 24 hours"] },
];

const Services = () => (
  <>
    <Seo
      title="Travel Services — Hotels, Cabs, Honeymoons, Groups"
      description="Hotel reservations, honeymoon packages, taxi & cab bookings, airport transfers, group travel and bespoke itineraries across North India."
      path="/services"
    />

    <section className="pt-32 pb-16 bg-muted/40">
      <div className="container-x text-center max-w-3xl mx-auto">
        <span className="eyebrow">Our services</span>
        <h1 className="font-display text-5xl md:text-6xl font-bold text-navy mt-3">
          Everything you need <em className="not-italic gradient-text">to travel well.</em>
        </h1>
        <p className="text-muted-foreground mt-5 text-lg leading-relaxed">
          One trusted partner for stays, transport, planning and on-the-ground support — across every state in North India and beyond.
        </p>
      </div>
    </section>

    <section className="py-20">
      <div className="container-x grid md:grid-cols-2 gap-6">
        {services.map(s => (
          <div key={s.title} className="bg-card rounded-2xl border border-border p-7 md:p-8 hover:shadow-elegant transition-smooth">
            <div className={`h-14 w-14 rounded-2xl ${s.color} text-primary-foreground flex items-center justify-center shadow-warm`}>
              <s.icon className="h-7 w-7" />
            </div>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-navy mt-5">{s.title}</h2>
            <p className="text-muted-foreground mt-3 leading-relaxed">{s.desc}</p>
            <ul className="grid grid-cols-2 gap-2 mt-5">
              {s.bullets.map(b => (
                <li key={b} className="flex gap-2 text-sm text-foreground/85">
                  <Check className="h-4 w-4 text-secondary shrink-0 mt-0.5" />{b}
                </li>
              ))}
            </ul>
            <Button asChild variant="link" className="text-primary p-0 h-auto mt-5">
              <Link to={`/contact?service=${encodeURIComponent(s.title)}`}>Enquire about {s.title} <ArrowRight className="h-4 w-4 ml-1" /></Link>
            </Button>
          </div>
        ))}
      </div>
    </section>
  </>
);

export default Services;
