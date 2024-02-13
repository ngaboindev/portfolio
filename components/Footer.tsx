import { FiArrowUpRight } from 'react-icons/fi';

type FooterLinkProps = {
  href: string;
  title: string;
  children: React.ReactNode;
};

const FooterLink = ({ children, href, title }: FooterLinkProps) => {
  return (
    <a
      href={href}
      title={title}
      target="_blank"
      rel="noopener noreferrer"
      className="w-7 h-7 flex items-center justify-center border-gray-500 border rounded-full hover:bg-gray-300 hover:text-gray-800 transition-all"
    >
      {children}
    </a>
  );
};

export default function Footer() {
  return (
    <footer className="py-12  mt-8">
      <ul className="flex flex-wrap gap-8 items-center justify-center text-gray-500 dark:text-gray-300 font-light text-sm">
        <li>
          Reach out to me{' '}
          <a
            className="underline hover:text-gray-800 dark:hover:text-gray-50"
            href="mailto:robbingabo9@gmail.com"
          >
            robbingabo9@gmail.com <FiArrowUpRight className="inline text-xs" />
          </a>
        </li>
        <li>
          <a
            className="underline hover:text-gray-800 dark:hover:text-gray-50"
            href="https://github.com/ngaboindev"
          >
            Github <FiArrowUpRight className="inline text-xs" />
          </a>
        </li>
        <li>
          <a
            className="underline hover:text-gray-800 dark:hover:text-gray-50"
            href="https://www.linkedin.com/in/robert-ngabo-63118b169/"
          >
            Linkedin <FiArrowUpRight className="inline text-xs" />
          </a>
        </li>
        <li>
          <a
            className="underline hover:text-gray-800 dark:hover:text-gray-50"
            href="https://twitter.com/robert_ngabo/"
          >
            Twitter <FiArrowUpRight className="inline text-xs" />
          </a>
        </li>
      </ul>
    </footer>
  );
}
