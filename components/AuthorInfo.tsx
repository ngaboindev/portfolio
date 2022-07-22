import Image from 'next/image';
import { BsGithub, BsTwitter, BsLinkedin } from 'react-icons/bs';

export default function AuthorInfo() {
  return (
    <div className="px-6 py-6 mx-2 mt-10 mb-6 text-center bg-gray-800 dark:bg-black dark:border-gray-800 border rounded-lg lg:mt-0 xl:px-10">
      <div className="space-y-4 xl:space-y-6">
        <Image
          src="/images/profile.png"
          className="mx-auto rounded-full h-36 w-36"
          height={120}
          width={120}
          priority
          alt="Robert Ngabo"
        />
      </div>
      <div className="space-y-2 mt-3">
        <div className="flex justify-center items-center flex-col space-y-2 mb-4 text-lg font-medium leading-6">
          <h3 className="text-white dark:text-gray-300">Robert Ngabo</h3>
          <p className="text-blue-300 dark:text-blue-400 text-sm">
            Web Developer
          </p>
        </div>
        <div className="flex justify-center mt-5 space-x-5">
          <a
            href="https://github.com/ngaboindev"
            className="inline-block text-xl text-gray-400 hover:text-gray-300"
            target="__blank"
          >
            <BsGithub />
          </a>
          <a
            href="https://twitter.com/robert_ngabo"
            className="inline-block text-xl text-gray-400 hover:text-gray-300"
            target="__blank"
          >
            <BsTwitter />
          </a>
          <a
            href="https://www.linkedin.com/in/robert-ngabo-63118b169/"
            className="inline-block text-xl text-gray-400 hover:text-gray-300"
            target="__blank"
          >
            <BsLinkedin />
          </a>
        </div>
      </div>
    </div>
  );
}
