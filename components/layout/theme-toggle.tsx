'use client';

import { useTheme } from 'next-themes';
import { useMounted } from '@/hooks/use-mounted';

export function ThemeToggle() {
  const mounted = useMounted();
  const { resolvedTheme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
  };

  if (!mounted) {
    return null;
  }

  return (
    <button
      onClick={toggleTheme}
      className="fixed bottom-6 right-6 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors cursor-pointer"
      aria-label={`Switch to ${resolvedTheme === 'dark' ? 'light' : 'dark'} mode`}
    >
      <span className="text-xs tracking-wide">
        {resolvedTheme === 'dark' ? 'Light' : 'Dark'}
      </span>
    </button>
  );
}
