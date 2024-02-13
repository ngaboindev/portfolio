import Image from 'next/image';

export default function Home(): JSX.Element {
  return (
    <div className="flex  flex-col-reverse gap-3 lg:flex-row  items-center mt-2 mb-24">
      <div className="flex flex-col pr-10  text-center md:text-left">
        <h1 className="text-3xl  text-gray-700 tracking-tight mb-1 dark:text-gray-100 md:text-4xl font-semibold">
          Hi, I'm Robert Ngabo.
          <span className="block text-2xl mt-2 font-medium">
            I enjoy manipulating data and hacking things up
          </span>
        </h1>
        <div className="text-gray-600 mb-4 dark:text-gray-200">
          <p className="my-5">
            I'm a software developer who enjoys designing and building web apps
            - mainly using Next,React, Node, and Typescript.
          </p>
          <p className="leading-7">
            My favorite part about coding is the constant innovation of
            architectures, libraries, and frameworks. I think web development is
            experiencing a major breakthrough with headless architecture and
            jamstack, and want to be involved in any way I can.
          </p>
        </div>

        <p className="text-gray-600 dark:text-gray-300">
          Contact me via{' '}
          <a
            href="mailto:robbingabo9@gmail.com"
            className="text-blue-500 dark:text-blue-400"
          >
            Email
          </a>{' '}
        </p>
      </div>
      <div className="flex-shrink-0 relative mb-8 sm:mb-0 text-center lg:mr-auto">
        <Image
          src="/images/profile.png"
          className="rounded-lg"
          height={500}
          width={500}
          priority
          alt="Robert Ngabo"
        />
      </div>
    </div>
  );
}
