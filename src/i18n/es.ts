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
      title: 'FROIMOVICI & ASOCIADOS',
      motto1: 'PARA ANUNCIAR QUE JEHOVÁ MI FORTALEZA ES RECTO,',
      motto2: 'Y QUE EN ÉL NO HAY INJUSTICIA',
    },
  },
  services: {
    heading_general: 'Nuestros Servicios Generales',
    heading_special: 'Nuestros Servicios Especializados',
    general: [
      { key: 'civil',          title: 'Derecho Civil', href: '/servicios/derecho-civil' },
      { key: 'inmobiliario',   title: 'Derecho Inmobiliario', href: '/servicios/derecho-inmobiliario' },
      { key: 'sucesorio',      title: 'Derecho Sucesorio', href: '/servicios/derecho-sucesorio' },
      { key: 'migratorio',     title: 'Derecho Migratorio', href: '/servicios/derecho-migratorio' },
      { key: 'familia',        title: 'Derecho de Familia', href: '/servicios/derecho-familia' },
      { key: 'laboral',        title: 'Derecho Laboral', href: '/servicios/derecho-laboral' },
      { key: 'comercial',      title: 'Derecho Comercial', href: '/servicios/derecho-comercial' },
      { key: 'ciudadanias',    title: 'Ciudadanías y Visas', href: '/servicios/derecho-ciudadania-visas' },
      { key: 'mediaciones',    title: 'Mediaciones', href: '/servicios/mediaciones' },
      { key: 'audiencias',     title: 'Audiencias', href: '/servicios/audiencias' },
      { key: 'convenio',       title: 'Convenio o Acuerdos', href: '/servicios/convenio-acuerdos' },
      { key: 'analisis',       title: 'Análisis y Vistas de Expedientes', href: '/servicios/analisis-vistas' },
    ],
    special: [
      { key: 'boletos',    title: 'Boletos de Compraventa (Seña y Reserva)', href: '/servicios/boletos-compraventa' },
      { key: 'escritura',  title: 'Escritura Pública', href: '/servicios/escritura-publica' },
      { key: 'cesion',     title: 'Cesión de Derechos', href: '/servicios/cesion-derechos' },
      { key: 'usucapion',  title: 'Usucapión', href: '/servicios/usucapion' },
      { key: 'alquiler',   title: 'Contratos de Alquiler', href: '/servicios/contratos-alquiler' },
      { key: 'mutuo',      title: 'Contrato de Mutuo y Comodato', href: '/servicios/mutuo-comodato' },
      { key: 'extrajud',   title: 'Convenio Extrajudicial', href: '/servicios/convenio-extrajudicial' },
      { key: 'lotes',      title: 'Compra de Lotes – Terrenos', href: '/servicios/compra-lotes-terrenos' },
    ],
  },
} as const;
