import { socialLinks } from '@/config/nav';
import { siteConfig } from '@/config/site';

export default function HomePage() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[60vh] text-center">
      <h1 className="text-3xl font-semibold">{siteConfig.name}</h1>
      <p className="text-gray-600 dark:text-gray-400 mt-2">
        {siteConfig.description}
      </p>
      <nav className="flex flex-wrap justify-center gap-3 mt-8">
        {socialLinks.map(({ href, label, external }) => (
          <a
            key={label}
            href={href}
            className="px-4 py-2 text-sm border border-gray-300 dark:border-gray-700 rounded-md hover:bg-gray-100 hover:text-white dark:hover:bg-gray-800 transition-colors cursor-pointer"
            aria-label={external ? `${label} (opens in new tab)` : label}
            {...(external && {
              target: '_blank',
              rel: 'noopener noreferrer',
            })}
          >
            {label}
          </a>
        ))}
      </nav>
    </section>
  );
}
