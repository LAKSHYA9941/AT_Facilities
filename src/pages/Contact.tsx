import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Phone, Mail, MessageCircle, Instagram, Clipboard, Check } from "lucide-react";
import Seo from "@/components/Seo";
import InquiryForm from "@/components/InquiryForm";
import { SITE, buildWhatsAppUrl } from "@/lib/site";

const Contact = () => {
  const [params] = useSearchParams();
  const service = params.get("service") || "";
  const [copied, setCopied] = useState(false);

  const handleCopyAll = () => {
    const text = [
      "AT Facilities — Contact Details",
      "─────────────────────────────",
      `📞 Phone:     ${SITE.phone}`,
      `✉️  Email:     ${SITE.email}`,
      `📸 Instagram: @atfacilites1999`,
    ].join("\n");

    // Works on both HTTP (dev) and HTTPS (prod)
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(text).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
      });
    } else {
      // Fallback for HTTP / older browsers
      const ta = document.createElement("textarea");
      ta.value = text;
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.focus();
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <>
      <Seo
        title="Contact AT Facilities — Plan Your Next Journey"
        description={`Call ${SITE.phone}, email ${SITE.email} or send an inquiry. Follow us on Instagram & Facebook. Quotes within 2 hours.`}
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
                <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-[#f09433] via-[#e6683c] to-[#bc1888] flex items-center justify-center text-white shrink-0"><Instagram className="h-5 w-5" /></div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-secondary font-semibold">Follow on Instagram</div>
                  <a
                    href={SITE.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-navy mt-0.5 text-sm hover:text-primary transition-smooth block"
                  >
                    @atfacilites1999
                  </a>
                  <div className="text-xs text-muted-foreground mt-0.5">Travel stories &amp; trip reels</div>
                </div>
              </div>
            </div>
            <button
              onClick={handleCopyAll}
              className={`w-full flex items-center justify-center gap-2.5 rounded-2xl p-4 text-sm font-semibold border
                transition-all duration-200 select-none
                active:scale-95 active:shadow-inner
                ${
                  copied
                    ? "bg-green-50 border-green-300 text-green-700 scale-95"
                    : "bg-card border-border text-navy hover:border-primary/50 hover:shadow-elegant"
                }`}
            >
              {copied ? (
                <>
                  <Check className="h-4 w-4 text-green-600 shrink-0" />
                  ✅ Copied to clipboard!
                </>
              ) : (
                <>
                  <Clipboard className="h-4 w-4 shrink-0" />
                  Copy all contact details
                </>
              )}
            </button>
          </aside>
        </div>
      </section>
    </>
  );
};

export default Contact;
