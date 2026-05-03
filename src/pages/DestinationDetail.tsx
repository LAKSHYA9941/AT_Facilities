import { Link, useParams, Navigate } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, MapPin, Check } from "lucide-react";
import Seo from "@/components/Seo";
import InquiryForm from "@/components/InquiryForm";
import { getDestination, categoryMeta, destinations } from "@/data/destinations";

const DestinationDetail = () => {
  const { slug = "" } = useParams();
  const d = getDestination(slug);
  if (!d) return <Navigate to="/destinations" replace />;

  const related = destinations.filter(x => x.category === d.category && x.slug !== d.slug).slice(0, 3);

  return (
    <>
      <Seo
        title={`${d.name} — ${d.tagline} | AT Facilities`}
        description={`${d.description} ${d.duration} packages. Best time: ${d.bestTime}. Book with AT Facilities.`}
        path={`/destinations/${d.slug}`}
        image={d.image}
      />

      <section className="relative pt-32 pb-20 min-h-[60vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img src={d.image} alt={d.name} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-hero" />
        </div>
        <div className="relative container-x text-white">
          <Link to="/destinations" className="inline-flex items-center gap-2 text-sm text-white/85 hover:text-primary-glow mb-6">
            <ArrowLeft className="h-4 w-4" /> All destinations
          </Link>
          <div className="text-xs uppercase tracking-[0.2em] text-primary-glow font-semibold">{categoryMeta[d.category].label}</div>
          <h1 className="font-display text-5xl md:text-7xl font-bold mt-3">{d.name}</h1>
          <p className="text-xl md:text-2xl text-white/85 mt-3 italic font-display">{d.tagline}</p>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/85 mt-6">
            <span className="inline-flex items-center gap-2"><MapPin className="h-4 w-4 text-primary-glow" />{d.state}</span>
            <span className="inline-flex items-center gap-2"><Clock className="h-4 w-4 text-primary-glow" />{d.duration}</span>
            <span className="inline-flex items-center gap-2"><Calendar className="h-4 w-4 text-primary-glow" />Best: {d.bestTime}</span>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-x grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-navy">About {d.name}</h2>
            <p className="text-lg text-muted-foreground mt-4 leading-relaxed">{d.description}</p>

            <h3 className="font-display text-2xl font-bold text-navy mt-12">Trip highlights</h3>
            <ul className="grid sm:grid-cols-2 gap-3 mt-5">
              {d.highlights.map(h => (
                <li key={h} className="flex gap-3 bg-card border border-border rounded-xl p-4">
                  <Check className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                  <span className="text-foreground/90">{h}</span>
                </li>
              ))}
            </ul>

            <div className="mt-12 bg-muted/50 rounded-2xl p-6 md:p-8">
              <h3 className="font-display text-2xl font-bold text-navy">What's included</h3>
              <ul className="grid sm:grid-cols-2 gap-2 mt-4 text-sm">
                {["Hand-picked accommodation", "Private chauffeured cab", "Daily breakfast", "Sightseeing as per itinerary", "All toll & parking", "24×7 trip support"].map(i => (
                  <li key={i} className="flex gap-2"><Check className="h-4 w-4 text-primary mt-0.5" />{i}</li>
                ))}
              </ul>
            </div>
          </div>

          <aside className="lg:sticky lg:top-28 self-start">
            <div className="bg-card border border-border rounded-2xl p-6 shadow-soft">
              <h3 className="font-display text-xl font-bold text-navy mb-4">Enquire about {d.name}</h3>
              <InquiryForm defaultDestination={d.name} variant="inline" />
            </div>
          </aside>
        </div>
      </section>

      {related.length > 0 && (
        <section className="pb-24">
          <div className="container-x">
            <h2 className="font-display text-3xl font-bold text-navy mb-8">You may also love</h2>
            <div className="grid sm:grid-cols-3 gap-6">
              {related.map(r => (
                <Link key={r.slug} to={`/destinations/${r.slug}`} className="group bg-card border border-border rounded-2xl overflow-hidden hover:shadow-elegant transition-smooth">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img src={r.image} alt={r.name} loading="lazy" className="h-full w-full object-cover group-hover:scale-110 transition-smooth duration-700" />
                  </div>
                  <div className="p-5">
                    <h3 className="font-display text-xl font-semibold text-navy">{r.name}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{r.tagline}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default DestinationDetail;
