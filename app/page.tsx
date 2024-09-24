import Image from 'next/image';

export default function Home(): JSX.Element {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="mb-4 dark:text-gray-200">
        <div className="flex flex-col md:flex-row gap-7 justify-center items-start">
          <Image
            src={'/images/profile.png'}
            alt="me"
            width={250}
            height={250}
            className="rounded"
          />
          <div className="space-y-4">
            <div className="space-y-1">
              <h1 className="font-semibold text-2xl">I'm Robert Ngabo</h1>
              <p className="text-base text-gray-900 dark:text-gray-400">
                Software Developer
              </p>
            </div>
            <p className="leading-7">
              A naturally curious individual—passionate about the intersection
              of humans and technology, and how we engage with the world.
            </p>

            <div className="space-x-2 text-sm text-gray-700 dark:text-gray-400 ">
              <a
                className="underline hover:no-underline"
                href="mailto:me@robertngabo.com"
              >
                me@robertngabo.com
              </a>
              <a
                className="underline hover:no-underline"
                href="https://www.linkedin.com/in/robert-ngabo-63118b169/"
              >
                Linkedin
              </a>
              <a
                className="underline hover:no-underline"
                href="https://github.com/ngaboindev"
              >
                Github
              </a>
              <a
                className="underline hover:no-underline"
                href="https://x.com/robert_ngabo"
              >
                X
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
