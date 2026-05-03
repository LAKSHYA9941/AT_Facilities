import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Instagram, Facebook } from "lucide-react";
import logo from "@/assets/atf-logo.png";
import { SITE } from "@/lib/site";

const Footer = () => (
  <footer className="bg-navy text-white/85 mt-24">
    <div className="container-x py-16 grid gap-10 md:grid-cols-4">
      <div className="md:col-span-1">
        <div className="flex items-center gap-2.5 mb-4">
          <img src={logo} alt="AT Facilities" width={40} height={40} className="h-10 w-10 bg-white/95 rounded-md p-1" />
          <div>
            <div className="font-display font-bold text-lg text-white">AT Facilities</div>
            <div className="text-[11px] uppercase tracking-[0.18em] text-white/60">Since {SITE.founded}</div>
          </div>
        </div>
        <p className="text-sm leading-relaxed text-white/70">
          {SITE.tagline}. Hand-crafted journeys across the length and breadth of North India.
        </p>
      </div>

      <div>
        <h4 className="font-display font-semibold text-white mb-4">Explore</h4>
        <ul className="space-y-2 text-sm">
          <li><Link to="/destinations" className="hover:text-primary-glow">Destinations</Link></li>
          <li><Link to="/services" className="hover:text-primary-glow">Services</Link></li>
          <li><Link to="/blog" className="hover:text-primary-glow">Travel Blog</Link></li>
          <li><Link to="/about" className="hover:text-primary-glow">About Us</Link></li>
        </ul>
      </div>

      <div>
        <h4 className="font-display font-semibold text-white mb-4">Popular Trips</h4>
        <ul className="space-y-2 text-sm">
          <li><Link to="/destinations/leh-ladakh" className="hover:text-primary-glow">Leh-Ladakh</Link></li>
          <li><Link to="/destinations/kashmir" className="hover:text-primary-glow">Kashmir</Link></li>
          <li><Link to="/destinations/char-dham" className="hover:text-primary-glow">Char Dham Yatra</Link></li>
          <li><Link to="/destinations/jaipur" className="hover:text-primary-glow">Golden Triangle</Link></li>
        </ul>
      </div>

      <div>
        <h4 className="font-display font-semibold text-white mb-4">Contact</h4>
        <ul className="space-y-3 text-sm">
          <li className="flex gap-2.5"><Phone className="h-4 w-4 mt-0.5 text-primary-glow shrink-0" /><a href={`tel:${SITE.phoneRaw}`}>{SITE.phone}</a></li>
          <li className="flex gap-2.5"><Mail className="h-4 w-4 mt-0.5 text-primary-glow shrink-0" /><a href={`mailto:${SITE.email}`} className="break-all">{SITE.email}</a></li>
          <li className="flex gap-2.5"><MapPin className="h-4 w-4 mt-0.5 text-primary-glow shrink-0" /><span>{SITE.address}</span></li>
        </ul>
        <div className="flex gap-3 mt-4">
          <a href="#" aria-label="Instagram" className="p-2 rounded-md bg-white/10 hover:bg-primary transition-smooth"><Instagram className="h-4 w-4" /></a>
          <a href="#" aria-label="Facebook" className="p-2 rounded-md bg-white/10 hover:bg-primary transition-smooth"><Facebook className="h-4 w-4" /></a>
        </div>
      </div>
    </div>

    <div className="border-t border-white/10">
      <div className="container-x py-5 text-xs text-white/55 flex flex-col md:flex-row gap-2 justify-between">
        <div>© {new Date().getFullYear()} AT Facilities. All rights reserved.</div>
        <div>Crafted with care · Travel responsibly.</div>
      </div>
    </div>
  </footer>
);

export default Footer;
