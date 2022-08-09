import Head from 'next/head';
import { useRouter } from 'next/router';
import Footer from './Footer';
import Navbar from './Navbar';

export default function Layout(props: { [x: string]: any; children: any }) {
  const router = useRouter();
  const { children, ...customMeta } = props;

  const meta = {
    title: 'Robert Ngabo – a Programmer',
    description: `Front-end developer, Life-Long Learner.`,
    image: 'https://robertngabo.tech/images/profile.png',
    keywords:
      'Ngabo Robert, Robert Ngabo, Software Developer, Kigali, Full Stack Developer, Software Enginner',
    type: 'website',
    ...customMeta,
  };
  return (
    <main className="md:max-w-7xl  px-3 md:mx-auto md:px-24 flex flex-col min-h-screen">
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta name="keywords" content={meta.keywords} />
        <meta name="author" content="Robert Ngabo" />
        <meta name="title" content={meta.title} />
        <meta />
        <meta
          property="og:url"
          content={`https://robertngabo.tech/${router.asPath}`}
        />
        <link
          rel="canonical"
          href={`https://robertngabo.tech/${router.asPath}`}
        />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Robert Ngabo" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta
          property="twitter:url"
          content={`https://robertngabo.tech/${router.asPath}`}
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@robert_ngabo" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
      </Head>
      <Navbar />
      <div className="flex-grow py-5">{props.children}</div>
      <Footer />
    </main>
  );
}
