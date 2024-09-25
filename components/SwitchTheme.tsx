'use client';
import { useTheme } from 'next-themes';

import { PiMoonDuotone, PiSunBold } from 'react-icons/pi';

const SwitchTheme = () => {
  const { resolvedTheme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
  };
  return (
    <div className="flex flex-grow justify-end items-start pt-5">
      <button onClick={toggleTheme} className="text-xs">
        {resolvedTheme === 'dark' ? (
          <PiMoonDuotone size={20} />
        ) : (
          <PiSunBold size={20} />
        )}
      </button>
    </div>
  );
};

export default SwitchTheme;
