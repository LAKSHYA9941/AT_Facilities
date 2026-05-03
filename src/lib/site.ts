export const SITE = {
  name: "AT Facilities",
  tagline: "A House of Travel Related Services",
  email: "atfacilities1999@gmail.com",
  phone: "+91 8130772855",
  phoneRaw: "918130772855",
  address: "B-37, Kunj Vihar Co-operative Society, Plot No 19, Sector 12, Dwarka, New Delhi -110075",
  url: "https://atfacilities.com",
  founded: "1999",
};

export const buildWhatsAppUrl = (message: string) =>
  `https://wa.me/${SITE.phoneRaw}?text=${encodeURIComponent(message)}`;

export const buildMailtoUrl = (subject: string, body: string) =>
  `mailto:${SITE.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
