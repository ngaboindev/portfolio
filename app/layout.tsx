import Footer from '@/components/Footer';
import SwitchTheme from '@/components/SwitchTheme';
import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import Head from 'next/head';
import Providers from './Providers';
import './font.css';
import './globals.css';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: 'Robert Ngabo',
  description: `Software Developer`,
  keywords: 'Ngabo Robert, Robert Ngabo',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={` ${plusJakartaSans.variable}`}
    >
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        {/* Global Site Tag (gtag.js) - Google Analytics */}
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
          `,
          }}
        />
      </Head>
      <body>
        <Providers>
          <div className="md:max-w-4xl  px-3 md:mx-auto md:px-24 flex flex-col min-h-screen justify-between">
            <SwitchTheme />
            <div className="flex-grow py-5">{children}</div>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
