import { MessageCircle } from "lucide-react";
import { buildWhatsAppUrl } from "@/lib/site";

const WhatsAppFab = () => (
  <a
    href={buildWhatsAppUrl("Hi AT Facilities, I'd like to plan a trip. Can you help?")}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Chat on WhatsApp"
    className="fixed bottom-5 right-5 z-40 inline-flex items-center justify-center h-14 w-14 rounded-full bg-[#25D366] text-white shadow-elegant hover:scale-105 transition-smooth"
  >
    <MessageCircle className="h-7 w-7" />
    <span className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-primary animate-pulse" />
  </a>
);

export default WhatsAppFab;
