import '@/styles/globals.css';
import { ThemeProvider } from 'next-themes';
import NextNProgress from 'nextjs-progressbar';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class" enableSystem={false} defaultTheme="dark">
      <NextNProgress />
      <Component {...pageProps} />;
    </ThemeProvider>
  );
}

export default MyApp;
