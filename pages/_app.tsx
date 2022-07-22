import '@/styles/globals.css';
import React from 'react';
import { ThemeProvider } from 'next-themes';
import NextNProgress from 'nextjs-progressbar';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <ThemeProvider attribute="class" enableSystem={false} defaultTheme="dark">
      <NextNProgress />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
