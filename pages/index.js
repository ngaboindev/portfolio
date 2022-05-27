import { useTheme } from 'next-themes';
import Layout from '@/components/Layout';
import Image from 'next/image';

export default function Home() {
  const { theme, setTheme } = useTheme();

  return (
    <Layout>
      <div className="flex flex-col-reverse sm:flex-row items-center mt-2">
        <div className="flex flex-col pr-10 text-center md:text-left">
          <h1 className="text-xl text-gray-700 tracking-tight mb-1 dark:text-gray-400 md:text-3xl font-black">
            Robert Ngabo
          </h1>
          <pre className="text-gray-600 dark:text-gray-300">Web Developer</pre>
          <p className="text-gray-600 dark:text-gray-300 my-5">
            A disciplined hard-working self-taught software developer who seeks
            to bridge the gap between design and development , since my first
            "Hello World" program I've been looking for any possible way of
            improving myself and build any possible solution I can think of.
            besides coding I'm anime <s>Otaku</s> enthusiast.
          </p>
        </div>
        <div className="w-[80px] sm:w-[176px] flex-shrink-0 relative mb-8 sm:mb-0 text-center lg:mr-auto">
          <Image
            src="/images/profile.jpg"
            className="rounded-full"
            height={344}
            width={344}
            priority
            alt="Robert Ngabo"
          />
        </div>
      </div>
    </Layout>
  );
}
