export const SITE = {
  name: "AT Facilities",
  tagline: "A House of Travel Related Services",
  email: "atfacilities1999@gmail.com",
  phone: "+91 8130772855",
  phoneRaw: "918130772855",
  url: "https://atfacilities.com",
  founded: "1999",
  instagram: "https://www.instagram.com/atfacilites1999?igsh=eTd6Y2dmOXhydWQ2",
};

export const buildWhatsAppUrl = (message: string) =>
  `https://wa.me/${SITE.phoneRaw}?text=${encodeURIComponent(message)}`;

export const buildMailtoUrl = (subject: string, body: string) =>
  `mailto:${SITE.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
