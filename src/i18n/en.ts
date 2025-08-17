export default {
  common: {
    brand: 'Nueva Celina & Associates',
    nav: {
      home: 'Home',
      services: 'Services',
      turns: 'Appointments',
      contact: 'Contact',
      about: 'About Us',
    },
    cta: { contact: 'Contact Me' },
  },
  home: {
    hero: {
      pretitle: 'LAW FIRM',
      title: 'FROIMOVICI & ASSOCIATES',
      motto1: 'TO PROCLAIM THAT THE LORD IS UPRIGHT, HE IS MY ROCK,',
      motto2: 'AND THERE IS NO INJUSTICE IN HIM',
    },
  },
  services: {
    heading_general: 'Our General Services',
    heading_special: 'Our Specialized Services',
    general: [
      { key: 'civil',          title: 'Civil Law', href: '/services/civil-law' },
      { key: 'inmobiliario',   title: 'Real Estate Law', href: '/services/real-estate-law' },
      { key: 'sucesorio',      title: 'Inheritance Law', href: '/services/inheritance-law' },
      { key: 'migratorio',     title: 'Immigration Law', href: '/services/immigration-law' },
      { key: 'familia',        title: 'Family Law', href: '/services/family-law' },
      { key: 'laboral',        title: 'Labor Law', href: '/services/labor-law' },
      { key: 'comercial',      title: 'Commercial Law', href: '/services/commercial-law' },
      { key: 'ciudadanias',    title: 'Citizenship & Visas', href: '/services/citizenship-visas' },
      { key: 'mediaciones',    title: 'Mediations', href: '/services/mediations' },
      { key: 'audiencias',     title: 'Hearings', href: '/services/hearings' },
      { key: 'convenio',       title: 'Agreements', href: '/services/agreements' },
      { key: 'analisis',       title: 'File Analysis & Reviews', href: '/services/file-analysis' },
    ],
    special: [
      { key: 'boletos',    title: 'Purchase Agreements (Deposit & Reservation)', href: '/services/purchase-agreements' },
      { key: 'escritura',  title: 'Public Deed', href: '/services/public-deed' },
      { key: 'cesion',     title: 'Assignment of Rights', href: '/services/assignment-rights' },
      { key: 'usucapion',  title: 'Adverse Possession', href: '/services/adverse-possession' },
      { key: 'alquiler',   title: 'Lease Contracts', href: '/services/lease-contracts' },
      { key: 'mutuo',      title: 'Loan & Commodatum', href: '/services/loan-commodatum' },
      { key: 'extrajud',   title: 'Out-of-court Settlement', href: '/services/out-of-court' },
      { key: 'lotes',      title: 'Land / Lot Purchase', href: '/services/land-purchase' },
    ],
  },
} as const;
