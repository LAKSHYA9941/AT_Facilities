import { Link } from "react-router-dom";
import { Clock, ArrowRight } from "lucide-react";
import Seo from "@/components/Seo";
import { posts } from "@/data/blog";

const Blog = () => {
  const [featured, ...rest] = posts;
  return (
    <>
      <Seo
        title="Travel Blog — Tips & Guides for North India"
        description="Practical guides, season tips and trip ideas for Leh-Ladakh, Char Dham, Golden Triangle, Kashmir honeymoons and more."
        path="/blog"
      />

      <section className="pt-32 pb-12 bg-muted/40">
        <div className="container-x text-center max-w-3xl mx-auto">
          <span className="eyebrow">Travel journal</span>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-navy mt-3">
            Stories, guides & <em className="not-italic gradient-text">trip wisdom.</em>
          </h1>
          <p className="text-muted-foreground mt-5 text-lg">
            Field-tested tips written by people who've actually made the journey.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container-x">
          {/* Featured */}
          <Link to={`/blog/${featured.slug}`} className="group grid lg:grid-cols-2 gap-8 mb-16 bg-card rounded-3xl overflow-hidden border border-border hover:shadow-elegant transition-smooth">
            <div className="aspect-[4/3] overflow-hidden">
              <img src={featured.image} alt={featured.title} loading="lazy" className="h-full w-full object-cover group-hover:scale-105 transition-smooth duration-700" />
            </div>
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <div className="text-xs uppercase tracking-wider text-secondary font-semibold">Featured · {featured.category}</div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-navy mt-3 group-hover:text-primary transition-smooth">{featured.title}</h2>
              <p className="text-muted-foreground mt-4 leading-relaxed">{featured.excerpt}</p>
              <div className="flex items-center gap-4 text-xs text-muted-foreground mt-6">
                <span className="inline-flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" />{featured.readMin} min read</span>
                <span>{new Date(featured.date).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}</span>
              </div>
              <span className="text-primary font-semibold mt-5 inline-flex items-center">Read article <ArrowRight className="h-4 w-4 ml-1" /></span>
            </div>
          </Link>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map(p => (
              <Link key={p.slug} to={`/blog/${p.slug}`} className="group bg-card rounded-2xl overflow-hidden border border-border hover:shadow-elegant transition-smooth">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={p.image} alt={p.title} loading="lazy" className="h-full w-full object-cover group-hover:scale-110 transition-smooth duration-700" />
                </div>
                <div className="p-5">
                  <div className="text-xs uppercase tracking-wider text-secondary font-semibold">{p.category} · {p.readMin} min</div>
                  <h3 className="font-display text-xl font-semibold text-navy mt-2 group-hover:text-primary transition-smooth">{p.title}</h3>
                  <p className="text-sm text-muted-foreground mt-2 line-clamp-2">{p.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
