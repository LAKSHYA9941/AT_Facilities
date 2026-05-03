import { Link, useParams, Navigate } from "react-router-dom";
import { ArrowLeft, Clock } from "lucide-react";
import Seo from "@/components/Seo";
import InquiryForm from "@/components/InquiryForm";
import { getPost, posts } from "@/data/blog";

const BlogPost = () => {
  const { slug = "" } = useParams();
  const p = getPost(slug);
  if (!p) return <Navigate to="/blog" replace />;
  const more = posts.filter(x => x.slug !== p.slug).slice(0, 3);

  return (
    <>
      <Seo
        title={`${p.title} | AT Facilities Blog`}
        description={p.excerpt}
        path={`/blog/${p.slug}`}
        image={p.image}
      />

      <article className="pt-32 pb-16">
        <div className="container-x max-w-3xl">
          <Link to="/blog" className="inline-flex items-center gap-2 text-sm text-secondary hover:text-primary mb-6">
            <ArrowLeft className="h-4 w-4" /> All articles
          </Link>
          <div className="text-xs uppercase tracking-wider text-secondary font-semibold">{p.category}</div>
          <h1 className="font-display text-4xl md:text-6xl font-bold text-navy mt-3 leading-[1.05]">{p.title}</h1>
          <div className="flex items-center gap-4 text-sm text-muted-foreground mt-5">
            <span className="inline-flex items-center gap-1.5"><Clock className="h-4 w-4" />{p.readMin} min read</span>
            <span>{new Date(p.date).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}</span>
          </div>
        </div>

        <div className="container-x max-w-5xl mt-10">
          <div className="aspect-[16/9] rounded-3xl overflow-hidden">
            <img src={p.image} alt={p.title} className="h-full w-full object-cover" />
          </div>
        </div>

        <div className="container-x max-w-3xl mt-12 prose-content">
          <p className="text-xl text-foreground/90 leading-relaxed font-display italic">{p.excerpt}</p>
          {p.body.map((para, i) => (
            <p key={i} className="text-lg text-foreground/85 leading-relaxed mt-6">{para}</p>
          ))}

          <div className="mt-16 bg-muted/50 rounded-2xl p-6 md:p-8 border border-border">
            <h3 className="font-display text-2xl font-bold text-navy">Inspired? Let's plan your trip.</h3>
            <p className="text-muted-foreground mt-2 mb-5">Tell us a few details and we'll send a tailor-made plan within 2 hours.</p>
            <InquiryForm variant="inline" />
          </div>
        </div>
      </article>

      <section className="pb-24">
        <div className="container-x">
          <h2 className="font-display text-3xl font-bold text-navy mb-8">More from the journal</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {more.map(m => (
              <Link key={m.slug} to={`/blog/${m.slug}`} className="group bg-card rounded-2xl overflow-hidden border border-border hover:shadow-elegant transition-smooth">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={m.image} alt={m.title} loading="lazy" className="h-full w-full object-cover group-hover:scale-110 transition-smooth duration-700" />
                </div>
                <div className="p-5">
                  <div className="text-xs uppercase tracking-wider text-secondary font-semibold">{m.category}</div>
                  <h3 className="font-display text-lg font-semibold text-navy mt-2 group-hover:text-primary transition-smooth">{m.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogPost;
