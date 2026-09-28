export const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Cherag Saxena',
  url: 'https://cheragsaxena.com',
  image: 'https://cheragsaxena.com/og-image.png',
  description: 'Professional portfolio of Cherag Saxena - Full Stack Developer with 28+ certifications',
  email: 'cheragsaxena16@gmail.com',
  telephone: '+91-8871582449',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Indore',
    addressRegion: 'Madhya Pradesh',
    addressCountry: 'IN',
  },
  jobTitle: 'Full Stack Developer',
  worksFor: {
    '@type': 'Organization',
    name: 'Freelance',
  },
  knowsAbout: [
    'React',
    'Node.js',
    'MongoDB',
    'Express',
    'Next.js',
    'TypeScript',
    'Tailwind CSS',
    'Web Development',
    'Full Stack Development',
    'MERN Stack',
  ],
  sameAs: [
    'https://github.com/cherag-16',
    'https://www.linkedin.com/in/cherag-saxena-36415a2b8/',
    'https://twitter.com/cheragsaxena',
  ],
}

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: 'https://cheragsaxena.com',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'About',
      item: 'https://cheragsaxena.com/about',
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Portfolio',
      item: 'https://cheragsaxena.com/portfolio',
    },
    {
      '@type': 'ListItem',
      position: 4,
      name: 'Contact',
      item: 'https://cheragsaxena.com/contact',
    },
  ],
}
