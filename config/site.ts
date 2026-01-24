export const siteConfig = {
  name: 'Robert Ngabo',
  description: 'Builder — Making things for the internet',
  url: 'https://robertngabo.com',
  ogImage: '/images/og-image.png',
  author: {
    name: 'Robert Ngabo',
    email: 'me@robertngabo.com',
    twitter: '@robert_ngabo',
    github: 'ngaboindev',
    linkedin: 'robert-ngabo-63118b169',
  },
  keywords: [
    'Ngabo Robert',
    'Robert Ngabo',
    'Software Developer',
    'Web Developer',
  ],
} as const;

export type SiteConfig = typeof siteConfig;
