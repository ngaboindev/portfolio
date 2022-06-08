import Layout from '@/components/Layout';
import { ArrowCircleRightIcon } from '@heroicons/react/solid';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <Layout>
      <div className="flex flex-col-reverse sm:flex-row items-center mt-2 mb-24">
        <div className="flex flex-col pr-10  text-center md:text-left">
          <h1 className="text-xl text-gray-700 tracking-tight mb-1 dark:text-gray-400 md:text-3xl font-black">
            Robert Ngabo
          </h1>
          <p className="text-gray-600 dark:text-gray-300 my-5">
            a software developer with a passion for designing and building web
            apps.
          </p>
          <p className="text-gray-600 dark:text-gray-300">
            Contact me via{' '}
            <a href="mailto:robbingabo9@gmail.com" className="text-blue-500">
              Email
            </a>{' '}
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
      <div className="text-gray-600 dark:text-gray-300 mb-8">
        <h3 className="text-xl border-b border-gray-100 dark:border-gray-800 pb-2">
          About Me
        </h3>
        <div className="my-5">
          <p className="mb-8">
            I love building software and hacking things up , I am currently
            building with React,Nextjs,Vuejs,Typescript,Tailwind and Nodejs.
          </p>
          <p>
            My favorite part about coding is the constant innovation of
            architectures, libraries, and frameworks. I think web development is
            experiencing a major breakthrough with headless architecture and
            jamstack, and want to be involved in any way I can.
          </p>
        </div>
      </div>
    </Layout>
  );
}
