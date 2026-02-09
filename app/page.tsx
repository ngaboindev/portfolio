import { socialLinks } from '@/config/nav';
import { siteConfig } from '@/config/site';

export default function HomePage() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[60vh] text-center">
      <h1 className="text-2xl md:text-3xl font-semibold">{siteConfig.name}</h1>
      <p className="text-gray-700 dark:text-gray-400 mt-2">
        {siteConfig.description}
      </p>
      <nav className="flex flex-wrap justify-center gap-3 mt-8">
        {socialLinks.map(({ href, label, external }) => (
          <a
            key={label}
            href={href}
            className="px-4 py-2.5 text-sm hover:text-white  border border-gray-300 dark:border-gray-700 rounded-md hover:bg-gray-200 hover:border-gray-400  dark:hover:bg-gray-800 dark:hover:border-gray-600 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
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
