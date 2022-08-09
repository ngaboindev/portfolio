import { RiTwitterLine, RiGithubLine, RiLinkedinLine } from 'react-icons/ri';

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
    <footer className="py-12  mt-8 flex-col gap-2 flex items-center justify-center text-gray-500 dark:text-gray-300 font-light text-sm">
      <div className="flex space-x-4 items-center">
        <FooterLink title="Twitter" href="https://twitter.com/robert_ngabo">
          <RiTwitterLine className="text-xl" />
        </FooterLink>
        <FooterLink title="GitHub" href="http://github.com/ngaboindev">
          <RiGithubLine className="text-xl" />
        </FooterLink>
        <FooterLink
          title="Linkedin"
          href="https://www.linkedin.com/in/robert-ngabo-63118b169/"
        >
          <RiLinkedinLine className="text-xl" />
        </FooterLink>
      </div>
      <div className="block">
        <p>Made With Nextjs, MDX , Tailwind & Vercel</p>
      </div>
    </footer>
  );
}
