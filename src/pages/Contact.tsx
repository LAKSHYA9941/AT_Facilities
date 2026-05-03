import { useSearchParams } from "react-router-dom";
import { Phone, Mail, MapPin, MessageCircle, Clock } from "lucide-react";
import Seo from "@/components/Seo";
import InquiryForm from "@/components/InquiryForm";
import { SITE, buildWhatsAppUrl } from "@/lib/site";

const Contact = () => {
  const [params] = useSearchParams();
  const service = params.get("service") || "";

  return (
    <>
      <Seo
        title="Contact AT Facilities — Plan Your Next Journey"
        description={`Call ${SITE.phone}, email ${SITE.email} or send an inquiry. Office in Dwarka, New Delhi. Quotes within 2 hours.`}
        path="/contact"
      />

      <section className="pt-32 pb-12 bg-muted/40">
        <div className="container-x text-center max-w-3xl mx-auto">
          <span className="eyebrow">Get in touch</span>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-navy mt-3">
            Let's plan something <em className="not-italic gradient-text">unforgettable.</em>
          </h1>
          <p className="text-muted-foreground mt-5 text-lg">
            Tell us your dates and dream destination — we'll come back within 2 hours with a tailor-made quote.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container-x grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-navy mb-6">Send an inquiry</h2>
            <InquiryForm defaultService={service} />
          </div>

          <aside className="space-y-4">
            <a href={`tel:${SITE.phoneRaw}`} className="block bg-card border border-border rounded-2xl p-5 hover:shadow-elegant transition-smooth">
              <div className="flex gap-4">
                <div className="h-11 w-11 rounded-xl bg-gradient-warm flex items-center justify-center text-primary-foreground"><Phone className="h-5 w-5" /></div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-secondary font-semibold">Call us</div>
                  <div className="font-semibold text-navy mt-0.5">{SITE.phone}</div>
                  <div className="text-xs text-muted-foreground mt-0.5">Mon–Sun · 8 AM – 10 PM</div>
                </div>
              </div>
            </a>
            <a href={buildWhatsAppUrl("Hi AT Facilities, I'd like to plan a trip.")} target="_blank" rel="noopener noreferrer"
               className="block bg-card border border-border rounded-2xl p-5 hover:shadow-elegant transition-smooth">
              <div className="flex gap-4">
                <div className="h-11 w-11 rounded-xl bg-[#25D366] flex items-center justify-center text-white"><MessageCircle className="h-5 w-5" /></div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-secondary font-semibold">WhatsApp</div>
                  <div className="font-semibold text-navy mt-0.5">Chat now</div>
                  <div className="text-xs text-muted-foreground mt-0.5">Fastest replies</div>
                </div>
              </div>
            </a>
            <a href={`mailto:${SITE.email}`} className="block bg-card border border-border rounded-2xl p-5 hover:shadow-elegant transition-smooth">
              <div className="flex gap-4">
                <div className="h-11 w-11 rounded-xl bg-gradient-cool flex items-center justify-center text-secondary-foreground"><Mail className="h-5 w-5" /></div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-secondary font-semibold">Email</div>
                  <div className="font-semibold text-navy mt-0.5 break-all text-sm">{SITE.email}</div>
                </div>
              </div>
            </a>
            <div className="bg-card border border-border rounded-2xl p-5">
              <div className="flex gap-4">
                <div className="h-11 w-11 rounded-xl bg-navy flex items-center justify-center text-white shrink-0"><MapPin className="h-5 w-5" /></div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-secondary font-semibold">Visit us</div>
                  <div className="font-semibold text-navy mt-0.5 leading-snug">B-37, Kunj Vihar Co-operative Society</div>
                  <div className="text-sm text-muted-foreground">Plot No 19, Sector 12, Dwarka,<br />New Delhi - 110075</div>
                </div>
              </div>
            </div>
            <div className="bg-navy text-white rounded-2xl p-5">
              <div className="flex gap-3">
                <Clock className="h-5 w-5 text-primary-glow mt-0.5" />
                <div className="text-sm">
                  <div className="font-semibold">Quote within 2 hours</div>
                  <div className="text-white/70 text-xs mt-1">During business hours, every day.</div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="pb-24">
        <div className="container-x">
          <div className="rounded-3xl overflow-hidden border border-border shadow-soft aspect-[16/8]">
            <iframe
              title="AT Facilities office location"
              src="https://www.google.com/maps?q=Sector+12+Dwarka+New+Delhi+110075&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
