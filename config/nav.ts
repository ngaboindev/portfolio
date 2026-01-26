export const socialLinks = [
  {
    href: 'mailto:me@robertngabo.com',
    label: 'Email',
    external: false,
  },
  {
    href: 'https://blog.robertngabo.com',
    label: 'Blog',
    external: true,
  },
  {
    href: 'https://www.linkedin.com/in/robert-ngabo-63118b169/',
    label: 'LinkedIn',
    external: true,
  },
  {
    href: 'https://x.com/robert_ngabo',
    label: 'X',
    external: true,
  },
] as const;

export const mainNav = [
] as const;

export type SocialLink = (typeof socialLinks)[number];
export type NavItem = (typeof mainNav)[number];
