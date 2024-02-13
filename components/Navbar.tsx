'use client';

import { LuMoon, LuSun } from 'react-icons/lu';

import cn from 'classnames';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

type NavLinkProps = {
  href: string;
  text: string;
};

function NavLink({ href, text }: NavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={cn(
        isActive && 'dark:text-gray-100 text-gray-800 font-black',
        'py-1 px-2 rounded dark:text-gray-100  hover:bg-blue-100 dark:hover:bg-gray-500 transition-all'
      )}
    >
      {text}
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
        <NavLink href="/about" text="About" />
        <NavLink href="/blog" text="Blog" />
      </div>
      <div>
        <button onClick={toggleTheme} className="p-2 rounded">
          {resolvedTheme === 'dark' ? (
            <LuMoon className="h-5 w-5" />
          ) : (
            <LuSun className="h-5 w-5" />
          )}
        </button>
      </div>
    </nav>
  );
}
