import type { TurnsDict } from "./index";

export const turnsTemplate: TurnsDict = {
  heading: "Pedir turno", // TODO: traducir en EN: "Book an Appointment"
  subheading:
    "Elegí la opción que mejor se adecúe a tu disponibilidad para conocernos y evaluar tus necesidades.",
  bookNow: "Reservar ahora", // EN: "Book now"
  cards: [
    {
      key: "virtual",
      title: "Consulta Virtual",               // EN: "Virtual Consultation"
      desc:  "Conectémonos rápido para solucionar tus problemas legales.", // EN: "Let’s connect quickly to address your legal issues."
      duration: "1 h",
      price: "$ 45.000",                       // EN: "USD 45" (o lo que corresponda)
      href: "/turnos/virtual",
      img:  "/images/turnos/virtual.jpg",
    },
    {
      key: "office",
      title: "Consulta en Estudio",            // EN: "In-Office Consultation"
      desc:  "Evaluemos la manera perfecta de abogar por vos.", // EN: "Let’s evaluate the best way to advocate for you."
      duration: "1 h",
      price: "$ 45.000",                       // EN: "USD 45"
      href: "/turnos/estudio",
      img:  "/images/turnos/estudio.jpg",
    },
    {
      key: "company",
      title: "Consulta In Company",            // EN: "In-Company Consultation"
      desc:  "Hablemos de cómo ganar y proteger tus intereses.", // EN: "Let’s discuss how to grow and protect your interests."
      duration: "2 h",
      price: "Los precios varían",             // EN: "Prices vary"
      href: "/turnos/company",
      img:  "/images/turnos/company.jpg",
    },
  ],
};
