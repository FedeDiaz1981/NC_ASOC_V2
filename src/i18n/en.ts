import type { Dictionary } from "./index";

import img_pres from "../img/consulta_en_estudio.png";
import img_virt from "../img/reunion_virtual.png";

const en = {
  common: {
    brand: "Nueva Celina & Associates",
    nav: { home: "Home", services: "Services", turns: "Appointments", contact: "Contact", about: "About" },
    cta: { contact: "Contact me" },
  },
  home: {
    hero: {
      pretitle: "LAW FIRM",
      title: "NUEVA CELINA & ASSOCIATES",
      motto1: "Ask and it will be given to you; seek and you will find; knock and the door will be opened to you.",
      motto2: "Mateo 7:7",
    },
  },
  // @ts-ignore
  services: {
    heading_general: "Our General Services",
    heading_special: "Our Specialized Services",
    general: [
      { key: "civil",          title: "Civil Law", href: "#" },
      { key: "inmobiliario",   title: "Real Estate Law", href: "#" },
      { key: "sucesorio",      title: "Inheritance Law", href: "#" },
      { key: "migratorio",     title: "Immigration Law", href: "#" },
      { key: "familia",        title: "Family Law", href: "#" },
      { key: "laboral",        title: "Labor Law", href: "#" },
      { key: "comercial",      title: "Commercial Law", href: "#" },
      { key: "ciudadanias",    title: "Citizenships and Visas", href: "#" },
      { key: "mediaciones",    title: "Mediations", href: "#" },
      { key: "audiencias",     title: "Hearings", href: "#" },
      { key: "convenio",       title: "Agreements or Settlements", href: "#" },
      { key: "analisis",       title: "File Reviews and Case Analysis", href: "#" },
    ],
    special: [
      { key: "boletos",   title: "Purchase Agreements (Deposit and Reservation)", href: "#" },
      { key: "escritura", title: "Public Deed", href: "#" },
      { key: "cesion",    title: "Assignment of Rights", href: "#" },
      { key: "usucapion", title: "Adverse Possession (Usucapion)", href: "#" },
      { key: "alquiler",  title: "Lease Agreements", href: "#" },
      { key: "mutuo",     title: "Loan and Comodatum Agreements", href: "#" },
      { key: "extrajud",  title: "Out-of-Court Settlements", href: "#" },
      { key: "lotes",     title: "Purchase of Lots – Land", href: "#" },
    ],
  },
  contact: {
    leftTitle: "Contact Us",
    leftDescription: "You can reach us directly through our contact form or by phone. For quick assistance",
    click: "click here",
    businessHours: "Available Monday to Friday, 9 AM to 6 PM.",
    viaWhatsApp: "Contact us via WhatsApp",
    officeAddress: "Office Address",
    bookOnline: "Book Online",
    bookOnlineDesc: "Schedule your appointment easily and quickly through our online system.",
    bookMe: "Book Now",
    urlAppointments:"/en/turnos",
    rightTitle: "Send Us a Message",
    formLead: "Fill out the form below and we’ll get back to you as soon as possible.",

    labels: {
      name: "First Name",
      lastname: "Last Name",
      email: "Email",
      phone: "Phone",
      message: "Message",
    },

    newsletter: "Subscribe to our newsletter",
    terms: "I accept the terms and conditions",

    send: "Send",
    sending: "Sending...",
    success: "Your message has been sent successfully!",
    error: "There was an error sending your message. Please try again.",
    networkError: "Network error. Please check your connection.",
  },
  about: {
    bandTitle: "About Us",
    headline: "NUEVA CELINA & ASSOCIATES",
    introHtml:
      "<p><strong>Nueva Celina & Associates</strong> It is a unique firm, our main objective is to serve the community by providing our clients with comprehensive support, both legally and personally, and by seeking solutions to their problems, whether simple or complex.</p>",
    ctaText: "Book an appointment",
    ctaHref: "/en/turnos",
    members: [
      { name: "María Pérez", role: "Attorney", photo: "/images/persona1.png", tagline: "Civil Law" },
      { name: "Lucía Gómez", role: "Attorney", photo: "/images/persona2.png", tagline: "Commercial Law" },
      { name: "Ana López", role: "Attorney", photo: "/images/persona3.png", tagline: "Family Law" },
    ],
  },
  turns: {
  heading: "Book an Appointment",
  subheading:
    "Choose the option that best fits your schedule so we can meet and assess your needs.",
  bookNow: "Book now",
  cards: [
    {
      key: "virtual",
      title: "Virtual Consultation",
      desc: "Let’s connect quickly to address your legal issues.",
      duration: "1 h",
      price: "USD 30 o equivalente en peso según cotización del día",
      href: "https://calendly.com/jesicacoca09/nueva-reunion",
      img: img_virt.src,
    },
    {
      key: "office",
      title: "In-Office Consultation",
      desc: "Let’s evaluate the best way to advocate for you.",
      duration: "1 h",
      price: "USD 30 o equivalente en peso según cotización del día",
      href: "https://calendly.com/jesicacoca09/30min",
      img: img_pres.src,
    },
  ],
}

} as const satisfies Dictionary;

export default en;
