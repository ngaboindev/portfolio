import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { MoonIcon, SunIcon } from '@heroicons/react/solid';
import { useTheme } from 'next-themes';
import cn from 'classnames';

function NavLink({ href, text }) {
  const router = useRouter();
  const isActive = router.asPath === href;

  return (
    <Link href={href}>
      <a
        className={cn(
          isActive && 'dark:text-gray-100 text-gray-800 font-black',
          'py-1 px-2 rounded dark:text-gray-100  hover:bg-blue-100 dark:hover:bg-gray-500 transition-all'
        )}
      >
        {text}
      </a>
    </Link>
  );
}

export default function Navbar() {
  useEffect(() => setMounted(true), []);
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
  };

  if (!mounted) return null;

  return (
    <nav className="flex justify-between items-center  px-2 py-6 md:py-10">
      <div className="flex  space-x-1 md:space-x-6 text-gray-800 capitalize dark:text-gray-300">
        <NavLink href="/" text="Home" />
        <NavLink href="/projects" text="Projects" />
        <NavLink href="/blog" text="Blog" />
      </div>
      <div>
        <button onClick={toggleTheme} className="p-2 rounded">
          {resolvedTheme === 'dark' ? (
            <MoonIcon className="h-5 w-5" />
          ) : (
            <SunIcon className="h-5 w-5" />
          )}
        </button>
      </div>
    </nav>
  );
}
