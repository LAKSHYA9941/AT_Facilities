import { useState, useMemo } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { ArrowRight, MapPin, Clock } from "lucide-react";
import Seo from "@/components/Seo";
import { destinations, categoryMeta, type Category } from "@/data/destinations";
import { cn } from "@/lib/utils";

type Filter = "all" | Category;
const filters: { id: Filter; label: string }[] = [
  { id: "all", label: "All" },
  { id: "himalayas", label: "Himalayas" },
  { id: "spiritual", label: "Spiritual" },
  { id: "heritage", label: "Heritage" },
  { id: "honeymoon", label: "Honeymoon" },
];

const Destinations = () => {
  const [params, setParams] = useSearchParams();
  const initial = (params.get("cat") as Filter) || "all";
  const [active, setActive] = useState<Filter>(filters.some(f => f.id === initial) ? initial : "all");

  const list = useMemo(
    () => active === "all" ? destinations : destinations.filter(d => d.category === active),
    [active]
  );

  const onFilter = (id: Filter) => {
    setActive(id);
    if (id === "all") setParams({}); else setParams({ cat: id });
  };

  return (
    <>
      <Seo
        title="North India Destinations — Himalayas, Heritage & More"
        description="Explore Manali, Shimla, Leh-Ladakh, Kashmir, Spiti, Char Dham, Golden Triangle and honeymoon escapes — curated by AT Facilities."
        path="/destinations"
      />

      <section className="pt-32 pb-12 bg-muted/40">
        <div className="container-x text-center max-w-3xl mx-auto">
          <span className="eyebrow">Destinations</span>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-navy mt-3">
            North India, <em className="not-italic gradient-text">end to end.</em>
          </h1>
          <p className="text-muted-foreground mt-5 text-lg">
            Hand-picked journeys across the Himalayas, sacred circuits, royal heritage and dreamy honeymoon hideaways.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="container-x">
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {filters.map(f => (
              <button
                key={f.id}
                onClick={() => onFilter(f.id)}
                className={cn(
                  "px-5 py-2.5 rounded-full text-sm font-semibold border transition-smooth",
                  active === f.id
                    ? "bg-navy text-white border-navy shadow-soft"
                    : "bg-card text-foreground/80 border-border hover:border-primary hover:text-primary"
                )}
              >
                {f.label}
              </button>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {list.map(d => (
              <Link
                key={d.slug}
                to={`/destinations/${d.slug}`}
                className="group bg-card rounded-2xl overflow-hidden border border-border hover:shadow-elegant hover:-translate-y-1 transition-smooth"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={d.image} alt={d.name} loading="lazy" className="h-full w-full object-cover group-hover:scale-110 transition-smooth duration-700" />
                </div>
                <div className="p-5">
                  <div className="text-xs uppercase tracking-wider text-secondary font-semibold">{categoryMeta[d.category].label}</div>
                  <h3 className="font-display text-2xl font-bold text-navy mt-1.5">{d.name}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{d.tagline}</p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground mt-4 pt-4 border-t border-border">
                    <span className="inline-flex items-center gap-1.5"><MapPin className="h-3.5 w-3.5" />{d.state}</span>
                    <span className="inline-flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" />{d.duration}</span>
                    <span className="inline-flex items-center text-primary font-semibold">View <ArrowRight className="h-3.5 w-3.5 ml-1" /></span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Destinations;
