import type { Dictionary } from "./index";
import img_pres from "../img/consulta_en_estudio.png";
import img_virt from "../img/reunion_virtual.png";

export default {
  common: {
    brand: 'Nueva Celina & Asociados',
    nav: {
      home: 'Inicio',
      services: 'Servicios',
      turns: 'Turnos',
      contact: 'Contactos',
      about: 'Quiénes Somos',
    },
    cta: { contact: 'Contactarme' },
  },
  home: {
    hero: {
      pretitle: 'ESTUDIO JURÍDICO',
      title: 'NUEVA CELINA & ASOCIADOS',
      motto1: '“Pidan y se les dará; busquen y encontrarán; llamen y se les abrirá” ',
      motto2: 'Mateo 7:7',
    },
  },
  // @ts-ignore
  services: {
    heading_general: 'Nuestros Servicios Generales',
    heading_special: 'Nuestros Servicios Especializados',
    general: [
      { key: 'civil',          title: 'Derecho Civil', href: '#' },
      { key: 'inmobiliario',   title: 'Derecho Inmobiliario', href: '#' },
      { key: 'sucesorio',      title: 'Derecho Sucesorio', href: '#' },
      { key: 'migratorio',     title: 'Derecho Migratorio', href: '#' },
      { key: 'familia',        title: 'Derecho de Familia', href: '#' },
      { key: 'laboral',        title: 'Derecho Laboral', href: '#' },
      { key: 'comercial',      title: 'Derecho Comercial', href: '#' },
      { key: 'ciudadanias',    title: 'Ciudadanías y Visas', href: '#' },
      { key: 'mediaciones',    title: 'Mediaciones', href: '#' },
      { key: 'audiencias',     title: 'Audiencias', href: '#' },
      { key: 'convenio',       title: 'Convenio o Acuerdos', href: '#' },
      { key: 'analisis',       title: 'Análisis y Vistas de Expedientes', href: '#' },
    ],
    special: [
      { key: 'boletos',    title: 'Boletos de Compraventa (Seña y Reserva)', href: '#' },
      { key: 'escritura',  title: 'Escritura Pública', href: '#' },
      { key: 'cesion',     title: 'Cesión de Derechos', href: '#' },
      { key: 'usucapion',  title: 'Usucapión', href: '#' },
      { key: 'alquiler',   title: 'Contratos de Alquiler', href: '#' },
      { key: 'mutuo',      title: 'Contrato de Mutuo y Comodato', href: '#' },
      { key: 'extrajud',   title: 'Convenio Extrajudicial', href: '#' },
      { key: 'lotes',      title: 'Compra de Lotes – Terrenos', href: '#' },
    ],
  },
  contact: {
  leftTitle: "¡Hablemos hoy!",
  rightTitle: "¡Consultanos ahora!",
  leftDescription: "Entrá ya en Contacto Directo con nosotros y evaluemos la Mejor Solución para vos. Solicitá tu turno virtual o presencial con un solo",
  click: "click",
  businessHours: "De Lunes a Viernes de 9 a 18 horas",
  viaWhatsApp: "También podés comunicarte con nosotros vía WhatsApp:",
  officeAddress: "O te esperamos en nuestro Estudio en:",
  bookOnline: "¡Agendá un turno online!",
  bookOnlineDesc: "Elegí la opción que mejor se adecúe a tu disponibilidad de tiempo para conocernos y evaluar tus necesidades.",
  bookMe: "Agendarme",

  formLead: "Dejanos tus datos personales y en breve nos pondremos en contacto con vos.",
  labels: {
    name: "Nombre",
    lastname: "Apellido",
    email: "Email",
    phone: "Teléfono",
    message: "Contanos brevemente tu consulta...",
  },
  newsletter: "Quiero suscribirme al boletín.",
  terms: "Acepto los Términos y Condiciones.",
  send: "Contactarme",
  sending: "Enviando...",
  success: "¡Gracias! Te responderemos a la brevedad.",
  error: "No se pudo enviar. Intentá nuevamente.",
  networkError: "Error de red. Probá otra vez."
},
// ES
about: {
  bandTitle: "Quiénes Somos",
    headline: "NUEVA CELINA & ASOCIADOS",
    introHtml:
      "<p><strong>Nueva Celina & Asociados</strong> es un estudio único en su clase, nuestro principal objetivo es servir a la comunidad, brindándole a nuestros clientes un acompañamiento integral, tanto en lo jurídico como en lo personal y, buscando soluciones a sus problemas, sean estos sencillos o complejos.</p>",
    ctaText: "Reservar turno",
    ctaHref: "/turnos",
    members: [
      { name: "María Pérez", role: "Asistente Legal", photo: "/images/persona1.png", tagline: "Derecho Civil" },
      { name: "Lucía Gómez", role: "Abogada", photo: "/images/persona2.png", tagline: "Comercial" },
      { name: "Ana López", role: "Abogada", photo: "/images/persona3.png", tagline: "Familia" },
    ],
},
turns: {
  heading: "Pedir turno",
  subheading:
    "Elegí la opción que mejor se adecúe a tu disponibilidad para conocernos y evaluar tus necesidades.",
  bookNow: "Reservar ahora",
  cards: [
    {
      key: "virtual",
      title: "Consulta Virtual",
      desc: "Conectémonos rápido para solucionar tus problemas legales.",
      duration: "1 h",
      price: "USD 30 o equivalente en peso según cotización del día",
      href: "/turnos/virtual",
      img: img_virt.src,
    },
    {
      key: "office",
      title: "Consulta en Estudio",
      desc: "Evaluemos la manera perfecta de abogar por vos.",
      duration: "1 h",
      price: "USD 30 o equivalente en peso según cotización del día",
      href: "/turnos/estudio",
      img: img_pres.src,
    },
  ],
}


} as const satisfies Dictionary;
